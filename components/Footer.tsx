'use client';
import React, { FormEvent, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Twitter, Instagram, Facebook, ArrowRight } from 'lucide-react';

const Footer = () => {
  const [openPopup, setOpenPopUp] = useState(false);

  const handleNewsLetterData = (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);
    const clientEmail = formData.get('newsletter_email')!;
    
    setOpenPopUp(true);
    target.reset();
    setTimeout(() => {
      setOpenPopUp(false);
    }, 2000);
  };

  return (
    <footer className='bg-[#1a1a1a] text-white'>
      <div className='container mx-auto px-6 py-16'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16'>
          
          {/* Left Section - Logo & Brand */}
          <div className='lg:col-span-1'>
            <div className='mb-8'>
              <Image
                src="/llogo.png"
                alt="Karekadu Builders & Architects"
                width={200}
                height={67}
                className='h-16 md:h-20 w-auto object-contain brightness-0 invert'
              />
            </div>
            <h3 className='text-xl font-semibold mb-3'>
              Karekadu Builders & Architects
            </h3>
            <p className='text-gray-400 text-sm leading-relaxed'>
              Building excellence through innovation, craftsmanship, and dedication to quality construction.
            </p>
          </div>

          {/* Sitemap Section */}
          <nav className='lg:col-span-1'>
            <h4 className='text-sm font-bold uppercase tracking-wider mb-6 text-accent'>
              Sitemap
            </h4>
            <ul className='space-y-3'>
              <li>
                <Link 
                  href='/' 
                  className='text-gray-300 hover:text-white transition-colors duration-300 text-sm'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href='/about' 
                  className='text-gray-300 hover:text-white transition-colors duration-300 text-sm'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href='/services' 
                  className='text-gray-300 hover:text-white transition-colors duration-300 text-sm'
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link 
                  href='/portfolio' 
                  className='text-gray-300 hover:text-white transition-colors duration-300 text-sm'
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  href='/blogs' 
                  className='text-gray-300 hover:text-white transition-colors duration-300 text-sm'
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link 
                  href='/contact' 
                  className='text-gray-300 hover:text-white transition-colors duration-300 text-sm'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Social Section */}
          <nav className='lg:col-span-1'>
            <h4 className='text-sm font-bold uppercase tracking-wider mb-6 text-accent'>
              Social
            </h4>
            <ul className='space-y-3'>
              <li>
                <a
                  href='https://www.linkedin.com/company/karekadu-builders/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-300 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2'
                >
                  <Linkedin className='w-4 h-4' />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href='https://twitter.com/KarekaduBuilders'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-300 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2'
                >
                  <Twitter className='w-4 h-4' />
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href='https://www.instagram.com/karekadubuilders/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-300 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2'
                >
                  <Instagram className='w-4 h-4' />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href='https://www.facebook.com/karekadubuilders'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-300 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2'
                >
                  <Facebook className='w-4 h-4' />
                  Facebook
                </a>
              </li>
            </ul>
          </nav>

          {/* Newsletter / CTA Section */}
          <div className='lg:col-span-1'>
            <h4 className='text-sm font-bold uppercase tracking-wider mb-6 text-accent'>
              Newsletter
            </h4>
            <h3 className='text-lg font-semibold mb-3 leading-tight'>
              Let&rsquo;s build something amazing together
            </h3>
            <p className='text-gray-400 text-sm mb-4'>
              Get project updates & construction insights
            </p>
            <form onSubmit={handleNewsLetterData} className='relative'>
              <div className='flex items-center bg-white/10 rounded-md overflow-hidden border border-white/20 focus-within:border-accent transition-colors duration-300'>
                <input
                  type='email'
                  name='newsletter_email'
                  placeholder='Your email'
                  required
                  className='flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none'
                />
                <button
                  type='submit'
                  className='px-4 py-3 bg-accent hover:bg-accent/90 transition-colors duration-300 flex items-center justify-center'
                  aria-label='Subscribe to newsletter'
                >
                  <ArrowRight className='w-5 h-5 text-white' />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-white/10 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            
            {/* Social Icons */}
            <div className='flex items-center gap-4'>
              <a
                href='https://www.linkedin.com/company/karekadu-builders/'
                target='_blank'
                rel='noopener noreferrer'
                className='w-9 h-9 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors duration-300'
                aria-label='LinkedIn'
              >
                <Linkedin className='w-4 h-4' />
              </a>
              <a
                href='https://twitter.com/KarekaduBuilders'
                target='_blank'
                rel='noopener noreferrer'
                className='w-9 h-9 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors duration-300'
                aria-label='Twitter'
              >
                <Twitter className='w-4 h-4' />
              </a>
              <a
                href='https://www.instagram.com/karekadubuilders/'
                target='_blank'
                rel='noopener noreferrer'
                className='w-9 h-9 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors duration-300'
                aria-label='Instagram'
              >
                <Instagram className='w-4 h-4' />
              </a>
              <a
                href='https://www.facebook.com/karekadubuilders'
                target='_blank'
                rel='noopener noreferrer'
                className='w-9 h-9 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors duration-300'
                aria-label='Facebook'
              >
                <Facebook className='w-4 h-4' />
              </a>
            </div>

            {/* Copyright */}
            <div className='text-center'>
              <p className='text-gray-400 text-sm'>
                &copy; 2024 Karekadu Builders & Architects. All rights reserved.
              </p>
            </div>

            {/* Legal Links */}
            <div className='flex items-center gap-6'>
              <Link 
                href='/privacy-policy' 
                className='text-gray-400 hover:text-white text-sm transition-colors duration-300'
              >
                Privacy Policy
              </Link>
              <Link 
                href='/terms-of-service' 
                className='text-gray-400 hover:text-white text-sm transition-colors duration-300'
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Popup */}
      {openPopup && (
        <div className='fixed bottom-4 right-4 bg-accent text-white px-6 py-4 rounded-lg shadow-lg z-50 animate-slide-up'>
          <p className='font-medium'>Thank you for subscribing!</p>
        </div>
      )}
    </footer>
  );
};

export default Footer;
