import NextAuth from "next-auth";
import AppleProvider from "next-auth/providers/apple";

export const authOptions = {
  providers: [
    AppleProvider({
      clientId: process.env.APPLE_ID,
      clientSecret: process.env.APPLE_SECRET,
    }),
  ],
  debug: true,
  logger: {
    error(code, metadata) {
      log.error(code, metadata);
    },
    warn(code) {
      log.warn(code);
    },
    debug(code, metadata) {
      log.debug(code, metadata);
    },
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("signIn", user, account, profile);

      if (!user.email) return false;

      // Check if the user is allowed to sign in
      const invite = await getInvite(user.email);
      // Check if invite exists
      if (!invite) return false;

      // Check if invite is allowed to sign in
      const isAllowedToSignIn = invite.invited;
      if (isAllowedToSignIn) {
        return true;
      } else {
        // Return false to display a default error message
        return false;
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
