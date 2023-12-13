"use client";

import React, { Suspense } from "react";
import PostButton from "../../PostButton";
import LikeButton from "@/app/components/button/LikeButton";
import { useCurrentUser } from "@/app/context/user/CurrentUser";

type props = { isStatic: boolean; postId: string; };

export default function Main({ isStatic, postId }: props) {
  const { user: currentUser } = useCurrentUser();
  return (
    <div className="fixed z-30 right right-0 bottom-0">
      <div className="flex flex-row m-2">
        <div className="flex flex-col">
          {!isStatic ? <LikeButton /> : <></>}
          {!isStatic && currentUser ? <PostButton postId={postId} /> : <></>}
        </div>
      </div>
    </div>
  );
}
