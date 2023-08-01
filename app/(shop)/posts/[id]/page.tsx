import { posts } from "../../../../data/posts"

export async function generateStaticParams(){
  const ids:string[]=["1","2"];
  return ids.map((id) => ({id: id}));
}

async function getpost(id:string) {
    const post = posts.find(post => post.id === id)
    return post
    
}
export default async function Post({params}:{params:{id:string}}) {
   const { id } = params;
   const post = await getpost(id)
    return (
      
           <main>
            <div>
            <h1>{post!.title}</h1>
            <h1>{post!.date}</h1>
            </div>
           
           </main>
    );
  }