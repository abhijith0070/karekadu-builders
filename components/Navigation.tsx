'use client';
import { useState } from 'react';
import { MenuIcon, X } from 'lucide-react';
import Link from 'next/link';
import { useMediaQuery } from '@/hooks/use-media-query';
import {
  DrawerContent,
  HeaderDrawer,
} from '@/components/ui/responsive-header';
import Image from 'next/image';
const items = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Image 1",
  },
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Image 2",
    id: 2,
  },
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Image 3",
    id: 3,
  },
];
export default function Navigationbar() {
  const [headerOpen, setHeaderOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <>
      <header className='flex justify-between border items-center p-3 rounded-md dark:bg-black/45 backdrop-blur-md'>
       <div className="flex items-center gap-3">
      <Image src="/logo.png" alt="Logo" width={50} height={50} />
      <h1 className="text-2xl font-bold">KAREKADU BUILDERS</h1>
    </div>
        <HeaderDrawer
          open={headerOpen}
          setOpen={setHeaderOpen}
          drawerBtn={() => {
            return (
              <button>
                <MenuIcon />
              </button>
            );
          }}
        >
          <DrawerContent>
            {!isDesktop && (
              <div className='flex justify-center w-full absolute bottom-1 left-0 '>
                <div className=' w-16 h-[0.30rem] flex-shrink-0 rounded-full bg-gray-600 my-4' />
              </div>
            )}
            <div className='container mx-auto  gap-4'>
              <div className='flex justify-between items-center border-b'>
                {isDesktop && (
                  <button
                    className='flex justify-start p-2 mb-2 rounded-md dark:bg-white dark:text-black bg-black text-white'
                    onClick={() => setHeaderOpen(false)}
                  >
                    <X />
                  </button>
                )}
                <h1 className='mx-auto text-2xl'>KAREKADU BUILDERS</h1>
              </div>
              <div className='flex justify-between  py-2'>
                <nav className='flex gap-8'>
                  <ul className='xl:text-2xl text-lg space-y-2 xl:space-y-4 font-semibold uppercase  pr-8'>
                    <li>
                      <Link
                        href='/'
                        className='relative flex items-center gap-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100'
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/about'
                        className='relative flex gap-2 items-center after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100'
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/layouts'
                        className='relative flex gap-2 items-center after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100'
                      >
                        Our Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/portfolio'
                        className='relative flex items-center gap-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100'
                      >
                        Projects
                      </Link>
                    </li>
                       <li>
                      <Link
                        href='/templates'
                        className='relative flex items-center gap-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100'
                      >
                        Blogs
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/open-source'
                        className='relative flex items-center gap-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100'
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </nav>

                <div className='grid grid-cols-3 gap-4 py-4 pr-20 w-full'>
                  <>
                    {items.map((item) => (
                      <figure
                        key={item.id}
                        className={` inline-block group w-full xl:h-52 h-full relative rounded-md `}
                        >
                        <img
                          src={item.src}
                          alt={item.alt}
                          className='object-cover transition-transform duration-500 group-hover:scale-110'
                        />
                      </figure>
                    ))}
                  </>
                </div>
              </div>
            </div>
          </DrawerContent>
        </HeaderDrawer>
      </header>
    </>
  );
}
