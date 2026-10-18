"use client"
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { BiMinus, BiPlus } from "react-icons/bi";
import SectionTitle from "./SectionTitle";

type FAQItem = {question: string; answer: string}

export function FAQ({faqs}: {faqs: FAQItem[]}) {
    return (
        <section id="faq" className="relative overflow-hidden py-10 sm:py-14 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-sky-700 shadow-sm backdrop-blur dark:border-sky-400/20 dark:bg-slate-900/70 dark:text-sky-300">
                        FAQ&apos;S
                    </div>
                    <SectionTitle>
                        <h2 className="my-3 text-center text-3xl leading-tight text-slate-950 sm:text-4xl lg:text-5xl dark:text-white">
                            Frequently Asked Questions
                        </h2>
                    </SectionTitle>
                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-300">
                        Quick answers about our battery packs, immersion cooling, and how NovexPower helps teams move faster with safer energy systems.
                    </p>
                </div>

                <div className="mt-8 gap-8 md:gap-10 lg:mt-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.85fr)] lg:items-start">
                    <div className="w-full">
                        {faqs && faqs.map((faq, index) => (
                            <div key={faq.question} className="mb-6 sm:mb-7">
                                <Disclosure>
                                    {({ open }) => (
                                        <div className="rounded-2xl border border-slate-200/80 bg-white/70 shadow-[0_8px_30px_rgba(15,23,42,0.08)] backdrop-blur-md transition-all duration-300 hover:border-sky-400/30 hover:shadow-[0_12px_40px_rgba(14,165,233,0.12)] dark:border-white/10 dark:bg-slate-950/55">
                                            <DisclosureButton className="flex w-full items-start gap-3 px-4 py-4 text-left transition-colors sm:px-5 sm:py-5">
                                                <div
                                                    className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${open ? "bg-gradient-to-br from-sky-500 to-cyan-400 shadow-[0_0_18px_rgba(14,165,233,0.45)]" : "bg-slate-300 dark:bg-slate-700"}`}
                                                >
                                                    {open ? (
                                                        <BiMinus className="h-4 w-4 text-white" aria-hidden="true" />
                                                    ) : (
                                                        <BiPlus className="h-4 w-4 text-slate-700 dark:text-slate-200" aria-hidden="true" />
                                                    )}
                                                </div>
                                                <span className="text-base font-semibold leading-snug text-slate-900 sm:text-lg lg:text-xl dark:text-white">
                                                    {faq.question}
                                                </span>
                                            </DisclosureButton>
                                            <DisclosurePanel className="px-4 pb-5 pt-0 text-sm leading-7 text-slate-600 sm:px-5 sm:text-base dark:text-slate-300">
                                                {faq.answer}
                                            </DisclosurePanel>
                                        </div>
                                    )}
                                </Disclosure>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
