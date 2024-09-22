"use client";

import dynamic from "next/dynamic";
import { useState, useEffect, useMemo } from "react";
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";
import {
  getInitialFile,
  createInitialImage,
  getInitialElement,
} from "../initialData";

// Since client components get prerenderd on server as well hence importing the excalidraw stuff dynamically
// with ssr false
const ExcalidrawWithClientOnly = dynamic(
  async () => (await import("./excalidraw-wrapper")).ExcalidrawWrapper,
  {
    ssr: false,
  }
);

export function ExcalidrawDemo() {
  const initialFile = useMemo(() => getInitialFile(), []);
  const [initialElements, setInitialElements] = useState<
    ExcalidrawElement[] | undefined
  >();

  useEffect(() => {
    const loadInitialData = async () => {
      const image = await createInitialImage();
      if (image) {
        const element = getInitialElement(initialFile.id, image);
        setInitialElements([element]);
      }
    };
    loadInitialData();
  }, [initialFile.id]);

  return (
    <>
      {initialElements && (
        <ExcalidrawWithClientOnly
          initialData={{
            files: {
              [initialFile.id]: initialFile,
            },
            elements: initialElements,
          }}
        />
      )}
    </>
  );
}
