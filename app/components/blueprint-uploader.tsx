"use client";

import { FileUploader } from "@/components/file-uploader";
import { useRouter } from "next/navigation";

export function BlueprintUploader() {
  const router = useRouter();
  return <FileUploader onUpload={async (files) => {}} />;
}
