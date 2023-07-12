"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const {
    data: { session, token, user },
  } = useSession();
  console.log({ session, token, user });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {!session && (
        <>
          <button
            onClick={() => {
              signIn();
            }}
          >
            Sign in
          </button>
        </>
      )}

      {session && (
        <>
          Signed in as {session?.user?.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </main>
  );
}
