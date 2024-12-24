import Link from "next/link";
import { Dices } from "lucide-react";
import NavHeader from "./NavHeader";

export default function Header() {
    return (
        <header className="px-6 py-2 bg-accent w-full sticky top-0">
            <div className="max-w-4xl mx-auto flex justify-between items-center">
                <Link
                    href={"/"}
                    className="flex gap-2 justify-center items-center text-4xl font-[family-name:var(--font-fredoka)]"
                >
                    <Dices size={42} /> {/* TODO: We need a real logo */}
                    Kids TTRPG
                </Link>
                <NavHeader />
            </div>
        </header>
    );
}
