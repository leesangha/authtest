"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useMemo } from "react";

export default function Home() {
  const { data: session } = useSession();

  const onClick = () => {
    try {
      if (session.token.provider === "apple")
        fetch("https://3.35.97.160:5000/accounts/v1/rest-auth/apple", {
          method: "post",
          data: {
            access_token: session.token.accessToken,
            id_token: session.token.id_token,
          },
        }).then((res) => console.log(res));
    } catch {
      console.log("error");
    }
  };

  console.log(asdf);
  console.log(session);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div onClick={onClick}>Login</div>
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
