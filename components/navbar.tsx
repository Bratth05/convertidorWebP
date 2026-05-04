"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, memo, FC } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
}

function isActivePath(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

const NavItemComponent: FC<{ item: NavItem; isActive: boolean }> = memo(function NavItem({ item, isActive }) {
  return (
    <Link
      href={item.href}
      aria-current={isActive ? "page" : undefined}
      className={`relative inline-flex items-center rounded-full px-4 py-2.5 text-sm font-semibold tracking-wide transition-colors duration-300 ${
        isActive ? "text-brand-900" : "text-stone-700 hover:text-brand-700"
      }`}
    >
      {isActive ? (
        <>
          <motion.span
            layoutId="desktop-nav-pill"
            className="absolute inset-0 rounded-full border border-white/80 bg-white/90 shadow-[0_14px_35px_rgba(30,108,90,0.12)]"
            transition={{ type: "spring", stiffness: 320, damping: 28, mass: 0.55 }}
          />
          <motion.span
            layoutId="desktop-nav-indicator"
            className="absolute inset-x-3 -bottom-1 h-1 rounded-full bg-brand-700"
            transition={{ type: "spring", stiffness: 280, damping: 26, mass: 0.45 }}
          />
        </>
      ) : null}
      <span className="relative z-10">{item.label}</span>
    </Link>
  );
});

const MobileNavItemComponent: FC<{ item: NavItem; isActive: boolean; onClose: () => void }> = memo(
  function MobileNavItem({ item, isActive, onClose }) {
    return (
      <Link
        href={item.href}
        aria-current={isActive ? "page" : undefined}
        className={`relative block rounded-2xl px-4 py-3 text-sm font-medium tracking-wide transition-colors duration-300 ${
          isActive ? "text-brand-900" : "text-stone-700 hover:text-brand-700"
        }`}
        onClick={onClose}
      >
        {isActive ? (
          <>
            <motion.span
              layoutId="mobile-nav-pill"
              className="absolute inset-0 rounded-2xl border border-white/80 bg-white/90 shadow-[0_14px_35px_rgba(30,108,90,0.12)]"
              transition={{ type: "spring", stiffness: 300, damping: 28, mass: 0.55 }}
            />
            <motion.span
              layoutId="mobile-nav-indicator"
              className="absolute left-1.5 top-1/2 h-5 w-1 -translate-y-1/2 rounded-full bg-brand-700"
              transition={{ type: "spring", stiffness: 280, damping: 26, mass: 0.45 }}
            />
          </>
        ) : null}
        <span className="relative z-10">{item.label}</span>
      </Link>
    );
  }
);

function NavbarContent() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { label: "Inicio", href: "/" },
    { label: "Convertidor", href: "/converter" },
    { label: "Como usar", href: "/how-to-use" },
    { label: "Sobre nosotros", href: "/about" },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="sticky top-0 z-50 border-b border-stone-200 bg-stone-50/96">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 py-3">
          <Link
            href="/"
            className="flex items-center gap-3 text-lg font-bold text-brand-800 transition-colors duration-300 hover:text-brand-900 sm:text-xl"
          >
            <Image src="/img/brtth.webp" alt="BRTTH" width={36} height={36} priority />
            WebP Converter
          </Link>

          <div className="hidden items-center rounded-full border border-stone-200 bg-white p-1.5 shadow-sm md:flex">
            {navItems.map((item) => (
              <NavItemComponent key={item.href} item={item} isActive={isActivePath(pathname, item.href)} />
            ))}
          </div>

          <button
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex items-center justify-center rounded-full border border-white/80 bg-white/75 p-2.5 text-stone-700 shadow-sm transition-colors duration-300 hover:text-brand-700 md:hidden"
            aria-expanded={isOpen}
            aria-label="Abrir menu"
          >
            <svg
              className={`h-6 w-6 transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <AnimatePresence initial={false}>
          {isOpen ? (
            <motion.div
              key="mobile-nav"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="pb-4 md:hidden"
            >
              <div className="space-y-2 rounded-[1.75rem] border border-stone-200 bg-white p-2 shadow-lg">
                {navItems.map((item) => (
                  <MobileNavItemComponent
                    key={item.href}
                    item={item}
                    isActive={isActivePath(pathname, item.href)}
                    onClose={() => setIsOpen(false)}
                  />
                ))}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </nav>
  );
}

const Navbar = memo(NavbarContent);

export default Navbar;
