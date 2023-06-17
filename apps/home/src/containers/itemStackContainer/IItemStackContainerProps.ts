import { type CategoryWithId } from "@/models/category";
import { type ItemWithId } from "@/models/Item";

/**
 * Interface for the ItemStack component.
 */
export interface IItemStackContainerProps {
  items: ItemWithId[];
  categories: CategoryWithId[];
}
