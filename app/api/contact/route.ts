import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { firstName, lastName, phone, email, message } = await request.json();

    if (!firstName || !lastName || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER || 'digitalsolution3600@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD || 'fikbdzqnvfgxzmdk',
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER || 'digitalsolution3600@gmail.com',
      to: 'info@packersandmoversjalandhar.com, digitalsolution3600@gmail.com',
      subject: `New Contact Enquiry from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Enquiry</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
