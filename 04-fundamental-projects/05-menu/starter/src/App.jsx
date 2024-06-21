import { useState } from "react";
import MenuList from "./MenuList";
import data from "./data";
import Categories from "./Categories";

const allCategories = ["all", ...new Set(data.map((item) => item.category))];

const App = () => {
  const [menu, setMenu] = useState(data);
  const filterMenu = (category) => {
    if (category.toLowerCase() === "all") {
      setMenu(data);
    } else {
      const filteredMenu = data.filter((dish) => dish.category === category);
      setMenu(filteredMenu);
    }
  }
  return (
    <main>
      <section className="menu">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="title-underline"></div>
        </div>
        <Categories categories={allCategories} filterCategory={filterMenu} />
        <MenuList menuItems={menu} />
      </section>
    </main>
  )
};
export default App;
