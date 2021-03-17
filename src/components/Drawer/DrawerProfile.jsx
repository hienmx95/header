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

const { Option } = Select;

class DrawerProfile extends React.Component {
  constructor (props) {
    super(props);
    console.log('lng', localStorage.getItem('lng'));
    this.state = {
      lang: localStorage.getItem('lng') || null,
      darkMode: false,
      visibleModal: false
    };
  }

  showModal = () => {
    this.setState({
      visibleModal: true
    });
  };

  handleSave = () => {
    this.setState({
      visibleModal: false
    });
  };

  handleCancel = () => {
    this.setState({
      visibleModal: false
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  componentDidMount () {
    const { authUser } = this.props;
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
  }

  handleChangeLang = (value) => {
    const HEADER_BACKEND = process.env.FWORK_API_ENDPOINT + '/header' || 'https://dev.fpt.work/api/v1/header';
    const url = 'setting';
    fetchAPI({
      baseURL: HEADER_BACKEND,
      url,
      method: 'PUT',
      body: {
        lng: value
      }
    }).then(res => {
      localStorage.setItem('lng', value);
      window.location.reload();
    }).catch(err => {
      console.error('handleChangeLang:', err);
    });
  };

  gotoSetting = () => {
    const firstPath = window.location.pathname.split('/')[1];
    if (firstPath && firstPath === 'app-menu') {
      this.props.history.push('/profile');
    } else {
      window.location.href = '/profile' || 'http://fpt.work/profile';
    }
  };

  onChangeDarkMode = (value) => {
    const url = 'setting';
    fetchAPI({
      baseURL: process.env.FWORK_API_ENDPOINT + '/header' || 'https://dev.fpt.work/api/v1/header',
      url,
      method: 'PUT',
      body: {
        darkMode: value
      }
    }).then(res => {
      // eslint-disable-next-line no-console
      console.log('set dark mode');
    }).catch(err => {
      console.error('handleChangeLang:', err);
    });
  };

  handleHover = () => {
    this.setState(prevState => ({
      isHovered: !prevState.isHovered
    }));
  };

  render () {
    const {
      visible,
      onClose,
      logout,
      authUser
    } = this.props;
    const btnClass = this.state.isHovered ? 'fwork-header-active ' : '';
    const company = (!authUser.loading && authUser.isLogged) ? authUser.company : null;
    const profile = (!authUser.loading && authUser.isLogged) ? authUser.profile : null;
    return (
      <Drawer
        className="drawer-profile"
        placement="right"
        closable={true}
        width={384}
        onClose={onClose}
        visible={visible}
      >
        <div>
          <div className={btnClass + 'fwork-title-profile'}>
            <div className="icon-logout" onClick={logout} onMouseEnter={this.handleHover}
                 onMouseLeave={this.handleHover}>
              <Logout/>
            </div>
            <div className="text-logout" onClick={logout} onMouseEnter={this.handleHover}
                 onMouseLeave={this.handleHover}>
              {i18n.t('header:signOut')}
            </div>
          </div>
          <div className="fwork-profile-drawer">
            <div className="fwork-profile-image-drawer">
              {
                !authUser.loading && authUser.isLogged && profile.avatar
                  ? (<img
                    src={profile.avatar}
                    style={{ margin: '0 auto' }}
                    alt="Avatar"/>) : (
                    <Avatar className="fwk-no-avatar"
                            size={40}>{authUser.isLogged ? authUser.profile.firstName[0].toUpperCase() + authUser.profile.lastName[0].toUpperCase() : 'F'}</Avatar>
                  )
              }
            </div>
            <div className="fwork-profile-info">
              <p
                className="fwork-profile-name">{!authUser.loading && authUser.isLogged ? `${profile.lastName} ${profile.firstName}` : null}</p>
              <p className="fwork-profile-email">{!authUser.loading && authUser.isLogged ? authUser.email : null}</p>
              <p className="fwork-profile-job">{!authUser.loading && authUser.isLogged ? profile.title
                ? company.name + ' - ' + profile.title : company.name : null}</p>
            </div>
          </div>
          <div className="fwork-profile-account">
            <div className="fwork-profile-account-list">
              <img src={Padlock} alt="user-setting"/>
              <p onClick={this.gotoSetting} className="cursor-pointer">{i18n.t('header:userSetting')}</p>
            </div>
            <div className="fwork-profile-account-list">
              <img src={Swap} alt="switch-company"/>
              <p onClick={this.showModal} className="cursor-pointer">{i18n.t('header:switchCompany')}</p>
            </div>
            <div className="fwork-profile-account-list">
              <img src={World} alt="language"/>
              <div className="select-lang">
                <span>{i18n.t('header:language')} :</span>
                <Select className="select-language" defaultValue={this.state.lang} onChange={this.handleChangeLang}>
                  <Option value="vi" className="language">Tiếng Việt</Option>
                  <Option value="en" className="language">English</Option>
                </Select>
              </div>
            </div>
          </div>
          <div className="fwork-profile-footer">
            <p className="fwork-profile-footer-p">{i18n.t('header:learningAndSupport')}</p>
            <p className="fwork-profile-footer-content">{i18n.t('header:content')}</p>
            <Button className="fwork-profile-footer-btn" type="danger" ghost>{i18n.t('header:start')}</Button>
          </div>
        </div>
        <ModalChooseCompany
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visibleModal}
          handleSave={this.handleSave}
          handleCancel={this.handleCancel}
        />

      </Drawer>
    );
  }
}

const _DrawerProfile = Form.create({ name: 'form_drawer_profile' })(DrawerProfile);
export default _DrawerProfile;
