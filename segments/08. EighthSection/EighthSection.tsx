import React, { useEffect, useState } from 'react';
import { Slider } from '@/components/src';
import img1 from '@/segments/08. EighthSection/images/buildar_logo.png';
import img2 from '@/segments/08. EighthSection/images/itpark_logo.png';
import img3 from '@/segments/08. EighthSection/images/logo_dar.png';
import img4 from '@/segments/08. EighthSection/images/logo_energo.png';
import classes from './EighthSection.module.scss';

export const EighthSection: React.FC = () => {
  const [screenWidth, setSw] = useState<number>(1200);

  useEffect(() => {
    const callback = () => setSw(window.innerWidth);
    window.addEventListener('resize', callback);
    callback();

    return () => {
      window.removeEventListener('resize', callback);
    };
  }, []);

  const settings = {
    // autoplay: true,
    centerMode: true,
    dots: true,
    dotsScroll: 2,
    // gutter: 30,
    slidesToShow: screenWidth > 900 ? 3 : 1
    // adaptiveHeight: true
  };

  return (
    <section className={classes.section8}>
      <h2>ПАРТНЕРЫ</h2>
      <Slider {...settings} className={classes.slider}>
        <div>
          <div className={classes.logo_wrap}>
            <img src={img1} alt="a" />
          </div>
        </div>
        <div>
          <div className={classes.logo_wrap}>
            <img src={img2} alt="a" />
          </div>
        </div>
        <div>
          <div className={classes.logo_wrap}>
            <img src={img3} alt="a" />
          </div>
        </div>
        <div>
          <div className={classes.logo_wrap}>
            <img src={img4} alt="a" />
          </div>
        </div>
      </Slider>
    </section>
  );
};
