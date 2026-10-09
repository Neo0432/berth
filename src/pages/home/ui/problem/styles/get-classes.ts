import classNames from 'classnames/bind';

import styles from './problem.module.scss';

const cn = classNames.bind(styles);

export const getClasses = () => {
  const cnProblem = cn('problem');

  const cnReviewers = cn('problem__reviewers');

  const cnReviewer = cn('problem__reviewer');

  const cnQuote = cn('problem__quote');

  const cnSummary = cn('problem__summary');

  return {
    cnProblem,
    cnReviewers,
    cnReviewer,
    cnQuote,
    cnSummary,
  };
};
