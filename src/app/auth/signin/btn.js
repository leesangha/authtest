"use client";
import { signIn } from "next-auth/react";

export const Button = () => {
  return (
    <>
      <button onClick={() => signIn("apple")}>애플 로그인</button>
      <button onClick={() => signIn("twitter")}>트위터 로그인</button>
    </>
  );
};
