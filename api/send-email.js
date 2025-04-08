// Version avec Resend et wrapper CORS
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

// Wrapper CORS pour simplifier la gestion
const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Pour une sécurité plus stricte, utilisez cette ligne à la place
  // res.setHeader('Access-Control-Allow-Origin', 'https://portfolio.bulgheroni.tech');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  return await fn(req, res);
}

// Handler principal
const handler = async (req, res) => {
  // ----- PARSE DU BODY EN JSON SI NECESSAIRE -----
  if (req.method === 'POST' && req.headers['content-type']?.includes('application/json')) {
    const buffers = [];
    for await (const chunk of req) {
      buffers.push(chunk);
    }
    try {
      req.body = JSON.parse(Buffer.concat(buffers).toString());
    } catch (error) {
      return res.status(400).json({ success: false, message: 'JSON invalide' });
    }
  }

  // ----- GET: PING DE L'API -----
  if (req.method === 'GET') {
    const envInfo = {
      nodeEnv: process.env.NODE_ENV || 'non défini',
      hasResendKey: Boolean(process.env.RESEND_API_KEY),
      keyLength: process.env.RESEND_API_KEY?.length || 0,
      resendInitialized: Boolean(resend)
    };

    return res.status(200).json({
      success: true,
      message: 'API fonctionnelle - Version avec Resend et wrapper CORS',
      env: envInfo
    });
  }

  // ----- POST: ENVOI D'EMAIL -----
  if (req.method === 'POST') {
    try {
      const { name, firstName, email, message } = req.body || {};

      if (!name || !firstName || !email || !message) {
        return res.status(400).json({
          success: false,
          message: 'Données de formulaire incomplètes',
          receivedData: { name, firstName, email, message }
        });
      }

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

          return res.status(200).json({
            success: true,
            message: 'Email envoyé avec succès via Resend',
            emailId: emailResponse.id
          });
        } catch (resendError) {
          return res.status(200).json({
            success: true,
            message: 'Formulaire reçu avec succès (simulation après échec Resend)',
            error: String(resendError)
          });
        }
      } else {
        return res.status(200).json({
          success: true,
          message: 'Formulaire reçu avec succès (simulation car Resend non disponible)',
          receivedData: { name, firstName, email, messageLength: message.length }
        });
      }
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Erreur serveur',
        error: String(error)
      });
    }
  }

  return res.status(405).json({
    success: false,
    message: 'Méthode non autorisée',
    method: req.method
  });
}

// Export avec le wrapper CORS
export default allowCors(handler); 