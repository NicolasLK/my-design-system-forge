import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Configurações do servidor Vite
    watch: {
      // 1. **Use Polling**: Monitora alterações ativamente (mais lento que inotify, mas funciona melhor no Docker)
      usePolling: true,
      // 2. **Intervalo de Polling**: Reduza este valor se as alterações demorarem muito
      interval: 100, // milissegundos
    },
    // 3. **Definir Host**: Necessário para que o navegador local acesse o contêiner
    host: true, // Expõe na rede (0.0.0.0)
    // 4. **Porta**: Garante a porta correta
    port: 3000,
  },
});
