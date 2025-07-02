"use server"

import * as auth from "@/auth";

export default async function SignOut() {
    return auth.signOut()
}
