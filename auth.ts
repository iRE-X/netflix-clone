import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import prisma from "@/prisma/db";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const {
    handlers: { GET, POST },
    signIn,
    signOut,
    auth,
} = NextAuth({
    pages: {
        signIn: "/auth",
    },
    adapter: PrismaAdapter(prisma),
    ...authConfig,
});
