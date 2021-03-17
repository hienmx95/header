function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Avatar } from 'antd';
import Calendar from '../icon/Calendar';
import { DateTimeFormat } from '@fwork/frontend-helper';

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


    return React.createElement(
      'div',
      {
        className: 'notification-detail' + (parseInt(notification.status) === 1 ? ' unread' : ''),
        onClick: this.handleClickNotification
      },
      React.createElement(
        'div',
        { className: 'fwork-header-info-mess' },
        React.createElement(
          'div',
          { className: 'wrap-content-notify' },
          notification.logoImage ? React.createElement('img', { width: 32, height: 32, src: notification.logoImage }) : React.createElement(
            Avatar,
            { src: notification.image, size: 34, className: 'fwork-avatar' },
            'FW'
          ),
          React.createElement(
            'div',
            { className: 'fwork-notification-content-mark' },
            React.createElement(
              'div',
              { className: 'fwork-notification-content' },
              React.createElement('p', { dangerouslySetInnerHTML: { __html: notification.content } }),
              React.createElement(
                'div',
                { className: 'created-date' },
                React.createElement(Calendar, null),
                React.createElement(
                  'span',
                  { className: 'fwork-notification-munite' },
                  React.createElement(
                    DateTimeFormat,
                    { ago: true },
                    notification.createdDate
                  )
                )
              )
            ),
            parseInt(notification.status) === 1 && React.createElement('div', { className: 'mark-as-read-dot', onClick: function onClick(e) {
                e.stopPropagation();
              } })
          )
        )
      )
    );
  };

  return AnnouncementDetail;
}(React.Component);

export default AnnouncementDetail;