import * as StoreFrontAPIUtil from '../util/storefront_api_util';


export const RECEIVE_STOREFRONT = "RECEIVE_STOREFRONT"

export const receiveStorefront = (storefront) => {
  return {
    type: RECEIVE_STOREFRONT,
    storefront: storefront.storefront
  }
};



export const getStorefront = () => {
  return (dispatch) => {
    return StoreFrontAPIUtil.getStorefront().then((storefront) => {
      return dispatch(receiveStorefront(storefront));
    });
  };
}