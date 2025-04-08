// Version intermédiaire - traitement des données du formulaire
export default function handler(req, res) {
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
      message: 'API fonctionnelle - Version intermédiaire',
      method: req.method
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

      // Pour l'instant, simuler un envoi réussi
      console.log('Données du formulaire reçues:', { name, firstName, email, message });
      
      return res.status(200).json({
        success: true,
        message: 'Formulaire reçu avec succès (simulation)',
        data: {
          name,
          firstName,
          email,
          messageLength: message.length
        }
      });
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