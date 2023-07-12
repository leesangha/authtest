import NextAuth from "next-auth";
import AppleProvider from "next-auth/providers/apple";

export const authOptions = {
  providers: [
    AppleProvider({
      clientId: process.env.APPLE_ID,
      clientSecret: process.env.APPLE_SECRET,
    }),
  ],

  cookies: {
    pkceCodeVerifier: {
      name: "next-auth.pkce.code_verifier",
      options: {
        httpOnly: true,
        sameSite: "none",
        path: "/",
        secure: true,
      },
    },
  },
  callbacks: {
    async jwt({ token, account, user }) {
      if (user) token.id = user.id;
      if (account) {
        token.accessToken = account.access_token;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token, user }) {
      return { session, token, user };
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
