"use client";

import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { footerDetails, siteDetails } from "@/data";
import { getPlatformIconByName } from "@/utils/getPlatformIcon";
import { Logo } from "./logo";
import { ContactReveal } from ".";

const ContactModal = dynamic(
    () => import("./ContactModal").then((mod) => mod.ContactModal),
    { ssr: false }
);

export function Footer() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <footer
            className="bg-gradient-to-b from-gray-50 to-white 
      text-gray-800 
      dark:from-gray-900 dark:to-black dark:text-white 
      py-12 sm:py-14 lg:py-16"
        >
            {/* Main Content */}
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mb-12 lg:grid-cols-3 lg:gap-10 xl:gap-12">

                    {/* Brand Section */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                        <span className="flex items-center gap-3 mb-4">
                            <Logo />
                            <h3 className="manrope cursor-pointer text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">
                                {siteDetails.siteName}
                            </h3>
                        </span>

                        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                            {footerDetails.subheading}
                        </p>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="mt-6 inline-flex items-center gap-2 rounded-full border 
              border-sky-300/50 bg-gradient-to-r from-sky-500 to-cyan-500 
              px-6 py-3 text-sm font-semibold text-white 
              shadow-md transition duration-300 
              hover:-translate-y-0.5 hover:from-sky-400 hover:to-cyan-400
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                        >
                            Interested
                        </button>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700 pb-2">
                            Get in Touch
                        </h4>

                        <div className="space-y-4">
                            {footerDetails.email && (
                                <ContactReveal kind="email" value={footerDetails.email} />
                            )}

                            {footerDetails.telephone && (
                                <ContactReveal kind="phone" value={footerDetails.telephone} />
                            )}
                        </div>
                    </div>

                    {/* Social Section */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700 pb-2">
                            Connect With Us
                        </h4>

                        <div className="flex items-center gap-4 flex-wrap">
                            {footerDetails.socials &&
                                Object.keys(footerDetails.socials).map((platformName) => {
                                    if (!footerDetails.socials[platformName]) return null;

                                    return (
                                        <Link
                                            href={footerDetails.socials[platformName]}
                                            key={platformName}
                                            aria-label={platformName}
                                            className="text-gray-500 dark:text-gray-300 
                      hover:text-blue-600 dark:hover:text-blue-400 
                      transition duration-300 transform hover:scale-110"
                                        >
                                            {getPlatformIconByName(platformName)}
                                        </Link>
                                    );
                                })}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-300 dark:border-gray-700 my-8" />

                {/* Bottom */}
                <div className="pt-6">
                    <div className="flex flex-col items-center gap-4 text-sm sm:flex-row sm:justify-between">

                        {/* Left */}
                        <p className="text-center sm:text-left text-gray-500 dark:text-gray-400 max-w-md">
                            © {new Date().getFullYear()}
                            <span className="font-semibold text-gray-900 dark:text-white ml-1">
                                {siteDetails.siteName} AB
                            </span>
                            . All rights reserved.
                        </p>

                        {/* Middle */}
                        <span className="text-gray-400 dark:text-gray-500 text-xs sm:text-sm">
                            Org.nr 559554-1557
                        </span>

                        {/* Right */}
                        <div className="flex items-center gap-6">
                            <Link
                                href="/privacy"
                                className="text-gray-600 dark:text-gray-400 
                hover:text-blue-600 dark:hover:text-blue-400 
                transition"
                            >
                                Data Policy
                            </Link>

                            <Link
                                href="/terms"
                                className="text-gray-600 dark:text-gray-400 
                hover:text-blue-600 dark:hover:text-blue-400 
                transition"
                            >
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </footer>
    );
}