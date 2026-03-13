import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Info } from "lucide-react"

export function InfoSection() {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Columna Izquierda: Definición y Comparativa */}
          <div className="space-y-10">
            <div className="space-y-4">
              <Badge variant="outline" className="text-emerald-600 border-emerald-200 bg-emerald-50">
                Centro de Conocimiento
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Todo lo que necesitas saber sobre la <span className="text-emerald-600">Silica Gel</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                La Silica Gel es un desecante sintético de alta pureza fabricado a partir de silicato de sodio. 
                Su estructura porosa le permite absorber hasta un 40% de su propio peso en humedad, 
                protegiendo productos sensibles de la corrosión, hongos y deterioro.
              </p>
            </div>

            <div className="grid gap-6">
              <Card className="border-l-4 border-l-amber-500 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-amber-700">Silica Gel Naranja</CardTitle>
                    <CheckCircle2 className="h-5 w-5 text-amber-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-3">
                    La evolución segura. Libre de metales pesados (cobalto) y Eco-Friendly. 
                    Ideal para exportaciones a Europa, electrónica y farmacéutica.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-semibold bg-amber-50 text-amber-800 w-fit px-2 py-1 rounded">
                    Cambio de color: Naranja → Verde
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-slate-500 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-slate-700">Alúmina Activada</CardTitle>
                    <Info className="h-5 w-5 text-slate-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-3">
                    Desecante industrial de alta resistencia mecánica. 
                    Perfecto para secadores de aire comprimido y gases a presión.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-semibold bg-slate-100 text-slate-800 w-fit px-2 py-1 rounded">
                    No se ablanda con agua líquida
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Columna Derecha: Preguntas Frecuentes (SEO Rich Snippets) */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">Preguntas Frecuentes</h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-lg font-medium text-slate-800">
                  ¿Es tóxica la Silica Gel?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed">
                  La Silica Gel blanca y naranja son consideradas no tóxicas y químicamente inertes. 
                  Sin embargo, la Silica Gel Azul contiene cloruro de cobalto, que puede ser tóxico si se ingiere en grandes cantidades, 
                  por lo que se recomienda para uso exclusivamente industrial (transformadores, maquinaria).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-lg font-medium text-slate-800">
                  ¿Cuándo debo reemplazar el desecante?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed">
                  Debe reemplazarse o regenerarse cuando cambia de color (saturación). 
                  La Silica Azul pasará a rosado y la Naranja a verde oscuro/negro. 
                  Esto indica que ha alcanzado su capacidad máxima de absorción de humedad.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-lg font-medium text-slate-800">
                  ¿Se puede regenerar (secar) la Silica Gel?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed">
                  Sí, la Silica Gel es regenerable. Puede calentarse en un horno industrial a temperatura controlada (120°C aprox) 
                  hasta que recupere su color original, liberando la humedad atrapada para ser reutilizada.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-lg font-medium text-slate-800">
                  ¿Qué aplicaciones principales tiene?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed">
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Electrónica:</strong> Protege circuitos de la oxidación.</li>
                    <li><strong>Farmacéutica:</strong> Mantiene medicamentos secos y estables.</li>
                    <li><strong>Logística:</strong> Evita el &quot;sudor de carga&quot; en contenedores (Container Rain).</li>
                    <li><strong>Transformadores:</strong> Filtra la humedad del aceite dieléctrico.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

        </div>
      </div>
    </section>
  )
}
