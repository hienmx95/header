'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _MarkReadAll = require('../icon/MarkReadAll');

var _MarkReadAll2 = _interopRequireDefault(_MarkReadAll);

var _DesktopOn = require('../icon/DesktopOn');

var _DesktopOn2 = _interopRequireDefault(_DesktopOn);

var _DesktopOff = require('../icon/DesktopOff');

var _DesktopOff2 = _interopRequireDefault(_DesktopOff);

var _Close = require('../icon/Close');

var _Close2 = _interopRequireDefault(_Close);

var _reactRedux = require('react-redux');

var _frontendHelper = require('@fwork/frontend-helper');

var _notification = require('../notification');

var _i18next = require('i18next');

var _i18next2 = _interopRequireDefault(_i18next);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MoreOption = function (_React$Component) {
  _inherits(MoreOption, _React$Component);

  function MoreOption(props) {
    _classCallCheck(this, MoreOption);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.showMore = function () {
      _this.setState({
        show: true
      });
    };

    _this.toggleNotification = function (status) {
      _this.setState({
        show: false
      });
      var HEADER_BACKEND = process.env.FWORK_API_ENDPOINT + '/header' || 'https://dev.fpt.work/api/v1/header';
      var url = 'setting';
      (0, _frontendHelper.fetchAPI)({
        baseURL: HEADER_BACKEND,
        url: url,
        method: 'PUT',
        body: {
          notification: status
        }
      }).then(function (res) {
        var message = 'Bật thông báo thành công.';

        if (!status) {
          message = 'Tắt thông báo thành công.';
        }

        (0, _notification.openNotification)('success', null, message, null, 3);
        _this.props.setCurrentUser();
      }).catch(function (err) {
        console.error('toggleNotification:', err);
      });
    };

    _this.markAsRead = function () {
      _this.props.markAsRead();
      _this.setState({
        show: false
      });
    };

    _this.state = {
      show: false
    };

    _this.setWrapperRef = _this.setWrapperRef.bind(_this);
    _this.handleClickOutside = _this.handleClickOutside.bind(_this);
    return _this;
  }

  MoreOption.prototype.componentDidMount = function componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  };

  MoreOption.prototype.componentWillUnmount = function componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  };

  MoreOption.prototype.setWrapperRef = function setWrapperRef(node) {
    this.wrapperRef = node;
  };

  MoreOption.prototype.handleClickOutside = function handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({
        show: false
      });
    }
  };

  MoreOption.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        onClose = _props.onClose,
        authUser = _props.authUser;


    return _react2.default.createElement(
      'div',
      { className: 'wrap-icon-func' },
      _react2.default.createElement(
        _antd.Tooltip,
        { title: _i18next2.default.t('header:markAllRead'), placement: 'bottom' },
        _react2.default.createElement(
          'div',
          { onClick: this.markAsRead, className: 'icon-func' },
          _react2.default.createElement(_MarkReadAll2.default, null)
        )
      ),
      authUser.setting && authUser.setting.notification ? _react2.default.createElement(
        _antd.Tooltip,
        { title: _i18next2.default.t('header:turnOffNotify'), placement: 'bottom' },
        _react2.default.createElement(
          'div',
          { onClick: function onClick() {
              return _this2.toggleNotification(false);
            }, className: 'icon-func' },
          _react2.default.createElement(_DesktopOff2.default, null)
        )
      ) : _react2.default.createElement(
        _antd.Tooltip,
        { title: _i18next2.default.t('header:turnOnNotify'), placement: 'bottom' },
        _react2.default.createElement(
          'div',
          { onClick: function onClick() {
              return _this2.toggleNotification(true);
            }, className: 'icon-func' },
          _react2.default.createElement(_DesktopOn2.default, null)
        )
      ),
      _react2.default.createElement(
        _antd.Tooltip,
        { title: _i18next2.default.t('header:close'), placement: 'bottom' },
        _react2.default.createElement(
          'div',
          { onClick: onClose, className: 'icon-func' },
          _react2.default.createElement(_Close2.default, null)
        )
      )
    );
  };

  return MoreOption;
}(_react2.default.Component);

function mapStateToProps(state) {
  var authUser = state.authUser;

  return {
    authUser: authUser
  };
}

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setCurrentUser: function setCurrentUser() {
      return dispatch((0, _frontendHelper.setCurrentUser)());
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MoreOption);
module.exports = exports['default'];