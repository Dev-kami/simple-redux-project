import React from "react";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-3xl">
        Welcome to <span className="text-blue-500">React</span> +{" "}
        <span className="text-red-500">Tailwind</span> +{" "}
        <span className="text-green-500">TypeScript</span> Starter
      </h1>
    </div>
  );
};

export default HomePage;
