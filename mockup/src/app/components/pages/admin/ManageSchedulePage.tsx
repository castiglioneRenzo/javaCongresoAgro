import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import { Badge } from "../../ui/badge";
import { Plus, Edit, Trash2, Clock, MapPin } from "lucide-react";

const scheduleData = {
  dia1: [
    { id: 1, time: "09:00 - 10:00", title: "Acto de Apertura", type: "Ceremonia", location: "Auditorio Principal" },
    { id: 2, time: "10:30 - 12:00", title: "Conferencia Magistral", type: "Conferencia", location: "Auditorio Principal" },
    { id: 3, time: "14:00 - 16:00", title: "Mesa Temática 1", type: "Mesa", location: "Sala 1" },
  ],
  dia2: [
    { id: 4, time: "09:00 - 11:00", title: "Taller: Compostaje", type: "Taller", location: "Campo Experimental" },
    { id: 5, time: "11:30 - 13:00", title: "Mesa Temática 2", type: "Mesa", location: "Sala 2" },
  ],
  dia3: [
    { id: 6, time: "09:00 - 11:00", title: "Taller: Manejo de Plagas", type: "Taller", location: "Sala 4" },
    { id: 7, time: "16:00 - 17:00", title: "Ceremonia de Clausura", type: "Ceremonia", location: "Auditorio Principal" },
  ]
};

export function ManageSchedulePage() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold mb-1">Gestionar Cronograma</h2>
          <p className="text-muted-foreground">Organizar actividades del congreso por día</p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700">
          <Plus className="h-4 w-4 mr-2" />
          Agregar Actividad
        </Button>
      </div>

      <Tabs defaultValue="dia1" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="dia1">Día 1 - 15 Ago</TabsTrigger>
          <TabsTrigger value="dia2">Día 2 - 16 Ago</TabsTrigger>
          <TabsTrigger value="dia3">Día 3 - 17 Ago</TabsTrigger>
        </TabsList>

        {Object.entries(scheduleData).map(([day, activities]) => (
          <TabsContent key={day} value={day} className="space-y-4 mt-6">
            {activities.map((activity) => (
              <Card key={activity.id}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap mb-2">
                        <CardTitle className="text-lg">{activity.title}</CardTitle>
                        <Badge>{activity.type}</Badge>
                      </div>
                      <CardDescription className="flex flex-col gap-1">
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
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="text-red-600 hover:text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </TabsContent>
        ))}
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Agregar Nueva Actividad</CardTitle>
          <CardDescription>Completá los datos de la actividad a programar</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="activityTitle">Título de la Actividad</Label>
              <Input id="activityTitle" placeholder="Ej: Conferencia Magistral" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="activityType">Tipo</Label>
              <Select>
                <SelectTrigger id="activityType">
                  <SelectValue placeholder="Seleccionar tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="conferencia">Conferencia</SelectItem>
                  <SelectItem value="mesa">Mesa Temática</SelectItem>
                  <SelectItem value="taller">Taller</SelectItem>
                  <SelectItem value="poster">Sesión de Posters</SelectItem>
                  <SelectItem value="oral">Presentación Oral</SelectItem>
                  <SelectItem value="ceremonia">Ceremonia</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="day">Día</Label>
              <Select>
                <SelectTrigger id="day">
                  <SelectValue placeholder="Seleccionar día" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Día 1 - 15 de Agosto</SelectItem>
                  <SelectItem value="2">Día 2 - 16 de Agosto</SelectItem>
                  <SelectItem value="3">Día 3 - 17 de Agosto</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Ubicación</Label>
              <Select>
                <SelectTrigger id="location">
                  <SelectValue placeholder="Seleccionar ubicación" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="auditorio">Auditorio Principal</SelectItem>
                  <SelectItem value="sala1">Sala 1</SelectItem>
                  <SelectItem value="sala2">Sala 2</SelectItem>
                  <SelectItem value="sala3">Sala 3</SelectItem>
                  <SelectItem value="sala4">Sala 4</SelectItem>
                  <SelectItem value="campo">Campo Experimental</SelectItem>
                  <SelectItem value="hall">Hall Central</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="startTime">Hora de Inicio</Label>
              <Input id="startTime" type="time" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="endTime">Hora de Fin</Label>
              <Input id="endTime" type="time" />
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <Button variant="outline" className="flex-1">
              Cancelar
            </Button>
            <Button className="flex-1 bg-green-600 hover:bg-green-700">
              Guardar Actividad
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
