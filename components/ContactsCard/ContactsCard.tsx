import React from 'react';
import classes from './ContactsCard.module.scss';

export const ContactsCard: React.FC = () => {
  return (
    <div className={classes.contacts_card}>
      <h3 className={classes.contacts_header}>КОНТАКТЫ</h3>
      <div className={classes.text_wrap}>
        <div className={classes.icon}>
          <PinIcon />
        </div>
        <div className={classes.text}>
          г. Казань ул. Петербургская д. 52 IT PARK (технопарк в сфере высоких
          технолоогий)
        </div>
      </div>
      <div className={classes.text_wrap}>
        <div className={classes.icon}>
          <PhoneIcon />
        </div>
        <div className={classes.text}>8 800 7777777</div>
      </div>
    </div>
  );
};

function PinIcon(): JSX.Element {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.00034 0C5.05959 0 2.66699 2.39259 2.66699 5.33334C2.66699 6.21616 2.88771 7.09147 3.3073 7.86784L7.70868 15.8281C7.76727 15.9342 7.87893 16 8.00034 16C8.12174 16 8.2334 15.9342 8.29199 15.8281L12.695 7.86522C13.113 7.09147 13.3337 6.21613 13.3337 5.33331C13.3337 2.39259 10.9411 0 8.00034 0ZM8.00034 8C6.52996 8 5.33368 6.80372 5.33368 5.33334C5.33368 3.86297 6.52996 2.66669 8.00034 2.66669C9.47071 2.66669 10.667 3.86297 10.667 5.33334C10.667 6.80372 9.47071 8 8.00034 8Z"
        fill="#545BE2"
      />
    </svg>
  );
}

function PhoneIcon(): JSX.Element {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#hS9lBv25jFAiGcVLefFH)">
        <path
          d="M15.966 12.3971C15.9207 12.2607 15.6328 12.0598 15.1024 11.7949C14.9587 11.7114 14.754 11.5979 14.4891 11.454C14.2239 11.31 13.9833 11.1774 13.7675 11.0561C13.5513 10.9349 13.3487 10.8175 13.1595 10.7041C13.1292 10.6813 13.0346 10.6151 12.8755 10.505C12.7162 10.3953 12.5819 10.3138 12.4719 10.2607C12.3621 10.2079 12.2541 10.1813 12.148 10.1813C11.9965 10.1813 11.8073 10.2893 11.5801 10.505C11.3529 10.7211 11.1445 10.9558 10.9552 11.2098C10.7659 11.4637 10.5651 11.6983 10.3532 11.9142C10.141 12.1302 9.9666 12.2382 9.8304 12.2382C9.76202 12.2382 9.67677 12.2191 9.5746 12.1815C9.47247 12.1436 9.39478 12.1112 9.34144 12.085C9.28859 12.0583 9.19788 12.0055 9.069 11.9257C8.93989 11.8461 8.86809 11.8025 8.85296 11.7949C7.81515 11.219 6.92507 10.5599 6.18258 9.81776C5.44033 9.07515 4.78114 8.18516 4.20542 7.14722C4.19785 7.13206 4.15419 7.06006 4.07471 6.93134C3.99511 6.8025 3.94205 6.71172 3.91554 6.65854C3.88904 6.60557 3.85684 6.52787 3.81903 6.42562C3.78121 6.32337 3.76223 6.2382 3.76223 6.16994C3.76223 6.03366 3.87021 5.85933 4.08613 5.64719C4.30201 5.43517 4.53692 5.23433 4.79061 5.04508C5.0445 4.85583 5.27917 4.64743 5.49513 4.42024C5.71102 4.19294 5.81896 4.00364 5.81896 3.85216C5.81896 3.74617 5.79245 3.63811 5.73947 3.5283C5.68646 3.41825 5.60502 3.28396 5.49513 3.12479C5.3852 2.96571 5.31893 2.8711 5.29617 2.84065C5.18265 2.6514 5.06536 2.44877 4.94401 2.23285C4.82265 2.01697 4.69019 1.77633 4.54619 1.51121C4.40231 1.24622 4.28876 1.0416 4.20534 0.897676C3.94034 0.367484 3.73962 0.079483 3.60322 0.0341892C3.55017 0.0114627 3.47057 0 3.36462 0C3.15996 0 2.89297 0.0378111 2.56346 0.113672C2.23382 0.189414 1.97444 0.268857 1.78503 0.35232C1.40624 0.511326 1.00476 0.973418 0.580482 1.73844C0.194132 2.4504 0.000976562 3.15508 0.000976562 3.85196C0.000976562 4.05634 0.0142304 4.25519 0.040738 4.44854C0.0672456 4.6417 0.114609 4.85953 0.182868 5.102C0.251008 5.34439 0.305973 5.52445 0.347526 5.6417C0.389118 5.75903 0.46677 5.96922 0.580442 6.27235C0.693955 6.5754 0.762214 6.76091 0.784941 6.82909C1.05006 7.57154 1.36445 8.23435 1.72803 8.81772C2.32624 9.78735 3.1426 10.7894 4.17664 11.8235C5.21071 12.8576 6.21259 13.6739 7.18231 14.2724C7.76559 14.6359 8.42864 14.9502 9.17097 15.2156C9.23919 15.2382 9.42471 15.3063 9.72763 15.4202C10.0307 15.5338 10.2409 15.6114 10.3583 15.6531C10.4757 15.6948 10.6558 15.7498 10.8979 15.8181C11.1407 15.8863 11.3583 15.9337 11.5514 15.9604C11.7447 15.9865 11.9436 16 12.148 16C12.8449 16 13.5496 15.8068 14.2617 15.4205C15.0266 14.9963 15.4886 14.5948 15.6477 14.2157C15.7313 14.0265 15.8106 13.767 15.8863 13.4374C15.9623 13.1079 16 12.841 16 12.6364C16.0003 12.53 15.9888 12.4506 15.966 12.3971Z"
          fill="#545BE2"
        />
      </g>
      <defs>
        <clipPath id="hS9lBv25jFAiGcVLefFH">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
