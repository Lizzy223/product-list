import React, { useState } from 'react';
import Modal from './Modal';
import AddToCart from './addToCart';
import Card from './Card';
import { desserts } from './desserts';

const PerfmeCard = () => {
  const [cart, setCart] = useState([]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const addToCart = (dessert) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === dessert.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === dessert.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...dessert, quantity: 1 }];
    });
  };

  const removeFromCart = (dessertId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== dessertId));
  };

  const updateQuantity = (dessertId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(dessertId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === dessertId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getItemInCart = (dessertId) => {
    return cart.find(item => item.id === dessertId);
  };

   const confirmOrder = () => {
    setShowConfirmModal(true);
  };

  const startNewOrder = () => {
    setCart([]);
    setShowConfirmModal(false);
  };

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#fef7f0'
    }}>
      {/* Main Content */}
      <div style={{
        flex: '1',
        padding: '2rem',
        paddingRight: '1rem'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: '#8B4513',
          marginBottom: '2rem'
        }}>
          Desserts
        </h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem'
        }}>
          {desserts.map(dessert => {
            const cartItem = getItemInCart(dessert.id);
            
            return (
              <Card dessert={dessert} updateQuantity={updateQuantity} addToCart={addToCart} cartItem={cartItem} />
            );
          })}
        </div>
      </div>

      {/* Cart Sidebar */}
      <AddToCart
        cart={cart}
        getTotalItems={getTotalItems}
        removeFromCart={removeFromCart}
        getTotalPrice={getTotalPrice}
        confirmOrder={confirmOrder}
      />
      {/* Order Confirmation Modal */}
      {showConfirmModal && (
        <Modal getTotalPrice={getTotalPrice} cart={cart} startNewOrder={startNewOrder} />
      )}
    </div>
  );
};

export default PerfmeCard;