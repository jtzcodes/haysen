import * as React from 'react';
import { Product, ProductVariant } from "@/config/products";

interface ClientConfirmationEmailProps {
  nombre: string;
  items: {
    product: Product;
    variant: ProductVariant;
    quantity: number;
  }[];
}

export const ClientConfirmationEmail: React.FC<ClientConfirmationEmailProps> = ({
  nombre,
  items,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', color: '#333' }}>
    <div style={{ backgroundColor: '#ffffff', borderBottom: '4px solid #059669', padding: '30px 20px', textAlign: 'center' }}>
      
      {/* Logo Header */}
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ margin: 0, color: '#111827', fontSize: '28px', fontWeight: '800', letterSpacing: '-0.025em', lineHeight: '1' }}>HAYSEN</h2>
        <p style={{ margin: 0, color: '#059669', fontSize: '11px', fontWeight: '700', letterSpacing: '0.2em', textTransform: 'uppercase' }}>GROUP CHILE</p>
      </div>

      <h1 style={{ color: '#059669', margin: 0, fontSize: '26px' }}>¡Solicitud Recibida!</h1>
      <p style={{ color: '#6b7280', marginTop: '10px', fontSize: '16px' }}>Gracias por confiar en nosotros</p>
    </div>

    <div style={{ padding: '30px 20px', backgroundColor: '#f9fafb' }}>
      <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#374151' }}>
        Hola <strong>{nombre}</strong>,
      </p>
      <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#374151' }}>
        Hemos recibido tu solicitud de cotización correctamente. Nuestro equipo comercial revisará tus requerimientos y te contactará a la brevedad posible con una propuesta formal.
      </p>

      <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb', marginTop: '25px' }}>
        <h3 style={{ marginTop: 0, color: '#111827', fontSize: '16px', borderBottom: '1px solid #e5e7eb', paddingBottom: '10px' }}>
          Resumen de tu solicitud:
        </h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} style={{ borderBottom: index < items.length - 1 ? '1px solid #f3f4f6' : 'none' }}>
                <td style={{ padding: '10px 0', fontSize: '14px', color: '#4b5563' }}>
                  <strong>{item.product.name}</strong> <span style={{ color: '#9ca3af' }}>({item.variant.name})</span>
                </td>
                <td style={{ padding: '10px 0', textAlign: 'right', fontWeight: 'bold', fontSize: '14px', color: '#111827' }}>
                  x{item.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#ecfdf5', borderRadius: '6px', borderLeft: '4px solid #059669' }}>
        <p style={{ margin: 0, fontSize: '14px', color: '#065f46' }}>
          <strong>¿Qué sigue ahora?</strong><br />
          Un ejecutivo te enviará la cotización formal a este mismo correo, incluyendo precios, disponibilidad y costos de envío.
        </p>
      </div>
    </div>

    <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#ffffff', color: '#9ca3af', fontSize: '12px', borderTop: '1px solid #e5e7eb' }}>
      <p style={{ margin: '5px 0' }}>Haysen Group Chile - Expertos en Silica Gel y Desecantes</p>
      <p style={{ margin: '5px 0' }}>Este es un correo automático, por favor no respondas directamente a este mensaje.</p>
    </div>
  </div>
);
