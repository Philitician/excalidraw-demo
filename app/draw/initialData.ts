import { genId } from "@/lib/gen-id";
import { BinaryFileData, DataURL } from "@excalidraw/excalidraw/types/types";
import {
  ExcalidrawElement,
  FileId,
} from "@excalidraw/excalidraw/types/element/types";

export const getInitialFile = (url: string) => {
  const id = genId() as FileId;
  const dataURL = url as DataURL;
  return {
    id,
    dataURL,
    mimeType: "image/png",
    created: Date.now(),
    lastRetrieved: Date.now(),
  } satisfies BinaryFileData;
};

export const createInitialImage = async (url: string) => {
  const image = new Image();
  image.src = url;
  await image.decode(); // Ensure the image is loaded
  return image;
};

export const getInitialElement = (fileId: FileId, image: HTMLImageElement) => {
  const id = genId();
  return {
    type: "image",
    version: 1,
    versionNonce: 123456,
    isDeleted: false,
    id: id,
    fillStyle: "hachure",
    strokeWidth: 1,
    strokeStyle: "solid",
    roughness: 0,
    opacity: 100,
    angle: 0,
    x: 0,
    y: 0,
    strokeColor: "transparent",
    backgroundColor: "transparent",
    width: image.width,
    height: image.height,
    seed: 1,
    groupIds: [],
    updated: Date.now(),
    locked: true, // Lock the blueprint image
    fileId,
    status: "saved",
    scale: [1, 1],
    roundness: null,
    frameId: null,
    link: null,
    boundElements: [],
  } satisfies ExcalidrawElement;
};

export const element = {
  type: "image",
  version: 64,
  versionNonce: 1055778114,
  index: "a0",
  isDeleted: false,
  id: "Xm1jlo9IpwLqioKesu-Ae",
  fillStyle: "solid",
  strokeWidth: 2,
  strokeStyle: "solid",
  roughness: 1,
  opacity: 100,
  angle: 0,
  x: 96.326171875,
  y: 97.08984375,
  strokeColor: "transparent",
  backgroundColor: "transparent",
  width: 998.3632812499999,
  height: 665.5755208333333,
  seed: 1988164866,
  groupIds: [],
  frameId: null,
  roundness: null,
  boundElements: [],
  updated: 1727005802121,
  link: null,
  locked: false,
  status: "saved",
  fileId: "87b07a8c032fc3d1c066d0990ba7ec469ba262fc",
  scale: [1, 1],
};
