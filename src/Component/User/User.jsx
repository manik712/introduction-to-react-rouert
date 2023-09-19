import { Link } from "react-router-dom";


const User = ({user}) => {
  const {id , name, phone, username,website } =user;
  const userStyle = {

    border : '2px solid green',
    padding: '10px',
    borderRadius: '10px'
  }
  return (
    <div style={userStyle}>
       <p>{id}</p>
        <h2>{name}</h2>
        <h3>{phone}</h3>
        <h4>{username}</h4>
        <h1>{website}</h1>
        <Link to={`/User/${id}`}>Show Details</Link>
        <Link to={`/User/${id}`}><button>Click Me</button></Link>
    </div>
  );
};

export default User;