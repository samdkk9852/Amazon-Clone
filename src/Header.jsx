import React from "react"
import Amazon_Logo from "./image/Amazon_Logo.png"
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

const Header = () => {

  const [{basket, user}, dispatch] = useStateValue();

  const handleAuthentication =()=>{
    if(user){
      signOut(auth)
      .then(()=>{
        // successfull sign out
        console.log("Sign-Out");
      })
      .catch((error)=>{
        // unable to signout
        console.error("Error Sign Out:", error)
      })
    }
  }

  return (
    <div className="header">
        <Link to="/">
          <img className="header__logo" src={Amazon_Logo} alt="amazon_logo" />
        </Link>
      
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        {/* Search_icon */}
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div className="header__option" onClick={handleAuthentication}>
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTwo">{user ? "Sign-Out" : "Sign-In"}</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>  
            {/* in case of any error '?' will handle it gracesfully */}
          </div>
        </Link>

      </div>

    </div>
  )
}

export default Header
