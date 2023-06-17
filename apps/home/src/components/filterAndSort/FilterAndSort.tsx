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
    <VStack>
      <HStack
        className={"flex-wrap items-center justify-center space-x-2 space-y-1"}
      >
        {categories.map((category) => (
          <Button
            key={category.id}
            onClick={() => onCatClick(category.category)}
            className={cn(
              selectedCat.includes(category.category) ? "" : "btn-ghost",
            )}
          >
            {category.category}
          </Button>
        ))}
      </HStack>
    </VStack>
  );
};
