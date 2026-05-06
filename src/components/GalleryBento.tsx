'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { galleryImages } from '@/data/gallery';
import { menuData, MenuItem } from '@/data/menu';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from './Lightbox';

export default function GalleryBento() {
  const { language } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [dishPopup, setDishPopup] = useState<{ image: typeof galleryImages[0]; menuItem: MenuItem } | null>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  // Find a menu item by ID across all categories
  const findMenuItem = (menuItemId: string): MenuItem | null => {
    for (const category of menuData) {
      const item = category.items.find(i => i.id === menuItemId);
      if (item) return item;
    }
    return null;
  };

  const handleImageClick = (index: number) => {
    const image = galleryImages[index];
    if (image.menuItemId) {
      const menuItem = findMenuItem(image.menuItemId);
      if (menuItem) {
        setDishPopup({ image, menuItem });
        return;
      }
    }
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0));
  };

  // Close dish popup on Escape
  useEffect(() => {
    if (!dishPopup) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDishPopup(null);
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [dishPopup]);

  const lightboxImages = galleryImages.map(img => ({
    id: img.id,
    src: img.src,
    alt: language === 'he' ? img.alt.he : img.alt.en
  }));

  return (
    <section id="gallery" className="bg-[#0D0D0D]">
      {/* Grid Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: '4px', padding: '0 4px' }}>
        {galleryImages.map((image, index) => (
          <button
            key={image.id}
            onClick={() => handleImageClick(index)}
            style={{ position: 'relative', aspectRatio: '1/1', overflow: 'hidden', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
          >
            <Image
              src={image.src}
              alt={language === 'he' ? image.alt.he : image.alt.en}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            {/* Small icon indicator for dish images */}
            {image.menuItemId && (
              <div className="absolute bottom-2 left-2 w-7 h-7 rounded-full bg-[#1A1A1A]/70 backdrop-blur-sm flex items-center justify-center">
                <svg className="w-4 h-4 text-[#BF9B7A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Regular Lightbox for non-dish images */}
      {lightboxOpen && (
        <Lightbox
          images={lightboxImages}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}

      {/* Dish Popup - image + details */}
      <AnimatePresence>
        {dishPopup && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDishPopup(null)}
            />
            <motion.div
              ref={popupRef}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDishPopup(null)}
            >
              <motion.div
                className="w-full max-w-lg overflow-hidden rounded-2xl bg-[#1A1A1A] shadow-2xl border border-[#BF9B7A]/20"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={() => setDishPopup(null)}
                  className="absolute top-6 left-6 z-10 w-10 h-10 rounded-full bg-[#1A1A1A]/60 backdrop-blur-sm flex items-center justify-center text-[#F2F1F0] hover:bg-[#BF9B7A] transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Dish Image */}
                <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3' }}>
                  <Image
                    src={dishPopup.image.src}
                    alt={language === 'he' ? dishPopup.image.alt.he : dishPopup.image.alt.en}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 500px"
                    priority
                  />
                </div>

                {/* Dish Details */}
                <div style={{
                  padding: '20px 24px 24px',
                  direction: language === 'he' ? 'rtl' : 'ltr',
                }}>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#F2F1F0',
                    lineHeight: 1.3,
                  }}>
                    {language === 'he' ? dishPopup.menuItem.name.he : dishPopup.menuItem.name.en}
                  </h3>
                  {dishPopup.menuItem.description && (
                    <p style={{
                      fontSize: '0.9rem',
                      color: 'rgba(242, 241, 240, 0.6)',
                      marginTop: '10px',
                      lineHeight: 1.6,
                    }}>
                      {language === 'he' ? dishPopup.menuItem.description.he : dishPopup.menuItem.description.en}
                    </p>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
