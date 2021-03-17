import React from 'react';
import { Avatar } from 'antd';
import Calendar from '../icon/Calendar';
import { DateTimeFormat } from '@fwork/frontend-helper';

class AnnouncementDetail extends React.Component {
  handleClickNotification = () => {
    const noti = this.props.notification;
    if (noti.status === 1) {
      this.props.markAsRead();
    }
    if (noti.url) {
      let url = noti.url;
      if (noti.url.slice(0, 4) !== 'http') {
        url = 'http://' + noti.url;
      }
      window.open(url);
    }
  }

  render () {
    const {
      notification
    } = this.props;

    return (
      <div
        className={'notification-detail' + ((parseInt(notification.status) === 1) ? ' unread' : '')}
        onClick={this.handleClickNotification}
      >

        <div className="fwork-header-info-mess">

          <div className="wrap-content-notify">

            {
              notification.logoImage
                ? <img width={32} height={32} src={notification.logoImage} />
                : <Avatar src={notification.image} size={34} className="fwork-avatar">FW</Avatar>
            }

            <div className="fwork-notification-content-mark">

              <div className="fwork-notification-content">

                <p dangerouslySetInnerHTML={{ __html: notification.content }} />

                <div className="created-date">
                  <Calendar />
                  <span className="fwork-notification-munite"><DateTimeFormat ago={true}>{notification.createdDate}</DateTimeFormat></span>
                </div>

              </div>

              {
                parseInt(notification.status) === 1 &&
                <div className="mark-as-read-dot" onClick={(e) => { e.stopPropagation(); }}></div>
              }

            </div>

          </div>

        </div>

      </div>
    );
  }
}

export default AnnouncementDetail;
