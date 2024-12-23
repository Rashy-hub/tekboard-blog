import Link from 'next/link'

export default function NotFound() {
    return (
        <main className="bg-neutral-300 flex-grow">
            <p className="mt-10">Sorry, the requested post does not exist.</p>
            <Link href="/">Back to Home</Link>
        </main>
    )
}
