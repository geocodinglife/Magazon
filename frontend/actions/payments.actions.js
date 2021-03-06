import * as APIUtil from '../api/payments.api';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const createPayment = (payment) => {
  return (dispatch) => {
    return APIUtil.createPayment(payment).then((user) => {
      return dispatch(receiveUser(user));
    });
  }
}

export const updatePayment = (payment, payment_id) => {
  return (dispatch) => {
    return APIUtil.updatePayment(payment, payment_id).then((user) => {
      return dispatch(receiveUser(user));
    });
  }
}
