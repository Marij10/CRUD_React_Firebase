import {
  addDoc,
  doc,
  collection,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "@/firebaseInit";
import { FormValues, FormValuesGet } from "../types/schema";

export async function createToDo(data: FormValues) {
  try {
    const docRef = await addDoc(collection(db, "todos"), data);
    await updateDoc(docRef, { id: docRef.id });
    return docRef;
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error;
  }
}

export async function getToDos() {
  const querySnapshot = await getDocs(collection(db, "todos"));
  return querySnapshot.docs.map((doc) => doc.data());
}

export async function updateToDo(data: FormValuesGet) {
  const docRef = doc(db, "todos", data.id);
  await updateDoc(docRef, {
    title: data.title,
    completed: data.completed,
  });
  return docRef;
}

export async function deleteToDo(id: string) {
  return await deleteDoc(doc(db, "todos", id));
}

export async function getToDo(id: string) {
  const docRef = doc(db, "todos", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
}
