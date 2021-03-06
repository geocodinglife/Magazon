import React from 'react';
import { withRouter, Link } from 'react-router';


class WatchedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] }
  }

  componentDidMount() {
    this.props.getWatchedProducts();
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.products !== nextProps.watchedProducts) {
      this.setState({ products: nextProps.watchedProducts });
    }
  }

  // TODO: use ellipsis
  updateDescrLength(str) {
    if (str && str.length > 200) {
      return str.slice(0, 197) + "..."
    }
    return str;
  }

  getInternalProductsList() {
    const products = this.state.products.slice(1)
    if (this.props.currentUser && products.length > 0) {
      return (
        <div className="product-watched-products-container">
          <p>Your recently watched items</p>
          <ul className="bought-together-list">
            {products.map((product, i) => {
              return (
                <li key={i} className="single-product-block">
                  <div className="bought-together">
                    <div className="bt-product">
                      <Link to={`/categories/${product.category_id}/products/${product.id}`} >
                        <span className="product-img"><img src={product.product_pictures[0].image_url} /></span>
                        <span>{product.title}</span>
                      </Link>
                    </div>
                    <div>
                      <span className="bought-together-price">${Number(product.price).toFixed(2)}</span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      );
    } else {
      return null;
    }
  }


  getExternalProductsList() {
    const products = this.state.products.slice(0, 6)
    if (this.props.currentUser && products.length > 2) {
    return (
      <div className="watched-products-container">
        <p>Your recently watched items</p>
          <ul className="watched-products-list">
            {products.map((product, i) => {
              return (
                <li key={i} className="product-block">
                  <div className="frontstore-product watched-products">
                    <div>
                      <Link to={`/categories/${product.category_id}/products/${product.id}`} >
                        <span className="product-img"><img src={product.product_pictures[0].image_url} /></span>
                      </Link>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
      </div>
    )
  } else {
    return null;
  }
  }

  render() {
    return (
      <div>
        {this.state.products && this.props.indexPage && this.getExternalProductsList()}
        {this.state.products && !this.props.indexPage && this.getInternalProductsList()}
      </div>
    );
  }

}

export default withRouter(WatchedProducts);
