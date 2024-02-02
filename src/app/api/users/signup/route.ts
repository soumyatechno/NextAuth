import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect()

export async function POST(request: NextRequest){
  try{
    const requestBody = await request.json();

    const { username,password,email}  = requestBody;
    console.log(requestBody,'requestBody');
    // check if the user is already exist

    const user =  await User.findOne({email});
    if(user){
      return NextResponse.json({error: "User already exists"},{status:400})
    }

    // hash password

    const salt = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(password,salt)

    const newUser = new User ({
      username,
      email,
      password: hashPassword
    });


    // save user to the db
    const saveUser = await newUser.save();

    return NextResponse.json({message:"User is created successfully",saveUser, success:true})


  } catch(error: any){
    return NextResponse.json({error: error.message},{status:500})
  }
}