import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCart, delCart } from '../redux/action/index.js';
import { Link } from 'react-router-dom';


const Cart = () => {
  const state = useSelector((state) => state.handleCart) || [];
  const dispatch = useDispatch();

  const addItem = (product) => {
    dispatch(addCart(product));
  };

  const removeItem = (product) => {
    dispatch(delCart(product));
  };

  const EmptyCart = () => (
    <div className="h-[30rem] flex flex-col gap-5 items-center justify-center">
      <h1 className="text-center text-xl font-semibold text-gray-700">
        Your Cart is Empty
      </h1>
      <Link
        to="/"
        className="text-xl py-1 text-center hover:text-cyan-500 duration-300 select-none"
      >
        &larr; Continue Shopping
      </Link>
    </div>
  );

  const ShowCart = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;

    state.map((item) => {
      return (subtotal += item.price * item.qty);
    });

    state.map((item) => {
      return (totalItems += item.qty);
    });

    return (
      <div>
        {state.map((item) => (
          <div key={item.id}>
            <img
              src={item.image}
              alt={item.title}
              width={100}
              height={75}
            />
            <p>
              <strong>{item.title}</strong>
            </p>
            <button onClick={() => removeItem(item)}>
              <i className="fas fa-minus"></i>
            </button>
            <p>{item.qty}</p>
            <button onClick={() => addItem(item)}>
              <i className="fas fa-plus"></i>
            </button>
            <p>
              <strong>
                <span className="text-muted">{item.qty}</span> x ${item.price}
              </strong>
            </p>
            <hr />
          </div>
        ))}
        <div>
          <ul>
            <li>
              Products ({totalItems}) <span>${Math.round(subtotal)}</span>
            </li>
            <li>
              Shipping <span>${shipping}</span>
            </li>
            <li>
              <strong>Total amount</strong>
              <span>
                <strong>${Math.round(subtotal + shipping)}</strong>
              </span>
            </li>
          </ul>
          <Link to="/checkout">
            Go to checkout
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div>
      <h1 className="text-center text-xl font-semibold text-gray-700">Cart</h1>
      {state.length > 0 ? <ShowCart /> : <EmptyCart />}
    </div>
  );
};

export default Cart;
