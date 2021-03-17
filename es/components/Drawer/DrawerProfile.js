function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable linebreak-style */
import React from 'react';
import { Avatar, Button, Drawer, Form, Select } from 'antd';
import Logout from '../icon/Logout';
import Padlock from '../../assets/icons/padlock.svg';
import World from '../../assets/icons/World.svg';
import Swap from '../../assets/icons/swap.svg';
import ModalChooseCompany from '../Modal/ModalChooseCompany';
import i18n from 'i18next';

import { fetchAPI } from '@fwork/frontend-helper';

var Option = Select.Option;

var DrawerProfile = function (_React$Component) {
  _inherits(DrawerProfile, _React$Component);

  function DrawerProfile(props) {
    _classCallCheck(this, DrawerProfile);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.showModal = function () {
      _this.setState({
        visibleModal: true
      });
    };

    _this.handleSave = function () {
      _this.setState({
        visibleModal: false
      });
    };

    _this.handleCancel = function () {
      _this.setState({
        visibleModal: false
      });
    };

    _this.saveFormRef = function (formRef) {
      _this.formRef = formRef;
    };

    _this.handleChangeLang = function (value) {
      var HEADER_BACKEND = process.env.FWORK_API_ENDPOINT + '/header' || 'https://dev.fpt.work/api/v1/header';
      var url = 'setting';
      fetchAPI({
        baseURL: HEADER_BACKEND,
        url: url,
        method: 'PUT',
        body: {
          lng: value
        }
      }).then(function (res) {
        localStorage.setItem('lng', value);
        window.location.reload();
      }).catch(function (err) {
        console.error('handleChangeLang:', err);
      });
    };

    _this.gotoSetting = function () {
      var firstPath = window.location.pathname.split('/')[1];
      if (firstPath && firstPath === 'app-menu') {
        _this.props.history.push('/profile');
      } else {
        window.location.href = '/profile' || 'http://fpt.work/profile';
      }
    };

    _this.onChangeDarkMode = function (value) {
      var url = 'setting';
      fetchAPI({
        baseURL: process.env.FWORK_API_ENDPOINT + '/header' || 'https://dev.fpt.work/api/v1/header',
        url: url,
        method: 'PUT',
        body: {
          darkMode: value
        }
      }).then(function (res) {
        // eslint-disable-next-line no-console
        console.log('set dark mode');
      }).catch(function (err) {
        console.error('handleChangeLang:', err);
      });
    };

    _this.handleHover = function () {
      _this.setState(function (prevState) {
        return {
          isHovered: !prevState.isHovered
        };
      });
    };

    console.log('lng', localStorage.getItem('lng'));
    _this.state = {
      lang: localStorage.getItem('lng') || null,
      darkMode: false,
      visibleModal: false
    };
    return _this;
  }

  DrawerProfile.prototype.componentDidMount = function componentDidMount() {
    var authUser = this.props.authUser;

    if (!authUser.setting && !this.state.lang) {
      localStorage.setItem('lng', 'vi');
      return;
    }
    if (authUser.setting && authUser.setting.darkMode) {
      this.setState({
        darkMode: authUser.setting.darkMode
      });
    }
    if (authUser.setting && authUser.setting.lng) {
      if (authUser.setting.lng !== this.state.lang) {
        localStorage.setItem('lng', authUser.setting.lng);
        window.location.reload();
      }
    }
  };

  DrawerProfile.prototype.render = function render() {
    var _props = this.props,
        visible = _props.visible,
        onClose = _props.onClose,
        logout = _props.logout,
        authUser = _props.authUser;

    var btnClass = this.state.isHovered ? 'fwork-header-active ' : '';
    var company = !authUser.loading && authUser.isLogged ? authUser.company : null;
    var profile = !authUser.loading && authUser.isLogged ? authUser.profile : null;
    return React.createElement(
      Drawer,
      {
        className: 'drawer-profile',
        placement: 'right',
        closable: true,
        width: 384,
        onClose: onClose,
        visible: visible
      },
      React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { className: btnClass + 'fwork-title-profile' },
          React.createElement(
            'div',
            { className: 'icon-logout', onClick: logout, onMouseEnter: this.handleHover,
              onMouseLeave: this.handleHover },
            React.createElement(Logout, null)
          ),
          React.createElement(
            'div',
            { className: 'text-logout', onClick: logout, onMouseEnter: this.handleHover,
              onMouseLeave: this.handleHover },
            i18n.t('header:signOut')
          )
        ),
        React.createElement(
          'div',
          { className: 'fwork-profile-drawer' },
          React.createElement(
            'div',
            { className: 'fwork-profile-image-drawer' },
            !authUser.loading && authUser.isLogged && profile.avatar ? React.createElement('img', {
              src: profile.avatar,
              style: { margin: '0 auto' },
              alt: 'Avatar' }) : React.createElement(
              Avatar,
              { className: 'fwk-no-avatar',
                size: 40 },
              authUser.isLogged ? authUser.profile.firstName[0].toUpperCase() + authUser.profile.lastName[0].toUpperCase() : 'F'
            )
          ),
          React.createElement(
            'div',
            { className: 'fwork-profile-info' },
            React.createElement(
              'p',
              {
                className: 'fwork-profile-name' },
              !authUser.loading && authUser.isLogged ? profile.lastName + ' ' + profile.firstName : null
            ),
            React.createElement(
              'p',
              { className: 'fwork-profile-email' },
              !authUser.loading && authUser.isLogged ? authUser.email : null
            ),
            React.createElement(
              'p',
              { className: 'fwork-profile-job' },
              !authUser.loading && authUser.isLogged ? profile.title ? company.name + ' - ' + profile.title : company.name : null
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'fwork-profile-account' },
          React.createElement(
            'div',
            { className: 'fwork-profile-account-list' },
            React.createElement('img', { src: Padlock, alt: 'user-setting' }),
            React.createElement(
              'p',
              { onClick: this.gotoSetting, className: 'cursor-pointer' },
              i18n.t('header:userSetting')
            )
          ),
          React.createElement(
            'div',
            { className: 'fwork-profile-account-list' },
            React.createElement('img', { src: Swap, alt: 'switch-company' }),
            React.createElement(
              'p',
              { onClick: this.showModal, className: 'cursor-pointer' },
              i18n.t('header:switchCompany')
            )
          ),
          React.createElement(
            'div',
            { className: 'fwork-profile-account-list' },
            React.createElement('img', { src: World, alt: 'language' }),
            React.createElement(
              'div',
              { className: 'select-lang' },
              React.createElement(
                'span',
                null,
                i18n.t('header:language'),
                ' :'
              ),
              React.createElement(
                Select,
                { className: 'select-language', defaultValue: this.state.lang, onChange: this.handleChangeLang },
                React.createElement(
                  Option,
                  { value: 'vi', className: 'language' },
                  'Ti\u1EBFng Vi\u1EC7t'
                ),
                React.createElement(
                  Option,
                  { value: 'en', className: 'language' },
                  'English'
                )
              )
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'fwork-profile-footer' },
          React.createElement(
            'p',
            { className: 'fwork-profile-footer-p' },
            i18n.t('header:learningAndSupport')
          ),
          React.createElement(
            'p',
            { className: 'fwork-profile-footer-content' },
            i18n.t('header:content')
          ),
          React.createElement(
            Button,
            { className: 'fwork-profile-footer-btn', type: 'danger', ghost: true },
            i18n.t('header:start')
          )
        )
      ),
      React.createElement(ModalChooseCompany, {
        wrappedComponentRef: this.saveFormRef,
        visible: this.state.visibleModal,
        handleSave: this.handleSave,
        handleCancel: this.handleCancel
      })
    );
  };

  return DrawerProfile;
}(React.Component);

var _DrawerProfile = Form.create({ name: 'form_drawer_profile' })(DrawerProfile);
export default _DrawerProfile;