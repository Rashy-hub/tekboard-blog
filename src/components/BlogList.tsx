import React from 'react'
import { getPostsMeta } from '../libs/fetchPosts'
import PostCard from './PostCard'

const BlogList = async () => {
    const result = await getPostsMeta()

    if (!result) {
        return <p className="mt-10 text-center">Sorry, no posts available.</p>
    }

    return (
        <div className="flex flex-col justify-center flex-wrap gap-4 mb-10 mt-10">
            <h2 className="mt-10 text-center felipa font-bold text-4xl">All Articles</h2>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mx-[20%]">
                {result.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    )
}

export default BlogList
