import "server-only";
import SupabaseListener from "./(context)/supabase-listener";
import SupabaseProvider from "./(context)/supabase-provider";

import "./globals.css";
import { createClient } from "@/utils/supabase-server";

import { redirect } from "next/navigation";

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const userId = session?.user.id;

  return (
    <html lang="en">
      <head />
      <body className="">
        <SupabaseProvider accessToken={session?.access_token}>
          <SupabaseListener serverAccessToken={session?.access_token} />{" "}
          {children}
        </SupabaseProvider>
      </body>
    </html>
  );
}
