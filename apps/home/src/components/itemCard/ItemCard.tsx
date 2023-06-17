import * as React from "react";
import { HStack, Text, VStack } from "@packages/ui";

import { type IItemCardProps } from ".";
import { ImageSlider } from "../imageSlider";

/**
 * ItemCard component.
 * @param props - ItemCard props.
 * @returns Header with component name.
 */
export const ItemCard: React.FC<IItemCardProps> = (props) => {
  const { item } = props;
  return (
    <VStack
      key={item.id}
      className="relative h-full w-full rounded-xl shadow-md"
    >
      {item.itemImages && <ImageSlider images={item.itemImages} />}
      <VStack className="h-full justify-between space-y-2 p-4">
        <Text className="max-h-16 overflow-hidden text-ellipsis break-all font-semibold">
          {item.name}
        </Text>
        <HStack className={"items-center space-x-2 self-end"}>
          {item.price && (
            <Text className="text-red-500 line-through">{item.price}€</Text>
          )}
          {item.sellPrice && <Text>{item.sellPrice}€</Text>}
        </HStack>
        <Text className="h-auto max-h-16 overflow-hidden text-ellipsis break-all text-sm">
          {item.description}
        </Text>
      </VStack>
    </VStack>
  );
};
