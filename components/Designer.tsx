"use client";

import React from "react";
import DesignerSidebar from "./DesignerSidebar";
import { useDroppable } from "@dnd-kit/core";

const Designer = () => {
  const droppable = useDroppable({
    id: "designer-drop-area",
    data: {
      isDesignerPropArea: true,
    },
  });

  return (
    <div className="flex w-full h-full">
      <div className="p-4 w-full">
        <div className="bg-background max-w-[920px] h-full m-auto rounded-xl flex flex-col flex-grow items-center justify-start flex-1 overflow-y-auto">
          <p className="text-3xl text-muted-foreground flex flex-grow items-center font-bold">
            Drop Here
          </p>
        </div>
      </div>
      <DesignerSidebar />
    </div>
  );
};

export default Designer;
