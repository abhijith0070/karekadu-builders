"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { AlignJustify, X } from "lucide-react";
import { useState } from "react";
import { Drawer } from "vaul";

export default function Navigation() {
  const isMobile = useMediaQuery("(max-width: 992px)");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex gap-2 z-50 text-neutral-900 sm:backdrop-blur-lg sm:first:border border-gray-200/80 sm:bg-white top-2 rounded-lg max-w-4xl items-center justify-between mx-auto px-3 p-2 sticky">
      {/* Desktop Navigation */}
      {!isMobile ? (
        <>
          <div className="flex items-center gap-3">
            <img src="/logoo.png" alt="Logo" width={40} height={40} />
            <h1 className="text-xl font-bold text-primary uppercase">
              Karekadu Builders
            </h1>
          </div>
          <nav className="flex gap-4 font-medium">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
          </nav>
          <button className="text-lg h-10 px-4 rounded-lg text-white flex items-center gap-2 bg-primary hover:bg-primary/90 transition-all">
            Get Quote
          </button>
        </>
      ) : (
        /* Mobile Navigation (Drawer) */
        <>
          <div className="flex items-center gap-2">
            <img src="/logoo.png" alt="Logo" width={35} height={35} />
            <h1 className="text-sm font-bold text-primary uppercase">
              Karekadu Builders
            </h1>
          </div>
          <Drawer.Root direction="left" open={isOpen} onOpenChange={setIsOpen}>
            <Drawer.Trigger className="px-2 text-white h-9 grid place-content-center bg-primary w-fit rounded-lg">
              <AlignJustify />
            </Drawer.Trigger>
            <Drawer.Portal>
              <Drawer.Overlay className="fixed inset-0 bg-black/40 z-50" />
              <Drawer.Content
                className="left-2 top-2 bottom-2 fixed z-50 outline-none w-72 flex"
                style={
                  {
                    "--initial-transform": "calc(100% + 8px)",
                  } as React.CSSProperties
                }
              >
                <div className="bg-gradient-to-t from-primary via-primary/90 to-primary border border-primary/40 text-white p-2 h-full w-full grow flex flex-col rounded-[16px]">
                  <div className="w-full flex justify-between items-center">
                    <div className="flex gap-2 px-4 flex-shrink-0 items-center text-lg font-semibold">
                      <img
                        src="/logoo.png"
                        alt="Logo"
                        width={30}
                        height={30}
                        className="brightness-0 invert"
                      />
                      <span>KAREKADU BUILDERS</span>
                    </div>
                    <button
                      className="rounded-md w-fit bg-white/10 hover:bg-white/20 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <X />
                    </button>
                  </div>
                  <div className="rounded-b-md py-4 px-3">
                    <ul className="space-y-2">
                      <li className="hover:bg-white/10 cursor-pointer p-2 px-3 rounded-md transition-colors">
                        Home
                      </li>
                      <li className="hover:bg-white/10 cursor-pointer p-2 px-3 rounded-md transition-colors">
                        About
                      </li>
                      <li className="hover:bg-white/10 cursor-pointer p-2 px-3 rounded-md transition-colors">
                        Services
                      </li>
                      <li className="hover:bg-white/10 cursor-pointer p-2 px-3 rounded-md transition-colors">
                        Projects
                      </li>
                      <li className="hover:bg-white/10 cursor-pointer p-2 px-3 rounded-md transition-colors">
                        Contact
                      </li>
                    </ul>
                  </div>
                </div>
              </Drawer.Content>
            </Drawer.Portal>
          </Drawer.Root>
        </>
      )}
    </header>
  );
}
