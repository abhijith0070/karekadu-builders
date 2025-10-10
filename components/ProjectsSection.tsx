'use client';
import { motion, AnimatePresence, MotionConfig, Transition } from 'motion/react';
import { Plus, X, ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import TextAnimation from './uilayouts/scroll-text';

// Updated Card item type with multiple images
interface CardItem {
  id: number;
  images: string[];
  title: string;
  description: string;
  tags: string[];
}

// Animation config
const transition: Transition = {
  type: 'spring',
  bounce: 0.05,
  duration: 0.3
};

const LinearCardDialog: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [carouselWidth, setCarouselWidth] = useState<number>(0);
  const carousel = useRef<HTMLDivElement>(null);

  // Updated items with multiple images
  const items: CardItem[] = [
    {
      id: 1,
      images: [
        'https://images.unsplash.com/photo-1757672242146-a6a7897bcc80?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1170&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1170&auto=format&fit=crop'
      ],
      title: 'Accordion',
      description: 'Immerse yourself in our cutting-edge interactive gallery. Experience the power of modern web design with smooth animations and intuitive interactions.',
      tags: ['Sunrise', 'Mountains', 'Golden', 'Scenic', 'Inspiring'],
    },
    {
      id: 2,
      images: [
        'https://images.unsplash.com/photo-1756806983725-977bb2308d4e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1170&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1170&auto=format&fit=crop'
      ],
      title: 'Globe Section',
      description: 'Embark on a virtual journey around the world with our state-of-the-art 3D globe feature.',
      tags: ['Misty', 'Path', 'Mysterious', 'Serene', 'Rugged'],
    },
    {
      id: 3,
      images: [
        'https://images.unsplash.com/photo-1756806983832-1f056cf24182?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1170&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=1170&auto=format&fit=crop'
      ],
      title: 'Image Mouse Trail',
      description: 'Transform your browsing experience with our mesmerizing Image Mouse Trail feature.',
      tags: ['Pathway', 'Adventure', 'Peaks', 'Challenging', 'Breathtaking'],
    },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape' && isOpen) {
        handleCloseDialog();
      }
      if (isOpen && currentItem) {
        if (event.key === 'ArrowRight') {
          handleNextImage();
        } else if (event.key === 'ArrowLeft') {
          handlePrevImage();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen, currentImageIndex]);

  useEffect(() => {
    if (carousel.current) {
      const scrollWidth = carousel.current.scrollWidth;
      const offsetWidth = carousel.current.offsetWidth;
      setCarouselWidth(scrollWidth - offsetWidth);
    }
  }, [items]);

  const handleCardClick = (itemIndex: number): void => {
    setIndex(itemIndex);
    setCurrentImageIndex(0);
    setIsOpen(true);
  };

  const handleCloseDialog = (): void => {
    setIsOpen(false);
    setCurrentImageIndex(0);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (e.target === e.currentTarget) {
      handleCloseDialog();
    }
  };

  const handleNextImage = (): void => {
    if (currentItem && currentImageIndex < currentItem.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handlePrevImage = (): void => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const currentItem = items[index];

  return (
    <div className="relative min-h-screen w-full flex flex-col">
      {/* Centered heading section */}
      <div className="flex-shrink-0 flex items-center justify-center py-12 md:py-16">
        <TextAnimation
          text='Our Works'
          variants={{
            hidden: { filter: 'blur(10px)', opacity: 0, y: 20 },
            visible: {
              filter: 'blur(0px)',
              opacity: 1,
              y: 0,
              transition: { ease: 'linear' },
            },
          }}
          classname='xl:text-8xl text-7xl font-medium capitalize text-center'
        />
      </div>

      {/* Centered carousel section */}
      <div className="flex-1 flex items-center justify-center overflow-hidden">
        <MotionConfig transition={transition}>
          <motion.div
            ref={carousel}
            drag="x"
            dragElastic={0.2}
            dragConstraints={{ right: 0, left: -carouselWidth }}
            dragTransition={{ bounceDamping: 30 }}
            className="flex gap-3 md:gap-4 px-4"
          >
            {items.map((item, i) => (
              <motion.div
                key={item.id}
                className="flex-shrink-0 flex relative flex-col overflow-hidden border dark:bg-black bg-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-950 cursor-pointer transition-colors"
                layoutId={`dialog-${item.id}`}
                style={{ 
                  width: 'min(250px, 70vw)',
                  borderRadius: '12px' 
                }}
                tabIndex={i}
                onClick={() => handleCardClick(i)}
                onKeyDown={(e: React.KeyboardEvent) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCardClick(i);
                  }
                }}
                role="button"
                aria-label={`Open ${item.title} details`}
              >
                <motion.div layoutId={`dialog-img-${item.id}`}>
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-full h-36 sm:h-48 object-cover"
                    loading="lazy"
                  />
                </motion.div>
                <div className="flex flex-grow flex-row items-end justify-between p-3 md:p-4">
                  <div className="flex-1">
                    <motion.h3
                      layoutId={`dialog-title-${item.id}`}
                      className="dark:text-white text-black font-semibold text-sm truncate"
                    >
                      {item.title}
                    </motion.h3>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                      {item.images.length} {item.images.length === 1 ? 'image' : 'images'}
                    </p>
                  </div>
                  <button
                    className="absolute bottom-2 right-2 p-1.5 md:p-2 dark:bg-neutral-800 bg-neutral-300 hover:bg-neutral-400 dark:hover:bg-neutral-700 rounded-xl transition-colors"
                    aria-label={`Open ${item.title}`}
                    tabIndex={-1}
                  >
                    <Plus className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </MotionConfig>
      </div>

      {/* Modal remains the same */}
      {isOpen && currentItem && createPortal(
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={`backdrop-${currentItem.id}`}
            className="fixed inset-0 h-full w-full dark:bg-black/50 bg-black/25 backdrop-blur-sm z-40"
            variants={{ open: { opacity: 1 }, closed: { opacity: 0 } }}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={handleBackdropClick}
          />
          <motion.div
            key="dialog"
            className="pointer-events-none fixed inset-0 flex items-center justify-center z-50 p-3 sm:p-4 md:p-6"
          >
            <motion.div
              className="pointer-events-auto relative flex flex-col dark:bg-neutral-900 bg-white border shadow-2xl w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-[500px] max-h-[85vh] sm:max-h-[90vh]"
              layoutId={`dialog-${currentItem.id}`}
              tabIndex={-1}
              style={{ borderRadius: '16px' }}
              role="dialog"
              aria-labelledby={`dialog-title-${currentItem.id}`}
              aria-describedby={`dialog-description-${currentItem.id}`}
            >
              <div className="overflow-y-auto flex-1">
                <div className="relative">
                  <motion.div layoutId={`dialog-img-${currentItem.id}`}>
                    <img
                      src={currentItem.images[currentImageIndex]}
                      alt={`${currentItem.title} - Image ${currentImageIndex + 1}`}
                      className="h-48 sm:h-56 md:h-64 w-full object-cover"
                    />
                  </motion.div>
                  
                  {currentItem.images.length > 1 && (
                    <>
                      <button
                        onClick={handlePrevImage}
                        disabled={currentImageIndex === 0}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 disabled:opacity-30 disabled:cursor-not-allowed text-white rounded-full transition-all"
                        aria-label="Previous image"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={handleNextImage}
                        disabled={currentImageIndex === currentItem.images.length - 1}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 disabled:opacity-30 disabled:cursor-not-allowed text-white rounded-full transition-all"
                        aria-label="Next image"
                      >
                        <ChevronRight size={20} />
                      </button>
                      
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                        {currentItem.images.map((_, imgIndex) => (
                          <button
                            key={imgIndex}
                            onClick={() => setCurrentImageIndex(imgIndex)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              imgIndex === currentImageIndex
                                ? 'bg-white'
                                : 'bg-white/50 hover:bg-white/75'
                            }`}
                            aria-label={`Go to image ${imgIndex + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
                
                <div className="p-4 sm:p-5 md:p-6">
                  <motion.h2
                    layoutId={`dialog-title-${currentItem.id}`}
                    className="text-xl sm:text-2xl font-bold text-zinc-950 dark:text-zinc-50 mb-3 md:mb-4"
                    id={`dialog-title-${currentItem.id}`}
                  >
                    {currentItem.title}
                  </motion.h2>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.1 }}
                    className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed"
                    id={`dialog-description-${currentItem.id}`}
                  >
                    {currentItem.description}
                  </motion.div>
                  {currentItem.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {currentItem.tags.map((tag, tagIndex) => (
                        <span
                          key={`${tag}-${tagIndex}`}
                          className="px-2 py-1 text-xs bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              <button
                onClick={handleCloseDialog}
                className="absolute right-3 top-3 sm:right-4 sm:top-4 p-1.5 sm:p-2 bg-black dark:bg-white rounded-lg text-white dark:text-black border cursor-pointer transition-colors hover:opacity-80"
                type="button"
                aria-label={`Close ${currentItem.title} dialog`}
              >
                <X size={18} className="sm:w-5 sm:h-5" />
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
};

export default LinearCardDialog;
