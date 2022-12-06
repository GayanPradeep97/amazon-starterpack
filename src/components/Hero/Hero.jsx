import React, { Component } from 'react';
import css from "./Hero.module.css"
import HeroImg from "../../assets/hero.png"
import {RiShoppingBagFill} from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs' 

class Hero extends Component {
    render() {
        return (
            <div className={css.container}>

                {/*left side */}
                <div className={css.h_slider}>
                    <span className={css.text1}>skin protection cream</span>
                    <div className={css.text2}>
                        <span>Trendy Collection </span>
                        <span>
                            {" "}
                            Seedily say has suitable<b/> disposal and boy.<b/> Exercise joy man children<b/>
                            rejoiced.
                        </span>
                    </div>
                </div>
                {/*middle side hero imager */}
                <div className={css.wrapper}>
                    <div className={css.blueCircle}></div>
                    <img src={HeroImg} alt="" width={600}/>
                    <div className={css.cart2}>
                        <RiShoppingBagFill/>
                    <div className={css.signup}>
                        <span>Best Signup Offerrs</span>

                    </div>
                    <div>
                        <BsArrowRight/>
                    </div>
                    </div>
                </div>
                {/*right side */}
                <div className={css.h_slider}>
                    <div className={css.traffic}>
                        <span>1.5m</span>
                        <span>Monthly Traffic</span>
                    </div>
                    <div className={css.customer}>
                        <span>100k</span>
                        <span>Happy Customer</span>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Hero;
