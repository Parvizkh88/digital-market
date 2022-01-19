import { useState } from "react";
import Advertisement from "../components/home/Advertisement";
import Filters from "../components/home/Filters";
import { FaSearch } from "react-icons/fa";
import logo from "../asset/image/logo192.png";
import Selector from "../components/Selector";

const Home = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  const handleOpenSearch = () => {
    setSearchOpen(true);
  };

  const handleSearch = (e) => {
    searchOpen(false);
    e.preventDefault();
  };

  return (
    <div className="container">
      <div>
        {!searchOpen ? (
          <div
            className="d-flex justify-content-between
      align-items-center"
          >
            <div>
              <img src={logo} alt="logo" className="w-25" />
            </div>
            <div>
              <p className="fw-bold m-0 h3">Digital Market</p>
            </div>
            <div onClick={handleOpenSearch}>
              <FaSearch />
            </div>
          </div>
        ) : (
          <form className="d-flex w-100 mt-2" onSubmit={handleSearch}>
            <input
              className="form-control rounded border p-2 w-100"
              placeholder="Search Item"
            />
            <button className="border-0">
              <FaSearch />
            </button>
          </form>
        )}
      </div>
      <Advertisement />
      <Selector items={["Speaker", "Laptop", "Camera", "Computer", "Hard"]} />
    </div>
  );
};

export default Home;
