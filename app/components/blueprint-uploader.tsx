"use client";

import { FileUploader } from "@/components/file-uploader";
import { useRouter } from "next/navigation";

export function BlueprintUploader() {
  const router = useRouter();
  return (
    <FileUploader
      maxSize={4 * 1024 * 1024}
      accept={{ "image/png": [], "image/jpeg": [], "image/webp": [] }}
      multiple={false}
      maxFileCount={1}
      onUpload={async (files) => {
        if (files.length > 0) {
          const file = files[0];
          const reader = new FileReader();
          reader.onload = (e) => {
            const dataURL = e.target?.result as string;
            localStorage.setItem("blueprintDataURL", dataURL);
            localStorage.setItem("blueprintMimeType", file.type);
            router.push("/draw");
          };
          reader.readAsDataURL(file);
        }
      }}
    />
  );
}
