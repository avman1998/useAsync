import { useState, useEffect } from "react";
export default function useAsync(method, dependencies) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  async function execute() {
    setIsLoading(true);
    setError(null);
    try {
      const data = await method();
      setResult(data);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    execute();
  }, dependencies);
  return {
    isLoading,
    error,
    result,
  };
}
