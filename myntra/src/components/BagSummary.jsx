/** @format */
import { useSelector } from "react-redux";

const BagSummary = () => {
  const idOfItemsInBag = useSelector((state) => state.bagItems);
  const items = useSelector((state) => state.items);
  const CONVENIENCE_FEE = 99;

  let totalItem = idOfItemsInBag.length;
  let totalMRP = 0;
  let totalDiscount = 0;
  let finalPayment = 0;

  const itemsInBag = items.filter((item) => {
    if (idOfItemsInBag.includes(item.id)) {
      totalMRP += item.original_price;
      totalDiscount += item.original_price - item.current_price;
      return true;
    }
    return false;
  });

  finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEE;

  return (
    <>
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">
            {totalItem > 0 ? CONVENIENCE_FEE : 0}
          </span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">
            ₹{totalItem > 0 ? finalPayment : 0}
          </span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </>
  );
};

export default BagSummary;
