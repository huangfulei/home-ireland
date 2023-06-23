import * as React from "react";
import { ItemDetailModal } from "@/components/itemDetailModal";
import { getItem } from "@/firebase/item";

interface ItemDetailModalPageProps {
  params: {
    id: string;
  };
}
const ItemModal = async ({ params }: ItemDetailModalPageProps) => {
  const item = await getItem(params.id);

  return <ItemDetailModal item={item} />;
};

export default ItemModal;
