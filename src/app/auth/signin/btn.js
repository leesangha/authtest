"use client";
import { signIn } from "next-auth/react";

export const Button = () => {
  return <button onClick={() => signIn("apple")}>애플 로긍니</button>;
};
