import React from 'react';
import phoneImg from './images/phone.svg';
import { useGlobalContext } from './context';

const Hero = () => {
   const { closeSubmenu } = useGlobalContext();
   return (
      <section className="hero" onMouseOver={closeSubmenu}>
         <div className="hero-center">
            <article className="hero-info">
               <h1> Payments Infrastructure for the internet</h1>
               <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et,
                  facere? Quam, corporis quod impedit aliquid veniam aut
                  praesentium aliquam perspiciatis. Numquam id fugiat atque
                  expedita impedit dignissimos officiis magni beatae aliquid
                  soluta nemo corrupti repudiandae sunt voluptas tempora,
                  sapiente ad
               </p>
               <button className="btn">Start now </button>
            </article>
            <article className="hero-images">
               <img src={phoneImg} className="phone-img" alt="x" />
            </article>
         </div>
      </section>
   );
};

export default Hero;
