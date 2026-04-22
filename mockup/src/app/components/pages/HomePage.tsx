import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Link } from "react-router";
import { Calendar, Users, MapPin, FileText, Award, Clock } from "lucide-react";

export function HomePage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-green-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Congreso de Agroecología 2026
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Espacio de encuentro entre académicos, productores y estudiantes para compartir conocimientos y experiencias en agroecología
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/registro">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 w-full sm:w-auto">
                  Inscribirse al Congreso
                </Button>
              </Link>
              <Link to="/programa">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Ver Programa
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Calendar className="h-10 w-10 text-green-600 mb-2" />
                <CardTitle>Fechas Importantes</CardTitle>
                <CardDescription>Mantente al día con el cronograma</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span>Envío de trabajos:</span>
                    <span className="font-medium">30 Mayo</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Notificación resultados:</span>
                    <span className="font-medium">30 Junio</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Congreso:</span>
                    <span className="font-medium">15-17 Agosto</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MapPin className="h-10 w-10 text-green-600 mb-2" />
                <CardTitle>Lugar del Evento</CardTitle>
                <CardDescription>Dónde nos encontraremos</CardDescription>
              </CardHeader>
              <CardContent className="text-sm">
                <p className="font-medium">Universidad Nacional</p>
                <p className="text-muted-foreground">Facultad de Ciencias Agrarias</p>
                <p className="text-muted-foreground mt-2">Av. Principal 1234, Ciudad</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-green-600 mb-2" />
                <CardTitle>Participantes</CardTitle>
                <CardDescription>Quiénes asisten</CardDescription>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-1">
                  <li>Académicos e investigadores</li>
                  <li>Productores agroecológicos</li>
                  <li>Estudiantes</li>
                  <li>Técnicos y extensionistas</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Tipos de Participación</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileText className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Artículos Científicos</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Presentación de investigaciones en formato oral o poster
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Relatos de Experiencia</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Compartí tus experiencias prácticas en agroecología
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Talleres</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Actividades prácticas e interactivas
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Mesas Temáticas</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Debates y discusiones con 2-3 exponentes
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Link to="/tipos-trabajo">
              <Button variant="outline">Ver Requisitos Detallados</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para participar?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Registrate ahora y comenzá a enviar tus trabajos. También podés inscribirte en talleres y armar tu agenda personalizada.
          </p>
          <Link to="/registro">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Crear Cuenta
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
