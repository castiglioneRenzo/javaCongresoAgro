import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { FileText, Users, Award, CheckCircle2 } from "lucide-react";

export function TiposTrabajoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Tipos de Trabajo</h1>
          <p className="text-muted-foreground">
            Conocé los diferentes formatos de presentación y sus requisitos
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-6 w-6 text-green-600" />
                Artículo Científico
              </CardTitle>
              <CardDescription>
                Investigaciones originales con metodología científica
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="requisitos">
                  <AccordionTrigger>Requisitos Generales</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                        Extensión: 8-12 páginas
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                        Formato: A4, Arial 12, interlineado 1.5
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                        Estructura: Resumen, Introducción, Metodología, Resultados, Discusión, Conclusiones
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                        Referencias bibliográficas en formato APA
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="formatos">
                  <AccordionTrigger>Formatos de Presentación</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-medium">Oral (15 minutos + 5 de preguntas)</p>
                        <p className="text-muted-foreground">Presentación con apoyo de diapositivas</p>
                      </div>
                      <div>
                        <p className="font-medium">Poster (90 x 120 cm)</p>
                        <p className="text-muted-foreground">Exhibición en sesiones específicas</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6 text-green-600" />
                Relato de Experiencia
              </CardTitle>
              <CardDescription>
                Experiencias prácticas en producción agroecológica
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="requisitos">
                  <AccordionTrigger>Requisitos Generales</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                        Extensión: 4-8 páginas
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                        Formato: A4, Arial 12, interlineado 1.5
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                        Estructura: Contexto, Descripción de la experiencia, Resultados alcanzados, Aprendizajes
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                        Incluir fotografías o material visual
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="formatos">
                  <AccordionTrigger>Formatos de Presentación</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-medium">Oral (10 minutos + 5 de preguntas)</p>
                        <p className="text-muted-foreground">Presentación informal, se valoriza el testimonio directo</p>
                      </div>
                      <div>
                        <p className="font-medium">Poster (90 x 120 cm)</p>
                        <p className="text-muted-foreground">Con énfasis en imágenes y gráficos</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-6 w-6 text-green-600" />
                Taller
              </CardTitle>
              <CardDescription>
                Actividades prácticas e interactivas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="requisitos">
                  <AccordionTrigger>Requisitos para Proponer un Taller</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                        Propuesta: 2-4 páginas
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                        Describir objetivos, metodología y recursos necesarios
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                        Duración: 90-120 minutos
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                        Capacidad máxima de participantes
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                        CV resumido del/los facilitadores
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="tematicas">
                  <AccordionTrigger>Temáticas Sugeridas</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>Compostaje y fertilización orgánica</li>
                      <li>Manejo integrado de plagas</li>
                      <li>Producción de semillas criollas</li>
                      <li>Sistemas silvopastoriles</li>
                      <li>Comercialización de productos agroecológicos</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle>Fechas Límite de Envío</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p><span className="font-medium">Artículos Científicos:</span> 30 de Mayo, 2026</p>
              <p><span className="font-medium">Relatos de Experiencia:</span> 30 de Mayo, 2026</p>
              <p><span className="font-medium">Propuestas de Talleres:</span> 15 de Mayo, 2026</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
