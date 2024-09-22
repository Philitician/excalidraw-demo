"use client";

import dynamic from "next/dynamic";

import { useState, useEffect, useMemo } from "react";
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";
import {
  createInitialImage,
  getInitialElement,
  getInitialFile,
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

const BLUEPRINT_URL =
  "https://www.electricaltechnology.org/wp-content/uploads/2020/04/Electrical-floor-plan.jpg";

export default function Home() {
  const initialFile = useMemo(() => getInitialFile(BLUEPRINT_URL), []);
  const [initialElements, setInitialElements] = useState<
    ExcalidrawElement[] | undefined
  >();

  useEffect(() => {
    const loadInitialData = async () => {
      const image = await createInitialImage(BLUEPRINT_URL);
      const element = getInitialElement(initialFile.id, image);
      setInitialElements([element]);
    };
    loadInitialData();
  }, []);

  return (
    <main className="h-screen w-full">
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
