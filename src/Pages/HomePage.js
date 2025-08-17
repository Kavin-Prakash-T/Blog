import { PostCard } from "../Components"

export const HomePage = () => {
  const posts=[
    {id:1,title:"loremidhdk",description:"fhusdj isfdgfs sfhsihdfsd dsihidhadsaifgiwf dcdishcish",author:"kavin"},
    {id:2,title:"loremidhdk",description:"fhusdj isfdgfs sfhsihdfsd dsihidhadsaifgiwf dcdishcish",author:"kavin"}
  ]
  return(
      <section>
      { posts.map((post) => (
      (
          <PostCard  key={post.id} post={post} />
        )    
      )) }      
    </section>
  )
}
