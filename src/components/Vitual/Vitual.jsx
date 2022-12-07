import React, { Component } from 'react';
import css from './Vitual.module.css'
import Shade from '../../assets/shade.png'
import ReactCompareImage from 'react-compare-image';
import Before from '../../assets/before.png';
import After from '../../assets/after.png'

class Vitual extends Component {
    render() {
        return (
            <div className={css.vitual}>
                <div className={css.left}>
                    <span>Virtual Try-on</span>
                    <span>Never Buy the wrong Shade Again!</span>
                       <span>Try Now!</span>
                       <img src={Shade}  alt="" />

                </div>

                <div className={css.right}>
                    <div className={css.wrapper}>
                    <ReactCompareImage leftImage={Before} rightImage={After}/>
                    </div>
                    </div>
                
            </div>
        );
    }
}

export default Vitual;
