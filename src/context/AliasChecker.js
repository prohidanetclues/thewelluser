import React from "react";
import { CheckAliasExistsApi } from "@/api/alias";
import { notFound, redirect } from "next/navigation";

async function AliasChecker({ alias }) {
  if (alias === null || alias === "/") {
    return redirect("/");
  }
  const { success, data } = await CheckAliasExistsApi({ alias });
  if (!success) {
    return notFound();
  }
  return data || null;
}

export default AliasChecker;
