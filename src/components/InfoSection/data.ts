/** @format */

import carImg from '../../images/undraw_off_road_9oae.svg';
import mobilePayImg from '../../images/undraw_Mobile_pay_re_sjb8.svg';
import teamImg from '../../images/undraw_team_spirit_hrr4.svg';
import medicalCareImg from '../../images/undraw_medical_care_movn.svg';
import shoppingAppImg from '../../images/undraw_shopping_app_flsj.svg';
import giftCardImg from '../../images/undraw_gift_card_6ekc.svg';

export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Premium Bank',
  headline: 'Unlimited Transactions with zero fees',
  description:
    'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
  buttonLabel: 'Get started',
  imgStart: false,
  img: carImg,
  alt: 'Car',
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Unlimited Access',
  headline: 'Login to your account at any time',
  description:
    'We have you covered to matter where you are located. All you need is an internet connection and a phone or computer',
  buttonLabel: 'Learn More',
  imgStart: true,
  img: mobilePayImg,
  alt: 'App',
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Join our Team',
  headline: 'Creating an account is extremely easy',
  description:
    "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go",
  buttonLabel: 'Start now',
  imgStart: false,
  img: teamImg,
  alt: 'Team',
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjFour = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Join our Team',
  headline: 'Creating an account is extremely easy',
  description:
    "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go",
  buttonLabel: 'Get benefits',
  imgStart: true,
  img: medicalCareImg,
  alt: 'Medical',
  dark: false,
  primary: false,
  darkText: true,
};
