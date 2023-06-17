import * as React from "react";
import { cn } from "@packages/tailwind-config";
import { Button, HStack, VStack } from "@packages/ui";

import { type IFilterAndSortProps } from ".";

/**
 * FilterAndSort component.
 * @param props - FilterAndSort props.
 * @returns Header with component name.
 */
export const FilterAndSort: React.FC<IFilterAndSortProps> = (props) => {
  const { categories, selectedCat, onCatClick } = props;
  return (
    <VStack className={"sticky top-0 z-30 bg-base-100 bg-opacity-90"}>
      <HStack className={"flex-wrap items-center justify-center"}>
        {categories.map((category) => (
          <Button
            key={category.id}
            onClick={() => onCatClick(category.category)}
            className={cn(
              selectedCat.includes(category.category) ? "" : "btn-ghost",
              "mx-2 my-1",
            )}
          >
            {category.category}
          </Button>
        ))}
      </HStack>
    </VStack>
  );
};
