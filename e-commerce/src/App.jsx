import React, { useState } from 'react';
import products from './State/products'; // Importez la liste des produits depuis produits.js
import Product from './Components/Product'; // Importez le composant Product
import Cart from './Components/Cart';       // Importez le composant Cart
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Components/Header';
import CartModal from './Components/CartModal';

const App = () => {
   const [cartItems, setCartItems] = useState([]); // Utilisez le state pour gérer le panier
   const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

   const addToCart = (product) => {
     // Logique pour ajouter un produit au panier
    // Mettez à jour l'état du panier avec le produit sélectionné
   setCartItems([...cartItems, product]);
   };

   const removeFromCart = (productId) => {
   // Logique pour supprimer un produit du panier
     // Mettez à jour l'état du panier en filtrant le produit à supprimer
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
   };

  // const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false); // État pour ouvrir/fermer le panier
  
  const handleCartClick = () => {
       setIsCartOpen(!isCartOpen); // Inversez l'état du panier
    };
  

  return (
    
    <div className="App">
     <Header />
     <div className="container mt-5">
     <div className="row">
      {/* Autres éléments d'en-tête */<h1>Ma Boutique E-commerce</h1>}
      <div className="col-md-8">
             {products.map((product) => ( 
          <Product key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
        <div className="col-md-4">
        <Cart cartItems={cartItems} total={total} removeFromCart={removeFromCart} />
        </div>
       <Button variant="primary" onClick={handleCartClick}>
         Panier
       </Button>
       {/* Affichez le modal si le panier est ouvert */}
      {isCartOpen && <CartModal cartItems={cartItems} closeModal={() => setIsCartOpen(!isCartOpen)}><Cart/>
      </CartModal>}
      </div>
     
    
     
       
      
       
          
          
          
      </div>
    </div>
     
    
   );
  };

export default App;




