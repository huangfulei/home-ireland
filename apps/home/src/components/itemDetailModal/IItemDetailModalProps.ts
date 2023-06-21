import { type ItemWithId } from "@/models/Item";

/**
 * Interface for the ItemDetailModal component.
 */
export interface IItemDetailModalProps {
  item?: ItemWithId;
  isOpen: boolean;
  toggle: (isOpen: boolean) => void;
}
