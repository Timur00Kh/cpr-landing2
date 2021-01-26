import React, { useEffect, useState } from 'react';
// import { Slider } from '@/components/src';
import img1 from '@/segments/08. EighthSection/images/buildar_logo.png';
import img2 from '@/segments/08. EighthSection/images/itpark_logo.png';
import img3 from '@/segments/08. EighthSection/images/logo_dar.png';
import img4 from '@/segments/08. EighthSection/images/logo_energo.png';
import dynamic from 'next/dynamic';
import classes from './EighthSection.module.scss';

const Slider = dynamic(() => import('@/components/src').then((e) => e.Slider));

export const EighthSection: React.FC = () => {
  const [screenWidth, setSw] = useState<number>(1200);
  const [showSlider, setShowSlider] = useState<boolean>(false);

  useEffect(() => {
    setShowSlider(true);

    const callback = () => setSw(window.innerWidth);
    window.addEventListener('resize', callback);
    callback();

    return () => {
      window.removeEventListener('resize', callback);
    };
  }, []);

  const settings = {
    centerMode: true,
    slidesToShow: screenWidth > 900 ? 3 : 1
  };

  return (
    <section className={classes.section8}>
      <h2>ПАРТНЕРЫ</h2>
      {showSlider && (
        // @ts-ignore
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
      )}
    </section>
  );
};
