import "server-only";

type ServerEnv = {
  firebaseAdminProjectId: string;
  firebaseAdminClientEmail: string;
  firebaseAdminPrivateKey: string;
};

function readRequiredServerEnv(key: string) {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Missing required server environment variable: ${key}`);
  }

  return value;
}

export function getServerEnv(): ServerEnv {
  return {
    firebaseAdminProjectId: readRequiredServerEnv("FIREBASE_ADMIN_PROJECT_ID"),
    firebaseAdminClientEmail: readRequiredServerEnv("FIREBASE_ADMIN_CLIENT_EMAIL"),
    firebaseAdminPrivateKey: readRequiredServerEnv("FIREBASE_ADMIN_PRIVATE_KEY").replace(
      /\\n/g,
      "\n",
    ),
  };
}
