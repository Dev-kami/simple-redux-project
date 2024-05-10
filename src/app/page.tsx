"use client";

import React from "react";

import { decrement, increment } from "@/lib/counter/counter";
import { useAppSelector } from "@/lib/hooks";
import { useDispatch } from "react-redux";

const HomePage = () => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center flex-col gap-y-5 justify-center h-screen">
      <h1>Counter</h1>

      <div className="space-x-5">
        <button
          onClick={() => dispatch(decrement())}
          aria-label="Decrement value"
        >
          Decrement
        </button>

        <span>{count}</span>

        <button
          onClick={() => dispatch(increment())}
          aria-label="Increment value"
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default HomePage;
