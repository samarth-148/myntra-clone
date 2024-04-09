/** @format */
import { useDispatch, useSelector } from "react-redux";
import { bagItemsActions } from "../store/bagItemsSlice";

const DisplayHomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const idOfitemsInbag = useSelector((state) => state.bagItems);
  const isItemFound = idOfitemsInbag.includes(item.id);
  const handleAddTobag = () => {
    dispatch(bagItemsActions.addToBag(item.id));
  };
  const handleRemoveFromBag = () => {
    dispatch(bagItemsActions.removeFromBag(item.id));
  };
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {isItemFound ? (
        <button
          className="btn btn-danger btn-add-bag"
          onClick={handleRemoveFromBag}
        >
          Remove
        </button>
      ) : (
        <button className="btn-add-bag" onClick={handleAddTobag}>
          Add to Bag
        </button>
      )}
    </div>
  );
};

export default DisplayHomeItem;
