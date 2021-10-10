import { db } from './firebase';
import { collection, addDoc, getDocs } from "firebase/firestore";

// Guardar los pedidos
export const firestoreSaveOrder = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const firestoreGetTotalOrders = async (collectionName) => {
  try {
    const totalOrders = await getDocs(collection(db, collectionName));
    return totalOrders.size;
  } catch (e) {
    console.error("Error readding documents: ", e);

  }


}