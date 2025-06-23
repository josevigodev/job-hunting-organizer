import { useEffect, useRef, useState } from 'react';

const urlRegex =
  /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(?::\d+)?(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/i;

export function useInputError({ data }: { data: string }) {
  const [error, setError] = useState('');
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = data === '';
      return;
    }

    const isValidUrl = urlRegex.test(data);

    if (!isValidUrl) {
      setError('Enter a valid URL');
    } else {
      setError('');
    }
  }, [data]);

  return { error };
}
