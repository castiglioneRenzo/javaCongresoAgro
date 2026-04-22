import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Textarea } from "../../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select";
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
import { Upload, FileText, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "../../ui/alert";

export function SubmitWorkPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-1">Subir Trabajo</h2>
        <p className="text-muted-foreground">Completá el formulario para enviar tu trabajo al congreso</p>
      </div>

      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          Fecha límite de envío: <strong>30 de Mayo, 2026</strong>. Asegurate de revisar los requisitos antes de enviar.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>Información del Trabajo</CardTitle>
          <CardDescription>Datos principales de tu trabajo</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="workType">Tipo de Trabajo</Label>
            <Select>
              <SelectTrigger id="workType">
                <SelectValue placeholder="Seleccionar tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="articulo">Artículo Científico</SelectItem>
                <SelectItem value="relato">Relato de Experiencia</SelectItem>
                <SelectItem value="taller">Propuesta de Taller</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">Título del Trabajo</Label>
            <Input
              id="title"
              placeholder="Ingrese el título completo"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="abstract">Resumen</Label>
            <Textarea
              id="abstract"
              placeholder="Resumen del trabajo (máximo 300 palabras)"
              rows={6}
            />
            <p className="text-xs text-muted-foreground">0 / 300 palabras</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="keywords">Palabras Clave</Label>
            <Input
              id="keywords"
              placeholder="Separadas por comas (mínimo 3, máximo 5)"
            />
          </div>

          <div className="space-y-2">
            <Label>Formato de Presentación</Label>
            <RadioGroup defaultValue="oral">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="oral" id="oral" />
                <Label htmlFor="oral" className="font-normal">Presentación Oral</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="poster" id="poster" />
                <Label htmlFor="poster" className="font-normal">Poster</Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Autores</CardTitle>
          <CardDescription>Información de los autores del trabajo</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="author1">Autor Principal</Label>
              <Input id="author1" placeholder="Nombre completo" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email1">Email</Label>
              <Input id="email1" type="email" placeholder="email@ejemplo.com" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="institution1">Institución</Label>
            <Input id="institution1" placeholder="Universidad / Organización" />
          </div>

          <Button variant="outline" size="sm">
            + Agregar Co-autor
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Archivo del Trabajo</CardTitle>
          <CardDescription>Subir el documento en formato PDF</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border-2 border-dashed rounded-lg p-8 text-center hover:border-green-600 transition-colors cursor-pointer">
            <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-sm font-medium mb-1">Arrastrá tu archivo aquí o hacé click para seleccionar</p>
            <p className="text-xs text-muted-foreground">Formato PDF, máximo 10 MB</p>
            <input type="file" className="hidden" accept=".pdf" />
          </div>

          <Alert>
            <FileText className="h-4 w-4" />
            <AlertDescription className="text-sm">
              Asegurate de que tu documento cumpla con el formato especificado en las circulares del congreso.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Button variant="outline" className="flex-1">
          Guardar Borrador
        </Button>
        <Button className="flex-1 bg-green-600 hover:bg-green-700">
          Enviar Trabajo
        </Button>
      </div>
    </div>
  );
}
