"use client"
import { posts } from '@/app/utils/Constants'
import PostCard from './PostCard'

const Posts = () => {
    return (
        <section className='w-full h-fit flex flex-col px-8 md:px-25 py-5 md:py-15 gap-5'>
            <h1>Latest Posts</h1>
            <div className='flex flex-col md:flex-row gap-7 md:gap-5'>
                {posts.map(post => (
                    <PostCard key={post.id} title={post.title} sub_title={post.sub_title} image={post.image} />
                ))}
            </div>
        </section>
    )
}

export default Posts
