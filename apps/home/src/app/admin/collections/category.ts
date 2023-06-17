import { type Category } from "@/models/category";
import { buildCollection } from "firecms";

export const categoryCollection = buildCollection<Category>({
  name: "类别",
  path: "categories",
  properties: {
    category: {
      name: "Category",
      dataType: "string",
    },
  },
});
