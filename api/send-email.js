// Version finale avec envoi d'email via Resend
import { Resend } from 'resend';

// Créer une instance Resend avec la clé API
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Configuration CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Requête OPTIONS pour le preflight CORS
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Gérer les requêtes GET pour tester si l'API est en ligne
  if (req.method === 'GET') {
    return res.status(200).json({
      success: true,
      message: 'API fonctionnelle - Version finale avec Resend',
      hasResendKey: Boolean(process.env.RESEND_API_KEY)
    });
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
          receivedData: { name, firstName, email, hasMessage: Boolean(message) }
        });
      }

      // Vérifier que la clé Resend est configurée
      if (!process.env.RESEND_API_KEY) {
        console.error('Clé API Resend non configurée');
        return res.status(500).json({
          success: false,
          message: 'Configuration du serveur incomplète',
          error: 'Clé API Resend manquante'
        });
      }

      // Envoyer l'email via Resend
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

        console.log('Réponse de Resend:', emailResponse);
        
        return res.status(200).json({
          success: true,
          message: 'Email envoyé avec succès',
          data: {
            name,
            firstName,
            email,
            messageLength: message.length,
            emailId: emailResponse.id
          }
        });
      } catch (emailError) {
        console.error('Erreur lors de l\'envoi de l\'email avec Resend:', emailError);
        return res.status(500).json({
          success: false,
          message: 'Erreur lors de l\'envoi de l\'email',
          error: emailError.message || 'Erreur inconnue avec Resend'
        });
      }
    } catch (error) {
      console.error('Erreur de traitement:', error);
      return res.status(500).json({
        success: false,
        message: 'Erreur lors du traitement de la requête',
        error: error.message || 'Erreur inconnue'
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