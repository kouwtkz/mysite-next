"use client";

import React, { useEffect, useRef } from "react";
import { create } from "zustand";
import { MediaImageItemType, MediaImageAlbumType } from "@/imageScripts/MediaImageDataType";
import { DataStateReplacedProps } from "@/app/components/dataState/DataStateFunctions";
import axios from "axios";

function parseImageItems(imageAlbums: MediaImageAlbumType[]) {
  const imageList: MediaImageItemType[] = [];
  imageAlbums.forEach((album) => {
    album.list.forEach((item) => {
      album.visible = {
        ...{ info: true, filename: true, title: true },
        ...album.visible,
      };
      item.album = album;
      item.time = item.time ? new Date(item.time) : undefined;
      imageList.push(item);
    });
  });
  return imageList;
}

type ImageDataType = {
  imageItemList: Array<MediaImageItemType>;
  imageAlbumList: Array<MediaImageAlbumType>;
  setImageAlbum: (albumList: Array<MediaImageAlbumType>) => void;
};

export const useMediaImageState = create<ImageDataType>((set) => ({
  imageItemList: [],
  imageAlbumList: [],
  setImageAlbum: (data) => {
    set(() => ({
      set: true,
      imageAlbumList: data,
      imageItemList: parseImageItems(data),
    }));
  },
}));

export default function MediaImageState({ url }: DataStateReplacedProps) {
  const imageData = useMediaImageState();
  const setImage = useRef(false);
  useEffect(() => {
    if (!setImage.current)
      axios(url).then((r) => {
        imageData.setImageAlbum(r.data);
        setImage.current = true;
      });
  });

  return <></>;
}
