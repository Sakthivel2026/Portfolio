import { MainNav } from "@/components/common/main-nav";
import { ModeToggle } from "@/components/common/mode-toggle";
import { SiteFooter } from "@/components/common/site-footer";
import { routesConfig } from "@/config/routes";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between py-3">
          <MainNav items={routesConfig.mainNav}>
            <div className="flex items-center gap-3">
              <ModeToggle />
            </div>
          </MainNav>
          <nav className="flex items-center gap-5">
            <ModeToggle />
          </nav>
        </div>
      </header>
      <main className="container flex-1 pt-20">{children}</main>
      <SiteFooter />
    </div>
  );
}
