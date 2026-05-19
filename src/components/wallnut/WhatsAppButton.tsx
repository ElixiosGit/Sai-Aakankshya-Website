'use client';

const PHONE = '919040099001';
const MESSAGE = encodeURIComponent(
  "Hello SAI AAKANKSHYA ASSOCIATES! 👋\n\nI'm interested in your services and would like to know more about:\n\n• Ceiling & Cladding Systems\n• Interior & Exterior Execution\n• Civil & Infrastructure Works\n\nCould you please share more details and pricing? Thank you!"
);
const WHATSAPP_URL = `https://wa.me/${PHONE}?text=${MESSAGE}`;

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      style={{
        position: 'fixed',
        bottom: '1.75rem',
        right: '1.75rem',
        zIndex: 999,
        width: '3.5rem',
        height: '3.5rem',
        display: 'block',
        transition: 'transform 0.2s ease',
        filter: 'drop-shadow(0 4px 12px rgba(37,211,102,0.5))',
      }}
      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.12)')}
      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <img
        src="/assets/images/whatsapp.svg"
        alt="WhatsApp"
        style={{ width: '100%', height: '100%', display: 'block' }}
      />
    </a>
  );
}
