import { useEffect, useState } from "react";
import Advertisement from "../components/home/Advertisement";
import ItemShower from "../components/home/ItemShower";
import { FaSearch } from "react-icons/fa";
import logo from "../asset/image/logo192.png";
import Selector from "../components/Selector";
import Footer from "../components/home/Footer";

import Canon from "../asset/image/Canon.jpg";
import Nikon from "../asset/image/Nikon.jpg";
import Sony from "../asset/image/Sony.jpg";
import Fujifilm from "../asset/image/Fujifilm.jpg";

const goods = [
  {
    id: 1,
    title: "Sony Alpha 7",
    Image: Sony,
    categoryId: 1,
    description: "Uiv 4000 camera",
  },
  {
    id: 2,
    title: "Fujifilm pro 7",
    Image: Fujifilm,
    categoryId: 1,
    description: "Uiv 3600 camera",
  },
  {
    id: 3,
    title: "Canon Eos 2000 d",
    Image: Canon,
    categoryId: 1,
    description: "Uiv 2500 camera",
  },
  {
    id: 4,
    title: "Nikon Zfc",
    Image: Nikon,
    categoryId: 1,
    description: "Uiv 5000 camera",
  },
  {
    id: 5,
    title: "LapTop Assus Z",
    Image: Sony,
    categoryId: 2,
    description: "Uiv 4000 camera",
  },
  {
    id: 2,
    title: "Hard SSd 500",
    Image: Fujifilm,
    categoryId: 4,
    description: "SSD",
  },
  {
    id: 3,
    title: "PC MSI",
    Image: Canon,
    categoryId: 3,
    description: "MSI",
  },
  {
    id: 4,
    title: "Speaker",
    Image: Nikon,
    categoryId: 5,
    description: "DELL",
  },
];

const Home = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [categoryItem, setCategoryItem] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleOpenSearch = () => {
    setSearchOpen(true);
  };

  const handleSearch = (e) => {
    searchOpen(false);
    e.preventDefault();
  };

  const handleSetIndex = (index) => {
    setSelectedIndex(index);
    let categoryId = 0;
    switch (index) {
      case 0:
        categoryId = 5;
        break;
      case 1:
        categoryId = 2;
        break;
      case 2:
        categoryId = 1;
        break;
      case 3:
        categoryId = 3;
        break;
      case 4:
        categoryId = 4;
        break;
    }
    let filteredData = goods.filter((item) => item.categoryId === categoryId);
    setCategoryItem(filteredData);
  };

  useEffect(() => {
    handleSetIndex(0);
  }, []);

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
      <Selector
        items={["Speaker", "Laptop", "Camera", "Computer", "Hard"]}
        selectedIndex={selectedIndex}
        handleSetIndex={handleSetIndex}
      />
      <ItemShower items={categoryItem} />
      <Footer />
    </div>
  );
};

export default Home;
