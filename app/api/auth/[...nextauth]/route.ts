import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import connectToDatabase from "@/lib/mongodb";
import { User } from "@/lib/models/User";
import { compare } from "bcryptjs";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        username: { label: "Username", type: "text" },
        fullname: { label: "Full Name", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          try {
            await connectToDatabase();
          } catch (error) {
            console.error("Database connection error:", error);
            return null;
          }

          const { email, password } = credentials ?? {};
          if (!email || !password) return null;

          const user = await User.findOne({ email });
          if (!user) {
            console.log(`No user found for email: ${email}`);
            return null;
          }

          const isValidPassword = await compare(password, user.password);
          console.log(`Password valid: ${isValidPassword}`);
          if (!isValidPassword) return null;

          return {
            id: user._id.toString(),
            name: user.fullname,
            username: user.username,
            email: user.email,
            image: user.image,
          };
        } catch (error) {
          console.error("Error in authorize function:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      try {
        if (user) {
          token.id = user.id;
          token.username = user.username;
          token.fullname = user.name;
          token.email = user.email;
          token.image = user.image;
        }
        return token;
      } catch (error) {
        console.error("Error in JWT callback:", error);
        return token;
      }
    },
    async session({ session, token }) {
      try {
        if (token) {
          session.user.id = token.id;
          session.user.username = token.username;
          session.user.fullname = token.fullname;
          session.user.email = token.email;
          session.user.image = token.image;
        }
        return session;
      } catch (error) {
        console.error("Error in session callback:", error);
        return session;
      }
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
