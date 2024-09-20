import { connect } from "@/dbConfig/dbConfig";
import { User } from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function POST(req: NextRequest) {
  try {
    const reqBody = req.json();
    const { username, email, password }: any = reqBody;
    console.log("reqBody", reqBody);
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json({ message: "User already exists" });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
