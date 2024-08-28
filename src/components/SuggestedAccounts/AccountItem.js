import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Image from '~/components/image';
import AccountItemPreview from './AccountItemPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountItemPreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20,0]} placement="bottom-start" render={renderPreview}>
                <div className={cx('account-item')}>
                    <Image
                        className={cx('avatar')}
                        src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/7da3ec66f6f624d8c1c49714708aa4c9~c5_100x100.jpeg?lk3s=a5d48078&nonce=51769&refresh_token=dc6fb8273279c4a64411e2642c383a93&x-expires=1724396400&x-signature=dzcPTet06ecEgdiRXZFYk0urVi0%3D&shp=a5d48078&shcp=81f88b70"
                        alt="mancity"
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>mancity</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Manchester City</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};
export default AccountItem;
