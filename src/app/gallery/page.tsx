'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { galleryImages } from '@/data/gallery';
import Lightbox from '@/components/Lightbox';

export default function GalleryPage() {
  const { dict, language } = useLanguage();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const goToPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? galleryImages.length - 1 : lightboxIndex - 1);
    }
  };

  const goToNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === galleryImages.length - 1 ? 0 : lightboxIndex + 1);
    }
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="relative" style={{ paddingTop: '6rem', paddingBottom: '4rem' }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=80"
            alt="Gallery background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/85" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-off-white mb-4">
            {dict.gallery.title}
          </h1>
          <div className="w-16 h-0.5 bg-bronze mx-auto" />
        </div>
      </section>

      {/* Gallery Grid - Bento Style */}
      <section className="py-16 md:py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Bento Grid */}
          <div className="grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[250px]">
            {galleryImages.map((image, index) => {
              // Define span patterns for bento layout
              const spans = [
                'md:col-span-7 md:row-span-2', // Large left
                'md:col-span-5 md:row-span-1', // Small top right
                'md:col-span-5 md:row-span-1', // Small bottom right
                'md:col-span-4 md:row-span-2', // Medium left
                'md:col-span-8 md:row-span-2', // Large right
                'md:col-span-6 md:row-span-1', // Medium
                'md:col-span-6 md:row-span-1', // Medium
              ];
              const spanClass = spans[index % spans.length];

              return (
                <button
                  key={image.id}
                  onClick={() => openLightbox(index)}
                  className={`group relative overflow-hidden rounded-xl ${spanClass} focus:outline-none focus:ring-2 focus:ring-bronze focus:ring-offset-2 focus:ring-offset-charcoal`}
                >
                  <Image
                    src={image.src}
                    alt={language === 'he' ? image.alt.he : image.alt.en}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-10 h-10 text-off-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages.map(img => ({
            id: img.id,
            src: img.src,
            alt: language === 'he' ? img.alt.he : img.alt.en
          }))}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={goToPrev}
          onNext={goToNext}
        />
      )}
    </>
  );
}

