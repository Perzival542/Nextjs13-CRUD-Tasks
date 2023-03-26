"use client"
import { useRouter } from "next/navigation";
import Link from "next/link";

export function Navbar() {
    const router = useRouter();

    return(
      <header>
        <Link href={"/"}>
            <h1>Task App</h1>
        </Link>

        <div>
            <buttton onClick={() => router.push("/new")}>Add Task
            </buttton>
        </div>
      </header>
    );
}