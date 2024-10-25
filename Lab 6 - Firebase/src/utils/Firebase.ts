let db: any;

const getFirestoreInstance = async () => {
	if (!db) {

    // Import the functions you need from the SDKs you need
    const { initializeApp } = await import ('firebase/app');
    const { getFirestore } = await import ('firebase/firestore'); //Importar los modulos
  

    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
	const firebaseConfig = {
		apiKey: "AIzaSyA4mY_FjHEq9i3sARHFeO3d1wDNCtB4Cqs",
		authDomain: "labfirebase-c9f86.firebaseapp.com",
		projectId: "labfirebase-c9f86",
		storageBucket: "labfirebase-c9f86.appspot.com",
		messagingSenderId: "625741869688",
		appId: "1:625741869688:web:a02522787beccf57f9f38d",
		measurementId: "G-PZ6PYWYBNL"
	  };
    // Initialize Firebase

      const app = initializeApp(firebaseConfig);
      db = getFirestore(app);
  }

	return db;

};

export const addSongs = async (product: any) => {
	try {
		const db = await getFirestoreInstance();
		const { collection, addDoc } = await import('firebase/firestore');

		const where = collection(db, 'songs');
		await addDoc(where, product);
		console.log('Se añadió con exito');
	} catch (error) {
		console.error('Error adding document', error);
	}
};

export const getSongs = async () => {
	try {
		const db = await getFirestoreInstance();
		const { collection, getDocs } = await import('firebase/firestore');

		const where = collection(db, 'songs');
		const querySnapshot = await getDocs(where);
		const data: any[] = [];

		querySnapshot.forEach((doc) => {
			data.push(doc.data());
		});

		return data;
	} catch (error) {
		console.error('Error getting documents', error);
	}
};