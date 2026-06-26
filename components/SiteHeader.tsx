import Link from "next/link";
import { CartButton } from "@/components/cart/CartButton";
import { MobileMenu } from "@/components/MobileMenu";

const navLinks = [
  { label: "Coleção", href: "/#colecao" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Lookbook", href: "/#lookbook" },
  { label: "Contato", href: "/#contato" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-ink)]/10 bg-[var(--color-sand)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="font-display text-xl font-bold tracking-[0.2em] text-[var(--color-ink)] sm:text-2xl"
        >
          CORALINA
        </Link>
        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-[var(--color-ink)]/70 transition-colors hover:text-[var(--color-ink)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <CartButton variant="dark" />
          <MobileMenu links={navLinks} variant="dark" />
        </div>
      </div>
    </header>
  );
}
