import classNames from 'classnames/bind';

import styles from './faq.module.scss';

const cn = classNames.bind(styles);

export const getClasses = () => {
  const cnFaq = cn('faq');

  const cnList = cn('faq__list');

  return {
    cnFaq,
    cnList,
  };
};
