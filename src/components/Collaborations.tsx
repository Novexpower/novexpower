import Image from 'next/image';

type Collaborator = {name: string; url?: string; logo: string}

export function Collaboration({collaborators}: {collaborators: Collaborator[]}) {
    return (
        <div className="flex flex-wrap justify-center items-center gap-x-20 gap-y-5">
            {collaborators && collaborators.map((collab) => (
                <div
                    key={collab.name}
                    className="flex flex-col items-center space-y-2 text-center"
                >
                    <a
                        href={collab.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                    >
                        <div className="bg-gray-200 dark:bg-white rounded-xl p-1 shadow-sm group-hover:shadow-md transition">
                            <Image
                                src={collab.logo}
                                alt={`${collab.name} logo`}
                                width={120}
                                height={120}
                                className="object-contain grayscale group-hover:grayscale-0 transition"
                            />
                        </div>
                    </a>
                </div>
            ))}
        </div>
    );
};
