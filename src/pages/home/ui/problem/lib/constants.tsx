import { SvgReviewerAlone, SvgReviewerBackend, SvgReviewerIdea } from '@shared/assets/icons/components/complex';

export const REVIEWERS = [
  { quoteKey: 'backend', icon: <SvgReviewerBackend /> },
  { quoteKey: 'idea', icon: <SvgReviewerIdea /> },
  { quoteKey: 'alone', icon: <SvgReviewerAlone /> },
] as const;
