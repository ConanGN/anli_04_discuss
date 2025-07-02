"use server"
import * as auth from "@/auth";


export default async function SignIn() {

    return (
        auth.signIn("github")
    )
}