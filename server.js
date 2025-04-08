import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Configuration CORS pour autoriser les requêtes depuis les sites autorisés
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:3000', 
    'https://portfolio.bulgheroni.tech'
  ],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.get('/', (req, res) => {
  res.json({ message: 'API d\'envoi d\'emails active', version: '1.0.0' });
});

app.post('/api/send-email', async (req, res) => {
  try {
    const { name, firstName, email, message } = req.body;
    
    if (!name || !firstName || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Toutes les données sont requises',
        received: { name, firstName, email, hasMessage: Boolean(message) }
      });
    }
    
    const response = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['aaron.baf@gmail.com'],
      subject: `Nouveau message de ${firstName} ${name}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Prénom:</strong> ${firstName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      reply_to: email
    });

    console.log('Email envoyé avec succès:', response);
    res.json({ success: true, data: response });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
}); 