
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCNiWUZFe62qOJBkGbNe2oB2_ikocfkfpI",
  authDomain: "diplom-work-606fe.firebaseapp.com",
  projectId: "diplom-work-606fe",
  storageBucket: "diplom-work-606fe.appspot.com",
  messagingSenderId: "974472064251",
  appId: "1:974472064251:web:55aab20ca6b6a53956545e",
  measurementId: "G-982LLGRV3R"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);