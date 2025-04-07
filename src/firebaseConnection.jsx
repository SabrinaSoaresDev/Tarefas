import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyARKHnggTyhCYE0pGVn4FXV-qpaV-9qDqw",
  authDomain: "tarefas-e1a0a.firebaseapp.com",
  projectId: "tarefas-e1a0a",
  storageBucket: "tarefas-e1a0a.firebasestorage.app",
  messagingSenderId: "996793860218",
  appId: "1:996793860218:web:2dc18008647725a7babbc3"
};

const app = initializeApp(firebaseConfig);

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };