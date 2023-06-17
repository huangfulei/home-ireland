import * as React from "react";

import { cn } from "@packages/tailwind-config";

const styles = {
  xs: "mx-auto sm:px-6 md:max-w-4xl md:px-4 lg:px-2",
  sm: "mx-auto sm:px-6 md:max-w-4xl md:px-4 lg:max-w-4xl lg:px-12",
  md: "mx-auto sm:px-6 md:max-w-4xl md:px-4 lg:max-w-5xl lg:px-8",
  lg: "mx-auto sm:px-6 md:max-w-4xl md:px-4 lg:max-w-screen-xl lg:px-8",
};

interface IContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "xs" | "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
}

const Container = React.forwardRef<HTMLDivElement, IContainerProps>(
  ({ size = "lg", className, ...props }, ref) => {
    return <div className={cn(styles[size], className)} ref={ref} {...props} />;
  },
);
Container.displayName = "Container";

export { Container };
