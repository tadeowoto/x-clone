import { createClient } from "@/app/utils/supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const { data: posts, error } = await supabase.from("posts").select("*");

  if (error) {
    console.error("Error:", error);
  }

  return (
    <div>
      <h1>Hello x clone</h1>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  );
}
