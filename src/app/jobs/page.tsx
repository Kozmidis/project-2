"use client";
import React from "react";
import store from "@/Redux/store/store";
import Cards from "@/Redux/Cards";

const Jobs = () => {
  return (
    <>
      <Cards store={store}></Cards>
    </>
  );
};
export default Jobs;
