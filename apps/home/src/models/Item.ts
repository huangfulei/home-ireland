export interface Item {
  name: string;
  price?: string;
  sellPrice?: string;
  quantity?: string;
  description?: string;
  itemImages?: string[];
  condition?: string;
  categories: string[];
}

export interface ItemWithId extends Item {
  id: string;
}
