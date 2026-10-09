import { useEffect, useState } from 'react';

type State = boolean;
type ToggleFn = () => void;
type MakeTrueFn = () => void;
type MakeFalseFn = () => void;
type SetStateFn = (state: boolean) => void;

/**
 * @returns Returns: [state, toggle, makeTrue, makeFalse, setState]
 */

export const useToggle = (
  initialState: State | (() => State) = false,
): [State, ToggleFn, MakeTrueFn, MakeFalseFn, SetStateFn] => {
  const [state, setState] = useState<State>(initialState);

  useEffect(() => setState(initialState), [initialState]);

  const toggle: ToggleFn = () => setState((state) => !state);
  const makeTrue: ToggleFn = () => setState(true);
  const makeFalse: MakeTrueFn = () => setState(false);
  const setExternalValue: SetStateFn = (value: boolean) => setState(value);

  return [state, toggle, makeTrue, makeFalse, setExternalValue];
};
