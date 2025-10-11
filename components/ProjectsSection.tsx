'use client';
import { motion, AnimatePresence, MotionConfig, Transition, useDragControls, PanInfo } from 'motion/react';
import { Plus, X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';
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
  const router = useRouter();
  const [index, setIndex] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [carouselWidth, setCarouselWidth] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isOverflowing, setIsOverflowing] = useState<boolean>(false);
  
  const carousel = useRef<HTMLDivElement>(null);
  const constraintsRef = useRef<HTMLDivElement>(null);
  const dragControls = useDragControls();
  const dragStartRef = useRef<{ x: number; y: number } | null>(null);

  // Updated items with multiple images
  const items: CardItem[] = [
    {
      id: 1,
      images: [
        '/c1.jpg',
        '/c2.jpg',
        '/c3.jpg'
      ],
      title: 'Accordion',
      description: 'Immerse yourself in our cutting-edge interactive gallery. Experience the power of modern web design with smooth animations and intuitive interactions.',
      tags: ['Sunrise', 'Mountains', 'Golden', 'Scenic', 'Inspiring'],
    },
    {
      id: 2,
      images: [
        '/c11.jpg',
        '/c12.jpg',
        '/c13.jpg'
      ],
      title: 'Globe Section',
      description: 'Embark on a virtual journey around the world with our state-of-the-art 3D globe feature.',
      tags: ['Misty', 'Path', 'Mysterious', 'Serene', 'Rugged'],
    },
    {
      id: 3,
      images: [
        '/o11.jpg',
        '/o12.jpg',
        '/o13.jpg'
      ],
      title: 'Image Mouse Trail',
      description: 'Transform your browsing experience with our mesmerizing Image Mouse Trail feature.',
      tags: ['Pathway', 'Adventure', 'Peaks', 'Challenging', 'Breathtaking'],
    },
  ];

  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.overflow = 'hidden';
      document.body.style.width = '100%';
      
      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.overflow = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollY);
      };
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
    };
  }, [isOpen, currentImageIndex]);

  // Updated useEffect to check for overflow
  useEffect(() => {
    const checkOverflow = () => {
      if (carousel.current && constraintsRef.current) {
        const scrollWidth = carousel.current.scrollWidth;
        const offsetWidth = constraintsRef.current.offsetWidth;
        const newCarouselWidth = scrollWidth - offsetWidth;
        
        setCarouselWidth(newCarouselWidth);
        setIsOverflowing(newCarouselWidth > 0);
      }
    };

    checkOverflow();
    
    // Add resize listener to recheck overflow on window resize
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, [items]);

  const handleCardClick = (itemIndex: number): void => {
    if (!isDragging) {
      setIndex(itemIndex);
      setCurrentImageIndex(0);
      setIsOpen(true);
    }
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

  // Enhanced drag handling for all devices
  const handleDragStart = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void => {
    if (isOverflowing) {
      setIsDragging(true);
      dragStartRef.current = { x: info.point.x, y: info.point.y };
    }
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void => {
    if (isOverflowing) {
      setTimeout(() => setIsDragging(false), 150);
      dragStartRef.current = null;
    }
  };

  // Touch event handlers to enable proper drag on mobile - only when overflowing
  const handlePointerDown = (event: React.PointerEvent): void => {
    if (isOverflowing) {
      dragControls.start(event);
    }
  };

  const handleTouchStart = (event: React.TouchEvent): void => {
    if (isOverflowing) {
      const touch = event.touches[0];
      dragStartRef.current = { x: touch.clientX, y: touch.clientY };
    }
  };

  const handleTouchMove = (event: React.TouchEvent): void => {
    if (!isOverflowing || !dragStartRef.current) return;

    const touch = event.touches[0];
    const deltaX = Math.abs(touch.clientX - dragStartRef.current.x);
    const deltaY = Math.abs(touch.clientY - dragStartRef.current.y);

    // If horizontal movement is dominant, prevent scrolling
    if (deltaX > deltaY && deltaX > 10) {
      event.preventDefault();
    }
  };

  const currentItem = items[index];

  return (
    <div className="relative w-full py-12 sm:py-16 md:py-20">
      {/* Heading section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 md:mb-16">
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
          classname='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium capitalize text-center'
        />
      </div>

      {/* Grid section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col overflow-hidden border dark:bg-black bg-white hover:bg-neutral-50 dark:hover:bg-neutral-950 cursor-pointer transition-all duration-300 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2"
              layoutId={`dialog-${item.id}`}
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
              <motion.div layoutId={`dialog-img-${item.id}`} className="relative overflow-hidden">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-full h-64 sm:h-72 md:h-80 object-cover pointer-events-none transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
              <div className="flex flex-grow flex-row items-end justify-between p-5 md:p-6">
                <div className="flex-1">
                  <motion.h3
                    layoutId={`dialog-title-${item.id}`}
                    className="dark:text-white text-black font-semibold text-lg md:text-xl mb-2 group-hover:text-blue-600 transition-colors duration-300"
                  >
                    {item.title}
                  </motion.h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {item.images.length} {item.images.length === 1 ? 'image' : 'images'}
                  </p>
                </div>
                <button
                  className="absolute bottom-5 right-5 p-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
                  aria-label={`Open ${item.title}`}
                  tabIndex={-1}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(i);
                  }}
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* See All Button */}
      <div className="flex justify-center py-8 sm:py-10 md:py-12">
        <button
          onClick={() => router.push('/portfolio')}
          className="group inline-flex items-center gap-2 px-8 py-3 bg-blue-100 dark:bg-blue-950 border-2 border-blue-500 rounded-full text-blue-600 dark:text-blue-400 font-semibold text-base sm:text-lg hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <span className="uppercase tracking-wide">VIEW ALL PROJECTS</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
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
