import Image from 'next/image';
import { heroDetails } from '@/data';

export function Hero() {
    return (
        <section className="relative w-full overflow-hidden">
            {/* LEFT GRID */}
            <div className="absolute left-0 top-0 -z-20 w-5/12 h-full">
                <div
                    className="absolute inset-0 h-full w-full bg-[linear-gradient(to_left,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:40px_30px] [mask-image:radial-gradient(ellipse_70%_70%_at_80%_20%,#000_60%,transparent_100%)]"
                    aria-hidden
                />
            </div>

            {/* RIGHT BACKGROUND */}
            <div className="absolute right-0 top-0 -z-20 w-7/12 h-full">
                <svg
                    viewBox="0 0 860 800"
                    preserveAspectRatio="none"
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    aria-hidden
                >
                    <path
                        d="M40 90 L820 90 L820 150 L40 150 L40 210 L820 210 L820 270 L40 270 L40 330 L820 330"
                        fill="none"
                        stroke="rgba(128,128,128,0.05)"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
            </div>

            {/* Centered content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-3 sm:px-6 pt-8 pb-8 sm:pt-10 sm:pb-10 md:pt-14 md:pb-14">
                <div className="relative w-full flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10">
                    <div className="text-center">
                        <h1 className="whitespace-normal text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mx-auto hero-title leading-[1.08] max-w-[90%] sm:max-w-[85%] md:max-w-4xl">
                            {heroDetails.heading}
                        </h1>
                        <p className="mt-1.5 sm:mt-2.5 text-foreground max-w-[92%] sm:max-w-[82%] md:max-w-2xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg">
                            {heroDetails.subheading}
                        </p>
                    </div>

                    <Image
                        src={heroDetails.centerImageSrc}
                        width={1200}
                        height={800}
                        quality={75}
                        sizes="(max-width: 420px) 82vw, (max-width: 640px) 78vw, (max-width: 768px) 74vw, (max-width: 1024px) 76vw, (max-width: 1536px) 68vw, 60vw"
                        priority={true}
                        unoptimized={false}
                        alt="Hero image"
                        draggable={false}
                        style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none' }}
                        className="mx-auto translate-x-3 sm:translate-x-5 z-10 w-full max-w-[17rem] sm:max-w-[26rem] md:max-w-[36rem] lg:max-w-[47rem] xl:max-w-[53rem] 2xl:max-w-[60rem] h-auto select-none rounded-lg sm:rounded-xl object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
