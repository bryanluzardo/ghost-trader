import { comments } from "@/lib/comments";

export async function GET() {
    return new Response(JSON.stringify(comments));
}