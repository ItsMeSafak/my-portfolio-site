"use client";

import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IconContext } from 'react-icons';
import { MdAlternateEmail } from "react-icons/md";

export default function Home() {
	return (
		<IconContext.Provider value={{ color: "white", size: "1.5rem" }}>
			<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
				<main className="flex flex-col justify-center gap-[32px] row-start-2 items-center">
					<h1 className="text-3xl text-center font-[family-name:var(--font-geist-mono)]">
						Hi, my name is{' '}
						<code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
							Safak Inan
						</code>
						.
					</h1>
					<div className="flex gap-5">
						<a
							className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
							href="https://www.linkedin.com/in/safak-inan/"
							target="__blank"
							rel="noopener noreferrer">
							<FaLinkedinIn />
						</a>
						<a
							className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
							href="https://github.com/ItsMeSafak"
							target="__blank"
							rel="noopener noreferrer">
							<FaGithub />
						</a>
						<a
							className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
							href="mailto:&#115;&#097;&#102;&#097;&#107;&#046;&#105;&#110;&#097;&#110;&#054;&#049;&#064;&#104;&#111;&#116;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">
							<MdAlternateEmail />
						</a>
					</div>
				</main>
			</div>
		</IconContext.Provider>
	);
}
