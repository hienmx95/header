import React from 'react';
import { Tooltip } from 'antd';
import MarkReadAll from '../icon/MarkReadAll';
import DesktopOn from '../icon/DesktopOn';
import DesktopOff from '../icon/DesktopOff';
import Close from '../icon/Close';

import { connect } from 'react-redux';
import { fetchAPI, setCurrentUser } from '@fwork/frontend-helper';
import { openNotification } from '../notification';
import i18n from 'i18next';

class MoreOption extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      show: false
    };

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount () {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount () {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef (node) {
    this.wrapperRef = node;
  }

  handleClickOutside (event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({
        show: false
      });
    }
  }

  showMore = () => {
    this.setState({
      show: true
    });
  };

  toggleNotification = (status) => {
    this.setState({
      show: false
    });
    const HEADER_BACKEND = process.env.FWORK_API_ENDPOINT + '/header' || 'https://dev.fpt.work/api/v1/header';
    const url = 'setting';
    fetchAPI({
      baseURL: HEADER_BACKEND,
      url,
      method: 'PUT',
      body: {
        notification: status
      }
    }).then(res => {
      let message = 'Bật thông báo thành công.';

      if (!status) {
        message = 'Tắt thông báo thành công.';
      }

      openNotification('success', null, message, null, 3);
      this.props.setCurrentUser();
    }).catch(err => {
      console.error('toggleNotification:', err);
    });
  };

  markAsRead = () => {
    this.props.markAsRead();
    this.setState({
      show: false
    });
  };

  render () {
    const { onClose, authUser } = this.props;

    return (
      <div className="wrap-icon-func">

        <Tooltip title={i18n.t('header:markAllRead')} placement="bottom">
          <div onClick={this.markAsRead} className="icon-func">
            <MarkReadAll />
          </div>
        </Tooltip>

        {
          authUser.setting && authUser.setting.notification
            ? <Tooltip title={i18n.t('header:turnOffNotify')} placement="bottom">
              <div onClick={() => this.toggleNotification(false)} className="icon-func">
                <DesktopOff />
              </div>
            </Tooltip>
            : <Tooltip title={i18n.t('header:turnOnNotify')} placement="bottom">
              <div onClick={() => this.toggleNotification(true)} className="icon-func">
                <DesktopOn />
              </div>
            </Tooltip>
        }

        <Tooltip title={i18n.t('header:close')} placement="bottom">
          <div onClick={onClose} className="icon-func">
            <Close />
          </div>
        </Tooltip>
      </div>
    );
  }
}

function mapStateToProps (state) {
  const { authUser } = state;
  return {
    authUser
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: () => dispatch(setCurrentUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoreOption);
