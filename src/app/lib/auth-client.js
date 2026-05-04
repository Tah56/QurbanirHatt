import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  baseURL: "https://qurbanir-hatt-tcuf-o0x5ci6tw-tah56s-projects.vercel.app/",
});

export const { signIn, signUp, useSession } = createAuthClient();
