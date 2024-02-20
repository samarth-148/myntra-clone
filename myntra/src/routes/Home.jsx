/** @format */
import "../index.css";
import DisplayHomeItem from "../components/DisplayHomeItem";
import { useSelector } from "react-redux";

const Home = () => {
  const items = useSelector((state) => state.items);

  return (
    <main>
      <div className="items-container">
        {items.map((item, index) => {
          return <DisplayHomeItem item={item} key={index} />;
        })}
      </div>
    </main>
  );
};

export default Home;
