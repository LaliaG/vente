import { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]); // Utilisez le state pour gérer le panier

  // Fonction pour ajouter un produit au panier
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Fonction pour supprimer un produit du panier
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  return (
    <div>
      {/* Affichez le contenu du panier ici */}
    </div>
  );
};

export default Cart;
