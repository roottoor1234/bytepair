import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ success: false, error: 'Method not allowed' });
    return;
  }

  const { name, email, service, message } = req.body;

  if (!name || !email || !service || !message) {
    res.status(400).json({ success: false, error: 'Missing fields' });
    return;
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // π.χ. support@bytepair.gr
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: '"Bytepair Contact Form" <support@bytepair.gr>',
      to: 'support@bytepair.gr',
      replyTo: email,
      subject: `Νέο μήνυμα από ${name} (${service})`,
      html: `
        <p><strong>Όνομα:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Υπηρεσία:</strong> ${service}</p>
        <p><strong>Μήνυμα:</strong></p>
        <p>${message}</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Mail error:', err);
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
}
