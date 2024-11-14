"use client";

import DateSelect from "@/components/diet/date-select";
import MealSelect from "@/components/diet/meal-select";
import { Button } from "@/components/ui/button";

import React, { useState } from "react";

const DietPage = () => {
  const [status, setStatus] = useState<"date" | "meal">("date");

  const handleClickNext = (status: "date" | "meal") => {
    switch (status) {
      case "date":
        setStatus("meal");
        break;
      case "meal":
        setStatus("meal");
        break;
    }
  };

  const handleClickPrev = (status: "date" | "meal") => {
    switch (status) {
      case "date":
        setStatus("date");
        break;
      case "meal":
        setStatus("date");
        break;
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[900px] h-[700px] border-gray-100 border-2 rounded-lg">
        <div>
          <Button onClick={() => handleClickPrev(status)}>뒤로가기</Button>
        </div>
        <div className="text-center py-[32px]">
          <h1 className="text-5xl font-semibold">날짜를 선택해주세요.</h1>
        </div>
        {status === "date" && <DateSelect onNext={handleClickNext} />}
        {status === "meal" && <MealSelect onNext={handleClickNext} />}
      </div>
    </div>
  );
};

export default DietPage;
