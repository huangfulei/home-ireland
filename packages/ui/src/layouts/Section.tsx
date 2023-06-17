import * as React from "react";

import { cn } from "@packages/tailwind-config";

interface ISectionProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * Section layout: add padding y-axis and scroll margin top.
 * @param props
 * @constructor
 */
const Section = React.forwardRef<HTMLDivElement, ISectionProps>(
  ({ id, className, ...props }, ref) => {
    return (
      <div
        id={id}
        aria-labelledby={id}
        title={id}
        className={cn("scroll-mt-14 px-2 py-8 sm:scroll-mt-16 ", className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Section.displayName = "Section";

export { Section };
