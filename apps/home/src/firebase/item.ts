import { db } from "@/firebase";
import { type Category } from "@/models/category";
import { type ItemWithId } from "@/models/Item";
import {
  collection,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
} from "firebase/firestore";

export const getItems = async (
  orderByValue: string,
  numberPerLoad?: number,
): Promise<ItemWithId[]> => {
  const itemRef = collection(db, "items");
  const q = query(
    itemRef,
    orderBy(orderByValue, "desc"),
    limit(numberPerLoad || 20),
  );
  const querySnapshot = await getDocs(q);
  const requests = querySnapshot.docs.map(async (doc) => {
    // array yof document references
    const categoryRefs = doc.data().categories as [];

    const categories = [];
    if (categoryRefs?.length > 0) {
      for (const c of categoryRefs) {
        const category = await getDoc(c);
        if (category.exists()) {
          categories.push((category.data() as Category).category);
        }
      }
    }
    return { ...doc.data(), id: doc.id, categories } as ItemWithId;
  });

  return Promise.all(requests);
};
