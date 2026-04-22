import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card";
import { Button } from "../../ui/button";
import { Award, Download, Calendar, AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../../ui/alert";

export function CertificatePage() {
  const congressEnded = false;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-1">Certificado de Asistencia</h2>
        <p className="text-muted-foreground">Descargá tu certificado una vez finalizado el congreso</p>
      </div>

      {!congressEnded ? (
        <Alert>
          <Calendar className="h-4 w-4" />
          <AlertTitle>Certificado no disponible</AlertTitle>
          <AlertDescription>
            Los certificados estarán disponibles para descarga una semana después de finalizado el congreso (24 de Agosto, 2026).
          </AlertDescription>
        </Alert>
      ) : (
        <Alert className="bg-green-50 border-green-200">
          <AlertCircle className="h-4 w-4 text-green-600" />
          <AlertTitle className="text-green-600">Certificado disponible</AlertTitle>
          <AlertDescription>
            Tu certificado está listo para descargar. Asegurate de verificar que tus datos sean correctos.
          </AlertDescription>
        </Alert>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-6 w-6 text-green-600" />
            Información del Certificado
          </CardTitle>
          <CardDescription>
            Detalle de tu participación en el congreso
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Nombre completo:</span>
              <p className="font-medium">Juan Pérez</p>
            </div>
            <div>
              <span className="text-muted-foreground">Documento:</span>
              <p className="font-medium">12.345.678</p>
            </div>
            <div>
              <span className="text-muted-foreground">Institución:</span>
              <p className="font-medium">Universidad Nacional</p>
            </div>
            <div>
              <span className="text-muted-foreground">Categoría:</span>
              <p className="font-medium">Profesional</p>
            </div>
          </div>

          <div className="pt-4 border-t">
            <h4 className="font-medium mb-3">Participación registrada:</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span>Asistencia a conferencias y mesas</span>
                <span className="text-green-600 font-medium">✓ Confirmada</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Trabajo presentado</span>
                <span className="text-green-600 font-medium">✓ Artículo Científico (Oral)</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Talleres cursados</span>
                <span className="text-green-600 font-medium">✓ 2 talleres</span>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <Button
              className="w-full bg-green-600 hover:bg-green-700"
              disabled={!congressEnded}
            >
              <Download className="h-4 w-4 mr-2" />
              Descargar Certificado (PDF)
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Validación del Certificado</CardTitle>
          <CardDescription>
            Cada certificado contiene un código QR único para verificación
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm space-y-2">
          <p>
            Tu certificado incluirá un código QR que puede ser escaneado para verificar su autenticidad.
          </p>
          <p className="text-muted-foreground">
            Código de verificación: <span className="font-mono bg-muted px-2 py-1 rounded">AGRO2026-{congressEnded ? "JDP-8752" : "XXXX-XXXX"}</span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
