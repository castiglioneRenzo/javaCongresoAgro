import { Outlet, Link, useLocation } from "react-router";
import { Button } from "../ui/button";
import { Sprout, Menu, X } from "lucide-react";
import { useState } from "react";

export function PublicLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Inicio" },
    { path: "/programa", label: "Programa" },
    { path: "/circulares", label: "Circulares" },
    { path: "/tipos-trabajo", label: "Tipos de Trabajo" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <Sprout className="h-8 w-8 text-green-600" />
              <div className="flex flex-col">
                <span className="font-semibold text-lg">Congreso de Agroecología</span>
                <span className="text-xs text-muted-foreground">2026</span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm transition-colors hover:text-green-600 ${
                    isActive(item.path) ? "text-green-600 font-medium" : "text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/login">
                <Button variant="outline" size="sm">Iniciar Sesión</Button>
              </Link>
              <Link to="/registro">
                <Button size="sm" className="bg-green-600 hover:bg-green-700">Registrarse</Button>
              </Link>
            </nav>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden border-t py-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-2 py-1 text-sm ${
                    isActive(item.path) ? "text-green-600 font-medium" : "text-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-2">
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" size="sm" className="w-full">Iniciar Sesión</Button>
                </Link>
                <Link to="/registro" onClick={() => setMobileMenuOpen(false)}>
                  <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">Registrarse</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t bg-muted/30 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Congreso de Agroecología 2026</h3>
              <p className="text-sm text-muted-foreground">
                Espacio de encuentro entre académicos, productores y estudiantes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Contacto</h3>
              <p className="text-sm text-muted-foreground">info@congreso-agroecologia.org</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Fechas Importantes</h3>
              <p className="text-sm text-muted-foreground">Envío de trabajos: 30 de Mayo, 2026</p>
              <p className="text-sm text-muted-foreground">Fecha del congreso: 15-17 de Agosto, 2026</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
