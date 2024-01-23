import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/prisma/client";


const handler = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: "...",
            clientSecret: "...",
        }),
    ],
    session: {
        strategy: 'jwt',
    },
});

export { handler as GET, handler as POST}