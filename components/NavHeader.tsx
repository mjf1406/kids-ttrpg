import Link from "next/link";
import { BookOpen, FileText, Map } from "lucide-react";

const navItems = [
    {
        name: "Rulebook",
        href: "/rulebook",
        icon: BookOpen,
    },
    {
        name: "Character Sheets",
        href: "/character-sheets",
        icon: FileText,
    },
    {
        name: "Adventures",
        href: "/adventures",
        icon: Map,
    },
];

export default function NavHeader() {
    return (
        <nav className="flex gap-6">
            {navItems.map((item) => (
                <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-2 text-sm hover:text-gray-500"
                >
                    <item.icon size={20} />
                    {item.name}
                </Link>
            ))}
        </nav>
    );
}
