import NextAuth from "next-auth";
import AppleProvider from "next-auth/providers/apple";

export const authOptions = {
  providers: [
    AppleProvider({
      clientId: process.env.APPLE_ID,
      clientSecret: process.env.APPLE_SECRET,
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
