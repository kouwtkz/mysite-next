"use client";

import React from "react";
import PlayPauseButton from "@/app/components/svg/audio/PlayPauseButton";
import { useSoundPlayer } from "./SoundPlayer";
import { useSoundState } from "./SoundState";
import TriangleCursor from "../components/svg/cursor/Triangle";

export default function SoundPage() {
  const { SoundAlbumList } = useSoundState();
  const soundAlbum = SoundAlbumList.length > 0 ? SoundAlbumList[0] : null;
  const { Play, Pause, paused, playlist, current } = useSoundPlayer();
  const src = playlist[current] || "";
  return (
    <div>
      <div className="">
        <h1
          className="font-LuloClean text-3xl sm:text-4xl text-main pt-8 mb-8 cursor-pointer"
          onClick={() => {}}
        >
          SOUND ROOM
        </h1>
        {soundAlbum?.playlist?.map((playlist, i) => {
          const strPlaylist = playlist.list.map((sound) => sound.src);
          return (
            <div key={i} className="my-6">
              <h3 className="my-4 text-main-deep text-3xl">{playlist.title}</h3>
              <div className="flex flex-wrap max-w-4xl mx-auto">
                {playlist.list.map((sound, i) => {
                  const itemPaused = sound.src === src ? paused : true;
                  return (
                    <div
                      key={i}
                      className="my-1 w-[100%] font-bold cursor-pointer md:w-[50%] hover:bg-main-pale-fluo flex items-center"
                      onClick={() => {
                        if (itemPaused) Play(strPlaylist, i);
                        else Pause();
                      }}
                    >
                      <div className="flex-1 text-main-soft">
                        {sound.src === src ? (
                          <TriangleCursor
                            className={`mx-auto ${
                              itemPaused ? "fill-main-pale" : "fill-main-soft"
                            }`}
                          />
                        ) : null}
                      </div>
                      <div className="flex-[10] pr-1 text-2xl text-main-dark text-left h-20 align-middle flex items-center">
                        <span>{sound.title}</span>
                      </div>
                      <PlayPauseButton
                        className="flex-[2] mr-1 fill-main-soft"
                        paused={itemPaused}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
