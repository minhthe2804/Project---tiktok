import classNames from 'classnames/bind';
import styles from './AccountItemPreview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Image from '~/components/image';
import Button from '~/components/Button.js';

const cx = classNames.bind(styles);
function AccountItemPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image
                    className={cx('avatar')}
                    src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/7da3ec66f6f624d8c1c49714708aa4c9~c5_100x100.jpeg?lk3s=a5d48078&nonce=51769&refresh_token=dc6fb8273279c4a64411e2642c383a93&x-expires=1724396400&x-signature=dzcPTet06ecEgdiRXZFYk0urVi0%3D&shp=a5d48078&shcp=81f88b70"
                    alt="mancity"
                />
                <Button primary className={cx('btn-follow')}>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>mancity</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Manchester City</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Follower </span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Likes </span>
                </p>
            </div>
        </div>
    );
}

export default AccountItemPreview;
