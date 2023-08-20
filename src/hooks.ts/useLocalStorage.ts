import { useEffect, useState } from 'react';
import { Todo } from '../models/Todo';

const getValue = (key: string, intialValue: Todo[]) => {
  const savedValue = JSON.parse(localStorage.getItem(key) || 'null');
  if (savedValue !== null) {
    return savedValue;
  }

  return intialValue;
};

export const useLocalStorage = <T>(key: string, intialValue: Todo[]) => {
  const [value, setValue] = useState<T>(() => {
    return getValue(key, intialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue] as const;
};
