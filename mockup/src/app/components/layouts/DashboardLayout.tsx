import { Outlet, Link, useLocation, useNavigate } from "react-router";
import { Button } from "../ui/button";
import {
  Sprout,
  Home,
  Upload,
  CreditCard,
  Users,
  Calendar,
  Award,
  FileCheck,
  Settings,
  LogOut,
  Menu,
  X,
  ClipboardList,
  UserCheck,
  Megaphone,
  FileText
} from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback } from "../ui/avatar";

export function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const currentRole = location.pathname.split("/")[1];

  const menuItems = {
    participante: [
      { path: "/participante", icon: Home, label: "Dashboard" },
      { path: "/participante/subir-trabajo", icon: Upload, label: "Subir Trabajo" },
      { path: "/participante/pago", icon: CreditCard, label: "Pago de Inscripción" },
      { path: "/participante/talleres", icon: Users, label: "Talleres" },
      { path: "/participante/mi-agenda", icon: Calendar, label: "Mi Agenda" },
      { path: "/participante/certificado", icon: Award, label: "Certificado" },
    ],
    evaluador: [
      { path: "/evaluador", icon: Home, label: "Dashboard" },
      { path: "/evaluador", icon: FileCheck, label: "Trabajos Asignados" },
    ],
    admin: [
      { path: "/admin", icon: Home, label: "Dashboard" },
      { path: "/admin/cronograma", icon: Calendar, label: "Gestionar Cronograma" },
      { path: "/admin/asignar-evaluadores", icon: UserCheck, label: "Asignar Evaluadores" },
      { path: "/admin/novedades", icon: Megaphone, label: "Novedades" },
      { path: "/admin/trabajos", icon: FileText, label: "Gestionar Trabajos" },
    ],
  };

  const currentMenu = menuItems[currentRole as keyof typeof menuItems] || [];

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    navigate("/");
  };

  const handleRoleChange = () => {
    navigate("/seleccionar-rol");
  };

  return (
    <div className="flex h-screen bg-background">
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-card border-r transform transition-transform lg:relative lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-2 p-4 border-b">
            <Sprout className="h-6 w-6 text-green-600" />
            <span className="font-semibold">Congreso Agroecología</span>
          </div>

          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {currentMenu.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                  isActive(item.path)
                    ? "bg-green-600 text-white"
                    : "hover:bg-muted"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="p-4 border-t space-y-2">
            <div className="flex items-center gap-3 px-3 py-2">
              <Avatar className="h-8 w-8">
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">Juan Pérez</p>
                <p className="text-xs text-muted-foreground capitalize">{currentRole}</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start"
              onClick={handleRoleChange}
            >
              <Settings className="h-4 w-4 mr-2" />
              Cambiar Rol
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-red-600 hover:text-red-600 hover:bg-red-50"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Cerrar Sesión
            </Button>
          </div>
        </div>
      </aside>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-card border-b p-4 flex items-center gap-4">
          <button
            className="lg:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X /> : <Menu />}
          </button>
          <h1 className="text-xl font-semibold capitalize">{currentRole}</h1>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
