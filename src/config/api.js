import { auth, db } from "./firebase";
import { addDoc, collection } from "firebase/firestore";

export const ADD_RECORD = async (table, payload) => {
  console.log(`adding record`, table, payload);
  try {
    const colRef = collection(db, table);
    const querySnapshot = await addDoc(colRef, payload);
    return querySnapshot;
  } catch (err) {
    throw err;
  }
};

export { auth };

// Other code such as selectors can use the imported `RootState` type
