import { type Item } from "@/models/Item";
import { buildCollection, buildProperty } from "firecms";

export const itemCollection = buildCollection<Item>({
  name: "商品",
  path: "items",
  permissions: ({ authController }) => ({
    edit: true,
    create: true,
    delete: true,
  }),
  properties: {
    name: {
      name: "名字",
      dataType: "string",
    },
    price: {
      name: "价格",
      dataType: "string",
    },
    sellPrice: {
      name: "促销价格",
      dataType: "string",
    },
    quantity: {
      name: "数量",
      dataType: "string",
    },
    description: {
      name: "描述",
      dataType: "string",
    },
    categories: {
      name: "类别",
      dataType: "array",
      of: {
        dataType: "reference",
        path: "categories",
      },
    },
    itemImages: buildProperty({
      dataType: "array",
      name: "Images",
      of: {
        dataType: "string",
        storage: {
          storagePath: "images",
          acceptedFiles: ["image/*"],
          maxSize: 1024 * 1024,
          storeUrl: true,
        },
      },
    }),
  },
});
