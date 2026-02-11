"use client";

import { useState } from "react";
import type { Post } from "@/types/types";
import { IconHeart, IconMessageCircle, IconRepeat } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
export default function PostCard({ post }: { post: Post }) {
  const { content, user, created_at } = post;
  const [isfollowing, setIsFollowing] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleFollow = () => {
    setIsFollowing(!isfollowing);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };
  return (
    <div className="px-4 py-3 border-b border-white/10 hover:bg-white/5 transition-colors cursor-pointer">
      <div className="flex gap-3">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
          <img
            alt="User avatar"
            className="h-full w-full object-cover"
            loading="lazy"
            src={user.avatar_url}
          />
        </div>
        <div className="flex flex-1 flex-col gap-2 min-w-0">
          <div className="flex items-center gap-2 text-sm">
            <p className="font-semibold text-white truncate">{user.name}</p>
            <p className="text-white/50">@{user.username}</p>
            <p className="text-white/40">·</p>
            <p className="text-white/40">{created_at}</p>
          </div>
          <p className="text-white/90 text-[15px] leading-normal break-words">
            {content}
          </p>
          <div className="flex justify-between mt-3 max-w-xs -mx-2">
            <button className="p-2 text-white/50 hover:text-blue-500 hover:bg-blue-500/10 rounded transition-colors">
              <IconMessageCircle size={18} />
            </button>
            <button
              className="p-2 text-white/50 hover:text-green-500 hover:bg-green-500/10 rounded transition-colors"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <IconRepeat size={18} />
            </button>
            <button
              className={`p-2 rounded transition-colors ${
                isLiked
                  ? "text-red-500 hover:bg-red-500/10"
                  : "text-white/50 hover:text-red-500 hover:bg-red-500/10"
              }`}
              onClick={(e) => {
                e.stopPropagation();
                handleLike();
              }}
            >
              <IconHeart size={18} fill={isLiked ? "currentColor" : "none"} />
            </button>
            <Button>{isfollowing ? "Dejar de seguir" : "Seguir"}</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
