import Link from "next/link";

export default function NotFound() {
    return (
        <main>
            <h1>Error 404 😢</h1>
            <p>Oops! The page youre looking for doesnt exist.</p>
            <Link href="/">
                <a>Go back home</a>
            </Link>
        </main>
    );
}
