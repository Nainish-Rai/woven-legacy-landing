"use client";
import React from "react";
import { AboutFamily } from "../(homepage)/FamilyAbout";

type Props = {};

function About({}: Props) {
  return (
    <div className="w-full flex justify-center">
      <AboutFamily />
    </div>
  );
}

export default About;
