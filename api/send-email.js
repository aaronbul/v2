import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  // Set CORS headers for all other requests
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, firstName, email, message } = req.body;
    console.log('Tentative d\'envoi d\'email avec les données:', { name, firstName, email, message });
    
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
    });

    console.log('Réponse de Resend:', response);
    return res.status(200).json({ success: true, data: response });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
} 