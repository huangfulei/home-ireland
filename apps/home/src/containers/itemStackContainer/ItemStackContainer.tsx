"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@packages/tailwind-config";
import { Container, Grid, VStack } from "@packages/ui";

import "./slider.css";

import { useEffect, useState } from "react";
import { EmptyPage } from "@/components/emptyPage";
import { FilterAndSort } from "@/components/filterAndSort";
import { ItemCard } from "@/components/itemCard";
import { BodyHeight, BodyHeightMobile } from "@/constants";
import { useSearchStore } from "@/context/useSearchStore";
import { type ItemWithId } from "@/models/Item";

import { type IItemStackContainerProps } from ".";

/**
 * ItemStack container.
 * @param props - ItemStack props.
 * @returns Header with component name.
 */
export const ItemStackContainer: React.FC<IItemStackContainerProps> = (
  props,
) => {
  const { items, categories } = props;
  const { setSearchTerm } = useSearchStore();
  const [selectedCat, setSelectedCat] = useState<string[]>([]);
  const [filteredItems, setFilteredItems] = useState<ItemWithId[]>([]);
  const handleReturn = () => {
    setSearchTerm("");
  };

  const onCatClick = (cat: string) => {
    // add to selected cat if not existing
    if (!selectedCat.includes(cat)) {
      setSelectedCat([...selectedCat, cat]);
    } else {
      setSelectedCat([...selectedCat.filter((category) => category !== cat)]);
    }
  };

  useEffect(() => {
    if (selectedCat.length > 0) {
      const filteredItems = items.filter((item) => {
        return item.categories.some((category) =>
          selectedCat.includes(category),
        );
      });
      setFilteredItems(filteredItems);
    } else {
      setFilteredItems(items);
    }
  }, [selectedCat]);

  useEffect(() => {
    setFilteredItems(items);
  }, [items]);

  return items?.length === 0 ? (
    <EmptyPage
      className={`${BodyHeightMobile} md:${BodyHeight}`}
      onReturnClick={handleReturn}
    />
  ) : (
    <>
      <FilterAndSort
        categories={categories}
        onCatClick={onCatClick}
        selectedCat={selectedCat}
      />

      <Container
        className={cn(
          `${BodyHeightMobile} md:${BodyHeight}`,
          "overflow-y-auto py-1",
        )}
      >
        <VStack className={"h-full justify-between space-y-2"}>
          <Grid className="grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredItems?.map((item) => (
              <VStack key={item.id}>
                <Link href={{ pathname: `/itemDetail/${item.id}` }}>
                  <ItemCard item={item} />
                </Link>
              </VStack>
            ))}
          </Grid>
        </VStack>
      </Container>
    </>
  );
};
