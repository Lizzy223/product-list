import React, { useState } from 'react';
import {  ShoppingCart, Plus, Minus, X, Check  } from 'lucide-react';

const PerfmeCard = () => {
  const [cart, setCart] = useState([]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const desserts = [
    {
      id: 1,
      name: "Waffle with Berries",
      category: "Waffle",
      price: 6.50,
      image: "https://images.unsplash.com/photo-1562376552-0d160ee0df14?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      name: "Vanilla Bean Crème Brûlée",
      category: "Crème Brûlée",
      price: 7.00,
      image: "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?w=300&h=200&fit=crop"
    },
    {
      id: 3,
      name: "Macaron Mix of Five",
      category: "Macaron",
      price: 8.00,
      image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=300&h=200&fit=crop"
    },
    {
      id: 4,
      name: "Classic Tiramisu",
      category: "Tiramisu",
      price: 5.50,
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=300&h=200&fit=crop"
    },
    {
      id: 5,
      name: "Pistachio Baklava",
      category: "Baklava",
      price: 4.00,
      image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=300&h=200&fit=crop"
    },
    {
      id: 6,
      name: "Lemon Meringue Pie",
      category: "Pie",
      price: 5.00,
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=300&h=200&fit=crop"
    },
    {
      id: 7,
      name: "Red Velvet Cake",
      category: "Cake",
      price: 4.50,
      image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=300&h=200&fit=crop"
    },
    {
      id: 8,
      name: "Salted Caramel Brownie",
      category: "Brownie",
      price: 5.50,
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&h=200&fit=crop"
    },
    {
      id: 9,
      name: "Vanilla Panna Cotta",
      category: "Panna Cotta",
      price: 6.50,
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300&h=200&fit=crop"
    }
  ];

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
              <div key={dessert.id} style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s',
                position: 'relative'
              }}>
                <div style={{
                  position: 'relative',
                  height: '200px',
                  backgroundImage: `url(${dessert.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}>
                  {cartItem ? (
                    <div style={{
                      position: 'absolute',
                      bottom: '15px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      display: 'flex',
                      alignItems: 'center',
                      backgroundColor: '#C2410C',
                      borderRadius: '25px',
                      padding: '8px 12px',
                      gap: '12px'
                    }}>
                      <button
                        onClick={() => updateQuantity(dessert.id, cartItem.quantity - 1)}
                        style={{
                          background: 'none',
                          border: '2px solid white',
                          borderRadius: '50%',
                          width: '20px',
                          height: '20px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          color: 'white'
                        }}
                      >
                        <Minus size={12} />
                      </button>
                      <span style={{ color: 'white', fontWeight: 'bold', minWidth: '20px', textAlign: 'center' }}>
                        {cartItem.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(dessert.id, cartItem.quantity + 1)}
                        style={{
                          background: 'none',
                          border: '2px solid white',
                          borderRadius: '50%',
                          width: '20px',
                          height: '20px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          color: 'white'
                        }}
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => addToCart(dessert)}
                      style={{
                        position: 'absolute',
                        bottom: '15px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: 'white',
                        border: '2px solid #C2410C',
                        borderRadius: '25px',
                        padding: '8px 16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontWeight: '500',
                        color: '#C2410C',
                        transition: 'all 0.2s',
                        whiteSpace: 'nowrap'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.backgroundColor = '#C2410C';
                        e.target.style.color = 'white';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.backgroundColor = 'white';
                        e.target.style.color = '#C2410C';
                      }}
                    >
                      <ShoppingCart size={16} />
                      Add to Cart
                    </button>
                  )}
                </div>

                <div style={{ padding: '1rem' }}>
                  <p style={{
                    fontSize: '0.875rem',
                    color: '#666',
                    marginBottom: '0.5rem'
                  }}>
                    {dessert.category}
                  </p>
                  <h3 style={{
                    fontSize: '1.125rem',
                    fontWeight: 'bold',
                    color: '#333',
                    marginBottom: '0.5rem'
                  }}>
                    {dessert.name}
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    color: '#C2410C'
                  }}>
                    ${dessert.price.toFixed(2)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Cart Sidebar */}
      <div style={{
        width: '320px',
        backgroundColor: 'white',
        padding: '2rem',
        borderLeft: '1px solid #e5e5e5',
        position: 'sticky',
        top: '0',
        height: '320px',
        overflowY: 'auto'
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#C2410C',
          marginBottom: '1.5rem'
        }}>
          Your Cart ({getTotalItems()})
        </h2>

        {cart.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '3rem 0',
            color: '#666'
          }}>
            <div style={{
              width: '100px',
              height: '100px',
              backgroundColor: '#f5f5f5',
              borderRadius: '50%',
              margin: '0 auto 1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <ShoppingCart size={40} color="#ccc" />
            </div>
            <p>Your added items will appear here</p>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: '2rem' }}>
              {cart.map(item => (
                <div key={item.id} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingBottom: '1rem',
                  marginBottom: '1rem',
                  borderBottom: '1px solid #f0f0f0'
                }}>
                  <div style={{ flex: 1 }}>
                    <h4 style={{
                      fontSize: '0.875rem',
                      fontWeight: 'bold',
                      color: '#333',
                      marginBottom: '0.25rem'
                    }}>
                      {item.name}
                    </h4>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      fontSize: '0.875rem'
                    }}>
                      <span style={{ color: '#C2410C', fontWeight: 'bold' }}>
                        {item.quantity}x
                      </span>
                      <span style={{ color: '#666' }}>
                        @ ${item.price.toFixed(2)}
                      </span>
                      <span style={{ color: '#333', fontWeight: 'bold' }}>
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{
                      background: 'none',
                      border: '1px solid #ddd',
                      borderRadius: '50%',
                      width: '20px',
                      height: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      color: '#666',
                      marginLeft: '1rem'
                    }}
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}
            </div>

            <div style={{
              paddingTop: '1rem',
              borderTop: '2px solid #f0f0f0',
              marginBottom: '1.5rem'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1rem'
              }}>
                <span style={{ fontSize: '1rem', color: '#333' }}>Order Total</span>
                <span style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#333'
                }}>
                  ${getTotalPrice()}
                </span>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1.5rem',
                fontSize: '0.875rem',
                color: '#666'
              }}>
                <span style={{
                  width: '16px',
                  height: '16px',
                  backgroundColor: '#22c55e',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '12px'
                }}>
                  ✓
                </span>
                This is a <strong>carbon-neutral</strong> delivery
              </div>

              <button
                onClick={confirmOrder}
                style={{
                  width: '100%',
                  backgroundColor: '#C2410C',
                  color: 'white',
                  border: 'none',
                  borderRadius: '25px',
                  padding: '1rem 2rem',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#9f2a08'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#C2410C'}
              >
                Confirm Order
              </button>
            </div>
          </>
        )}
      </div>
          {/* Order Confirmation Modal */}
      {showConfirmModal && (
        <div style={{
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '2rem',
            maxWidth: '500px',
            width: '90%',
            maxHeight: '80vh',
            overflowY: 'auto'
          }}>
            {/* Success Icon */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '1rem'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#22c55e',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Check size={30} color="white" />
              </div>
            </div>

            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '0.5rem',
              color: '#333'
            }}>
              Order Confirmed
            </h2>

            <p style={{
              textAlign: 'center',
              color: '#666',
              marginBottom: '2rem'
            }}>
              We hope you enjoy your food!
            </p>

            {/* Order Items */}
            <div style={{ marginBottom: '1.5rem' }}>
              {cart.map(item => (
                <div key={item.id} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem 0',
                  borderBottom: '1px solid #f0f0f0'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      borderRadius: '8px'
                    }}></div>
                    <div>
                      <h4 style={{
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        color: '#333',
                        marginBottom: '0.25rem'
                      }}>
                        {item.name}
                      </h4>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.875rem'
                      }}>
                        <span style={{ color: '#C2410C', fontWeight: 'bold' }}>
                          {item.quantity}x
                        </span>
                        <span style={{ color: '#666' }}>
                          @ ${item.price.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <span style={{
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    color: '#333'
                  }}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
              </div>

            {/* Order Total */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: '1rem',
              borderTop: '2px solid #f0f0f0',
              marginBottom: '2rem'
            }}>
              <span style={{
                fontSize: '1.125rem',
                fontWeight: 'bold',
                color: '#333'
              }}>
                Order Total
              </span>
              <span style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#333'
              }}>
                ${getTotalPrice()}
              </span>
            </div>

            {/* Start New Order Button */}
            <button
              onClick={startNewOrder}
              style={{
                width: '100%',
                backgroundColor: '#C2410C',
                color: 'white',
                border: 'none',
                borderRadius: '25px',
                padding: '1rem 2rem',
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#9f2a08'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#C2410C'}
            >
              Start New Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerfmeCard;