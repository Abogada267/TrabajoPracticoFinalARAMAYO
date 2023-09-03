import FetchData from "./renderprops/FetchData"


const Post = () => {
   
    
    return (
    <div>
            <h2>Json Placeholder</h2>
            <hr/>
            <FetchData url={"https://jsonplaceholder.typicode.com/todos/1"}>
            {(data) => (
                <>
                    {
                            data && data.map(post => (
                                <div key={post.id}>
                        <h4>{post.title}</h4>
                        <h4> {post.body}</h4>
                        <hr/>
    </div>
                ))
            }
    </>
)}
            </FetchData>
            </div>
    )
    
}

export default Post 
    
    
    
