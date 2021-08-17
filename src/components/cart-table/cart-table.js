import React from 'react';
import './cart-table.scss';
import { connect } from 'react-redux';
import {itemRemoved} from '../../actions';
import WithRestoService from '../hoc';

const CartTable = (props) => {

    const {cart, itemRemoved} = props;
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    cart.map(item => {
                        const {price, quantity, id, title, url} = item;

                        return (
                            <div key={id} className="cart__item">
                                <img src={url} className="cart__item-img" alt={title}></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">{price}$</div>
                                {
                                    (quantity > 1) ? <div className="cart__item-price">Кол-во: {quantity}</div> : null
                                }
                                <div onClick={()=>itemRemoved(id)} className="cart__close">&times;</div>
                            </div>
                        )
                    })
                }
            </div>
            <button onClick={() => props.RestoService.postData(cart)} className="menu__btn">Send Order</button>
        </>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = {
    itemRemoved
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(CartTable));