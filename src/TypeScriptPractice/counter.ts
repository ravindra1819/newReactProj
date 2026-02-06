import { useCallback, useState } from "react";

type UseCounterOptions = {
  initialValue?: number;
  step?: number;
};

type UseCounterReturn = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export function useCounter(options: UseCounterOptions = {})
  : UseCounterReturn {
  const { initialValue = 0, step = 1 } = options;
  const [count, setCount] = useState<number>(initialValue);

  const increment = useCallback(() => {
    setCount(prev => prev + step);
  }, [step]);

  const decrement = useCallback(() => {
    setCount(prev => prev - step);
  }, [step])

  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue])

  return { count, increment, decrement, reset };
}