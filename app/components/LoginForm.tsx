import AuthButtonServer from "./AuthButton-server";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export async function LoginForm() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 mb-4 mx-auto">
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L289.4 191.6 419.1 48h70.2zM357.8 144.1L224.2 412h-45L501.5 144.1h-143.7z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white">Bienvenido</h1>
          <p className="text-slate-400 mt-2">Inicia sesión en tu cuenta</p>
        </div>

        {/* Login Card */}
        <Card className="border-slate-700 bg-slate-800 shadow-2xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-white">Iniciar sesión</CardTitle>
            <CardDescription className="text-slate-400">
              Accede a tu cuenta con un clic
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <AuthButtonServer />
          </CardContent>
        </Card>

        <div className="text-center mt-6 text-slate-500 text-xs">
          <p>© 2026 X Clone. Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  );
}
