// cOMPOSANT D4AFFICHAGE DU PANIER

import React from 'react';
import CartModal from './CartModal';

const Cart = ({ cartItems, calculateTotal, removeFromCart }) => {
  return (
    
    <div className="card">
     <CartModal show={true} onHide={handleCartClick}> 
     
      <div className="card-header" closeButton>Panier</div>
      <div className="card-body">
        {cartItems.map((item) => (
          <div key={item.id} className="mb-3">
            <p>{item.name}</p>
            <p>Quantité : {item.quantity}</p>
            <p>Prix unitaire : {item.price} €</p>
            <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>
              Supprimer
            </button>
          </div>
        ))}
        <p className="font-weight-bold">Total : {calculateTotal(cartItems)} €</p>
      </div>
      <div className="card-footer">
      <Button variant="secondary" onClick={handleCartClick}>
//           Fermer
//         </Button>
      </div>
      </CartModal> 
    </div>

  );
};

export default Cart;




