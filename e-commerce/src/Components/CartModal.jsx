import React from 'react';
import {createPortal} from "react-dom";
//import { Modal, Button } from 'react-bootstrap'; // Importez le modal Bootstrap
import classes from './Modal.module.css';

const CartModal = ({cartItems}) => {
  // Logique pour récupérer le contenu du panier (noms, quantités, prix)
  const totalAmount = cartItems.reduce((acc, item) => acc + item.prix * item.quantite, 0);


  const handleRemoveItem = (productId) => {
    // Logique pour supprimer un produit du panier
  };

  return createPortal(
    <div className={classes.CartModal}>
        <div className={classes.modalContent}>{props.children}
        <button onClick={props.closeModal}>Fermer</button>
        </div>
    
    </div>,
    document.body
  );
};

export default CartModal;
