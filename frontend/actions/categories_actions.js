import * as APIUtil from '../util/categories_api_util';

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";
export const RECEIVE_CATEGORY = "RECEIVE_CATEGORY";

export const receiveCategories = ({categories}) => {
  return {
    type: RECEIVE_CATEGORIES,
    categories
  };
};

export const receiveCategory = ({category}) => {
  return {
    type: RECEIVE_CATEGORy,
    category
  }
}


export const fetchAllCategories = () => {
  return (dispatch) => {
    return APIUtil.fetchAllCategories().then((categories) => {
      return dispatch(receiveCategories(categories));
<<<<<<< HEAD
    });
  };
};
=======
    })
  }
}


export const fetchCategory = (id) => {
  return (dispatch) => {
    return APIUtil.fetchCategory(id).then((category) => {
      return dispatch(receiveCategory(category));
    })
  }
}
>>>>>>> 009c106e883c46fa9192256499e0fab90ce3680f