import classNames from 'classnames/bind';

import styles from './locale-switcher.module.scss';

const cn = classNames.bind(styles);

interface Props {
  className?: string;
}

export const getClasses = ({ className }: Props) => {
  const cnRoot = cn('locale-switcher', className);

  const cnValue = cn('locale-switcher__value');

  const cnIcon = cn('locale-switcher__icon');

  return {
    cnRoot,
    cnValue,
    cnIcon,
  };
};
