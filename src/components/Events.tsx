import { updates } from '@/data';
import Image from 'next/image';
import React from 'react';

export function Events() {
    return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {updates.map((event) => (
                <article
                    key={event.name}
                    className="group block h-full transform transition duration-300 hover:-translate-y-1"
                >
                    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white/70 shadow-[0_8px_30px_rgba(15,23,42,0.08)] backdrop-blur-md transition duration-300 group-hover:border-sky-400/30 group-hover:shadow-[0_12px_40px_rgba(14,165,233,0.12)] dark:border-white/10 dark:bg-slate-950/55">
                        <div className="relative h-56 w-full sm:h-48 lg:h-56">
                            <Image
                                src={event.image}
                                alt={event.name}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover transition-transform group-hover:scale-105"
                            />
                        </div>

                        <div className="flex flex-1 flex-col p-4 sm:p-5">
                            <h2 className="line-clamp-2 text-base font-semibold text-slate-950 sm:text-lg lg:text-xl dark:text-white" title={event.name}>
                                {event.name}
                            </h2>
                            <div className="mt-auto pt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-sky-700 sm:text-sm dark:text-sky-300">
                                {event.location && (
                                    <div className="flex min-w-0 items-center gap-2">
                                        <svg
                                            className="h-4 w-4 shrink-0"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            aria-hidden="true"
                                        >
                                            <path d="M12 21s-7-5.5-7-10a7 7 0 0114 0c0 4.5-7 10-7 10z" />
                                            <circle cx="12" cy="11" r="2.5" />
                                        </svg>
                                        <span className="break-words">{event.location}</span>
                                    </div>
                                )}

                                {event.location && event.date && <span className="text-slate-300 dark:text-slate-600">|</span>}

                                {event.date && (
                                    <div className="flex items-center gap-2">
                                        <svg
                                            className="h-4 w-4 shrink-0"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            aria-hidden="true"
                                        >
                                            <rect x="3" y="5" width="18" height="16" rx="2" />
                                            <path d="M16 3v4M8 3v4M3 11h18" />
                                        </svg>
                                        <span>{event.date}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
}

