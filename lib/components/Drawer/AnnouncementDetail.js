'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _Calendar = require('../icon/Calendar');

var _Calendar2 = _interopRequireDefault(_Calendar);

var _frontendHelper = require('@fwork/frontend-helper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AnnouncementDetail = function (_React$Component) {
  _inherits(AnnouncementDetail, _React$Component);

  function AnnouncementDetail() {
    var _temp, _this, _ret;

    _classCallCheck(this, AnnouncementDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClickNotification = function () {
      var noti = _this.props.notification;
      if (noti.status === 1) {
        _this.props.markAsRead();
      }
      if (noti.url) {
        var url = noti.url;
        if (noti.url.slice(0, 4) !== 'http') {
          url = 'http://' + noti.url;
        }
        window.open(url);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  AnnouncementDetail.prototype.render = function render() {
    var notification = this.props.notification;


    return _react2.default.createElement(
      'div',
      {
        className: 'notification-detail' + (parseInt(notification.status) === 1 ? ' unread' : ''),
        onClick: this.handleClickNotification
      },
      _react2.default.createElement(
        'div',
        { className: 'fwork-header-info-mess' },
        _react2.default.createElement(
          'div',
          { className: 'wrap-content-notify' },
          notification.logoImage ? _react2.default.createElement('img', { width: 32, height: 32, src: notification.logoImage }) : _react2.default.createElement(
            _antd.Avatar,
            { src: notification.image, size: 34, className: 'fwork-avatar' },
            'FW'
          ),
          _react2.default.createElement(
            'div',
            { className: 'fwork-notification-content-mark' },
            _react2.default.createElement(
              'div',
              { className: 'fwork-notification-content' },
              _react2.default.createElement('p', { dangerouslySetInnerHTML: { __html: notification.content } }),
              _react2.default.createElement(
                'div',
                { className: 'created-date' },
                _react2.default.createElement(_Calendar2.default, null),
                _react2.default.createElement(
                  'span',
                  { className: 'fwork-notification-munite' },
                  _react2.default.createElement(
                    _frontendHelper.DateTimeFormat,
                    { ago: true },
                    notification.createdDate
                  )
                )
              )
            ),
            parseInt(notification.status) === 1 && _react2.default.createElement('div', { className: 'mark-as-read-dot', onClick: function onClick(e) {
                e.stopPropagation();
              } })
          )
        )
      )
    );
  };

  return AnnouncementDetail;
}(_react2.default.Component);

exports.default = AnnouncementDetail;
module.exports = exports['default'];