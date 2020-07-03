import * as firebase from 'firebase';
import 'firebase/auth'
const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIRE_API_KEY,
	authDomain: process.env.REACT_APP_FIRE_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_FIRE_DATABASE_URL,
	projectId: process.env.REACT_APP_FIRE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIRE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIRE_MESSAGIN_SENDER_ID,
	appId: process.env.REACT_APP_FIRE_APP_ID
};

const app = firebase.initializeApp(firebaseConfig);

export default app