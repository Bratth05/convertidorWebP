import "server-only";

import { getServerEnv } from "@/shared/config/env/server-env";

export function getFirebaseAdminConfig() {
  const env = getServerEnv();

  return {
    projectId: env.firebaseAdminProjectId,
    clientEmail: env.firebaseAdminClientEmail,
    privateKey: env.firebaseAdminPrivateKey,
  };
}
