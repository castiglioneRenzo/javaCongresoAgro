import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card";
import { Button } from "../../ui/button";
import { Badge } from "../../ui/badge";
import { Link } from "react-router";
import { FileText, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import { Progress } from "../../ui/progress";

const assignedWorks = [
  {
    id: "W001",
    title: "Sistemas de producción agroecológica en zonas áridas",
    type: "Artículo Científico",
    format: "Oral",
    submittedDate: "15 de Mayo, 2026",
    deadline: "15 de Junio, 2026",
    status: "pending",
    anonymous: true
  },
  {
    id: "W002",
    title: "Experiencias de comercialización de productos orgánicos en mercados locales",
    type: "Relato de Experiencia",
    format: "Poster",
    submittedDate: "18 de Mayo, 2026",
    deadline: "15 de Junio, 2026",
    status: "inProgress",
    anonymous: true
  },
  {
    id: "W003",
    title: "Manejo integrado de plagas en cultivos hortícolas",
    type: "Artículo Científico",
    format: "Oral",
    submittedDate: "12 de Mayo, 2026",
    deadline: "15 de Junio, 2026",
    status: "completed",
    anonymous: true
  },
  {
    id: "W004",
    title: "Recuperación de semillas criollas en comunidades campesinas",
    type: "Relato de Experiencia",
    format: "Oral",
    submittedDate: "20 de Mayo, 2026",
    deadline: "15 de Junio, 2026",
    status: "pending",
    anonymous: true
  }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "completed":
      return <Badge className="bg-green-600"><CheckCircle2 className="h-3 w-3 mr-1" />Evaluado</Badge>;
    case "inProgress":
      return <Badge className="bg-yellow-500"><Clock className="h-3 w-3 mr-1" />En Progreso</Badge>;
    default:
      return <Badge variant="outline"><AlertCircle className="h-3 w-3 mr-1" />Pendiente</Badge>;
  }
};

export function EvaluatorDashboard() {
  const totalWorks = assignedWorks.length;
  const completedWorks = assignedWorks.filter(w => w.status === "completed").length;
  const progressPercentage = (completedWorks / totalWorks) * 100;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-1">Panel de Evaluador</h2>
        <p className="text-muted-foreground">Trabajos asignados para evaluación</p>
      </div>

      <Card className="border-purple-200 bg-purple-50">
        <CardHeader>
          <CardTitle>Progreso de Evaluaciones</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <div className="text-2xl font-bold text-purple-600">{totalWorks}</div>
              <div className="text-muted-foreground">Total Asignados</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">{completedWorks}</div>
              <div className="text-muted-foreground">Evaluados</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-600">
                {assignedWorks.filter(w => w.status === "inProgress").length}
              </div>
              <div className="text-muted-foreground">En Progreso</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">
                {assignedWorks.filter(w => w.status === "pending").length}
              </div>
              <div className="text-muted-foreground">Pendientes</div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progreso general</span>
              <span className="font-medium">{progressPercentage.toFixed(0)}%</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Trabajos Asignados</CardTitle>
              <CardDescription>Evaluación anónima por pares</CardDescription>
            </div>
            <Badge variant="outline" className="text-xs">
              Fecha límite: 15 de Junio
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {assignedWorks.map((work) => (
            <Card key={work.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start gap-2 flex-wrap">
                      <CardTitle className="text-base">{work.title}</CardTitle>
                      {getStatusBadge(work.status)}
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <FileText className="h-4 w-4" />
                        {work.type}
                      </span>
                      <span>Formato: {work.format}</span>
                      <span>Código: {work.id}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Recibido: {work.submittedDate}
                    </div>
                  </div>
                  <Link to={`/evaluador/evaluar/${work.id}`}>
                    <Button
                      className={work.status === "completed" ? "bg-gray-500" : "bg-purple-600 hover:bg-purple-700"}
                    >
                      {work.status === "completed" ? "Ver Evaluación" : "Evaluar"}
                    </Button>
                  </Link>
                </div>
              </CardHeader>
            </Card>
          ))}
        </CardContent>
      </Card>

      <Card className="bg-muted/30">
        <CardHeader>
          <CardTitle>Criterios de Evaluación</CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-2">
          <p className="font-medium">Para Artículos Científicos:</p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
            <li>Originalidad y relevancia del tema</li>
            <li>Calidad metodológica</li>
            <li>Claridad en la presentación de resultados</li>
            <li>Discusión y conclusiones fundamentadas</li>
          </ul>
          <p className="font-medium pt-2">Para Relatos de Experiencia:</p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
            <li>Relevancia de la experiencia compartida</li>
            <li>Claridad en la descripción del contexto</li>
            <li>Aprendizajes y replicabilidad</li>
            <li>Contribución al conocimiento agroecológico</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
