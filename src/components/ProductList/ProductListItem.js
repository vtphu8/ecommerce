import "./ProductListItem.css";

import priceFormat from "../../hook/priceFormat"; // import hook định dạng tiền

const ProductListItem = (props) => {
  const price = priceFormat(props.product.price);

  // const closePopup = () => {
  //   dispatch(popupActions.HIDE_POPUP());
  // };

  return (
    <div className="ProductListItem col-sm-6 col-lg-4">
      <img src={props.product.img1} alt={props.product.name}></img>
      <div>{props.product.name}</div>
      <div>{price}</div>
    </div>
  );
};

export default ProductListItem;
