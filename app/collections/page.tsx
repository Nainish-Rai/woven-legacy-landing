import React from "react";
import NewAndFeatured from "../(homepage)/NewAndFeatured";
import SelectCollection from "@/components/select-collections";

type Props = {};

function Collections({}: Props) {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <SelectCollection />
    </div>
  );
}

export default Collections;
