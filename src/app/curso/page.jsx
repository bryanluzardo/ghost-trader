import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { CursoButton } from "../components/CursoButton";

// ⚠️ Este componente es Server Component por defecto en App Router
export default function CursoPage() {
  // Ruta absoluta a la carpeta con los .md
  const contentDir = path.join(process.cwd(), "content/trading");

  // Leer todos los archivos .md en la carpeta
  const files = fs.readdirSync(contentDir);

  

  // Procesar cada archivo y extraer frontmatter + contenido
  const modulos = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const fileContent = fs.readFileSync(
      path.join(contentDir, filename),
      "utf-8"
    );

    const { data: frontmatter, content } = matter(fileContent);

    return {
      slug,
      frontmatter,
      content: marked(content), // Convierte Markdown a HTML
    };
  });

  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Curso de Trading
      </h1>

      {modulos.map((modulo) => (
        <article
          key={modulo.slug}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "1rem",
            marginBottom: "2rem",
          }}
        >
          <CursoButton modulo={modulo}/>
        </article>
      ))}
    </main>
  );
}

{ /* <div
  dangerouslySetInnerHTML={{ __html: curso.content }}
  style={{ marginTop: "1rem" }}
/> */ }

