import React from 'react'
import {  ShoppingCart, Plus, Minus  } from 'lucide-react';

const Card = ({dessert, updateQuantity, addToCart, cartItem}) => {
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
                    color: 'hsl(228, 12%, 48%)',
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
  )
}

export default Card