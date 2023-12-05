import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: import.meta.env_FIREBASE_API_KEY,
  authDomain: import.meta.env_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env_ID,
  measurementId: import.meta.env_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
