import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, phone, fromCity, toCity, shiftType } = await request.json();

    if (!name || !phone) {
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
      to: 'sihag6551@gmail.com, digitalsolution3600@gmail.com',
      subject: `New Popup Enquiry from ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #ea580c;">New Quick Quote Enquiry</h2>
          <p><strong>Type:</strong> Popup Modal Form</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>From:</strong> ${fromCity}</p>
          <p><strong>To:</strong> ${toCity}</p>
          <p><strong>Service Type:</strong> ${shiftType}</p>
          <p style="font-size: 10px; color: #94a3b8; margin-top: 30px;">Sent from Omni Logistics Website Popup</p>
        </div>
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
