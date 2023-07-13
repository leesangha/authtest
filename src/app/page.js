"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useMemo } from "react";

export default function Home() {
  const { data: session } = useSession();

  const dt = useMemo(() => {
    return session;
  }, [session]);
  console.log(dt);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>infludeo</div>
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
