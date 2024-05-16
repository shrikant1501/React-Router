import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-40 h-4 bg-gray-300 rounded-lg animate-pulse my-2"></div>
      <div className="w-40 h-4 bg-gray-300 rounded-lg animate-pulse my-2"></div>
      <div className="w-40 h-4 bg-gray-300 rounded-lg animate-pulse my-2"></div>
    </div>
  );
};

export default Shimmer;
