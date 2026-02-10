import { createClient } from "../utils/supabase/server";
import AuthButton from "./AuthButton-client";

export default async function AuthButtonServer() {
  const supabase = await createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return <AuthButton session={session} />;
}
