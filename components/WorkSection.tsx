'use client';
import { ReactLenis } from 'lenis/react';
export default function WorkSection(): JSX.Element {
  return (
    <ReactLenis root>
      <main className='bg-white'>
        

        
        <section className='text-black   w-full bg-white  '>
          <div className='grid grid-cols-2 px-8'>
            <div className='grid gap-2'>
              <figure className='sticky top-0 h-screen grid place-content-center'>
                <img
                  src='https://images.unsplash.com/photo-1718183120769-ece47f31045b?w=500&auto=format&fit=crop'
                  alt=''
                  className='transition-all duration-300 w-96 h-96  align-bottom object-cover rounded-md'
                />
              </figure>
              <figure className='sticky top-0 h-screen grid place-content-center'>
                <img
                  src='https://images.unsplash.com/photo-1715432362539-6ab2ab480db2?w=500&auto=format&fit=crop'
                  alt=''
                  className='transition-all duration-300  w-96 h-96   align-bottom object-cover rounded-md'
                />
              </figure>
              <figure className='sticky top-0 h-screen grid place-content-center'>
                <img
                  src='https://images.unsplash.com/photo-1685904042960-66242a0ac352?w=500&auto=format&fit=crop'
                  alt=''
                  className='transition-all duration-300 w-96 h-96   align-bottom object-cover rounded-md'
                />
              </figure>
              <figure className='sticky top-0 h-screen grid place-content-center'>
                <img
                  src='https://images.unsplash.com/photo-1718838541476-d04e71caa347?w=500&auto=format&fit=crop'
                  alt=''
                  className='transition-all duration-300  w-96 h-96   align-bottom object-cover rounded-md'
                />
              </figure>
            </div>
            <div className='sticky top-0 h-screen grid place-content-center'>
              <h1 className='text-4xl px-8 font-medium text-right tracking-tight leading-[120%]'>
                We don’t just build – we create spaces you’ll love! 😎 Explore Karekadu Builders’ projects and see our magic in action.
              </h1>
            </div>
          </div>
        </section>
        
      </main>
    </ReactLenis>
  );
}