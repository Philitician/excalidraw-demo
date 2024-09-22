import { ExcalidrawDemo } from "./components/excalidraw-demo";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="w-full h-screen">
      <ExcalidrawDemo />
    </main>
  );
}
