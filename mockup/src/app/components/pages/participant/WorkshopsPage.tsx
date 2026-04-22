import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card";
import { Button } from "../../ui/button";
import { Badge } from "../../ui/badge";
import { Clock, MapPin, Users, Calendar, CheckCircle2 } from "lucide-react";

const workshops = [
  {
    id: 1,
    title: "Compostaje y Fertilización Orgánica",
    facilitator: "Ing. Jorge Ramírez",
    date: "16 de Agosto, 2026",
    time: "09:00 - 11:00",
    location: "Campo Experimental",
    capacity: 30,
    enrolled: 18,
    description: "Técnicas prácticas de compostaje y elaboración de fertilizantes orgánicos para mejorar la fertilidad del suelo.",
    isEnrolled: false
  },
  {
    id: 2,
    title: "Manejo Integrado de Plagas",
    facilitator: "Dra. Patricia Vargas",
    date: "17 de Agosto, 2026",
    time: "09:00 - 11:00",
    location: "Sala 4",
    capacity: 25,
    enrolled: 22,
    description: "Estrategias agroecológicas para el control de plagas sin uso de agroquímicos sintéticos.",
    isEnrolled: true
  },
  {
    id: 3,
    title: "Producción de Semillas Criollas",
    facilitator: "Sr. Miguel Rodríguez",
    date: "16 de Agosto, 2026",
    time: "14:00 - 16:00",
    location: "Campo Experimental",
    capacity: 20,
    enrolled: 15,
    description: "Rescate, conservación y reproducción de semillas criollas y nativas.",
    isEnrolled: false
  },
  {
    id: 4,
    title: "Sistemas Silvopastoriles",
    facilitator: "Ing. Ana Martínez",
    date: "16 de Agosto, 2026",
    time: "16:30 - 18:00",
    location: "Campo Experimental",
    capacity: 25,
    enrolled: 12,
    description: "Integración de árboles, ganadería y cultivos en sistemas productivos sostenibles.",
    isEnrolled: false
  }
];

export function WorkshopsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-1">Talleres Disponibles</h2>
        <p className="text-muted-foreground">Inscribite en los talleres prácticos del congreso</p>
      </div>

      <div className="grid gap-4">
        {workshops.map((workshop) => (
          <Card key={workshop.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <CardTitle className="flex items-center gap-2 flex-wrap">
                    {workshop.title}
                    {workshop.isEnrolled && (
                      <Badge className="bg-green-600">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        Inscripto
                      </Badge>
                    )}
                  </CardTitle>
                  <CardDescription className="mt-2">
                    Facilitador: {workshop.facilitator}
                  </CardDescription>
                </div>
                <Button
                  className={workshop.isEnrolled ? "bg-gray-500" : "bg-green-600 hover:bg-green-700"}
                  disabled={workshop.isEnrolled || workshop.enrolled >= workshop.capacity}
                >
                  {workshop.isEnrolled ? "Ya Inscripto" : workshop.enrolled >= workshop.capacity ? "Cupo Completo" : "Inscribirse"}
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm">{workshop.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {workshop.date}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {workshop.time}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {workshop.location}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-4 w-4" />
                  {workshop.enrolled} / {workshop.capacity} inscriptos
                </div>
              </div>

              <div className="pt-2">
                <div className="flex justify-between text-xs text-muted-foreground mb-1">
                  <span>Cupos disponibles</span>
                  <span>{workshop.capacity - workshop.enrolled} de {workshop.capacity}</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-600 transition-all"
                    style={{ width: `${(workshop.enrolled / workshop.capacity) * 100}%` }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
