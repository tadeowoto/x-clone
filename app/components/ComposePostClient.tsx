"use client";
import { addPost } from "../actions";
import { useRef } from "react";

type Props = {
  avatar_url: string;
};

export default function ComposePostClient({ avatar_url }: Props) {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={formRef}
      action={async (formData: FormData) => {
        await addPost(formData);
        formRef.current?.reset();
      }}
      className="w-full border border-b border-white/10 p-4"
    >
      <div className="flex items-center gap-4">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
          <img
            src={avatar_url}
            alt="User avatar"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <textarea
        name="content"
        rows={4}
        className="w-full resize-none"
        placeholder="¿Qué estás pensando?"
      ></textarea>
      <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
        Postear
      </button>
    </form>
  );
}
