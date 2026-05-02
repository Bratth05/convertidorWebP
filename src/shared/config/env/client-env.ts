type ClientEnv = {
  firebaseApiKey: string;
  firebaseAuthDomain: string;
  firebaseProjectId: string;
  firebaseStorageBucket: string;
  firebaseMessagingSenderId: string;
  firebaseAppId: string;
};

function readRequiredClientEnv(key: string) {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Missing required client environment variable: ${key}`);
  }

  return value;
}

export function getClientEnv(): ClientEnv {
  return {
    firebaseApiKey: readRequiredClientEnv("NEXT_PUBLIC_FIREBASE_API_KEY"),
    firebaseAuthDomain: readRequiredClientEnv("NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN"),
    firebaseProjectId: readRequiredClientEnv("NEXT_PUBLIC_FIREBASE_PROJECT_ID"),
    firebaseStorageBucket: readRequiredClientEnv("NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET"),
    firebaseMessagingSenderId: readRequiredClientEnv("NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID"),
    firebaseAppId: readRequiredClientEnv("NEXT_PUBLIC_FIREBASE_APP_ID"),
  };
}
