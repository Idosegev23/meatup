'use client';

import { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { config } from '@/data/config';

interface ReserveModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReserveModal({ isOpen, onClose }: ReserveModalProps) {
  const { dict } = useLanguage();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="reserve-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-charcoal/90 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        ref={modalRef}
        tabIndex={-1}
        className="relative bg-charcoal border border-wood rounded-xl p-8 max-w-md w-full shadow-2xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-off-white/60 hover:text-bronze transition-colors"
          aria-label={dict.gallery.close}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="text-center mb-6">
          <h2 id="reserve-modal-title" className="text-2xl font-semibold text-off-white mb-1">
            {dict.reserve.title}
          </h2>
          <p className="text-off-white/50 text-sm">
            {dict.reserve.subtitle}
          </p>
        </div>

        {/* Main Options - 2 column grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {/* Reserve a Table */}
          <a
            href={config.tabitUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px',
              padding: '20px 12px',
              backgroundColor: 'rgba(92,62,43,0.15)',
              border: '1px solid rgba(191,155,122,0.3)',
              borderRadius: '12px',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(191,155,122,0.2)';
              e.currentTarget.style.borderColor = '#BF9B7A';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(92,62,43,0.15)';
              e.currentTarget.style.borderColor = 'rgba(191,155,122,0.3)';
            }}
          >
            <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'rgba(191,155,122,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg style={{ width: '22px', height: '22px', color: '#BF9B7A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <span style={{ color: '#F2F1F0', fontWeight: 600, fontSize: '0.9rem' }}>{dict.reserve.reserveTable}</span>
          </a>

          {/* Pickup */}
          <a
            href={config.tabitDeliveryUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px',
              padding: '20px 12px',
              backgroundColor: 'rgba(92,62,43,0.15)',
              border: '1px solid rgba(191,155,122,0.3)',
              borderRadius: '12px',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(191,155,122,0.2)';
              e.currentTarget.style.borderColor = '#BF9B7A';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(92,62,43,0.15)';
              e.currentTarget.style.borderColor = 'rgba(191,155,122,0.3)';
            }}
          >
            <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'rgba(191,155,122,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg style={{ width: '22px', height: '22px', color: '#BF9B7A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <span style={{ color: '#F2F1F0', fontWeight: 600, fontSize: '0.9rem' }}>{dict.reserve.pickup}</span>
          </a>
        </div>

        {/* Delivery - full width accent */}
        <a
          href={config.woltUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            padding: '14px 20px',
            backgroundColor: '#BF9B7A',
            borderRadius: '12px',
            textDecoration: 'none',
            transition: 'all 0.2s',
            marginBottom: '16px',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#A8876A'; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#BF9B7A'; }}
        >
          <svg style={{ width: '20px', height: '20px', color: '#1A1A1A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
          </svg>
          <span style={{ color: '#1A1A1A', fontWeight: 600, fontSize: '0.95rem' }}>{dict.reserve.delivery}</span>
        </a>

        {/* Contact row */}
        <div className="flex gap-3">
          <a
            href={config.phoneLink}
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '12px',
              border: '1px solid rgba(92,62,43,0.4)',
              borderRadius: '10px',
              textDecoration: 'none',
              color: 'rgba(244,244,242,0.7)',
              fontSize: '0.85rem',
              fontWeight: 500,
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#BF9B7A'; e.currentTarget.style.color = '#BF9B7A'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(92,62,43,0.4)'; e.currentTarget.style.color = 'rgba(244,244,242,0.7)'; }}
          >
            <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {dict.reserve.call}
          </a>

          <a
            href={config.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '12px',
              border: '1px solid rgba(92,62,43,0.4)',
              borderRadius: '10px',
              textDecoration: 'none',
              color: 'rgba(244,244,242,0.7)',
              fontSize: '0.85rem',
              fontWeight: 500,
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#25D366'; e.currentTarget.style.color = '#25D366'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(92,62,43,0.4)'; e.currentTarget.style.color = 'rgba(244,244,242,0.7)'; }}
          >
            <svg style={{ width: '16px', height: '16px' }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {dict.reserve.whatsapp}
          </a>
        </div>
      </div>
    </div>
  );
}




