import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";


export async function getModulos() {
    const contentDir = path.join(process.cwd(), "content/trading");
    const files = fs.readdirSync(contentDir);
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
            content, 
        };
    });
    return modulos;
}