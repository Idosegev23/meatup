'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { config } from '@/data/config';
import ReserveModal from './ReserveModal';

export default function Contact() {
  const { dict, language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReserveClick = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      window.location.href = config.tabitUrl;
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <section id="contact" className="bg-[#0a1628]" style={{ padding: '80px 0 100px 0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          {/* Header */}
          <h2 style={{ fontSize: '2.5rem', fontWeight: 600, color: '#F2F1F0', marginBottom: '24px' }}>
              {dict.contact.title}
            </h2>
          <div style={{ width: '64px', height: '2px', backgroundColor: '#BF9B7A', margin: '0 auto 48px auto' }} />

          {/* Contact Info Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px', marginBottom: '48px', textAlign: 'right' }}>
              {/* Phone */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: 'rgba(92,62,43,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#BF9B7A', flexShrink: 0 }}>
                <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                <p style={{ fontSize: '0.875rem', color: 'rgba(244,244,242,0.6)', marginBottom: '4px' }}>{dict.contact.phone}</p>
                <a href={config.phoneLink} style={{ color: '#F2F1F0', textDecoration: 'none' }}>
                    {config.phone}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: 'rgba(92,62,43,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#BF9B7A', flexShrink: 0 }}>
                <svg style={{ width: '24px', height: '24px' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                <p style={{ fontSize: '0.875rem', color: 'rgba(244,244,242,0.6)', marginBottom: '4px' }}>{dict.contact.whatsapp}</p>
                <a href={config.whatsappLink} target="_blank" rel="noopener noreferrer" style={{ color: '#F2F1F0', textDecoration: 'none' }}>
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Address */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: 'rgba(92,62,43,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#BF9B7A', flexShrink: 0 }}>
                <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                <p style={{ fontSize: '0.875rem', color: 'rgba(244,244,242,0.6)', marginBottom: '4px' }}>{dict.contact.address}</p>
                <a href={config.mapLink} target="_blank" rel="noopener noreferrer" style={{ color: '#F2F1F0', textDecoration: 'none' }}>
                    {language === 'he' ? config.address.he : config.address.en}
                  </a>
                </div>
              </div>

              {/* Hours */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: 'rgba(92,62,43,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#BF9B7A', flexShrink: 0 }}>
                <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                <p style={{ fontSize: '0.875rem', color: 'rgba(244,244,242,0.6)', marginBottom: '4px' }}>{dict.contact.hours}</p>
                <p style={{ color: '#F2F1F0' }}>
                    {language === 'he' ? config.hours.he : config.hours.en}
                  </p>
              </div>
                </div>
              </div>

              {/* Reserve CTA */}
          <div style={{ marginBottom: '48px' }}>
                <button
                  onClick={handleReserveClick}
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '12px', 
                padding: '16px 32px', 
                backgroundColor: '#BF9B7A', 
                color: '#0a1628', 
                fontWeight: 600, 
                border: 'none', 
                cursor: 'pointer',
                fontSize: '1rem'
              }}
                >
              <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {dict.nav.reserve}
                </button>
            </div>

            {/* Map */}
          <div style={{ position: 'relative', width: '100%', height: '300px', overflow: 'hidden', borderRadius: '12px' }}>
              <iframe
                src={config.mapEmbed}
              style={{ 
                position: 'absolute', 
                inset: 0, 
                width: '100%', 
                height: '100%', 
                border: 'none',
                filter: 'grayscale(100%) contrast(1.1)',
                opacity: 0.85
              }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MEATUP Location"
              />
            </div>

          {/* Navigation Buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '24px' }}>
            {/* Google Maps Button */}
            <a
              href={config.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 28px',
                backgroundColor: '#FFFFFF',
                color: '#333333',
                fontWeight: 600,
                borderRadius: '12px',
                textDecoration: 'none',
                fontSize: '0.9rem',
                transition: 'all 0.2s',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}
            >
              <Image src="/google-map-icon.svg" alt="Google Maps" width={24} height={24} />
              Google Maps
            </a>

            {/* Waze Button */}
            <a
              href={config.wazeLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 28px',
                backgroundColor: '#FFFFFF',
                color: '#333333',
                fontWeight: 600,
                borderRadius: '12px',
                textDecoration: 'none',
                fontSize: '0.9rem',
                transition: 'all 0.2s',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}
            >
              <Image src="/waze-icon.svg" alt="Waze" width={24} height={24} />
              Waze
            </a>
          </div>
        </div>
      </section>

      <ReserveModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
