import { useParams } from "react-router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card";
import { Button } from "../../ui/button";
import { Label } from "../../ui/label";
import { Textarea } from "../../ui/textarea";
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
import { Slider } from "../../ui/slider";
import { Badge } from "../../ui/badge";
import { FileText, Download, Shield, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "../../ui/alert";
import { Separator } from "../../ui/separator";

export function EvaluateWorkPage() {
  const { workId } = useParams();

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-1">Evaluar Trabajo</h2>
        <p className="text-muted-foreground">Código: {workId}</p>
      </div>

      <Alert className="bg-purple-50 border-purple-200">
        <Shield className="h-4 w-4 text-purple-600" />
        <AlertDescription>
          <strong>Evaluación anónima:</strong> Los datos de los autores han sido ocultados para garantizar objetividad en el proceso de evaluación.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle>Sistemas de producción agroecológica en zonas áridas</CardTitle>
              <CardDescription className="mt-2 space-y-1">
                <div className="flex gap-4 flex-wrap">
                  <Badge>Artículo Científico</Badge>
                  <Badge variant="outline">Formato: Oral</Badge>
                  <Badge variant="outline">Recibido: 15 de Mayo, 2026</Badge>
                </div>
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Button className="w-full md:w-auto" variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Descargar Trabajo (PDF)
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Resumen del Trabajo</CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
          <p className="text-muted-foreground">
            Este trabajo investiga la implementación de sistemas de producción agroecológica en regiones áridas y semiáridas,
            analizando estrategias de manejo del agua, selección de cultivos resilientes y técnicas de conservación del suelo.
            Se presentan resultados de un estudio de caso de 3 años en una zona árida, demostrando la viabilidad y beneficios
            de estos sistemas en condiciones de escasez hídrica.
          </p>
          <div className="mt-3">
            <span className="font-medium">Palabras clave:</span>
            <span className="text-muted-foreground"> agroecología, zonas áridas, manejo del agua, resiliencia, sustentabilidad</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Formulario de Evaluación</CardTitle>
          <CardDescription>Calificá cada aspecto del trabajo según los criterios establecidos</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-3">
              <Label className="text-base">1. Originalidad y Relevancia del Tema</Label>
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Puntuación: 8/10</span>
                </div>
                <Slider defaultValue={[8]} max={10} step={1} className="w-full" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Bajo</span>
                  <span>Alto</span>
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-3">
              <Label className="text-base">2. Calidad Metodológica</Label>
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Puntuación: 7/10</span>
                </div>
                <Slider defaultValue={[7]} max={10} step={1} className="w-full" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Bajo</span>
                  <span>Alto</span>
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-3">
              <Label className="text-base">3. Claridad en la Presentación de Resultados</Label>
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Puntuación: 9/10</span>
                </div>
                <Slider defaultValue={[9]} max={10} step={1} className="w-full" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Bajo</span>
                  <span>Alto</span>
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-3">
              <Label className="text-base">4. Discusión y Conclusiones Fundamentadas</Label>
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Puntuación: 8/10</span>
                </div>
                <Slider defaultValue={[8]} max={10} step={1} className="w-full" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Bajo</span>
                  <span>Alto</span>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-6" />

          <div className="space-y-3">
            <Label className="text-base">Recomendación General</Label>
            <RadioGroup defaultValue="accept-minor">
              <div className="flex items-center space-x-2 border p-3 rounded-lg">
                <RadioGroupItem value="accept" id="accept" />
                <Label htmlFor="accept" className="font-normal flex-1 cursor-pointer">
                  Aceptar sin modificaciones
                </Label>
              </div>
              <div className="flex items-center space-x-2 border p-3 rounded-lg">
                <RadioGroupItem value="accept-minor" id="accept-minor" />
                <Label htmlFor="accept-minor" className="font-normal flex-1 cursor-pointer">
                  Aceptar con modificaciones menores
                </Label>
              </div>
              <div className="flex items-center space-x-2 border p-3 rounded-lg">
                <RadioGroupItem value="major-revision" id="major-revision" />
                <Label htmlFor="major-revision" className="font-normal flex-1 cursor-pointer">
                  Requiere modificaciones mayores
                </Label>
              </div>
              <div className="flex items-center space-x-2 border p-3 rounded-lg">
                <RadioGroupItem value="reject" id="reject" />
                <Label htmlFor="reject" className="font-normal flex-1 cursor-pointer">
                  Rechazar
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <Label htmlFor="strengths" className="text-base">Fortalezas del Trabajo</Label>
            <Textarea
              id="strengths"
              placeholder="Describí los aspectos positivos y fortalezas del trabajo..."
              rows={4}
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="weaknesses" className="text-base">Aspectos a Mejorar</Label>
            <Textarea
              id="weaknesses"
              placeholder="Indicá los aspectos que necesitan mejora o corrección..."
              rows={4}
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="comments" className="text-base">Comentarios Adicionales</Label>
            <Textarea
              id="comments"
              placeholder="Comentarios adicionales para los autores (opcional)..."
              rows={4}
            />
          </div>
        </CardContent>
      </Card>

      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertDescription className="text-sm">
          Una vez enviada la evaluación, no podrás modificarla. Asegurate de revisar todos los campos antes de enviar.
        </AlertDescription>
      </Alert>

      <div className="flex gap-4">
        <Button variant="outline" className="flex-1">
          Guardar Borrador
        </Button>
        <Button className="flex-1 bg-purple-600 hover:bg-purple-700">
          Enviar Evaluación
        </Button>
      </div>
    </div>
  );
}
