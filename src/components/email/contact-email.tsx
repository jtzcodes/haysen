import * as React from 'react';

interface ContactEmailProps {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  mensaje: string;
}

export const ContactEmail: React.FC<ContactEmailProps> = ({
  nombre,
  empresa,
  email,
  telefono,
  mensaje,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', color: '#333' }}>
    <div style={{ backgroundColor: '#0f172a', padding: '20px', textAlign: 'center' }}>
      {/* Fallback de texto estilizado (similar al logo del sitio) */}
      <div style={{ marginBottom: '15px' }}>
        <h2 style={{ margin: 0, color: '#ffffff', fontSize: '24px', fontWeight: '800', letterSpacing: '-0.025em', lineHeight: '1' }}>HAYSEN</h2>
        <p style={{ margin: 0, color: '#6ee7b7', fontSize: '10px', fontWeight: '700', letterSpacing: '0.2em', textTransform: 'uppercase' }}>GROUP CHILE</p>
      </div>
      
      <h1 style={{ color: '#ffffff', margin: '10px 0 0', fontSize: '20px', fontWeight: 'normal' }}>Nuevo Mensaje de Contacto</h1>
    </div>

    <div style={{ padding: '20px', backgroundColor: '#f9fafb' }}>
      <h2 style={{ color: '#111827', fontSize: '18px', borderBottom: '2px solid #059669', paddingBottom: '10px' }}>
        Datos del Remitente
      </h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
        <tbody>
          <tr>
            <td style={{ padding: '8px', fontWeight: 'bold', width: '140px', color: '#4b5563' }}>Nombre:</td>
            <td style={{ padding: '8px' }}>{nombre}</td>
          </tr>
          <tr>
            <td style={{ padding: '8px', fontWeight: 'bold', color: '#4b5563' }}>Empresa:</td>
            <td style={{ padding: '8px' }}>{empresa || 'No especificada'}</td>
          </tr>
          <tr>
            <td style={{ padding: '8px', fontWeight: 'bold', color: '#4b5563' }}>Email:</td>
            <td style={{ padding: '8px' }}>
              <a href={`mailto:${email}`} style={{ color: '#059669', textDecoration: 'none' }}>{email}</a>
            </td>
          </tr>
          <tr>
            <td style={{ padding: '8px', fontWeight: 'bold', color: '#4b5563' }}>Teléfono:</td>
            <td style={{ padding: '8px' }}>{telefono}</td>
          </tr>
        </tbody>
      </table>

      <h2 style={{ color: '#111827', fontSize: '18px', borderBottom: '2px solid #059669', paddingBottom: '10px', marginTop: '30px' }}>
        Mensaje
      </h2>
      <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb', marginBottom: '25px', whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>
        {mensaje}
      </div>
    </div>

    <div style={{ textAlign: 'center', padding: '20px', color: '#6b7280', fontSize: '12px' }}>
      <p>Este mensaje fue enviado desde el formulario de contacto de Haysen Group Chile.</p>
      <p>Para responder, simplemente responde a este correo (reply-to configurado al remitente).</p>
    </div>
  </div>
);
