import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card";
import { Button } from "../../ui/button";
import { Badge } from "../../ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select";
import { Input } from "../../ui/input";
import { CheckCircle2, Clock, UserCheck, Search, Filter } from "lucide-react";

const works = [
  { id: "W001", title: "Sistemas de producción agroecológica...", type: "Artículo", status: "assigned", evaluator: "Dr. Roberto Silva" },
  { id: "W002", title: "Experiencias de comercialización...", type: "Relato", status: "assigned", evaluator: "Dra. Patricia Vargas" },
  { id: "W003", title: "Manejo integrado de plagas...", type: "Artículo", status: "pending", evaluator: null },
  { id: "W004", title: "Recuperación de semillas criollas...", type: "Relato", status: "pending", evaluator: null },
  { id: "W005", title: "Sistemas silvopastoriles...", type: "Artículo", status: "assigned", evaluator: "Ing. Ana Martínez" },
];

const evaluators = [
  { id: 1, name: "Dr. Roberto Silva", specialty: "Sistemas de Producción", assigned: 3, capacity: 5 },
  { id: 2, name: "Dra. Patricia Vargas", specialty: "Manejo Ecológico", assigned: 4, capacity: 5 },
  { id: 3, name: "Ing. Ana Martínez", specialty: "Agroforestería", assigned: 2, capacity: 5 },
  { id: 4, name: "Lic. Carmen López", specialty: "Agricultura Familiar", assigned: 1, capacity: 5 },
];

export function AssignEvaluatorsPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-1">Asignar Evaluadores</h2>
        <p className="text-muted-foreground">Distribuir trabajos entre evaluadores disponibles</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Total Trabajos</CardDescription>
            <CardTitle className="text-3xl">{works.length}</CardTitle>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Asignados</CardDescription>
            <CardTitle className="text-3xl text-green-600">
              {works.filter(w => w.status === "assigned").length}
            </CardTitle>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Pendientes</CardDescription>
            <CardTitle className="text-3xl text-orange-600">
              {works.filter(w => w.status === "pending").length}
            </CardTitle>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Evaluadores</CardDescription>
            <CardTitle className="text-3xl">{evaluators.length}</CardTitle>
          </CardHeader>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Evaluadores Disponibles</CardTitle>
          <CardDescription>Capacidad actual de cada evaluador</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            {evaluators.map((evaluator) => (
              <div key={evaluator.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium">{evaluator.name}</h4>
                  <p className="text-sm text-muted-foreground">{evaluator.specialty}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-sm">
                    <span className="font-medium">{evaluator.assigned}</span>
                    <span className="text-muted-foreground"> / {evaluator.capacity}</span>
                  </div>
                  <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-600"
                      style={{ width: `${(evaluator.assigned / evaluator.capacity) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle>Trabajos Recibidos</CardTitle>
              <CardDescription>Asignar evaluadores a los trabajos pendientes</CardDescription>
            </div>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar..." className="pl-9 w-full md:w-[200px]" />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {works.map((work) => (
              <Card key={work.id}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <CardTitle className="text-base">{work.title}</CardTitle>
                        <Badge variant="outline">{work.type}</Badge>
                        <Badge variant="outline">Código: {work.id}</Badge>
                        {work.status === "assigned" ? (
                          <Badge className="bg-green-600">
                            <CheckCircle2 className="h-3 w-3 mr-1" />
                            Asignado
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="border-orange-600 text-orange-600">
                            <Clock className="h-3 w-3 mr-1" />
                            Pendiente
                          </Badge>
                        )}
                      </div>
                      {work.evaluator && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <UserCheck className="h-4 w-4" />
                          Evaluador: {work.evaluator}
                        </div>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Select defaultValue={work.evaluator || ""}>
                        <SelectTrigger className="w-[200px]">
                          <SelectValue placeholder="Asignar evaluador" />
                        </SelectTrigger>
                        <SelectContent>
                          {evaluators.map((evaluator) => (
                            <SelectItem key={evaluator.id} value={evaluator.name}>
                              {evaluator.name} ({evaluator.assigned}/{evaluator.capacity})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Button className="bg-green-600 hover:bg-green-700">
                        {work.status === "assigned" ? "Reasignar" : "Asignar"}
                      </Button>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
