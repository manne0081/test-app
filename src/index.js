import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDYe_YcX_KvOuXMw1AkrewZeXEKwm9H3B0",
    authDomain: "test-app-4e2e9.firebaseapp.com",
    databaseURL: "https://test-app-4e2e9-default-rtdb.firebaseio.com",
    projectId: "test-app-4e2e9",
    storageBucket: "test-app-4e2e9.appspot.com",
    messagingSenderId: "261260619443",
    appId: "1:261260619443:web:24e318f861c611fb488ac6"
};

const auth = getAuth(firebaseConfig);
const db = getFirestore(firebaseConfig);
db.collection('todos').getDocs();
const todosCol = collection(db, 'todos');
const snapshot = await getDocs(todosCol);

const app = initializeApp(firebaseConfig);

// Detect auth state
auth.onAuthStateChanged(user => {
    
});

onAuthStateChanged( auth, user => {
    if (user != null) {
        console.log("logged in!");
    } else {
        console.log("no user!");
    }
});