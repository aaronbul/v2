import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import { config } from 'dotenv';
import rateLimit from 'express-rate-limit';

config();

const app = express();
const port = process.env.PORT || 3000;

// Limitation de débit global pour toutes les requêtes
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 200, // limite chaque IP à 200 requêtes par fenêtre
  standardHeaders: true, // Retourne les informations de limite dans les headers `RateLimit-*`
  legacyHeaders: false, // Désactive les headers `X-RateLimit-*`
  message: { success: false, message: "Trop de requêtes, veuillez réessayer plus tard" }
});

// Limitation de débit spécifique pour l'API d'envoi d'emails (plus stricte)
const emailLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 heure
  max: 5, // limite chaque IP à 5 requêtes d'envoi d'email par heure
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: "Limite d'envoi d'emails atteinte. Veuillez réessayer plus tard." }
});

// Application du limiteur global
app.use(globalLimiter);

// Liste des origines autorisées
const allowedOrigins = [
  'http://localhost:5173',   // Développement Vite
  'http://localhost:3000',   // Développement local
  'https://portfolio.bulgheroni.tech', // Production
  'https://www.portfolio.bulgheroni.tech' // Production avec www
];

// Configuration CORS renforcée
app.use(cors({
  origin: function(origin, callback) {
    // Autorise les requêtes sans origine (comme les appels API mobiles)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'La politique CORS de ce site n\'autorise pas l\'accès depuis cette origine.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: false, // N'autorise pas les cookies/credentials pour plus de sécurité
  maxAge: 86400 // Mise en cache des requêtes pre-flight pendant 24 heures
}));

// Middleware de sécurité supplémentaire
app.use((req, res, next) => {
  // Protection contre le clickjacking
  res.setHeader('X-Frame-Options', 'DENY');
  // Protection contre le sniffing MIME
  res.setHeader('X-Content-Type-Options', 'nosniff');
  // Protection XSS basique
  res.setHeader('X-XSS-Protection', '1; mode=block');
  
  // Content Security Policy (CSP)
  res.setHeader('Content-Security-Policy', 
    "default-src 'self'; " +
    "script-src 'self'; " +
    "style-src 'self' 'unsafe-inline'; " +
    "img-src 'self' data:; " +
    "font-src 'self'; " +
    "connect-src 'self' https://aarons-portfolio-api-d007dd1f4568.herokuapp.com; " +
    "frame-src 'none'; " +
    "object-src 'none'; " +
    "base-uri 'self'; " +
    "form-action 'self';"
  );
  
  // En-tête HSTS pour forcer les connexions HTTPS
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  
  // Refus du mode Referrer pour la confidentialité
  res.setHeader('Referrer-Policy', 'no-referrer-when-downgrade');
  
  // Contrôle du stockage des données sur le navigateur
  res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');
  
  next();
});

app.use(express.json({ limit: '100kb' })); // Limite la taille des requêtes JSON

const resend = new Resend(process.env.RESEND_API_KEY);

app.get('/', (req, res) => {
  res.json({ message: 'API d\'envoi d\'emails active', version: '1.0.0' });
});

// Application du limiteur spécifique à la route d'envoi d'emails
app.post('/api/send-email', emailLimiter, async (req, res) => {
  try {
    // Extraction des données avec validation de base
    const { name, firstName, email, message } = req.body;
    
    // Validation des entrées avec des expressions régulières
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s-]{2,50}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    // Validation des entrées
    if (!name || !firstName || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Toutes les données sont requises'
      });
    }
    
    // Validation des formats
    if (!nameRegex.test(name) || !nameRegex.test(firstName)) {
      return res.status(400).json({
        success: false,
        message: 'Le format du nom ou du prénom est invalide'
      });
    }
    
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Format d\'email invalide'
      });
    }
    
    if (message.length < 8 || message.length > 5000) {
      return res.status(400).json({
        success: false,
        message: 'Le message doit contenir entre 8 et 5000 caractères'
      });
    }
    
    // Sanitisation basique des entrées pour l'email HTML
    const sanitizeHtml = (str) => {
      return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    };
    
    const sanitizedName = sanitizeHtml(name);
    const sanitizedFirstName = sanitizeHtml(firstName);
    const sanitizedEmail = sanitizeHtml(email);
    const sanitizedMessage = sanitizeHtml(message);
    
    // Envoi de l'email avec les données sanitisées
    const response = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['aaron.baf@gmail.com'],
      subject: `Nouveau message de ${sanitizedFirstName} ${sanitizedName}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${sanitizedName}</p>
        <p><strong>Prénom:</strong> ${sanitizedFirstName}</p>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitizedMessage}</p>
      `,
      reply_to: sanitizedEmail
    });

    // Journalisation sécurisée (sans données sensibles)
    console.log(`Email envoyé avec succès à: ${sanitizedEmail.substring(0, 3)}***@***`);
    
    // Réponse sans données sensibles
    res.json({ 
      success: true, 
      message: 'Email envoyé avec succès'
    });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error.message);
    // Ne pas exposer les détails précis de l'erreur
    res.status(500).json({ 
      success: false, 
      message: 'Une erreur est survenue lors de l\'envoi de l\'email'
    });
  }
});

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
}); 