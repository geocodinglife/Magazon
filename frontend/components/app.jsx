import React from 'react';
import { withRouter } from 'react-router';
import { logout } from '../actions/session_actions';
import HeaderContainer from './header/header_container';
import CategoriesContainer from './categories/categories_container';
import SessionStatusContainer from './session_status/session_status_container';
import StorefrontContainer from './storefront/storefront/storefront_container';
import WatchedProductsContainer from './storefront/watched_products/watched_products_container';
import Footer from './footer/footer';
import MainStorefront from './storefront/main_storefront';

const App =({ children }) => {
  let indexPage = false
  if (!children) {
    indexPage = true
  }
    return(
      <div id="top" className="main-container">
        <nav>
          <HeaderContainer>
            <SessionStatusContainer />
            <CategoriesContainer />
          </HeaderContainer>
        </nav>
        <div>
          <MainStorefront indexPage={indexPage} />
        </div>
        <div>
          { children }
        </div>
        <div className="footer-container">
          <Footer />
        </div>
      </div>
    );
  };


export default App;
