import { ListOfPosts } from "./ListOfPosts"
import { Suspense } from "react"

const fetchPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
}

export default async function Posts({params}) {

const posts = await fetchPosts()

    return (
        <section>
            <Suspense fallback={<p>Cargando posts</p>}>
            <ListOfPosts />
            </Suspense>
             </section>
    )
}