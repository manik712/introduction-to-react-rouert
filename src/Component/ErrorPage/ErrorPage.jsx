// import { useNavigate } from "react-router-dom";
import { Link, useRouteError } from "react-router-dom";
const ErrorPage = () => {
const error = useRouteError();
console.log(error);
// const handleGoBack1 = () =>{
//   const navigate = useNavigate();
// }
return (
<div>
   <h2>Oops!!!</h2>
   <h1>nothing is here, go back main page</h1>
   <p>error:{error.statusText || error.message}</p>
   {
   error.status === 404 && 
   <div>
      <p>page not found</p>
      <h3>Go back where you from</h3>
      <Link to="/">
      <button>Home</button></Link>
   </div>
   }
</div>
);
};
export default ErrorPage;