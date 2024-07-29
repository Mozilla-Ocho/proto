import { getSession } from '@auth0/nextjs-auth0'
// import { useUser } from "@auth0/nextjs-auth0/client";
import { redirect } from 'next/navigation'

export default async function Page() {
  const session = await getSession()
  const user = session?.user

  if (!user) {
    redirect('/')
  }
  console.log('user', user.sub)

  return user ? (
    <div>
      <h1>Hi {user.name}</h1>
      <a href="/api/auth/logout">Logout</a>
    </div>
  ) : (
    <div>No user found</div>
  )
}
