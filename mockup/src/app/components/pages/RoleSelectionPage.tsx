import { useNavigate } from "react-router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { User, FileCheck, Shield, ArrowRight } from "lucide-react";

export function RoleSelectionPage() {
  const navigate = useNavigate();

  const roles = [
    {
      id: "participante",
      title: "Participante",
      description: "Subir trabajos, inscribirse a talleres y gestionar tu agenda",
      icon: User,
      path: "/participante",
      color: "text-blue-600",
      bgColor: "bg-blue-50 hover:bg-blue-100"
    },
    {
      id: "evaluador",
      title: "Evaluador",
      description: "Revisar y evaluar trabajos asignados",
      icon: FileCheck,
      path: "/evaluador",
      color: "text-purple-600",
      bgColor: "bg-purple-50 hover:bg-purple-100"
    },
    {
      id: "admin",
      title: "Administrador",
      description: "Gestionar cronograma, trabajos y novedades del congreso",
      icon: Shield,
      path: "/admin",
      color: "text-green-600",
      bgColor: "bg-green-50 hover:bg-green-100"
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Seleccioná tu Rol</h1>
          <p className="text-muted-foreground">
            Elegí el rol con el que querés acceder al sistema
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roles.map((role) => (
            <Card
              key={role.id}
              className={`cursor-pointer transition-all hover:shadow-lg ${role.bgColor}`}
              onClick={() => navigate(role.path)}
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <role.icon className={`h-16 w-16 ${role.color}`} />
                </div>
                <CardTitle>{role.title}</CardTitle>
                <CardDescription className="mt-2">
                  {role.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <div className={`flex items-center gap-2 ${role.color} font-medium`}>
                  Acceder
                  <ArrowRight className="h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Podés cambiar de rol en cualquier momento desde tu panel de usuario
        </p>
      </div>
    </div>
  );
}
