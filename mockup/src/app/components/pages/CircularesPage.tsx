import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Download, Calendar, FileText } from "lucide-react";

const circulares = [
  {
    number: 1,
    title: "Primera Circular - Convocatoria",
    date: "15 de Enero, 2026",
    description: "Convocatoria oficial al congreso, fechas importantes y lineamientos generales.",
    size: "245 KB"
  },
  {
    number: 2,
    title: "Segunda Circular - Tipos de Trabajo",
    date: "1 de Marzo, 2026",
    description: "Detalle de los tipos de trabajos aceptados, requisitos y formatos de presentación.",
    size: "318 KB"
  },
  {
    number: 3,
    title: "Tercera Circular - Programa Preliminar",
    date: "15 de Abril, 2026",
    description: "Programa preliminar del congreso con horarios tentativos de las actividades.",
    size: "421 KB"
  },
  {
    number: 4,
    title: "Cuarta Circular - Inscripciones y Aranceles",
    date: "1 de Mayo, 2026",
    description: "Información sobre aranceles, formas de pago y beneficios por inscripción anticipada.",
    size: "189 KB"
  }
];

export function CircularesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Circulares del Congreso</h1>
          <p className="text-muted-foreground">
            Descargá todas las circulares con información oficial del evento
          </p>
        </div>

        <div className="grid gap-4">
          {circulares.map((circular) => (
            <Card key={circular.number} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-green-600" />
                      {circular.title}
                    </CardTitle>
                    <CardDescription className="mt-2">
                      {circular.description}
                    </CardDescription>
                  </div>
                  <Button className="bg-green-600 hover:bg-green-700 shrink-0">
                    <Download className="h-4 w-4 mr-2" />
                    Descargar
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {circular.date}
                  </span>
                  <span>
                    Tamaño: {circular.size}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8 bg-muted/30">
          <CardHeader>
            <CardTitle>Próximas Circulares</CardTitle>
            <CardDescription>
              Estaremos publicando nuevas circulares con información actualizada del congreso
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>Quinta Circular - Programa Definitivo (15 de Junio)</li>
              <li>Sexta Circular - Información Logística (1 de Agosto)</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
