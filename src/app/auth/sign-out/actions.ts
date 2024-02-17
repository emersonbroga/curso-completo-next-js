"use server";

import { logout } from "@/helpers/session";
import { redirect } from "next/navigation";

export const handleSignOutForm = async () => {
  // logout
  await logout();
  return redirect("/");
};
