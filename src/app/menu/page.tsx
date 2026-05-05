'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { menuData } from '@/data/menu';
import { config } from '@/data/config';

export default function MenuPage() {
  const { dict, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(menuData[0].id);
  const [expandedItemId, setExpandedItemId] = useState<string | null>(null);

  const kosherText = language === 'he' ? config.kosher.he : config.kosher.en;

  const toggleItem = (itemId: string) => {
    setExpandedItemId((prev) => (prev === itemId ? null : itemId));
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="relative" style={{ paddingTop: '6rem', paddingBottom: '4rem' }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1920&q=80"
            alt="Menu background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/85" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-off-white mb-4">
            {dict.menu.title}
          </h1>
          <div className="w-16 h-0.5 bg-bronze mx-auto mb-4" />
          <p className="text-bronze text-sm tracking-wide">
            {kosherText}
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16 md:py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs - Sticky on mobile */}
          <div className="sticky top-16 md:top-20 z-20 bg-charcoal py-4 -mx-4 px-4 md:mx-0 md:px-0 mb-8">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-2 md:justify-center min-w-max pb-2">
                {menuData.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                      activeCategory === category.id
                        ? 'bg-bronze text-charcoal shadow-lg'
                        : 'bg-off-white/10 text-off-white hover:bg-off-white/20'
                    }`}
                  >
                    {language === 'he' ? category.name.he : category.name.en}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="max-w-4xl mx-auto">
            {menuData.map((category) => (
              <div
                key={category.id}
                className={activeCategory === category.id ? 'block animate-fade-in' : 'hidden'}
              >
                {/* Category Header */}
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-semibold text-off-white">
                    {language === 'he' ? category.name.he : category.name.en}
                  </h2>
                </div>

                {/* Category Note */}
                {category.note && (
                  <div className="mb-6 mx-auto max-w-2xl rounded-lg border border-bronze/30 bg-bronze/10 px-4 py-3">
                    <p className="text-sm text-bronze leading-relaxed text-center">
                      {language === 'he' ? category.note.he : category.note.en}
                    </p>
                  </div>
                )}

                <div className="space-y-0">
                  {category.items.map((item, index) => (
                    item.isSubheader ? (
                      <div
                        key={item.id}
                        className={`pt-6 pb-2 ${index === 0 ? '' : 'mt-4 border-t border-off-white/15'}`}
                      >
                        <h4 className="text-base font-semibold text-bronze">
                          {language === 'he' ? item.name.he : item.name.en}
                        </h4>
                      </div>
                    ) : (
                      <div
                        key={item.id}
                        className={`py-6 ${
                          index !== category.items.length - 1 && !category.items[index + 1]?.isSubheader
                            ? 'border-b border-off-white/10'
                            : ''
                        }`}
                      >
                        <div
                          onClick={() => item.image && toggleItem(item.id)}
                          role={item.image ? 'button' : undefined}
                          tabIndex={item.image ? 0 : undefined}
                          onKeyDown={(e) => {
                            if (item.image && (e.key === 'Enter' || e.key === ' ')) {
                              e.preventDefault();
                              toggleItem(item.id);
                            }
                          }}
                          className={`flex justify-between items-start gap-4 ${
                            item.image ? 'cursor-pointer group' : ''
                          }`}
                        >
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-off-white mb-1 flex items-center gap-2">
                              {language === 'he' ? item.name.he : item.name.en}
                              {item.image && (
                                <svg
                                  className="w-4 h-4 text-bronze/60 group-hover:text-bronze transition-colors"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                              )}
                            </h3>
                            {item.description && (
                            <p className="text-off-white/60 text-sm leading-relaxed">
                              {language === 'he' ? item.description.he : item.description.en}
                            </p>
                            )}
                          </div>
                          <div className="text-lg font-semibold text-bronze whitespace-nowrap">
                            {dict.menu.currency}{item.price}
                          </div>
                        </div>
                        <AnimatePresence initial={false}>
                          {item.image && expandedItemId === item.id && (
                            <motion.div
                              key="item-image"
                              initial={{ opacity: 0, height: 0, marginTop: 0 }}
                              animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                              exit={{ opacity: 0, height: 0, marginTop: 0 }}
                              transition={{ duration: 0.25, ease: 'easeOut' }}
                              style={{ overflow: 'hidden' }}
                            >
                              <div className="relative w-full max-w-lg rounded-xl overflow-hidden border border-bronze/25" style={{ aspectRatio: '16 / 10' }}>
                                <Image
                                  src={item.image}
                                  alt={language === 'he' ? item.name.he : item.name.en}
                                  fill
                                  sizes="(max-width: 768px) 100vw, 500px"
                                  className="object-cover"
                                />
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Decorative element */}
          <div className="flex justify-center mt-16">
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-off-white/20" />
              <svg className="w-6 h-6 text-bronze" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              <div className="w-12 h-px bg-off-white/20" />
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}

