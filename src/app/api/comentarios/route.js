import { comments } from "@/lib/comments";

export async function GET() {
    return Response.json(comments);
}