import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import User from "@/lib/models/User";
import connectToDatabase from "@/lib/mongodb";

export async function GET(req: Request) {
  await connectToDatabase();

  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return new Response("Unauthorized", { status: 401 });
  }

  const user = await User.findOne({ email: session.user.email });
  return new Response(JSON.stringify(user), { status: 200 });
}


