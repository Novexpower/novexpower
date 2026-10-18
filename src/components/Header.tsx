'use client';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Container from './Container';
import { Menu } from './Menu';
import { Navbar } from './Navbar';
import type {IMenuItem} from './types';

export function Header({siteName, navigation}: {siteName: string; navigation: IMenuItem[]}) {
    const pathname = usePathname();
    const isHomePage = pathname === '/';
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen((previous) => !previous);
    };
    const [activeSection, setActiveSection] = useState("");

    return (
        <header className="bg-transparent fixed top-0 left-0 right-0 md:absolute z-50 mx-auto w-full">
            <Container className="!px-0">
                <Navbar toggleMenu={toggleMenu} isOpen={isOpen} showSectionMenu={isHomePage} siteName={siteName} />
            </Container>

            {/* Include the Menu component */}
            {isHomePage && (
                <Menu isOpen={isOpen} toggleMenu={toggleMenu} activeSection={activeSection} setActiveSection={setActiveSection} menuItems={navigation} />
            )}
        </header>
    );
}
