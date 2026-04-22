import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card";
import { Button } from "../../ui/button";
import { Link } from "react-router";
import { Upload, CreditCard, Users, Calendar, Award, CheckCircle2, AlertCircle, Clock } from "lucide-react";
import { Progress } from "../../ui/progress";
import { Badge } from "../../ui/badge";

export function ParticipantDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-1">Bienvenido, Juan Pérez</h2>
        <p className="text-muted-foreground">Panel de Participante</p>
      </div>

      <Card className="border-green-200 bg-green-50">
        <CardHeader>
          <CardTitle>Estado de tu Inscripción</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progreso de inscripción</span>
                <span className="font-medium">60%</span>
              </div>
              <Progress value={60} className="h-2" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <span>Cuenta creada</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <span>Trabajo enviado</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-orange-600" />
                <span>Pago pendiente</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <Upload className="h-8 w-8 text-green-600 mb-2" />
            <CardTitle>Subir Trabajo</CardTitle>
            <CardDescription>Enviar artículos, relatos o propuestas</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/participante/subir-trabajo">
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Subir Nuevo Trabajo
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CreditCard className="h-8 w-8 text-green-600 mb-2" />
            <CardTitle>Pago de Inscripción</CardTitle>
            <CardDescription>Completar el pago para confirmar</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/participante/pago">
              <Button className="w-full" variant="outline">
                Realizar Pago
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <Users className="h-8 w-8 text-green-600 mb-2" />
            <CardTitle>Talleres</CardTitle>
            <CardDescription>Inscribirse a actividades prácticas</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/participante/talleres">
              <Button className="w-full" variant="outline">
                Ver Talleres
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <Calendar className="h-8 w-8 text-green-600 mb-2" />
            <CardTitle>Mi Agenda</CardTitle>
            <CardDescription>Actividades seleccionadas</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/participante/mi-agenda">
              <Button className="w-full" variant="outline">
                Ver Mi Agenda
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <Award className="h-8 w-8 text-green-600 mb-2" />
            <CardTitle>Certificado</CardTitle>
            <CardDescription>Descargar certificado de asistencia</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/participante/certificado">
              <Button className="w-full" variant="outline" disabled>
                Disponible Post-Congreso
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Mis Trabajos Enviados</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start justify-between p-4 border rounded-lg">
              <div className="flex-1">
                <h4 className="font-medium">Sistemas de producción agroecológica en zonas áridas</h4>
                <p className="text-sm text-muted-foreground mt-1">Artículo Científico - Formato Oral</p>
                <p className="text-sm text-muted-foreground">Enviado: 15 de Mayo, 2026</p>
              </div>
              <Badge className="bg-yellow-500">
                <Clock className="h-3 w-3 mr-1" />
                En Evaluación
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
