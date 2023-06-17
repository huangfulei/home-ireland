import * as React from "react";

import { type ILoadingProps } from ".";

/**
 * Loading component.
 * @param props - Loading props.
 * @returns Header with component name.
 */
export const Loading: React.FC<ILoadingProps> = (props) => {
  const { isLoading } = props;
  return (
    <div
      className={`${
        isLoading ? "" : "hidden"
      } fixed inset-0 z-50 bg-gray-200 pr-12 opacity-50 sm:pr-8`}
    >
      <div className="relative left-1/2 top-1/2 h-24 w-24 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
        <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-gray-200"></div>
      </div>
    </div>
  );
};
