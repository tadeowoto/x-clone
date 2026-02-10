import { createClient } from "@/app/utils/supabase/server";
import AuthButtonServer from "./components/AuthButton-server";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = await createClient();
  const { data: posts, error } = await supabase.from("posts").select("*");
  const { data } = await supabase.auth.getSession();
  if (error) {
    console.error("Error:", error);
  }

  if (!data.session) {
    return redirect("/login");
  }

  return (
    <main>
      <AuthButtonServer />
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      {posts && posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id} className="mb-2">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts found.</p>
      )}
    </main>
  );
}
