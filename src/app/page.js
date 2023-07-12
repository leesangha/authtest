"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const [session] = useSession();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {!session && (
        <>
          Not signed in <br />
          <button onClick={() => signIn("apple")}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </main>
  );
}
