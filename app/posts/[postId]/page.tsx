import { getPostByName, getPostsMeta } from '@/src/libs/fetchPosts'
import getFormattedDate from '@/src/libs/getFormattedDate'
import Link from 'next/link'
import React, { JSX } from 'react'
import NotFound from './not-found'
type Props = {
    params: {
        postId: string
    }
}
export async function generateStaticParams() {
    const posts: Meta[] | undefined = await getPostsMeta()

    if (!posts) return []

    return posts.map((post) => ({
        postId: post.id,
    }))
}

export async function generateMetadata({ params: { postId } }: Props) {
    const post = await getPostByName(`${postId}.mdx`) //deduped!

    if (!post) {
        return {
            title: 'Post Not Found',
        }
    }

    return {
        title: post.meta.title,
    }
}

const PostPage = async ({ params }: { params: Promise<{ postId: string }> }) => {
    const { postId } = await params
    const path = postId.concat('.mdx')
    const post = await getPostByName(path)
    let pubDate = ''
    //let tags: JSX.Element[]
    if (!post) NotFound()
    else {
        pubDate = getFormattedDate(post.meta.date)
    }

    const tags = post?.meta.tags.map((tag, i) => (
        <Link className="bg-neutral-200 hover:bg-neutral-300 text-gray-600 font-medium py-2 px-4 rounded" key={i} href={`/tags/${tag}`}>
            {tag}
        </Link>
    )) as JSX.Element[]

    return (
        <main className="bg-neutral-300 flex-grow px-4 md:px-6 prose prose-xl min-h-screen dark:prose-invert mx-auto relative">
            <h2 className="text-3xl  mb-10 pt-10  text-center felipa font-bold">{post?.meta.title}</h2>
            <p className="mt-0 text-sm text-gray-600 mb-4">{pubDate}</p>
            <article className="prose-lg">{post?.content}</article>
            <section className="mt-10">
                <h3 className="text-2xl font-bold mb-4">Related:</h3>
                <div className="flex flex-row gap-4">{tags}</div>
            </section>
            <p className="mb-10   w-full text-center">
                <Link href="/" className="bg-neutral-500 hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded">
                    ← Back to home
                </Link>
            </p>
        </main>
    )
}

export default PostPage
