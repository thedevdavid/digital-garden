import { NextResponse } from "next/server";

const API_URL = `${process.env.EMAIL_API_BASE}api/subscribers`;

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.EMAIL_API_KEY || "You didn't set the API key"}`,
      },
      body: JSON.stringify({ email, groups: [process.env.EMAIL_GROUP_ID || ""] }),
    });

    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return NextResponse.json({ ok: "ok" }, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message || error.toString() }, { status: 500 });
  }
}
