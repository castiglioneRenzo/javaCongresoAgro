import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card";
import { Button } from "../../ui/button";
import { Link } from "react-router";
import {
  Calendar,
  UserCheck,
  Megaphone,
  FileText,
  Users,
  TrendingUp,
  Clock,
  CheckCircle2
} from "lucide-react";

export function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-1">Panel de Administración</h2>
        <p className="text-muted-foreground">Gestión del Congreso de Agroecología 2026</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Total Inscriptos</CardDescription>
            <CardTitle className="text-3xl">342</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-green-600">
              <TrendingUp className="h-4 w-4 mr-1" />
              +12% vs. mes anterior
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Trabajos Recibidos</CardDescription>
            <CardTitle className="text-3xl">127</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-muted-foreground">
              <FileText className="h-4 w-4 mr-1" />
              85 evaluados
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Talleres Activos</CardDescription>
            <CardTitle className="text-3xl">8</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-muted-foreground">
              <Users className="h-4 w-4 mr-1" />
              185 inscripciones
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Pagos Confirmados</CardDescription>
            <CardTitle className="text-3xl">298</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-orange-600">
              <Clock className="h-4 w-4 mr-1" />
              44 pendientes
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <Calendar className="h-8 w-8 text-green-600 mb-2" />
            <CardTitle>Gestionar Cronograma</CardTitle>
            <CardDescription>Organizar actividades por día y asignar aulas</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/admin/cronograma">
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Ir al Cronograma
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <UserCheck className="h-8 w-8 text-green-600 mb-2" />
            <CardTitle>Asignar Evaluadores</CardTitle>
            <CardDescription>Distribuir trabajos entre evaluadores</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/admin/asignar-evaluadores">
              <Button className="w-full" variant="outline">
                Gestionar Asignaciones
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <Megaphone className="h-8 w-8 text-green-600 mb-2" />
            <CardTitle>Publicar Novedades</CardTitle>
            <CardDescription>Comunicados y actualizaciones del congreso</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/admin/novedades">
              <Button className="w-full" variant="outline">
                Gestionar Novedades
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <FileText className="h-8 w-8 text-green-600 mb-2" />
            <CardTitle>Gestionar Trabajos</CardTitle>
            <CardDescription>Revisar y administrar trabajos enviados</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/admin/trabajos">
              <Button className="w-full" variant="outline">
                Ver Trabajos
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Actividad Reciente</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm p-3 border rounded-lg">
              <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
              <div className="flex-1">
                <p className="font-medium">Nuevo trabajo recibido</p>
                <p className="text-muted-foreground">Artículo: "Biodiversidad en sistemas agroforestales"</p>
              </div>
              <span className="text-xs text-muted-foreground">Hace 10 min</span>
            </div>

            <div className="flex items-center gap-3 text-sm p-3 border rounded-lg">
              <Users className="h-5 w-5 text-blue-600 shrink-0" />
              <div className="flex-1">
                <p className="font-medium">Nueva inscripción confirmada</p>
                <p className="text-muted-foreground">María González - Categoría Profesional</p>
              </div>
              <span className="text-xs text-muted-foreground">Hace 25 min</span>
            </div>

            <div className="flex items-center gap-3 text-sm p-3 border rounded-lg">
              <FileText className="h-5 w-5 text-purple-600 shrink-0" />
              <div className="flex-1">
                <p className="font-medium">Evaluación completada</p>
                <p className="text-muted-foreground">Trabajo W045 - Evaluador: Dr. Silva</p>
              </div>
              <span className="text-xs text-muted-foreground">Hace 1 hora</span>
            </div>

            <div className="flex items-center gap-3 text-sm p-3 border rounded-lg">
              <Calendar className="h-5 w-5 text-orange-600 shrink-0" />
              <div className="flex-1">
                <p className="font-medium">Taller con cupo completo</p>
                <p className="text-muted-foreground">Compostaje y Fertilización Orgánica - 30/30</p>
              </div>
              <span className="text-xs text-muted-foreground">Hace 2 horas</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
