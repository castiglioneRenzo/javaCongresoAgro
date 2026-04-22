import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Badge } from "../../ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select";
import { Search, Filter, Download, Eye, CheckCircle2, Clock, XCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";

const allWorks = [
  { id: "W001", title: "Sistemas de producción agroecológica en zonas áridas", author: "Juan Pérez", type: "Artículo", format: "Oral", status: "approved", date: "15/05/2026" },
  { id: "W002", title: "Experiencias de comercialización de productos orgánicos", author: "María González", type: "Relato", format: "Poster", status: "pending", date: "18/05/2026" },
  { id: "W003", title: "Manejo integrado de plagas en cultivos hortícolas", author: "Carlos Fernández", type: "Artículo", format: "Oral", status: "approved", date: "12/05/2026" },
  { id: "W004", title: "Recuperación de semillas criollas", author: "Ana Martínez", type: "Relato", format: "Oral", status: "revision", date: "20/05/2026" },
  { id: "W005", title: "Sistemas silvopastoriles en zonas tropicales", author: "Roberto Silva", type: "Artículo", format: "Poster", status: "rejected", date: "10/05/2026" },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "approved":
      return <Badge className="bg-green-600"><CheckCircle2 className="h-3 w-3 mr-1" />Aprobado</Badge>;
    case "pending":
      return <Badge className="bg-yellow-500"><Clock className="h-3 w-3 mr-1" />En Evaluación</Badge>;
    case "revision":
      return <Badge className="bg-orange-500"><Clock className="h-3 w-3 mr-1" />Revisión</Badge>;
    case "rejected":
      return <Badge className="bg-red-600"><XCircle className="h-3 w-3 mr-1" />Rechazado</Badge>;
    default:
      return <Badge variant="outline">Pendiente</Badge>;
  }
};

export function ManageWorksPage() {
  const approved = allWorks.filter(w => w.status === "approved");
  const pending = allWorks.filter(w => w.status === "pending" || w.status === "revision");
  const rejected = allWorks.filter(w => w.status === "rejected");

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-1">Gestionar Trabajos</h2>
        <p className="text-muted-foreground">Revisar y administrar trabajos enviados al congreso</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Total Recibidos</CardDescription>
            <CardTitle className="text-3xl">{allWorks.length}</CardTitle>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Aprobados</CardDescription>
            <CardTitle className="text-3xl text-green-600">{approved.length}</CardTitle>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardDescription>En Evaluación</CardDescription>
            <CardTitle className="text-3xl text-yellow-600">{pending.length}</CardTitle>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Rechazados</CardDescription>
            <CardTitle className="text-3xl text-red-600">{rejected.length}</CardTitle>
          </CardHeader>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle>Trabajos Recibidos</CardTitle>
              <CardDescription>Filtrar y revisar todos los trabajos</CardDescription>
            </div>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar..." className="pl-9 w-full md:w-[200px]" />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Exportar
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">Todos ({allWorks.length})</TabsTrigger>
          <TabsTrigger value="approved">Aprobados ({approved.length})</TabsTrigger>
          <TabsTrigger value="pending">Pendientes ({pending.length})</TabsTrigger>
          <TabsTrigger value="rejected">Rechazados ({rejected.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-3 mt-4">
          {allWorks.map((work) => (
            <Card key={work.id}>
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <CardTitle className="text-base">{work.title}</CardTitle>
                      {getStatusBadge(work.status)}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-1 text-sm text-muted-foreground">
                      <span>Autor: {work.author}</span>
                      <span>Tipo: {work.type}</span>
                      <span>Formato: {work.format}</span>
                      <span>Código: {work.id}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Recibido: {work.date}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      Ver
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Descargar
                    </Button>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="approved" className="space-y-3 mt-4">
          {approved.map((work) => (
            <Card key={work.id}>
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <CardTitle className="text-base">{work.title}</CardTitle>
                      {getStatusBadge(work.status)}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-1 text-sm text-muted-foreground">
                      <span>Autor: {work.author}</span>
                      <span>Tipo: {work.type}</span>
                      <span>Formato: {work.format}</span>
                      <span>Código: {work.id}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      Ver
                    </Button>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="pending" className="space-y-3 mt-4">
          {pending.map((work) => (
            <Card key={work.id}>
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <CardTitle className="text-base">{work.title}</CardTitle>
                      {getStatusBadge(work.status)}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-1 text-sm text-muted-foreground">
                      <span>Autor: {work.author}</span>
                      <span>Tipo: {work.type}</span>
                      <span>Formato: {work.format}</span>
                      <span>Código: {work.id}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      Ver
                    </Button>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="rejected" className="space-y-3 mt-4">
          {rejected.map((work) => (
            <Card key={work.id}>
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <CardTitle className="text-base">{work.title}</CardTitle>
                      {getStatusBadge(work.status)}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-1 text-sm text-muted-foreground">
                      <span>Autor: {work.author}</span>
                      <span>Tipo: {work.type}</span>
                      <span>Formato: {work.format}</span>
                      <span>Código: {work.id}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      Ver
                    </Button>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
