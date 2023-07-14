import { getProviders } from "next-auth/react";
import { Button } from "./btn";

export default async function SignIn() {
  const providers = await getProviders();
  console.log(providers);
  return (
    <div>
      <Button />
    </div>
  );
}
