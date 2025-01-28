import PostCard from "@/components/PostCard"
import "./Post.css"

async function loadPost() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    await new Promise((resolve) => setTimeout(resolve, 3000)) //demorar carga de archivos 3s.
    return data
}

// RSC = React Server Component
async function PostPages() {
    const posts = await loadPost()
    console.log(posts)
    return (
        <div className="grid">
            {
                posts.map((post) => (
                    <PostCard post={post} key={post.id}/>
                ))
            }
        </div>
    )
}

export default PostPages