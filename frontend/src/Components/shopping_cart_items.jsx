import React from "react";
import "../Css/shopping_cart.css";
import Item from "../Assets/item.jpg";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

function ShoppingCartItems(props) {
  return (
    <div className="shopping-cart-item-container">
      <div className="shopping-cart-item-image clearfix">
        <center>
          <img
            src={Item}
            alt="item"
            style={{
              width: "110px",
              height: "70px",
              marginTop: "5px",
              borderRadius: "5px",
            }}
          />
        </center>
      </div>
      <div className="shopping-cart-item-name">
        <center>
          <p style={{ fontSize: "14px", marginTop: "3px" }}>{props.name}</p>
        </center>

        <p
          style={{
            fontSize: "15px",
            fontWeight: "500",
            marginTop: "20px",
            marginLeft: "5px",
          }}
        >
          Rs{props.price}
        </p>
      </div>
      <div className="shopping-cart-item-action">
        <DeleteOutlineOutlinedIcon
          fontSize="small"
          className="shopping-cart-item-action-btn"
        />
        <p style={{ fontSize: "13px", marginTop: "52px" }}>{props.qty}</p>
      </div>
    </div>
  );
}

export default ShoppingCartItems;
