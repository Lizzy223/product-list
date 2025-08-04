import {  Check  } from 'lucide-react';

const Modal = ({getTotalPrice, cart, startNewOrder}) => {
  return (
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
  )
}

export default Modal