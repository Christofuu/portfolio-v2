import nodemailer from 'nodemailer';

export async function POST(request) {
  const { name, email, message } = await request.json();

  // Create a transporter object using SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER, // Your SMTP username
        pass: process.env.SMTP_PASSWORD, // Your SMTP password
    },
  });
  // Set up email data
  const mailOptions = {
    from: process.env.SMTP_USER, 
    to: process.env.SMTP_USER,
    subject: `Message from ${name} (${email})`,
    text: message,
  };
  // Send mail with defined transport object
  try {
    const info = await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true, messageId: info.messageId }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
// Ensure you have the necessary environment variables set
// SMTP_USER and SMTP_PASSWORD for authentication