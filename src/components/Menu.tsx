import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import type {IMenuItem} from './types';

interface MenuProps {
    isOpen: boolean;
    toggleMenu: () => void;
    activeSection: string;
    setActiveSection: (section: string) => void;
    menuItems: IMenuItem[];
}

export function Menu({ isOpen, toggleMenu, activeSection, setActiveSection, menuItems }: MenuProps) {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    const navigateToSection = (url: string) => {
        const targetId = url.startsWith('#') ? url.slice(1) : url;
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveSection(url);

            if (window.location.hash !== url) {
                window.history.pushState(null, '', url);
            }

            return;
        }

        window.location.href = url;
    };

    const handleMobileNavigation = (url: string, event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();

        navigateToSection(url);

        toggleMenu();
    };

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (ticking) {
                return;
            }

            ticking = true;

            requestAnimationFrame(() => {
                const scrollPosition = window.scrollY + 100; // Small offset for better accuracy
                let nextActiveSection = menuItems[0]?.url || "";

                menuItems.forEach((item, index) => {
                    const section = document.querySelector(item.url);
                    if (section) {
                        const sectionTop = (section as HTMLElement).offsetTop;
                        const sectionBottom = sectionTop + (section as HTMLElement).offsetHeight;

                        // Special case for the first section
                        if (index === 0 && scrollPosition < sectionBottom) {
                            nextActiveSection = item.url;
                        }
                        // Regular case for other sections
                        else if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                            nextActiveSection = item.url;
                        }
                    }
                });

                setActiveSection(nextActiveSection);
                ticking = false;
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [setActiveSection]);

    return (
        <>
            {/* Desktop Menu */}
            <ul className="fixed right-2 top-1/2 hidden -translate-y-1/2 flex-col items-center space-y-8 p-3 text-center md:flex lg:right-4 lg:space-y-10 lg:p-4">
                {menuItems && menuItems.map((item) => (
                    <li key={item.text} className="flex items-center justify-between w-full relative">
                        {/* Clickable Circle */}
                        <div
                            className={`w-8 h-8 my-6 rounded-full transition-colors self-center ml-1 cursor-pointer ${activeSection === item.url ? "bg-primary" : "bg-gray-300"}`}
                            onClick={() => navigateToSection(item.url)}
                            onMouseEnter={() => setHoveredItem(item.text)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <span className="w-full h-full flex items-center justify-center">
                                <span className={`text-sm font-semibold ${activeSection === item.url ? 'text-white' : 'text-gray-700'}`}>
                                    {activeSection === item.url ? (
                                        <span className="text-xl font-extrabold text-white">+</span>
                                    ) : (
                                        <span className="text-xl font-extrabold text-gray-700">-</span>
                                    )}
                                </span>
                            </span>
                            {/* Hover element */}
                            {hoveredItem === item.text && (
                                <ul className="absolute left-0 top-0 transform translate-x-[-100%] transition-all duration-200">
                                    <li className="text-white w-full bg-primary px-6 py-3 rounded-full transition-colors whitespace-nowrap">
                                        {item.text}
                                    </li>
                                </ul>
                            )}
                        </div>
                    </li>
                ))}
            </ul>

            {/* Mobile Menu with Transition */}
            <Transition
                show={isOpen}
                enter="transition ease-out duration-200 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div
                    id="mobile-menu"
                    className="md:hidden overflow-hidden border-t border-foreground/10 bg-background/90 supports-[backdrop-filter]:bg-background/70 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.30),inset_0_-12px_20px_rgba(0,0,0,0.10),0_14px_28px_rgba(0,0,0,0.14)]"
                >
                    <ul className="flex flex-col items-stretch space-y-2 px-5 pb-6 pt-6">
                        {menuItems.map(item => (
                            <li key={item.text} className="border-b border-foreground/20 pb-2 last:border-b-0">
                                <Link
                                    href={item.url}
                                    className="block rounded-lg px-2 py-2 text-center text-base font-medium text-blue-700 transition-colors duration-200 hover:bg-black/5 hover:text-blue-500 dark:text-gray-100 dark:hover:bg-white/5 dark:hover:text-blue-300"
                                    onClick={(event) => handleMobileNavigation(item.url, event)}
                                >
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </Transition>
        </>
    );
}