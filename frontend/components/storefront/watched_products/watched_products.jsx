import React from 'react';
import { withRouter, Link } from 'react-router';



class WatchedProducts extends React.Component {

  constructor(props) {
  super(props);
  this.state = { products: [] }
  }


  // componentWillReceiveProps(nextProps) {
  //   let id = nextProps.params.id
  //   if (id !== this.props.params.id) {
  //     this.props.fetchCategory(id).then((result) => {
  //       this.setState({ products: result.products })
  //   });
  //   }
  // }

  componentDidMount() {
    this.props.getWatchedProducts().then((result) => {
      debugger
      this.setState({ products: result.watchedProducts })
    })
  }

  getProductsList() {
    const products = this.state.products
    if (products.length > 4) {
    return (
      <ul className="storefront-list">
        {products.map((product, i) => {
          return (
            <li key={i} className="product-block">
              <div className="frontstore-product">
                <div>
                <Link to={`/categories/${product.category_id}/products/${product.id}`} >
                  <span className="product-title">{product.title}</span>
                </Link>
                </div>
                <div className="product-descr">
                  Description: {product.full_description}
                </div>
                <div className="product-price">
                  Price: ${product.price}
                </div>
                <div className="addToCart-button">
                  <button onClick={() => this.addToCart(product.id, 1)}>Add to cart</button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    )
  } else {
    return null;
  }
  }

  render() {
    debugger
    if (this.state.products && this.props.location.pathname == "/") {
    return (
      <div className="storefront-container">
        {this.getProductsList()}
      </div>
    );
    } else {
      return <div></div>;
    }
  }

}

export default withRouter(WatchedProducts);