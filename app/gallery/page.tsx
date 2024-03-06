import { Metadata } from "next";
import { GalleryPage } from "./GalleryPage";
import { Suspense } from "react";
const title = "GALLERY";
export const metadata: Metadata = { title };

export default function page() {
  return (
    <Suspense>
      <GalleryPage />
    </Suspense>
  );
}
