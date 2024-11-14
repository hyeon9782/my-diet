import React from "react";
import { Button } from "../ui/button";

type Props = {
  onNext: (status: "date" | "meal") => void;
};

const MealSelect = ({ onNext }: Props) => {
  return (
    <div>
      <div className="flex">
        <Button onClick={() => onNext("meal")}>다음으로</Button>
      </div>
    </div>
  );
};

export default MealSelect;
