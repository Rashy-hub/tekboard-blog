import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface PostCardProps {
    post: Meta
}

const PostCard = ({ post }: PostCardProps) => {
    if (post.image == undefined) {
        post.image =
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    }

    return (
        <div className="w-[100%] xl:w-[90%] place-content-center place-self-center">
            <Image src={post.image} alt="meta image" width={650} height={650} />
            <h3 className="felipa text-[2rem] font-bold hover:cursor-pointer">
                {' '}
                <Link className="hover:underline" href={`/posts/${post.id}`}>
                    {post.title}
                </Link>
            </h3>
        </div>
    )
}

export default PostCard
