import { useEffect, useRef, useState } from "react";

const urlRegex =
  /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(?::\d+)?(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/i;

export function useInputError({ data }) {
  const [error, setError] = useState('');
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = data.link === '';
      return
    }

    const isValidUrl = urlRegex.test(data.link);

    if (!isValidUrl) {
      setError('Enter a valid URL');
    } else {
      setError('');
    }
  }, [data]);

  return { error };
}