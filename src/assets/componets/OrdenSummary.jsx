import React from 'react';
import '../componets/OrdenSummary.module.css'; // CSS tradicional
import '../componets/OrdenSummary.module.scss'; // SASS
import StyledOrderSummary from './StyledOrderSummary'; // Styled-components
import orderImage from '../../assets/imagen4.jpg';

const OrderSummary = () => {
  // Funciones de manejo de eventos
  const handleProceedToPayment = () => {
    // Simula una redirección a una página de pago
    window.location.href = 'https://www.tu-pagina-de-pago.com';
  };

  const handleCancelOrder = () => {
    // Muestra un mensaje de confirmación
    if (window.confirm('¿Estás seguro de que quieres cancelar el pedido?')) {
      alert('Pedido cancelado.');
    }
  };

  return (
    <div className="order-summary">
      <h1>Resumen del Servicio</h1>
      <p>Contribuyes a la preservación del medio ambiente, ya que apoyamos iniciativas ecológicas y sostenibles.</p>
      <img src={orderImage} alt="Order" style={{ width: '100px', height: '100px' }} />
      <StyledOrderSummary>
        <button className="btn-primary" onClick={handleProceedToPayment}>Proceder al Pago</button>
        <button className="btn-secondary" onClick={handleCancelOrder}>Cancelar Pedido</button>
      </StyledOrderSummary>
    </div>
  );
};

export default OrderSummary;