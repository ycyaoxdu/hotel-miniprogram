const URL = 'http://127.0.0.1:3000/api';

const IndexUrl = URL + '/index';
const UserInfoUrl = URL + '/userinfo';
const OrderUrl = URL + '/order';


module.exports = {
  IndexUrl,

  UserInfoUrl ,
  editUserInfoUrl : UserInfoUrl + '/edit',
  doEditUserInfoUrl : UserInfoUrl + '/doEdit',

  OrderUrl,
  doAddOrderUrl : OrderUrl + '/doAdd',
  EditOrderUrl : OrderUrl + '/edit',
  doEditOrderUrl : OrderUrl + '/doEdit',
  doDeleteOrderUrl : OrderUrl + '/delete'
};