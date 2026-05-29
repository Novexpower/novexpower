import Image from 'next/image';
import { team_members } from '@/data';
import { ContactReveal } from '.';

export function Team() {
    return (
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {team_members.map((member) => (
                <div
                    key={member.name}
                    className="rounded-2xl border border-slate-200/80 bg-white/70 p-4 shadow-[0_8px_30px_rgba(15,23,42,0.08)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:shadow-[0_12px_40px_rgba(14,165,233,0.12)] dark:border-white/10 dark:bg-slate-950/55 sm:p-5 lg:p-6"
                >
                    <div className="flex items-center justify-center gap-4 text-center lg:justify-start lg:text-left">
                        <Image
                            src={member.avatar}
                            alt={`${member.name} avatar`}
                            width={80}
                            height={80}
                            className="h-16 w-16 rounded-full border border-sky-400/20 object-cover shadow-lg sm:h-20 sm:w-20"
                        />
                        <div>
                            <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{member.name}</h3>
                            {member.email && (
                                <ContactReveal kind="email" value={member.email} />
                            )}
                            <p className="text-sm text-sky-700 dark:text-sky-300">{member.role}</p>
                        </div>
                    </div>
                    <p className="mt-3 text-center text-sm leading-6 text-slate-600 lg:mt-4 lg:text-left lg:leading-7 dark:text-slate-300">{member.message}</p>
                </div>
            ))}
        </div>
    );
};


