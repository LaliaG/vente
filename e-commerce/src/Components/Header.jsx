import React from 'react';

const Header = () => {
  return (
    <header>
      {/* Votre contenu d'en-tête */}
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a href="#" class="navbar-brand">
                    <i class="bi bi-globe2"></i> E-commerce App
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarOptions" aria-controls="navbarOptions" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <button class="btn btn-outline-light" type="submit">Panier</button>
                </div>
                
        </nav>
    </header>
  );
};

export default Header;