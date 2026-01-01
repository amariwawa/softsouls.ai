import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, phone, company, message } = body || {};

  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpPort = Number(process.env.SMTP_PORT || 587);

  if (!smtpHost || !smtpUser || !smtpPass) {
    return NextResponse.json({
      ok: false,
      message:
        "Email service not configured. Please email ssoftsouls@gmail.com or set SMTP_HOST/SMTP_USER/SMTP_PASS in environment.",
    }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: { user: smtpUser, pass: smtpPass },
  });

  const subject = `New enquiry from ${name || "Unknown"}`;
  const text = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\n\nMessage:\n${message}`;

  await transporter.sendMail({
    from: smtpUser,
    to: "ssoftsouls@gmail.com",
    subject,
    text,
  });

  return NextResponse.json({ ok: true, message: "Your enquiry was sent." });
}