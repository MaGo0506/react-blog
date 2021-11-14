import { useParams } from "react-router-dom";
import userFetch from './useFetch';

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = userFetch('http://localhost:2500/blogs/' + id )

    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{error}</div> }
            { blog && (
              <article>
                  <h2>{ blog.title }</h2>
                  <div>{ blog.body }</div>
                  <p>Written by { blog.author }</p>
              </article>
            )}
        </div>
    );
}
 
export default BlogDetails;