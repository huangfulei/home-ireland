import * as React from "react";
import { cn } from "@packages/tailwind-config";
import { Button, Text, VStack } from "@packages/ui";

import { type IEmptyPageProps } from ".";

/**
 * EmptyPage component.
 * @param props - EmptyPage props.
 * @returns Header with component name.
 */
export const EmptyPage: React.FC<IEmptyPageProps> = (props) => {
  const { className, onReturnClick } = props;
  return (
    <VStack
      className={cn(
        "h-screen items-center justify-center space-y-2",
        className,
      )}
    >
      <Text
        className={"font-mono text-4xl font-semibold md:text-6xl lg:text-8xl"}
      >
        没找到！
      </Text>
      <Text className={"text-center font-sans text-lg md:text-2xl lg:text-3xl"}>
        有可能过两天就有了，或者你可以试试其他关键词。
      </Text>
      <Button className={"btn-primary"} onClick={onReturnClick}>
        返回
      </Button>
    </VStack>
  );
};
