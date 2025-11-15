import { generateText } from "ai";
export async function GET(){
    return Response.json({success:true, data:'THANK YOU!'},{status:200});
}
export async function POST(request: Request) {
    const { type, role, level, techstack, amount, userid } = await request.json();
    try{
        const {text}
    } catch (error) {
        console.error("Error:", error);
        return Response.json({ success: false, error: error }, { status: 500 });

    }
}