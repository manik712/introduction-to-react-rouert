import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const{name,website} =user
  return (
    <div>
       <h4>hi every one </h4>
       <h1>{name}</h1>
       <p>{website}</p>
    </div>
  );
};

export default UserDetails;