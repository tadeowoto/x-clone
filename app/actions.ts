
'use server'
import { createClient } from "@/app/utils/supabase/server";
import { revalidatePath } from "next/cache";

export const addPost = async (formData: FormData) => {
    "use server";

    const content = formData.get("content");

    if (content === null) return;

    const supabase = await createClient();

    const { data } = await supabase.auth.getSession();
    if (data.session === null) return;

    await supabase
      .from("posts")
      .insert({ content, user_id: data.session.user.id });

   revalidatePath("/")
    return { success: true }
  };