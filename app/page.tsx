import { createClient } from "@/app/utils/supabase/server";
import AuthButtonServer from "./components/AuthButton-server";
import { redirect } from "next/navigation";
import PostCard from "./components/PostCard";
import ComposePostClient from "./components/ComposePostClient";

export default async function Home() {
  const supabase = await createClient();
  const { data: posts, error } = await supabase
    .from("posts")
    .select("*, users(*)");
  const { data } = await supabase.auth.getSession();
  if (error) {
    console.error("Error:", error);
  }

  if (!data.session) {
    return redirect("/login");
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <AuthButtonServer />
      <div className="border-b border-white/10" />
      <section className="w-full">
        <div className="max-w-2xl mx-auto border-r border-l border-white/10 min-h-screen">
          <div className="sticky top-0 bg-black/80 backdrop-blur-sm z-10  border-b border-white/10 flex flex-col gap-4">
            <ComposePostClient
              avatar_url={data.session.user.user_metadata.avatar_url}
            />
            <h1 className="text-xl font-bold">Posts</h1>
          </div>
          <div className="flex flex-col">
            {posts && posts.length > 0 ? (
              posts.map((post) => (
                <PostCard
                  key={post.id}
                  post={{
                    content: post.content,
                    created_at: post.created_at,
                    user: {
                      name: post.users.name,
                      username: post.users.username,
                      avatar_url: post.users.avatar_url,
                      created_at: post.users.created_at,
                    },
                  }}
                />
              ))
            ) : (
              <div className="px-4 py-8 text-center text-white/50">
                <p>No hay posts aun</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
