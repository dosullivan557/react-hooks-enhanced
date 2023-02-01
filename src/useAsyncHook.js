const { useState } = require("react");

const useAsyncHook = (func) => {
  const [result, setResult] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const runner = async () => {
    try {
      const result = await func();
      setResult(result);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  runner();

  return [result, error, isLoading];
};
