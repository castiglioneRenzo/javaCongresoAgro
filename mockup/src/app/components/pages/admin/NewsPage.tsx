import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Textarea } from "../../ui/textarea";
import { Badge } from "../../ui/badge";
import { Plus, Edit, Trash2, Megaphone, Calendar } from "lucide-react";
import { Switch } from "../../ui/switch";

const news = [
  {
    id: 1,
    title: "Extensión de Plazo para Envío de Trabajos",
    content: "Se extiende la fecha límite para el envío de trabajos hasta el 5 de junio de 2026...",
    date: "20 de Abril, 2026",
    published: true,
    priority: "high"
  },
  {
    id: 2,
    title: "Publicación de Programa Preliminar",
    content: "Ya está disponible el programa preliminar del congreso en la sección correspondiente...",
    date: "15 de Abril, 2026",
    published: true,
    priority: "normal"
  },
  {
    id: 3,
    title: "Nuevos Talleres Confirmados",
    content: "Se agregan dos nuevos talleres al programa: Producción de Bioinsumos y Diseño de Huertas...",
    date: "10 de Abril, 2026",
    published: false,
    priority: "normal"
  }
];

export function NewsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold mb-1">Gestionar Novedades</h2>
          <p className="text-muted-foreground">Publicar comunicados y actualizaciones del congreso</p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700">
          <Plus className="h-4 w-4 mr-2" />
          Nueva Novedad
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Crear Nueva Novedad</CardTitle>
          <CardDescription>Comunicado para todos los participantes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="newsTitle">Título</Label>
            <Input
              id="newsTitle"
              placeholder="Ej: Extensión de plazo para trabajos"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="newsContent">Contenido</Label>
            <Textarea
              id="newsContent"
              placeholder="Escribe el contenido de la novedad..."
              rows={6}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Switch id="publish" />
            <Label htmlFor="publish" className="font-normal">Publicar inmediatamente</Label>
          </div>

          <div className="flex items-center space-x-2">
            <Switch id="sendEmail" />
            <Label htmlFor="sendEmail" className="font-normal">Enviar notificación por email</Label>
          </div>

          <div className="flex gap-4 pt-4">
            <Button variant="outline" className="flex-1">
              Cancelar
            </Button>
            <Button className="flex-1 bg-green-600 hover:bg-green-700">
              <Megaphone className="h-4 w-4 mr-2" />
              Publicar Novedad
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Novedades Publicadas</CardTitle>
          <CardDescription>Historial de comunicados del congreso</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {news.map((item) => (
              <Card key={item.id} className={!item.published ? "bg-muted/30" : ""}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <CardTitle className="text-base">{item.title}</CardTitle>
                        {item.published ? (
                          <Badge className="bg-green-600">Publicado</Badge>
                        ) : (
                          <Badge variant="outline">Borrador</Badge>
                        )}
                        {item.priority === "high" && (
                          <Badge className="bg-red-600">Importante</Badge>
                        )}
                      </div>
                      <CardDescription className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {item.date}
                      </CardDescription>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {item.content}
                      </p>
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
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
