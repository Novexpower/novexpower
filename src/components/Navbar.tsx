'use client';

import { ThemeToggler, Logo } from '.';
import { HiBars3, HiOutlineXMark } from 'react-icons/hi2';

type NavbarProps = {
    toggleMenu: () => void;
    isOpen: boolean;
    showSectionMenu: boolean;
    siteName: string;
}

export function Navbar({ toggleMenu, isOpen, showSectionMenu, siteName }: NavbarProps) {
    return (
        <nav className="mx-auto flex items-center justify-between bg-white px-3 py-2 shadow-md dark:bg-[--background] sm:px-4 md:bg-transparent md:px-5 md:py-8 md:shadow-none">
            {/* Logo */}
            <span className="flex min-w-0 items-center">
                <Logo />
                <span className="manrope ml-2 truncate bg-gradient-to-b text-base font-semibold text-foreground backdrop-blur-[2px] sm:text-lg md:text-xl">
                    {siteName}
                </span>
            </span>
            <span className="hidden md:flex">
                <ThemeToggler />
            </span>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
                <span className="mr-2 sm:mr-3">
                    <ThemeToggler />
                </span>
                {showSectionMenu && (
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white focus:outline-none sm:h-10 sm:w-10"
                        aria-controls="mobile-menu"
                        aria-expanded={isOpen}
                    >
                        {isOpen ? (
                            <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
                        ) : (
                            <HiBars3 className="h-6 w-6" aria-hidden="true" />
                        )}
                        <span className="sr-only">Toggle navigation</span>
                    </button>
                )}
            </div>
        </nav>
    );
}