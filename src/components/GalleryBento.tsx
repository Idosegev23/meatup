'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { galleryImages } from '@/data/gallery';
import Lightbox from './Lightbox';

export default function GalleryBento() {
  const { dict, language } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0));
  };

  const lightboxImages = galleryImages.map(img => ({
    id: img.id,
    src: img.src,
    alt: language === 'he' ? img.alt.he : img.alt.en
  }));

  return (
    <section id="gallery" className="bg-[#0D0D0D]">
      {/* Full Width Grid Gallery - minimal padding */}
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
            </button>
          ))}
        </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={lightboxImages}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  );
}
