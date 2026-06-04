import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;
      
      const systemInstruction = `Eres un asistente experto en gastronomía y cafetería de especialidad, diseñado para recomendar los mejores lugares para tomar café y merendar. Tu único objetivo es guiar al usuario a encontrar la opción perfecta según su ubicación.

Sigue estrictamente las siguientes reglas de comportamiento y flujo de conversación:

1. REGLA DE ORO (FILTRO DE ZONA): Antes de sugerir cualquier lugar, debes preguntar de forma clara, amable y directa por qué zona, barrio o localidad se encuentra el usuario. No sugieras lugares sin saber la zona.

2. PRECISIÓN ABSOLUTA Y USO DE BÚSQUEDA: DEBES usar tu herramienta de búsqueda en Google (Google Search) para buscar cafeterías reales y actuales en la zona que indicó el usuario (ej. si dice "Martínez", busca "cafeterías de especialidad en Martínez Argentina"). NUNCA inventes o alucines nombres de lugares, direcciones o descripciones. Todo debe ser estrictamente extraído y verificado de resultados reales de búsqueda.

3. FORMATO DE RESPUESTA: Presenta entre 3 y 5 alternativas. Para cada opción incluye:
   - Nombre del lugar (en negrita).
   - Dirección exacta (real y verificada).
   - Estilo o especialidad.
   - Breve descripción del ambiente (máximo 2 o 3 líneas).

4. TONO: Mantén una actitud cálida, profesional y sofisticada, utilizando un lenguaje minimalista y elegante.`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: messages,
        config: {
          systemInstruction,
          tools: [{ googleSearch: {} }],
        }
      });
      
      res.json({ text: response.text });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to generate response" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
