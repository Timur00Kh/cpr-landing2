import React from 'react';
import {
  AndroidIcon,
  AppleIcon,
  OculusIcon,
  ThreeJsIcon,
  UnityIcon,
  UnrealIcon,
  WindowsIcon
} from '@/segments/04. FourthAndFithSection/icons';
import cn from 'classnames';
import classes from './FourthAndFithSection.module.scss';

export const FourthAndFifthSection: React.FC = () => {
  return (
    <>
      <section className={classes.ff_section}>
        <div className={classes.header_wrap}>
          <h2>ПЛАТФОРМЫ, КОТОРЫЕ МЫ ИСПОЛЬЗУЕМ</h2>
        </div>
        <div className={classes.ff_section_items}>
          <div className={cn(classes.ff_section_item, classes.item4)}>
            <AndroidIcon />
          </div>
          <div className={cn(classes.ff_section_item, classes.item4)}>
            <AppleIcon />
          </div>
          <div className={classes.break} />
          <div className={cn(classes.ff_section_item, classes.item4)}>
            <WindowsIcon />
          </div>
          <div className={cn(classes.ff_section_item, classes.item4)}>
            <OculusIcon />
          </div>
        </div>
      </section>
      <section className={classes.ff_section}>
        <div className={classes.header_wrap}>
          <h2>НАШИ ИНСТРУМЕНТЫ</h2>
        </div>
        <div className={classes.ff_section_items}>
          <div className={cn(classes.ff_section_item, classes.item5)}>
            <UnityIcon />
          </div>
          <div className={cn(classes.ff_section_item, classes.item5)}>
            <UnrealIcon />
          </div>
          <div className={classes.break} />
          <div className={cn(classes.ff_section_item, classes.item5)}>
            <ThreeJsIcon />
          </div>
        </div>
      </section>
    </>
  );
};
