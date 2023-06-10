import Link from 'next/link'

export default function Post({post ,key}){
  return (
      <div className='card' key={key}>
        <img src={post.frontmatter.cover_image} alt="" />
          <div className='post-date'>
            Posted on {post.frontmatter.date}
          </div>
        <h3>{post.frontmatter.title}</h3>
        <p>{post.frontmatter.excerpt}</p>
        
        <Link href={`/blog/${post.slug}`}>
          <button className="btn">Read More</button>
        </Link>
      </div>
  )
} 
