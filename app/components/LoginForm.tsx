import AuthButtonServer from "./AuthButton-server";

export async function LoginForm() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full mb-6 mx-auto">
            <svg
              className="w-6 h-6 text-black"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L289.4 191.6 419.1 48h70.2zM357.8 144.1L224.2 412h-45L501.5 144.1h-143.7z" />
            </svg>
          </div>
          <h1 className="text-5xl font-bold text-white tracking-tight">
            Bienvenido
          </h1>
          <p className="text-white/50 text-sm mt-3">
            Inicia sesión con tu cuenta de GitHub
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
          <div className="flex justify-center">
            <AuthButtonServer />
          </div>
        </div>

        <div className="text-center mt-8 text-white/30 text-xs">
          <p>© 2026 X Clone</p>
        </div>
      </div>
    </div>
  );
}
