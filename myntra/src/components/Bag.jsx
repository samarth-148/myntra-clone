/** @format */

import BagItem from "./BagItem";
import BagSummary from "./BagSummary";
import { useSelector } from "react-redux";

const Bag = () => {
  const idOfItemsInBag = useSelector((state) => state.bagItems);
  const items = useSelector((state) => state.items);

  const itemsInBag = items.filter((item) => {
    return idOfItemsInBag.indexOf(item.id) !== -1; // Use !== -1 for clarity
  });

  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {itemsInBag.map((item) => {
              return <BagItem item={item} key={item.id} />;
            })}
          </div>
          <div className="bag-summary">
            <BagSummary />
          </div>
        </div>
      </main>
    </>
  );
};

export default Bag;
