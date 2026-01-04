'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { menuData, MenuCategory } from '@/data/menu';
import { config } from '@/data/config';
import { motion, AnimatePresence } from 'framer-motion';

export default function Menu() {
  const { dict, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | null>(null);

  const kosherText = language === 'he' ? config.kosher.he : config.kosher.en;

  const closeModal = () => setSelectedCategory(null);

  return (
    <>
      <section id="menu" className="bg-[#0D0D0D]" style={{ padding: '80px 0 100px 0' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          {/* Header */}
          <h2 style={{ fontSize: '2.5rem', fontWeight: 600, color: '#F4F4F2', marginBottom: '24px' }}>
            {dict.menu.title}
          </h2>
          
          <div style={{ width: '64px', height: '2px', backgroundColor: '#CD7F32', margin: '0 auto 24px auto' }} />
          
          {/* Kosher Logo */}
          <div style={{ marginBottom: '48px' }}>
            <Image
              src="/kosher.png"
              alt="כשר"
              width={80}
              height={80}
              style={{ margin: '0 auto', filter: 'brightness(0) invert(1)' }}
            />
          </div>

          {/* Category Circles */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px' }}>
            {menuData.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category)}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Square Image (no radius) */}
                <div style={{ 
                  position: 'relative', 
                  width: '180px', 
                  height: '180px', 
                  borderRadius: '50%', 
                  overflow: 'hidden', 
                  border: '4px solid rgba(50,50,50,0.8)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.4), inset 0 0 20px rgba(0,0,0,0.3)',
                }}>
                  <Image
                    src={category.image}
                    alt={language === 'he' ? category.name.he : category.name.en}
                    fill
                    className="object-cover"
                    style={{ filter: 'brightness(0.9) contrast(1.05)' }}
                  />
                </div>
                
                {/* Category Name */}
                <span style={{ marginTop: '14px', fontSize: '0.9rem', fontWeight: 500, color: 'rgba(244,244,242,0.8)', maxWidth: '130px' }}>
                  {language === 'he' ? category.name.he : category.name.en}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedCategory && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            />

            {/* Modal Content */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-6 md:p-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="w-full max-w-2xl max-h-[85vh] overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
              <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-2xl overflow-hidden shadow-2xl border border-[#CD7F32]/20" style={{ margin: '16px' }}>
                {/* Header */}
                <div className="relative h-32 md:h-40">
                  <Image
                    src={selectedCategory.image}
                    alt={language === 'he' ? selectedCategory.name.he : selectedCategory.name.en}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/50 to-transparent" />
                  
                  {/* Close Button */}
                  <button
                    onClick={closeModal}
                    className="absolute top-4 left-4 w-10 h-10 rounded-full bg-[#0D0D0D]/60 backdrop-blur-sm flex items-center justify-center text-[#F4F4F2] hover:bg-[#CD7F32] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  {/* Category Title */}
                  <div className="absolute bottom-4 right-6 left-6 text-right">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#F4F4F2]">
                      {language === 'he' ? selectedCategory.name.he : selectedCategory.name.en}
                    </h3>
                  </div>
                </div>

                {/* Items List */}
                <div style={{ padding: '32px 40px', overflowY: 'auto', maxHeight: 'calc(85vh - 12rem)' }} className="custom-scrollbar">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {selectedCategory.items.map((item, index) => (
                      item.isSubheader ? (
                        // Subheader styling
                        <div
                          key={item.id}
                          style={{
                            paddingTop: index === 0 ? '0' : '24px',
                            paddingBottom: '12px',
                            marginTop: index === 0 ? '0' : '16px',
                            borderTop: index === 0 ? 'none' : '1px solid rgba(205, 127, 50, 0.3)',
                          }}
                        >
                          <h5 style={{
                            fontSize: '1rem',
                            fontWeight: 600,
                            color: '#CD7F32',
                            textAlign: language === 'he' ? 'right' : 'left',
                          }}>
                            {language === 'he' ? item.name.he : item.name.en}
                          </h5>
                        </div>
                      ) : (
                        // Regular item styling
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, x: language === 'he' ? 20 : -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.03 }}
                          className={`py-3 ${
                            index !== selectedCategory.items.length - 1 && !selectedCategory.items[index + 1]?.isSubheader
                              ? 'border-b border-[#F4F4F2]/10' 
                              : ''
                          }`}
                        >
                          <div className="flex justify-between items-start gap-4">
                            <div className="flex-1">
                              <h4 className="text-base font-medium text-[#F4F4F2]">
                                {language === 'he' ? item.name.he : item.name.en}
                              </h4>
                              {item.description && (
                                <p className="text-[#F4F4F2]/50 text-sm leading-relaxed mt-1">
                                  {language === 'he' ? item.description.he : item.description.en}
                                </p>
                              )}
                            </div>
                            <div className="text-base font-bold text-[#CD7F32] whitespace-nowrap">
                              {dict.menu.currency}{item.price}
                            </div>
                          </div>
                        </motion.div>
                      )
                    ))}
                  </div>
                </div>
              </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(244, 244, 242, 0.05);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(205, 127, 50, 0.4);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(205, 127, 50, 0.6);
        }
      `}</style>
    </>
  );
}
