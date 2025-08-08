import { modulos } from "@/lib/modulos";

export async function GET() {
    return new Response(JSON.stringify(modulos))
}