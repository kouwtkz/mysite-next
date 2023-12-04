"use client";

import { MediaImageAlbumProps } from "@/app/media/MediaImageData.mjs";
import { dammyImageSize } from "@/app/media/dammy";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import loaderSet from "@/app/lib/loaderSet";
type GalleryPageProps = {
  group: MediaImageAlbumProps | null;
  size?: number;
  label?: string;
  showLabel?: boolean;
  max?: number;
  isStatic?: boolean;
  autoDisable?: boolean;
};

const GalleryList: React.FC<GalleryPageProps> = ({
  group,
  label,
  size = 320,
  showLabel = true,
  max = 1000,
  isStatic = false,
  autoDisable = false,
}) => {
  if (group === null || (autoDisable && group.list.length === 0)) return null;
  const thumb_size = size;
  return (
    <div className="w-[100%]">
      {showLabel ? (
        <h2 className="pt-12 mb-6 text-6xl font-LuloClean text-center text-main">
          {label || group.name}
        </h2>
      ) : null}
      <div
        className={`max-w-[1120px] mx-auto flex flex-wrap${
          group.list.length < 3 ? " justify-center" : ""
        }`}
      >
        {group.list
          .map((image, key) => {
            const size = image.info || dammyImageSize;
            const thumb = {
              width: !size.wide
                ? thumb_size
                : (thumb_size * size.width) / size.height,
              height: size.wide
                ? thumb_size
                : (thumb_size * size.height) / size.width,
            };
            return (
              <div
                key={key}
                className={
                  `w-[24.532%] pt-[24.532%] m-[0.234%] relative overflow-hidden` 
                  + ` hover:brightness-90 transition cursor-pointer`
                }
              >
                <Image
                  src={`${image.innerURL}`}
                  loader={loaderSet(
                    isStatic,
                    image.resized?.find(
                      (item) => item.option.mode === "thumbnail"
                    )?.src
                  )}
                  alt={image.name || image.src}
                  width={thumb.width}
                  height={thumb.height}
                  style={{ objectFit: "cover" }}
                  className="absolute w-[100%] h-[100%] top-0 hover:scale-[1.03] transition"
                />
              </div>
            );
          })
          .filter((v, i) => i < max)}
      </div>
    </div>
  );
};

export default GalleryList;
