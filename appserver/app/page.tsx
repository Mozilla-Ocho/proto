import { getSession } from "@auth0/nextjs-auth0";

export default async function Page() {
  const session = await getSession();
  const user = session?.user;
  console.log("user", user);
  return (
    <section>
      <a href="/api/auth/login">Login</a>
    </section>
  );
}
