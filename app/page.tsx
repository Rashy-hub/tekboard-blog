import BlogList from '@/src/components/BlogList'
import Image from 'next/image'

export default function Home() {
    return (
        <main className="w-full flex flex-col justify-center items-center bg-neutral-300">
            <Image src="/heroLogo.svg" alt="hero" width={650} height={650} className="mt-10" />

            <BlogList />
        </main>
    )
}
