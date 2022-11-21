// import { collection, getDocs, addDoc } from 'firebase/firestore'; 
// import { db } from './firebase'; 
// import { doc, getDoc, deleteDoc } from 'firebase/firestore';

// export default  FirebaseMethods= async() => { 
//      getDocuments = async(collectionId) => { 
//       const querySnapshot = await getDocs(collection(db, collectionId)); 
//       querySnapshot.forEach(doc => {
//         console.log(doc.data());
//       })
//       return querySnapshot; 
//     } 
   
//      getDocumentById = (collectionId, documentId)=> { 
//       const docRef = doc(db, collectionId, documentId); 
//       const docSnap =  getDoc(docRef); 
//       if (docSnap.exists()) { 
//         return {
//           id: docSnap.id,
//           ...docSnap.data()
//         }
//       } else { 
//         return null
//       } 
//     } 
   
//     // await create(collectionId, data) { 
//     //   const docRef = await addDoc(collection(db, 'freelancers'), data); 
//     //   console.log('Document written with ID: ', docRef.id); 
//     // } 
   
//     // await removeDocument(collectionId, documentId) { 
//     //   await deleteDoc(doc(db, collectionId, documentId)); 
//     // } 
//   }