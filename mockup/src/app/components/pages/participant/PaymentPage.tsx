import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
import { Badge } from "../../ui/badge";
import { Upload, CreditCard, Building2, CheckCircle2, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "../../ui/alert";
import { Separator } from "../../ui/separator";

export function PaymentPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-1">Pago de Inscripción</h2>
        <p className="text-muted-foreground">Completá tu inscripción realizando el pago</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Arancel General</CardTitle>
            <CardDescription>Incluye acceso a todas las actividades</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-muted-foreground">Profesionales</span>
                <span className="text-2xl font-bold">$8,000</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-muted-foreground">Estudiantes</span>
                <span className="text-2xl font-bold">$4,000</span>
              </div>
              <Separator />
              <Badge className="bg-green-600">20% descuento hasta el 30 de Junio</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Incluye</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                Acceso a todas las conferencias
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                Acceso a mesas temáticas
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                Material del congreso
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                Coffee breaks
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                Certificado de asistencia
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Método de Pago</CardTitle>
          <CardDescription>Seleccioná cómo deseas realizar el pago</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <RadioGroup defaultValue="transfer">
            <div className="flex items-center space-x-2 border p-4 rounded-lg">
              <RadioGroupItem value="transfer" id="transfer" />
              <Label htmlFor="transfer" className="flex items-center gap-2 font-normal flex-1 cursor-pointer">
                <Building2 className="h-5 w-5 text-green-600" />
                <div>
                  <div className="font-medium">Transferencia Bancaria</div>
                  <div className="text-xs text-muted-foreground">Subir comprobante de pago</div>
                </div>
              </Label>
            </div>

            <div className="flex items-center space-x-2 border p-4 rounded-lg">
              <RadioGroupItem value="online" id="online" />
              <Label htmlFor="online" className="flex items-center gap-2 font-normal flex-1 cursor-pointer">
                <CreditCard className="h-5 w-5 text-green-600" />
                <div>
                  <div className="font-medium">Pago Online</div>
                  <div className="text-xs text-muted-foreground">Tarjeta de crédito/débito</div>
                </div>
              </Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Datos de Transferencia</CardTitle>
          <CardDescription>Información para realizar la transferencia bancaria</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-2 gap-2 text-sm">
            <span className="text-muted-foreground">Banco:</span>
            <span className="font-medium">Banco Nacional</span>
            <span className="text-muted-foreground">Cuenta:</span>
            <span className="font-medium">1234567890</span>
            <span className="text-muted-foreground">CBU:</span>
            <span className="font-medium">0123456789012345678901</span>
            <span className="text-muted-foreground">Titular:</span>
            <span className="font-medium">Congreso Agroecología 2026</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Subir Comprobante</CardTitle>
          <CardDescription>Adjuntá el comprobante de pago realizado</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="category">Categoría</Label>
            <RadioGroup defaultValue="professional">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="professional" id="professional" />
                <Label htmlFor="professional" className="font-normal">Profesional ($8,000)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="student" id="student" />
                <Label htmlFor="student" className="font-normal">Estudiante ($4,000)</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="amount">Monto Pagado</Label>
            <Input
              id="amount"
              type="number"
              placeholder="8000"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="reference">Número de Comprobante / Referencia</Label>
            <Input
              id="reference"
              placeholder="Ej: 123456789"
            />
          </div>

          <div className="border-2 border-dashed rounded-lg p-8 text-center hover:border-green-600 transition-colors cursor-pointer">
            <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-sm font-medium mb-1">Subir comprobante de pago</p>
            <p className="text-xs text-muted-foreground">Formatos aceptados: PDF, JPG, PNG (máx. 5 MB)</p>
            <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" />
          </div>

          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="text-sm">
              Tu inscripción será confirmada una vez que validemos el comprobante de pago (hasta 48 horas).
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Button variant="outline" className="flex-1">
          Cancelar
        </Button>
        <Button className="flex-1 bg-green-600 hover:bg-green-700">
          Enviar Comprobante
        </Button>
      </div>
    </div>
  );
}
