import { ContactEmail } from '@/components/email/contact-email';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nombre, empresa, email, telefono, mensaje } = body;

    // Validación básica
    if (!email || !nombre || !mensaje) {
      return NextResponse.json({ error: 'Faltan datos requeridos (nombre, email, mensaje)' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Contacto Web <contacto@haysen.cl>',
      to: ['contacto@haysen.cl'],
      replyTo: email, // Permite responder directamente al cliente
      subject: `[CONTACTO] Nuevo mensaje de ${nombre} - ${empresa || 'Web'}`,
      react: ContactEmail({
        nombre,
        empresa,
        email,
        telefono,
        mensaje,
      }) as React.ReactElement,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
