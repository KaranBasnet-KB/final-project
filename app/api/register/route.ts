import dbConnect from "@/lib/services/db";
import { NextResponse } from "next/server";
import user from "@/lib/models/users";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
    const data = await req.json();
    await dbConnect();
    console.log("request", data);

    const {email, password} = data
    if(!email || !password ) {
        return NextResponse.json({
            message:"Missing required fields",
            status:400
        })
    }
    
    const existinuser = await user.findOne({email})
    
    if(existinuser){
        return NextResponse.json({
            
            message: "user already exist",
            status:400
            
            
        })
    }
    const hashPassword = await bcrypt.hash(password, 10)
    try{
        const registeredUser = await user.create({
            email,
            password:hashPassword

        })
        return NextResponse.json({
            message: registeredUser?._id,
            status: 201
        })
    }catch(error){
        return NextResponse.json({
            error: error,
            status: 500
        })


    }
}