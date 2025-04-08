// Version avec Resend mais sécurisée
import { Resend } from 'resend';

// Créer une instance Resend protégée
let resend;
try {
  if (process.env.RESEND_API_KEY) {
    resend = new Resend(process.env.RESEND_API_KEY);
    console.log("Resend initialisé avec succès");
  } else {
    console.log("Clé API Resend manquante");
  }
} catch (error) {
  console.error("Erreur lors de l'initialisation de Resend:", error);
}

export default async function handler(req, res) {
  // Configuration CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Requête OPTIONS pour le preflight CORS
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Gérer les requêtes GET pour tester l'API
  if (req.method === 'GET') {
    try {
      // Information sur l'environnement
      const envInfo = {
        nodeEnv: process.env.NODE_ENV || 'non défini',
        hasResendKey: Boolean(process.env.RESEND_API_KEY),
        keyLength: process.env.RESEND_API_KEY ? process.env.RESEND_API_KEY.length : 0,
        resendInitialized: Boolean(resend)
      };

      return res.status(200).json({
        success: true,
        message: 'API fonctionnelle - Version avec Resend sécurisée',
        env: envInfo
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Erreur API',
        error: String(error)
      });
    }
  }

  // Gérer les requêtes POST (envoi du formulaire)
  if (req.method === 'POST') {
    try {
      // Récupérer les données du formulaire
      const { name, firstName, email, message } = req.body || {};
      
      // Vérifier que toutes les données nécessaires sont présentes
      if (!name || !firstName || !email || !message) {
        return res.status(400).json({
          success: false,
          message: 'Données de formulaire incomplètes',
          receivedData: { 
            hasName: Boolean(name), 
            hasFirstName: Boolean(firstName), 
            hasEmail: Boolean(email), 
            hasMessage: Boolean(message) 
          }
        });
      }
      
      // Envoi d'email avec Resend si disponible, sinon simulation
      if (resend) {
        try {
          const emailResponse = await resend.emails.send({
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
          
          console.log('Email envoyé via Resend:', emailResponse);
          
          return res.status(200).json({
            success: true,
            message: 'Email envoyé avec succès via Resend',
            emailId: emailResponse.id
          });
        } catch (resendError) {
          console.error('Erreur Resend:', resendError);
          
          // En cas d'erreur Resend, on revient à la simulation
          return res.status(200).json({
            success: true,
            message: 'Formulaire reçu avec succès (simulation après échec Resend)',
            error: String(resendError)
          });
        }
      } else {
        // Simulation d'envoi d'email (fallback)
        console.log('Simulation - Données reçues:', { name, firstName, email, message });
        
        return res.status(200).json({
          success: true,
          message: 'Formulaire reçu avec succès (simulation car Resend non disponible)',
          receivedData: { name, firstName, email, messageLength: message.length }
        });
      }
    } catch (error) {
      console.error('Erreur:', error);
      return res.status(500).json({
        success: false,
        message: 'Erreur lors du traitement',
        error: String(error)
      });
    }
  }

  // Si la méthode n'est ni GET, ni POST, ni OPTIONS
  return res.status(405).json({
    success: false,
    message: 'Méthode non autorisée',
    method: req.method
  });
} 