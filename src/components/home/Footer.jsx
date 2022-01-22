import { Link } from "react-router-dom";
import { IconContext } from "react-icons/lib";
import { FaHome } from "react-icons/fa";
import { MdOutlineLocalOffer } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { BsFillBasket3Fill } from "react-icons/bs";

const Footer = () => {
  return (
    <IconContext.Provider value={{ color: "gray", size: "1.5em" }}>
      <ul className="d-flex justify-content-between">
        <li>
          <Link to="/">
            <FaHome />
          </Link>
        </li>
        <li>
          <Link to="/discounts">
            <MdOutlineLocalOffer />
          </Link>
        </li>
        <li>
          <Link to="/favorites">
            <MdFavorite />
          </Link>
        </li>
        <li>
          <Link to="/basket">
            <BsFillBasket3Fill />
          </Link>
        </li>
      </ul>
    </IconContext.Provider>
  );
};

export default Footer;
