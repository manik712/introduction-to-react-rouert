import {  useLoaderData, useNavigate, useParams } from "react-router-dom";
const PostDetails = () => {
const post =useLoaderData();
const {PostId} = useParams();
const navigate = useNavigate();
const {id , title, body} = post;
console.log(PostId);
const  handleGoBack = () =>{
navigate(-1)
}
return (
<div>
   <h3>post details about</h3>
   <h2>title:{title}</h2>
   <p>Body:{body}</p>
   <h2>id:{id}</h2>
   <button onClick={handleGoBack}>Go Back</button>
</div>
);
};
export default PostDetails;