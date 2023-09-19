/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
const Post = ({post}) => {
const{id,title,body} = post;
const navigate = useNavigate();
const postStyle = {
border : '2px solid green',
padding: '10px',
borderRadius: '10px'
}
const handleShowDetails = () =>{
console.log('click me');
navigate(`/Post/${id}`)
}
return (
<div style={postStyle}>
   <h2>post of id:{id}</h2>
   <p>{title}</p>
   <h4>{body}</h4>
   <Link to={`/Post/${id}`}>
   Post Details</Link>
   <Link to={`/Post/${id}`}>
   <button>Show details</button></Link>
   <br />
   <button onClick={handleShowDetails}>Click Me</button>
</div>
);
};
export default Post;