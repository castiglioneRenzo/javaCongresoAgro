import { Link } from "react-router";
import { Button } from "../ui/button";
import { Home, ArrowLeft } from "lucide-react";

export function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white p-4">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-bold text-green-600">404</h1>
        <h2 className="text-2xl font-semibold mt-4 mb-2">Página no encontrada</h2>
        <p className="text-muted-foreground mb-8">
          La página que buscás no existe o ha sido movida.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="bg-green-600 hover:bg-green-700 w-full sm:w-auto">
              <Home className="h-4 w-4 mr-2" />
              Ir al Inicio
            </Button>
          </Link>
          <Button variant="outline" onClick={() => window.history.back()} className="w-full sm:w-auto">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver Atrás
          </Button>
        </div>
      </div>
    </div>
  );
}
