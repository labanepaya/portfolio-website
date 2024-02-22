import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  try {
    const { email, subject, message } = await req.json();
    console.log(email, subject, message);
    
    if (!email || !subject || !message) {
      throw new Error("Missing required fields: email, subject, or message");
    }

    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error processing request:", error);

    // Return a 400 Bad Request response if the request is invalid
    return NextResponse.error({ status: 400, message: "Invalid request data" });
  }
}
