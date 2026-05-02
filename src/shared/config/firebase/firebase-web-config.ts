import { getClientEnv } from "@/shared/config/env/client-env";

export function getFirebaseWebConfig() {
  const env = getClientEnv();

  return {
    apiKey: env.firebaseApiKey,
    authDomain: env.firebaseAuthDomain,
    projectId: env.firebaseProjectId,
    storageBucket: env.firebaseStorageBucket,
    messagingSenderId: env.firebaseMessagingSenderId,
    appId: env.firebaseAppId,
  };
}
