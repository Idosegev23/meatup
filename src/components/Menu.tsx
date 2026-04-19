'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { menuData, MenuCategory, allergenNotice } from '@/data/menu';
import { config } from '@/data/config';
import { motion, AnimatePresence } from 'framer-motion';

export default function Menu() {
  const { dict, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | null>(null);
  const [expandedItemId, setExpandedItemId] = useState<string | null>(null);

  const kosherText = language === 'he' ? config.kosher.he : config.kosher.en;

  const closeModal = () => {
    setSelectedCategory(null);
    setExpandedItemId(null);
  };

  const toggleItem = (itemId: string) => {
    setExpandedItemId((prev) => (prev === itemId ? null : itemId));
  };

  return (
    <>
      <section id="menu" className="bg-[#0a1628]" style={{ padding: '80px 0 100px 0' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        {/* Header */}
          <h2 style={{ fontSize: '2.5rem', fontWeight: 600, color: '#F2F1F0', marginBottom: '24px' }}>
            {dict.menu.title}
          </h2>
          
          <div style={{ width: '64px', height: '2px', backgroundColor: '#BF9B7A', margin: '0 auto 24px auto' }} />
          
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
          <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-6 md:gap-10">
            {menuData.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category)}
                className="flex flex-col items-center"
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Circle Image */}
                <div className="w-[120px] h-[120px] md:w-[180px] md:h-[180px]" style={{ 
                  position: 'relative', 
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
              <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0a1628] rounded-2xl overflow-hidden shadow-2xl border border-[#BF9B7A]/20" style={{ margin: '16px' }}>
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
                    className="absolute top-4 left-4 w-10 h-10 rounded-full bg-[#0a1628]/60 backdrop-blur-sm flex items-center justify-center text-[#F2F1F0] hover:bg-[#BF9B7A] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  {/* Category Title */}
                  <div className="absolute bottom-4 right-6 left-6 text-right">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#F2F1F0]">
                      {language === 'he' ? selectedCategory.name.he : selectedCategory.name.en}
                    </h3>
                  </div>
                </div>

                {/* Items List */}
                <div style={{ padding: '32px 40px', overflowY: 'auto', maxHeight: 'calc(85vh - 12rem)' }} className="custom-scrollbar">
                  {/* Category Note (e.g., lunch deal) */}
                  {selectedCategory.note && (
                    <div style={{
                      backgroundColor: 'rgba(191, 155, 122, 0.15)',
                      borderRadius: '8px',
                      padding: '12px 16px',
                      marginBottom: '20px',
                      border: '1px solid rgba(191, 155, 122, 0.3)',
                    }}>
                      <p style={{
                        fontSize: '0.85rem',
                        color: '#BF9B7A',
                        textAlign: language === 'he' ? 'right' : 'left',
                        lineHeight: 1.5,
                      }}>
                        {language === 'he' ? selectedCategory.note.he : selectedCategory.note.en}
                      </p>
                    </div>
                  )}
                  
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
                            color: '#BF9B7A',
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
                              ? 'border-b border-[#F2F1F0]/10'
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
                              <h4 className="text-base font-medium text-[#F2F1F0] flex items-center gap-2">
                          {language === 'he' ? item.name.he : item.name.en}
                                {item.image && (
                                  <svg
                                    className="w-4 h-4 text-[#BF9B7A]/50 group-hover:text-[#BF9B7A] transition-colors"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                  </svg>
                                )}
                              </h4>
                              {item.description && (
                                <p className="text-[#F2F1F0]/50 text-sm leading-relaxed mt-1">
                          {language === 'he' ? item.description.he : item.description.en}
                        </p>
                              )}
                      </div>
                            <div className="text-base font-bold text-[#BF9B7A] whitespace-nowrap">
                        {dict.menu.currency}{item.price}
                      </div>
                    </div>
                    <AnimatePresence initial={false}>
                      {item.image && expandedItemId === item.id && (
                        <motion.div
                          key="item-image"
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          transition={{ duration: 0.25, ease: 'easeOut' }}
                          style={{ overflow: 'hidden' }}
                        >
                          <div
                            style={{
                              position: 'relative',
                              width: '100%',
                              aspectRatio: '16 / 10',
                              borderRadius: '12px',
                              overflow: 'hidden',
                              border: '1px solid rgba(191, 155, 122, 0.25)',
                            }}
                          >
                            <Image
                              src={item.image}
                              alt={language === 'he' ? item.name.he : item.name.en}
                              fill
                              sizes="(max-width: 768px) 100vw, 600px"
                              className="object-cover"
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                        </motion.div>
                      )
                    ))}
                  </div>
                  
                  {/* Allergen Notice - only for burgers category */}
                  {selectedCategory.id === 'burgers' && (
                    <div style={{
                      marginTop: '24px',
                      paddingTop: '16px',
                      borderTop: '1px solid rgba(244, 244, 242, 0.1)',
                    }}>
                      <p style={{
                        fontSize: '0.75rem',
                        color: 'rgba(244, 244, 242, 0.4)',
                        textAlign: language === 'he' ? 'right' : 'left',
                        lineHeight: 1.6,
                      }}>
                        {language === 'he' ? allergenNotice.he : allergenNotice.en}
                      </p>
                    </div>
                  )}
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
