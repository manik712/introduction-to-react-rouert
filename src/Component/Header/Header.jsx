import { Link, NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
  return (
    <div>
       <h2>Navbar</h2>
       <nav>
        <span>My web :  </span>
          <NavLink to='/'>Home</NavLink>
         {/* <Link to='/'>Home</Link> */}
         <NavLink to='/About'>About</NavLink>
         {/* <Link to='/About'>About</Link> */}
         <NavLink to='/Contact'>Contact</NavLink>
         {/* <Link to='/Contact'> Contact</Link> */}
         <NavLink to='/Posts'>Posts</NavLink>
         {/* <Link to='/Posts'>Posts</Link>
          */}
          <NavLink to='/User'>User</NavLink>
         {/* <Link to='/Users'>Users</Link> */}

         <NavLink to='/Users'>Users</NavLink>
         
        
       </nav>
    </div>
  );
};

export default Header;