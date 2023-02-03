import { useState, useEffect } from 'react';

const useValidatedForm = (regex) => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const res = regex.test(value);
    setIsValid(res);
  }, [value, regex]);

  return [value, setValue, isValid];
};

export default useValidatedForm;
