"use client";

import dynamic from "next/dynamic";
import { useState, useEffect, useMemo } from "react";
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";
import {
  createInitialImage,
  getInitialFile,
  getInitialElement,
} from "./initialData";

// Since client components get prerenderd on server as well hence importing the excalidraw stuff dynamically
// with ssr false
const ExcalidrawWithClientOnly = dynamic(
  async () =>
    (await import("./components/excalidraw-wrapper")).ExcalidrawWrapper,
  {
    ssr: false,
  }
);

export default function Home() {
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
    <main className="w-full h-screen">
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
    </main>
  );
}
