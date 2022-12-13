import React from 'react';
import Logo from '../../assets/logo.png'
import {InboxIcon,PhoneIcon,LocationMarkerIcon,LoginIcon,UsersIcon,LinkIcon} from "@heroicons/react/outline";
import css from './Footer.module.css'

const Footer = () => {
    return (
        <div className={css.cFooterWrapper}>
            <hr/>

            <div className={css.cFooter}>
                <div className={css.logo}>
                    <img src={Logo} alt=""/> 
                    <span>amazon</span>
                </div>

                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Contact US</span>
                        <span classname={css.pngLine}>
                            <LocationMarkerIcon className={css.icon} />
                            <span>111 north evenue Orlando, FL 32801</span>
                        </span>

                        <span classname={css.pngLine}>
                            <PhoneIcon className={css.icon} />
                            <a href='tel:352-306-4415'>352-306-4415</a>
                        </span>
                        <span classname={css.pngLine}>
                            <InboxIcon className={css.icon} />
                            <a href='maito:support@amazon.com'>support@amazon.com</a>
                        </span>
                    </div>
                </div>
                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Account</span>
                        <span classname={css.pngLine}>
                            <LoginIcon className={css.icon} />
                            <span>Sign in</span>
                        </span>
                    </div>
                </div>
                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Company</span>
                        <span classname={css.pngLine}>
                            <UsersIcon className={css.icon} />
                            <span>About us</span>
                        </span>
                    </div>
                </div>
                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Resources</span>
                        <span classname={css.pngLine}>
                            <LinkIcon className={css.icon} />
                            <span>Suddly Privacy & Terms</span>
                        </span>
                    </div>
                </div>
            </div>   
            <div className={css.copyRight}>
                <span>Copyright @2022 by Amazon, Inc</span>
                <span>All rights reserved</span>
            </div> 
        </div>
    );
}

export default Footer;
