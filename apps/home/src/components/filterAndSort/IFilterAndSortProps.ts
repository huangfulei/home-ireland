import { type CategoryWithId } from "@/models/category";

/**
 * Interface for the FilterAndSort component.
 */
export interface IFilterAndSortProps {
  categories: CategoryWithId[];
  selectedCat: string[];
  onCatClick: (category: string) => void;
}
