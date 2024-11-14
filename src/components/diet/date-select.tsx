"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

const weeks = ["월", "화", "수", "목", "금", "토", "일"];
type Props = {
  onNext: (status: "date" | "meal") => void;
};
const DateSelect = ({ onNext }: Props) => {
  return (
    <>
      <div className="flex flex-wrap gap-[16px] justify-center">
        {weeks.map((week, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-center text-3xl">{week}</CardTitle>
              <CardDescription>선택 되었습니다.</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Checkbox className="w-[40px] h-[40px]" />
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-center py-[32px]">
        <Button
          className="w-[300px] h-[50px] text-2xl font-semibold"
          onClick={() => onNext("date")}
        >
          다음으로
        </Button>
      </div>
    </>
  );
};

export default DateSelect;
