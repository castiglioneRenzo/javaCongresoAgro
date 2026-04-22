import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import { Clock, MapPin, Bell, BellOff, Calendar as CalendarIcon, Download } from "lucide-react";
import { Checkbox } from "../../ui/checkbox";

const agendaData = {
  dia1: [
    {
      id: "1-1",
      time: "10:30 - 12:00",
      title: "Conferencia Magistral: Agroecología y Cambio Climático",
      type: "Conferencia",
      location: "Auditorio Principal",
      speaker: "Dr. Roberto Silva",
      isSelected: true,
      hasNotification: true
    },
    {
      id: "1-2",
      time: "14:00 - 16:00",
      title: "Mesa Temática: Sistemas de Producción Sostenibles",
      type: "Mesa Temática",
      location: "Sala 1",
      speaker: "Ing. Ana Martínez, Lic. Pedro Gómez",
      isSelected: true,
      hasNotification: true
    }
  ],
  dia2: [
    {
      id: "2-1",
      time: "09:00 - 11:00",
      title: "Taller: Compostaje y Fertilización Orgánica",
      type: "Taller Inscripto",
      location: "Campo Experimental",
      speaker: "Ing. Jorge Ramírez",
      isSelected: true,
      hasNotification: true
    },
    {
      id: "2-2",
      time: "11:30 - 13:00",
      title: "Mesa Temática: Agricultura Familiar y Agroecología",
      type: "Mesa Temática",
      location: "Sala 2",
      speaker: "Lic. Carmen López, Sr. Miguel Rodríguez",
      isSelected: false,
      hasNotification: false
    },
    {
      id: "2-3",
      time: "16:30 - 18:00",
      title: "Relatos de Experiencia: Productores Locales",
      type: "Relato",
      location: "Sala 3",
      speaker: "Varios",
      isSelected: true,
      hasNotification: false
    }
  ],
  dia3: [
    {
      id: "3-1",
      time: "09:00 - 11:00",
      title: "Taller: Manejo Integrado de Plagas",
      type: "Taller Inscripto",
      location: "Sala 4",
      speaker: "Dra. Patricia Vargas",
      isSelected: true,
      hasNotification: true
    },
    {
      id: "3-2",
      time: "14:00 - 15:30",
      title: "Panel de Cierre: Desafíos y Perspectivas",
      type: "Panel",
      location: "Auditorio Principal",
      speaker: "Varios",
      isSelected: true,
      hasNotification: true
    }
  ]
};

const getTypeBadgeColor = (type: string) => {
  if (type.includes("Taller")) return "bg-green-600";
  const colors: Record<string, string> = {
    "Conferencia": "bg-blue-500",
    "Mesa Temática": "bg-purple-500",
    "Relato": "bg-yellow-500",
    "Panel": "bg-indigo-500"
  };
  return colors[type] || "bg-gray-500";
};

export function MyAgendaPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold mb-1">Mi Agenda Personalizada</h2>
          <p className="text-muted-foreground">Actividades seleccionadas y talleres inscriptos</p>
        </div>
        <Button variant="outline" className="sm:w-auto">
          <Download className="h-4 w-4 mr-2" />
          Descargar Agenda (PDF)
        </Button>
      </div>

      <Card className="bg-green-50 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CalendarIcon className="h-5 w-5" />
            Resumen
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <div className="text-2xl font-bold text-green-600">7</div>
              <div className="text-muted-foreground">Actividades</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">2</div>
              <div className="text-muted-foreground">Talleres</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">5</div>
              <div className="text-muted-foreground">Con Notificaciones</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">12.5h</div>
              <div className="text-muted-foreground">Total</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="dia1" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="dia1">Día 1 - 15 Ago</TabsTrigger>
          <TabsTrigger value="dia2">Día 2 - 16 Ago</TabsTrigger>
          <TabsTrigger value="dia3">Día 3 - 17 Ago</TabsTrigger>
        </TabsList>

        {Object.entries(agendaData).map(([day, activities]) => (
          <TabsContent key={day} value={day} className="space-y-3 mt-6">
            {activities.map((activity) => (
              <Card
                key={activity.id}
                className={activity.isSelected ? "border-green-200 bg-green-50/50" : ""}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3 flex-1">
                      <Checkbox
                        checked={activity.isSelected}
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <CardTitle className="text-base flex items-center gap-2 flex-wrap">
                          {activity.title}
                          <Badge className={getTypeBadgeColor(activity.type)}>
                            {activity.type}
                          </Badge>
                        </CardTitle>
                        <CardDescription className="flex flex-col gap-1 mt-2">
                          <span className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            {activity.time}
                          </span>
                          <span className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            {activity.location}
                          </span>
                        </CardDescription>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className={activity.hasNotification ? "text-green-600" : ""}
                    >
                      {activity.hasNotification ? (
                        <Bell className="h-4 w-4 fill-current" />
                      ) : (
                        <BellOff className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
            {activities.filter(a => a.isSelected).length === 0 && (
              <Card>
                <CardContent className="text-center py-8 text-muted-foreground">
                  No tenés actividades seleccionadas para este día
                </CardContent>
              </Card>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
