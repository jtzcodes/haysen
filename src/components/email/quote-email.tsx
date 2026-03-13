import * as React from 'react';
import { Product, ProductVariant } from "@/config/products";

interface QuoteEmailProps {
  nombre: string;
  empresa: string;
  cargo: string;
  email: string;
  telefono: string;
  mensaje: string;
  items: {
    product: Product;
    variant: ProductVariant;
    quantity: number;
  }[];
}

export const QuoteEmail: React.FC<QuoteEmailProps> = ({
  nombre,
  empresa,
  cargo,
  email,
  telefono,
  mensaje,
  items,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', color: '#333' }}>
    <div style={{ backgroundColor: '#059669', padding: '20px', textAlign: 'center' }}>
      {/* Logo Haysen Group (Imagen pública o SVG embebido) */}
      <img 
        src="https://haysengroup.cl/logo-white.png" // TODO: Reemplazar con URL real cuando esté disponible. Por ahora usaremos texto estilizado como fallback visual.
        alt="Haysen Group Chile"
        width="150"
        style={{ marginBottom: '10px', display: 'none' }} // Oculto hasta tener URL real
      />
      {/* Fallback de texto estilizado (similar al logo del sitio) */}
      <div style={{ marginBottom: '15px' }}>
        <h2 style={{ margin: 0, color: '#ffffff', fontSize: '24px', fontWeight: '800', letterSpacing: '-0.025em', lineHeight: '1' }}>HAYSEN</h2>
        <p style={{ margin: 0, color: '#6ee7b7', fontSize: '10px', fontWeight: '700', letterSpacing: '0.2em', textTransform: 'uppercase' }}>GROUP CHILE</p>
      </div>
      
      <h1 style={{ color: '#ffffff', margin: '10px 0 0', fontSize: '20px', fontWeight: 'normal' }}>Nueva Solicitud de Cotización</h1>
    </div>

    <div style={{ padding: '20px', backgroundColor: '#f9fafb' }}>
      <h2 style={{ color: '#111827', fontSize: '18px', borderBottom: '2px solid #059669', paddingBottom: '10px' }}>
        Datos del Cliente
      </h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
        <tbody>
          <tr>
            <td style={{ padding: '8px', fontWeight: 'bold', width: '140px', color: '#4b5563' }}>Nombre:</td>
            <td style={{ padding: '8px' }}>{nombre}</td>
          </tr>
          <tr>
            <td style={{ padding: '8px', fontWeight: 'bold', color: '#4b5563' }}>Empresa:</td>
            <td style={{ padding: '8px' }}>{empresa}</td>
          </tr>
          {cargo && (
            <tr>
              <td style={{ padding: '8px', fontWeight: 'bold', color: '#4b5563' }}>Cargo:</td>
              <td style={{ padding: '8px' }}>{cargo}</td>
            </tr>
          )}
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

      {mensaje && (
        <div style={{ backgroundColor: '#ffffff', padding: '15px', borderRadius: '8px', border: '1px solid #e5e7eb', marginBottom: '25px' }}>
          <h3 style={{ margin: '0 0 10px', fontSize: '14px', color: '#4b5563' }}>Mensaje Adicional:</h3>
          <p style={{ margin: 0, fontStyle: 'italic' }}>"{mensaje}"</p>
        </div>
      )}

      <h2 style={{ color: '#111827', fontSize: '18px', borderBottom: '2px solid #059669', paddingBottom: '10px', marginTop: '30px' }}>
        Detalle de Productos
      </h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#ffffff' }}>
        <thead>
          <tr style={{ backgroundColor: '#f3f4f6' }}>
            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #e5e7eb', fontSize: '12px', color: '#6b7280', textTransform: 'uppercase' }}>Producto</th>
            <th style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid #e5e7eb', fontSize: '12px', color: '#6b7280', textTransform: 'uppercase' }}>Variante</th>
            <th style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid #e5e7eb', fontSize: '12px', color: '#6b7280', textTransform: 'uppercase' }}>Cant.</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #e5e7eb' }}>
              <td style={{ padding: '12px', fontWeight: 'bold' }}>{item.product.name}</td>
              <td style={{ padding: '12px', textAlign: 'center', color: '#4b5563' }}>{item.variant.name}</td>
              <td style={{ padding: '12px', textAlign: 'center', fontWeight: 'bold' }}>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div style={{ textAlign: 'center', padding: '20px', color: '#6b7280', fontSize: '12px' }}>
      <p>Este correo fue generado automáticamente desde el sitio web de Haysen Group Chile.</p>
    </div>
  </div>
);
