import { db } from "@/firebase";
import { type CategoryWithId } from "@/models/category";
import { collection, getDocs } from "firebase/firestore";

export const getCategories = async (): Promise<CategoryWithId[]> => {
  const categoriesRef = collection(db, "categories");
  const querySnapshot = await getDocs(categoriesRef);
  return querySnapshot.docs.map(
    (doc) => ({ ...doc.data(), id: doc.id } as CategoryWithId),
  );
};
