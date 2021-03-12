import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import styled from 'styled-components';

const Cart = ({ items, total, currency, removeFromCart }) => {
    return (
        <div>
            <h3>Shopping Cart</h3>

            <div className="cart">
                <div className="panel panel-default">
                    <div className="panel-body">
                        {items.length > 0 && (
                            <Car>
                                {items.map(item => (
                                    <CartItem key={item.id} {...item} onClick={() => removeFromCart(item.id)} />
                                ))}
                            </Car>
                        )}
                        {items.length === 0 && (
                            <div className="alert alert-info">Cart is empty</div>
                        )}
                        <Carttotal>Total: {total} INR</Carttotal>
                    </div>
                </div>
            </div>
        </div>
    );
}

Cart.propTypes = {
    items: PropTypes.array,
    total: PropTypes.number,
    currency: PropTypes.string,
    removeFromCart: PropTypes.func.isRequired
}

export default Cart;


export const Car = styled.nav`
  margin-bottom: 0.7em;
`;

export const Carttotal = styled.div`
  font-weight: bold;
  font-size: 1.5em;
  line-height: 1.1em;
  text-align: right;
`;