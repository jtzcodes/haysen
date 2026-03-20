import { QuoteEmail } from '@/components/email/quote-email';
import { ClientConfirmationEmail } from '@/components/email/client-confirmation-email';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nombre, empresa, cargo, email, telefono, mensaje, items } = body;

    // Validación básica
    if (!email || !nombre || !items) {
      return NextResponse.json({ error: 'Faltan datos requeridos' }, { status: 400 });
    }

    // 1. Enviar correo al dueño (Notificación de nueva venta)
    const { data: adminData, error: adminError } = await resend.emails.send({
      from: 'Cotizaciones Web <contacto@haysen.cl>',
      to: ['contacto@haysen.cl'],
      subject: `[ADMIN] Nueva Cotización Web - ${empresa || nombre}`,
      react: QuoteEmail({
        nombre,
        empresa,
        cargo,
        email,
        telefono,
        mensaje,
        items,
      }) as React.ReactElement,
    });

    if (adminError) {
      console.error('Error enviando correo admin:', adminError);
      return NextResponse.json({ error: adminError.message }, { status: 500 });
    }

    // 2. Enviar correo al cliente (Confirmación de recepción)
    // NOTA: En modo prueba, solo podemos enviar a jony.tz@gmail.com.
    // Simulamos que le llega al cliente enviando una copia a tu correo con otro asunto.
    const { error: clientError } = await resend.emails.send({
      from: 'Haysen Group <contacto@haysen.cl>',
      to: [email],
      subject: `Hemos recibido tu solicitud de cotización - Haysen Group`,
      react: ClientConfirmationEmail({
        nombre,
        items,
      }) as React.ReactElement,
    });

    if (clientError) {
      console.error('Error enviando correo cliente:', clientError);
      // No fallamos toda la petición si falla la copia del cliente, pero lo logueamos
    }

    return NextResponse.json({ data: adminData });
  } catch (error: any) {
    console.error('Error interno:', error);
    return NextResponse.json({ error: error.message || 'Error interno del servidor' }, { status: 500 });
  }
}
