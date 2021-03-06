import * as StoreFrontAPIUtil from '../api/storefront.api';

export const RECEIVE_STOREFRONT = "RECEIVE_STOREFRONT"

export const receiveStorefront = (storefront) => ({
  type: RECEIVE_STOREFRONT,
  products: storefront.storefront,
  smallBanners: storefront.small_banners,
  bigBanners: storefront.big_banners
});


export const getStorefront = () => {
  return (dispatch) => {
    return StoreFrontAPIUtil.getStorefront().then((storefront) => {
      return dispatch(receiveStorefront(storefront));
    });
  }
}
