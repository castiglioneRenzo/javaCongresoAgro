import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Badge } from "../ui/badge";
import { Clock, MapPin, User } from "lucide-react";

const programData = {
  dia1: [
    {
      time: "09:00 - 10:00",
      title: "Acto de Apertura",
      type: "Ceremonia",
      location: "Auditorio Principal",
      speakers: ["Dr. María González", "Ing. Carlos Fernández"]
    },
    {
      time: "10:30 - 12:00",
      title: "Conferencia Magistral: Agroecología y Cambio Climático",
      type: "Conferencia",
      location: "Auditorio Principal",
      speakers: ["Dr. Roberto Silva"]
    },
    {
      time: "14:00 - 16:00",
      title: "Mesa Temática: Sistemas de Producción Sostenibles",
      type: "Mesa Temática",
      location: "Sala 1",
      speakers: ["Ing. Ana Martínez", "Lic. Pedro Gómez", "Dra. Laura Torres"]
    },
    {
      time: "16:30 - 18:00",
      title: "Presentación de Posters - Sesión 1",
      type: "Poster",
      location: "Hall Central",
      speakers: []
    }
  ],
  dia2: [
    {
      time: "09:00 - 11:00",
      title: "Taller: Compostaje y Fertilización Orgánica",
      type: "Taller",
      location: "Campo Experimental",
      speakers: ["Ing. Jorge Ramírez"]
    },
    {
      time: "11:30 - 13:00",
      title: "Mesa Temática: Agricultura Familiar y Agroecología",
      type: "Mesa Temática",
      location: "Sala 2",
      speakers: ["Lic. Carmen López", "Sr. Miguel Rodríguez"]
    },
    {
      time: "14:00 - 16:00",
      title: "Presentaciones Orales - Artículos Científicos",
      type: "Oral",
      location: "Sala 1",
      speakers: []
    },
    {
      time: "16:30 - 18:00",
      title: "Relatos de Experiencia: Productores Locales",
      type: "Relato",
      location: "Sala 3",
      speakers: []
    }
  ],
  dia3: [
    {
      time: "09:00 - 11:00",
      title: "Taller: Manejo Integrado de Plagas",
      type: "Taller",
      location: "Sala 4",
      speakers: ["Dra. Patricia Vargas"]
    },
    {
      time: "11:30 - 13:00",
      title: "Mesa Temática: Comercialización de Productos Agroecológicos",
      type: "Mesa Temática",
      location: "Auditorio Principal",
      speakers: ["Lic. Daniela Castro", "Ing. Fernando Ruiz"]
    },
    {
      time: "14:00 - 15:30",
      title: "Panel de Cierre: Desafíos y Perspectivas",
      type: "Panel",
      location: "Auditorio Principal",
      speakers: ["Dr. Roberto Silva", "Dra. María González", "Ing. Ana Martínez"]
    },
    {
      time: "16:00 - 17:00",
      title: "Ceremonia de Clausura y Entrega de Certificados",
      type: "Ceremonia",
      location: "Auditorio Principal",
      speakers: []
    }
  ]
};

const getTypeBadgeColor = (type: string) => {
  const colors: Record<string, string> = {
    "Conferencia": "bg-blue-500",
    "Mesa Temática": "bg-purple-500",
    "Taller": "bg-green-500",
    "Poster": "bg-orange-500",
    "Oral": "bg-red-500",
    "Relato": "bg-yellow-500",
    "Panel": "bg-indigo-500",
    "Ceremonia": "bg-pink-500"
  };
  return colors[type] || "bg-gray-500";
};

export function ProgramPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Programa del Congreso</h1>
          <p className="text-muted-foreground">
            Cronograma completo de actividades del 15 al 17 de Agosto, 2026
          </p>
        </div>

        <Tabs defaultValue="dia1" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="dia1">Día 1 - 15 Ago</TabsTrigger>
            <TabsTrigger value="dia2">Día 2 - 16 Ago</TabsTrigger>
            <TabsTrigger value="dia3">Día 3 - 17 Ago</TabsTrigger>
          </TabsList>

          <TabsContent value="dia1" className="space-y-4 mt-6">
            {programData.dia1.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <Badge className={getTypeBadgeColor(item.type)}>{item.type}</Badge>
                  </div>
                  <CardDescription className="flex flex-col gap-1 mt-2">
                    <span className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {item.time}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {item.location}
                    </span>
                  </CardDescription>
                </CardHeader>
                {item.speakers.length > 0 && (
                  <CardContent>
                    <div className="flex items-start gap-2">
                      <User className="h-4 w-4 mt-0.5 text-muted-foreground" />
                      <div className="text-sm">
                        {item.speakers.join(", ")}
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="dia2" className="space-y-4 mt-6">
            {programData.dia2.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <Badge className={getTypeBadgeColor(item.type)}>{item.type}</Badge>
                  </div>
                  <CardDescription className="flex flex-col gap-1 mt-2">
                    <span className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {item.time}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {item.location}
                    </span>
                  </CardDescription>
                </CardHeader>
                {item.speakers.length > 0 && (
                  <CardContent>
                    <div className="flex items-start gap-2">
                      <User className="h-4 w-4 mt-0.5 text-muted-foreground" />
                      <div className="text-sm">
                        {item.speakers.join(", ")}
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="dia3" className="space-y-4 mt-6">
            {programData.dia3.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <Badge className={getTypeBadgeColor(item.type)}>{item.type}</Badge>
                  </div>
                  <CardDescription className="flex flex-col gap-1 mt-2">
                    <span className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {item.time}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {item.location}
                    </span>
                  </CardDescription>
                </CardHeader>
                {item.speakers.length > 0 && (
                  <CardContent>
                    <div className="flex items-start gap-2">
                      <User className="h-4 w-4 mt-0.5 text-muted-foreground" />
                      <div className="text-sm">
                        {item.speakers.join(", ")}
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
