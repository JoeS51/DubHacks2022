import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js'
import { getDatabase, ref, onValue } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js'
    const firebaseConfig = {
        apiKey: "AIzaSyBP1SHQvDswK4r90_Q2k3pfRJjgj6SVMvI",
        authDomain: "dubhacks2022-91ed5.firebaseapp.com",
        databaseURL: "https://dubhacks2022-91ed5-default-rtdb.firebaseio.com",
        projectId: "dubhacks2022-91ed5",
        storageBucket: "dubhacks2022-91ed5.appspot.com",
        messagingSenderId: "676659808821",
        appId: "1:676659808821:web:a72d025e8cb75be3eabf7c",
        measurementId: "G-SPEJ00K88K" 
    };
    export const app = initializeApp(firebaseConfig);
    export const db = getDatabase(app);
    export const refe = ref
    export const onVal = onValue

    
        