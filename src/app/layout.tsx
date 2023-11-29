import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MdMenu, MdOutlineCatchingPokemon, MdStar } from "react-icons/md";
import {
    GiCakeSlice,
    GiCoffeeCup,
    GiFriedFish,
    GiNoodles,
    GiShrimp,
    GiSteak,
} from "react-icons/gi";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Food Delivery",
    description: "Learning next.js project",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <aside className="fixed flex flex-col justify-between items-center h-screen w-[60px] bg-[#4e565e] text-[#babdc2] text-[40px] p-2">
                    <section aria-label="aside-1">
                        <MdMenu />
                    </section>

                    <section
                        aria-label="aside-2"
                        className="space-y-4 xl:space-y-8"
                    >
                        <MdStar />
                        <GiNoodles />
                        <GiSteak />
                        <GiFriedFish />
                        <GiShrimp />
                        <GiCoffeeCup />
                        <GiCakeSlice />
                    </section>

                    <section aria-label="aside-3">
                        <MdOutlineCatchingPokemon />
                    </section>
                </aside>

                <main className="bg-[#f6f7fb] pl-[60px] h-screen w-full overflow-auto">
                    {children}
                </main>
            </body>
        </html>
    );
}
