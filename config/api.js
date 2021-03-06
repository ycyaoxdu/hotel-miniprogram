const URL = 'http://127.0.0.1:3000/api';

const IndexUrl = URL + '/index';
const UserInfoUrl = URL + '/userinfo';
const OrderUrl = URL + '/order';
const AdviceUrl = URL + '/advice';
const InformationUrl = URL + '/hotel';
const PayUrl = URL + '/pay';

module.exports = {
  IndexUrl,

  UserInfoUrl ,
  editUserInfoUrl : UserInfoUrl + '/edit',
  doEditUserInfoUrl : UserInfoUrl + '/doEdit',

  OrderUrl,
  doAddOrderUrl : OrderUrl + '/doAdd',
  checkOrderUrl : OrderUrl + '/edit',
  doEditOrderUrl : OrderUrl + '/doEdit',
  doDeleteOrderUrl : OrderUrl + '/delete',
  editStatusUrl : OrderUrl + '/editStatus',
  cancelOrder : OrderUrl + '/delete',

  addAdviceUrl : AdviceUrl + '/doAdd',

  InformationUrl,

  PayUrl
};