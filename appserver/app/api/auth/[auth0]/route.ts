// import { UserService } from "@/services/UserService";

import {
  handleAuth,
  handleCallback,
  handleLogin,
  Session,
  updateSession,
} from "@auth0/nextjs-auth0";
import { NextRequest } from "next/server";

// const afterCallback = async (
//   req: NextRequest,
//   session: Session
// ): Promise<Session> => {
//   if (!session) {
//     throw new Error("Unable to authenticate user");
//   }

//   const { user } = session;
//   const { sub, email_verified, email } = user;
//   const storedUser = await UserService.getByAccountProviderId(sub);

//   if (storedUser) {
//     const newSession = {
//       ...session,
//       user: { ...user, id: storedUser.id, username: storedUser.username },
//     };

//     await updateSession(newSession);
//     return newSession;
//     //create user record
//   }

//   const providerData = {
//     id_token: session.idToken,
//     refresh_token: session.refreshToken,
//     access_token: session.accessToken,
//     access_token_expires: session.accessTokenExpiresAt,
//     provider: "auth0",
//     provider_account_id: user.sub,
//   };

//   const newUser = await UserService.create(
//     {
//       email_verified,
//       email,
//     },
//     providerData
//   );

//   if (newUser) {
//     const newSession = {
//       ...session,
//       user: { ...user, id: newUser.id, username: newUser.username },
//     };
//     await updateSession(newSession);
//     return newSession;
//   }
//   throw new Error("Unable to authenticate user");
// };

export const GET = handleAuth({
  login: handleLogin((req) => {
    return {
      returnTo: "/",
    };
  }),
  signup: handleLogin({
    authorizationParams: {
      screen_hint: "signup",
    },
    returnTo: "/profile",
  }),
  signIn: handleLogin({
    authorizationParams: {
      screen_hint: "signin",
    },
    returnTo: "/profile",
  }),
  callback: handleCallback((req) => {
    return { redirectUri: "http://localhost:3000" };
  }),
});
