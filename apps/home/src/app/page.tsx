import { ItemStackContainer } from "@/containers/itemStackContainer";
import { getCategories } from "@/firebase/category";
import { getItems } from "@/firebase/item";

export default async function Home() {
  const items = await getItems("name");
  const categories = await getCategories();
  return (
    <main>
      <ItemStackContainer items={items} categories={categories} />
    </main>
  );
}
