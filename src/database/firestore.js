import { db } from './firebase';
import { collection, addDoc, getDocs, updateDoc, query, where, doc } from "firebase/firestore";

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


};

export const firestoreGetOrderKitchenByStatus = async (collectionName, orderStatus) => {
  const q = query(collection(db, collectionName), where("status", "==", orderStatus));

  try {
    const querySnapshot = await getDocs(q);
    const ordersByStatus = []
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      ordersByStatus.push({ id: doc.id, data: doc.data() })
    });
    return ordersByStatus;
  } catch (e) {
    console.error("Error readding documents: ", e);
  }
};

export const firestoreUpdateOrderKitchenByStatus = async (collectionName, orderId, orderStatus) => {
  try {
    await updateDoc(
      doc(db, collectionName, orderId), {
      status: orderStatus
    })
  } catch (e) {
    console.error("Error updating documents: ", e);
  }
}
