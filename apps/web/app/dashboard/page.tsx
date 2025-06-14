// app/dashboard/page.tsx
"use client"
import { signOut, useSession } from "next-auth/react";
import { Button } from "@workspace/ui/components/button";
export default function DashboardPage() {
    const { data: session } = useSession();
    if (!session) {
        return (
            <div className="text-center mt-10">
                <h2>You are not logged in!</h2>
            </div>
        );
    }
    return (
        <div className="text-center mt-10">
            <h1>Welcome, {session.user?.name}!</h1>
            <p>Your email: {session.user?.email}</p>
            <Button onClick={() => signOut()}>Logout</Button>
        </div>
    );
}
