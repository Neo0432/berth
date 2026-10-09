import { useMemo, useState } from 'react';

export const useStepper = (steps: number, initialStep = 1) => {
  const [stepperStep, setStepperStep] = useState(initialStep);

  return useMemo(() => {
    const isFirstStep = stepperStep === 1;
    const isLastStep = stepperStep === steps;

    const onPrevStep = () => {
      if (isFirstStep) return;

      setStepperStep((prev) => prev - 1);
    };

    const onNextStep = () => {
      if (isLastStep) return;

      setStepperStep((prev) => prev + 1);
    };

    const onSetStep = (step: number) => {
      if (step <= 0 && step > steps) return;

      setStepperStep(step);
    };

    return {
      currentStep: stepperStep,
      steps,
      isFirstStep,
      isLastStep,
      onPrevStep,
      onNextStep,
      onSetStep,
    };
  }, [stepperStep]);
};
