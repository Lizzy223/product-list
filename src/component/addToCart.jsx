import {  ShoppingCart, X  } from 'lucide-react';

const AddToCart = ({ cart, getTotalItems, removeFromCart, getTotalPrice, confirmOrder }) => {
  return (
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
  )
}

export default AddToCart