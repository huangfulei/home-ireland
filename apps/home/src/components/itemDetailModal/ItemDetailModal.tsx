import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Text,
  VStack,
} from "@packages/ui";

import { type IItemDetailModalProps } from ".";
import { ImageSlider } from "../imageSlider";

/**
 * ItemDetailModal component.
 * @param props - ItemDetailModal props.
 * @returns Header with component name.
 */
export const ItemDetailModal: React.FC<IItemDetailModalProps> = (props) => {
  const { item, isOpen, toggle } = props;
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open: boolean) => {
        toggle(open);
      }}
    >
      <DialogContent className="sm:max-w-[425px] md:max-w-[850]">
        <DialogHeader>
          <DialogTitle>详情</DialogTitle>
          {/*<DialogDescription*/}
          {/*  className={"max-h-[50vh] overflow-auto break-all text-sm"}*/}
          {/*>*/}
          {/*  /!*description*!/*/}
          {/*</DialogDescription>*/}
        </DialogHeader>
        {item ? (
          <VStack className={"my-2 space-y-2"}>
            {item.itemImages && <ImageSlider images={item.itemImages} />}
            <Text className={"font-bold"}>{item.name}</Text>
            <Text className={"max-h-[50vh] overflow-auto break-all text-sm"}>
              {item.description}
            </Text>
          </VStack>
        ) : (
          <Text className={"font-bold"}>Something went wrong!</Text>
        )}
      </DialogContent>
    </Dialog>
  );
};
