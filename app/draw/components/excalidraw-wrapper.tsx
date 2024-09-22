"use client";

import { Excalidraw } from "@excalidraw/excalidraw";
import { ExcalidrawProps } from "@excalidraw/excalidraw/types/types";

export function ExcalidrawWrapper(props: ExcalidrawProps) {
  return (
    <>
      <Excalidraw {...props} />
    </>
  );
}
