import { Counter } from "./Counter"

export default function PostsLayout({children}) {
return (
<div>
    <marquee style={{background: '#fff', color: 'purple'}}>
        It's just a proof from 0
    </marquee>
    {children}
</div>)
}