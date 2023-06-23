import { type ItemWithId } from "@/models/Item";

/**
 * Interface for the ItemCard component.
 */
export interface IItemCardProps {
  item: ItemWithId;
  onItemClick?: (item: ItemWithId) => void;
}
