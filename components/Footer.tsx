'use client';
import React, { FormEvent, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const container = useRef<HTMLDivElement>(null);
  const [openPopup, setOpenPopUp] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  // Logo animation variants
  const logoVariants = {
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 12,
        duration: 0.6,
      },
    },
    hidden: { 
      opacity: 0, 
      scale: 0.8, 
      y: 50 
    },
  };

  const handleNewsLetterData = (e: FormEvent) => {
    e.preventDefault();
    console.log(e);
    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);

    const clientEmail = formData.get('newsletter_email')!;
    
    setOpenPopUp(true);
    target.reset();
    if (setOpenPopUp) {
      setTimeout(() => {
        setOpenPopUp(false);
      }, 2000);
    }
  };

  return (
    <>
      <div
        className='relative h-full sm:pt-14 pt-8 bg-[#f7f7f7] text-black'
        ref={container}
      >
        <div className='sm:container px-4 mx-auto'>
          <div className='md:flex justify-between w-full'>
            <div>
              <h1 className='md:text-4xl text-2xl font-semibold'>
                Let&lsquo;s build something amazing together
              </h1>
              <div className='pt-2 pb-6 md:w-99 '>
                <p className='md:text-2xl text-xl py-4'>
                  Get project updates & construction insights*
                </p>
                <div className=' hover-button relative bg-black flex justify-between items-center border-2 overflow-hidden border-black rounded-full text-white hover:text-black md:text-2xl'>
                  <form
                    onSubmit={(e) => handleNewsLetterData(e)}
                    className='relative z-2 grid grid-cols-6 w-full h-full'
                  >
                    <input
                      type='email'
                      name='newsletter_email'
                      className='border-none bg-transparent py-3 px-6 col-span-5'
                      placeholder='Your Email * '
                      required
                    />
                    <button
                      type='submit'
                      className='cursor-pointer w-full hover:bg-orange-500 bg-white text-white h-full cols-span-1 transition-colors duration-300'
                    >
                      <svg
                        width='15'
                        height='15'
                        viewBox='0 0 15 15'
                        fill='none'
                        className='w-full h-[80%] '
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z'
                          fill='#000'
                          fillRule='evenodd'
                          clipRule='evenodd'
                        />
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className='flex gap-10'>
              <ul>
                <li className='text-2xl pb-2 text-black font-semibold'>
                  SITEMAP
                </li>
                <li className='text-xl font-medium'>
                  <Link href='/'>Home</Link>
                </li>
                <li className='text-xl font-medium'>
                  <Link href='/about'>About us</Link>
                </li>
                <li className='text-xl font-medium'>
                  <Link href='/services'>Our Services</Link>
                </li>
                <li className='text-xl font-medium'>
                  <Link href='/projects'>Projects</Link>
                </li>
                <li className='text-xl font-medium'>
                  <Link href='/blogs'>Blogs</Link>
                </li>
                <li className='text-xl font-medium'>
                  <Link href='/contact-us'>Contact</Link>
                </li>
              </ul>
              <ul>
                <li className='text-2xl pb-2 text-black font-semibold'>
                  SOCIAL
                </li>
                <li className='text-xl font-medium'>
                  <a
                    href='https://www.linkedin.com/company/karekadu-builders/'
                    target='_blank'
                    className='underline hover:text-orange-500 transition-colors'
                  >
                    LinkedIn
                  </a>
                </li>
                <li className='text-xl font-medium'>
                  <a
                    href='https://twitter.com/KarekaduBuilders'
                    target='_blank'
                    className='underline hover:text-orange-500 transition-colors'
                  >
                    Twitter
                  </a>
                </li>
                <li className='text-xl font-medium'>
                  <a
                    href='https://www.instagram.com/karekadubuilders/'
                    target='_blank'
                    className='underline hover:text-orange-500 transition-colors'
                  >
                    Instagram
                  </a>
                </li>
                <li className='text-xl font-medium'>
                  <a
                    href='https://www.facebook.com/karekadubuilders'
                    target='_blank'
                    className='underline hover:text-orange-500 transition-colors'
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Replace the animated SVG with your PNG logo */}
          <div className='border-y-2 md:py-8 py-6 border-gray-200 flex justify-center items-center'>
            <motion.div
              ref={ref}
              initial='hidden'
              animate={isInView ? 'visible' : 'hidden'}
              variants={logoVariants}
              className='relative'
            >
              {/* Replace with your PNG logo */}
              <Image
                src="/logo.png" // Put your logo in public folder
                alt="Karekadu Builders - Premium Construction & Architecture"
                width={400}
                height={120}
                className='h-16 md:h-24 w-auto object-contain filter hover:brightness-110 transition-all duration-300'
                priority
              />
              
              {/* Optional: Add a subtle glow effect */}
              <div className='absolute inset-0 bg-gradient-to-r from-orange-400/20 to-blue-600/20 blur-xl -z-10 opacity-0 hover:opacity-100 transition-opacity duration-500' />
            </motion.div>
          </div>

          <div className='flex md:flex-row flex-col-reverse gap-3 justify-between py-2'>
            <span className='font-medium'>
              &copy; 2024 Karekadu Builders. All Rights Reserved.
            </span>
            <div className='flex gap-4'>
              <a href='#' className='font-semibold hover:text-orange-500 transition-colors'>
                Privacy Policy
              </a>
              <a href='#' className='font-semibold hover:text-orange-500 transition-colors'>
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
