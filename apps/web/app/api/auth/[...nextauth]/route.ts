import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
// import { prisma } from "@/lib/prisma"
import { prisma } from '@workspace/db/client';
export const authOptions = {
    // adapter: PrismaAdapter(prisma),
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    session: {
        strategy: "jwt" as const,
    },
    secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
