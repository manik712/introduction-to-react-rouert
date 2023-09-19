// eslint-disable-next-line no-unused-vars
import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'
const Users = () => {
const  users = useLoaderData();

  // state-->data
  // state--->loading
  // use effect
  // fetch-->state set ---->set state
  console.log(users);
  return (
    <div>
      <h3>all users :{users.length}</h3>
        <div className="users">
         {
       users.map(user => <User key={user.id} user={user}></User>)
         }
        </div> 

    </div>
    
    
  );
};

export default Users;                 