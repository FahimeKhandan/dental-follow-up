import React from "react";
import DiseaseList from "../diseases/components/DiseaseList";
import DList from "./diseases/components/List";

const page = () => {
  return (
    <div className="flex flex-col gap-4">
      home page
      <DiseaseList />
      <DList />
    </div>
  );
};

export default page;
