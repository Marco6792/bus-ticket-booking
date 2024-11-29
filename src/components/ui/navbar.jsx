/**
 * @fileoverview Navigation Bar Component
 * @author Flore (with guidance from Marco)
 * 
 * Hey Flore! This is the navbar component built.
 * Remember our discussion about making it beautiful and professional?
 * I've added comments to help you understand each part.
 * 
 * Key features we implemented:
 * 1. Responsive design (mobile & desktop)
 * 2. Beautiful animations
 * 3. Dark mode support
 * 4. Modern blur effects
 */

"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

// Flore, this is our navigation configuration
const navigation = [
  { name: "Home", href: "/" },
  { name: "Tickets", href: "/tickets" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  // State management for mobile menu and scroll effects
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Flore, this effect handles the navbar transparency on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-background/60 backdrop-blur-xl shadow-lg" : ""
    }`}>
      <nav className="mx-auto max-w-7xl px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-x-8">
          {/* Logo Section
           * Flore, notice I added the cool hover effect!
           * The blur-lg class creates that modern glow effect
           */}
          <Link 
            href="/" 
            className="group flex items-center gap-x-2 text-xl font-bold tracking-tight"
          >
            <div className="relative">
              <span className="text-red-500 transition-colors group-hover:text-red-600">Bus</span>
              <div className="absolute -inset-x-2 -inset-y-1 blur-lg bg-red-500/20 group-hover:bg-red-500/30 transition-colors" />
            </div>
            <span className="relative text-red-500 transition-colors group-hover:text-red-600">...</span>
          </Link>

          {/* Desktop Navigation
           * That hover:-translate-y-0.5 class creates that effect!
           */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-8 flex-1 justify-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative -my-2 px-3 py-2 text-sm transition-colors hover:-translate-y-0.5 ${
                  pathname === item.href
                    ? "text-red-500"
                    : "text-muted-foreground hover:text-red-500"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Section with Theme Toggle and Sign Up
           * Flore, this is for your favorite gradient button effect!
           */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-6">
            <ModeToggle />
            <Link
              href="/signup"
              className="relative inline-flex h-10 items-center justify-center rounded-lg bg-red-500 px-6 font-medium text-white transition-colors hover:bg-red-600"
            >
              Sign Up
              <div className="absolute -inset-0.5 -z-10 blur-lg bg-red-500/50 opacity-0 transition group-hover:opacity-100" />
            </Link>
          </div>

          {/* Mobile Menu Button
           * This is for smaller screens - remember how to test it on your phone?
           */}
          <div className="flex lg:hidden items-center gap-x-4">
            <ModeToggle />
            <button
              type="button"
              className="relative -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-all hover:bg-accent"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden ${
          mobileMenuOpen ? "fixed inset-0 z-50" : "hidden"
        }`}
      >
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-muted">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="group flex items-center gap-x-2 text-xl font-bold tracking-tight"
            >
              <span className="text-red-500 transition-colors group-hover:text-red-600">
                Bus
              </span>
              <span className="text-red-500 transition-colors group-hover:text-red-600">
                ...
              </span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-muted">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-muted transition-colors ${
                      pathname === item.href
                        ? "text-red-500"
                        : "text-foreground hover:text-red-500"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/signup"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
