// app/components/LoginButton.tsx
"use client";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Button } from "@workspace/ui/components/button";
import { useSession, signIn, signOut } from "next-auth/react";

export function LoginButton() {
    const { data: session } = useSession();

    if (session) {
        return (
            <div>
                <p>Signed in as {session.user?.email}</p>
                <button onClick={() => signOut()}>Logout</button>
            </div>
        );
    }

    return <div className="flex justify-center">
        {/* <Button onClick={() => signIn("google")} className="m-3 p-5" variant="outline"><FaGoogle/>Sign in with Google</Button>
        <Button onClick={() => signIn("github")} className="m-3 p-5" variant="outline"><FaGithub/>Sign in with Github</Button> */}
    </div>
}
