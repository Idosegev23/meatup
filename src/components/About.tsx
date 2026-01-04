'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function About() {
  const { dict } = useLanguage();

  const handleGalleryClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector('#gallery');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-24 md:py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-semibold text-off-white mb-6">
              {dict.about.title}
            </h2>
            
            <div className="w-16 h-0.5 bg-bronze mb-8" />
            
            <p className="text-lg text-off-white/80 leading-relaxed mb-8">
              {dict.about.text}
            </p>

            <a
              href="#gallery"
              onClick={handleGalleryClick}
              className="inline-flex items-center gap-2 text-bronze hover:text-bronze/80 transition-colors group"
            >
              <span className="font-medium">{dict.about.gallery}</span>
              <svg 
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform rtl:rotate-180 rtl:group-hover:-translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2 relative">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
                alt="Restaurant ambiance"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-bronze/30 rounded-xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

