import dbConnect from "@/lib/services/db";
import { NextResponse } from "next/server";
import history from "@/lib/models/history";
export async function GET(req: Request){
    try{
        const url =new URL(req.url);
        const userId = url.searchParams.get("userId");
        if(!userId){
            return NextResponse.json({
                message: "plaese login first"
            },
            {
                status:401
            }
                
            );
        }
        await dbConnect();
        const userHistory = await history.findOne({user_id:userId});
        if(!userHistory){
            return NextResponse.json(

                {message:"No history found", messages : []},
                {status:200}

            );
        }
        const recentHistory = userHistory.messages.slice(-10);
        return NextResponse.json({
            userId,
            messages: recentHistory,
            limit: userHistory.limit,
            status:200,

        })


    }catch(error){
        console.error("recentHistory errror:", error);
        return  NextResponse.json({
            error:"server error"

        },
        {
            status:500

        })
    }
}