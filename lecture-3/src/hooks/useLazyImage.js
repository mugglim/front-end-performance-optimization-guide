import { useEffect, useRef } from 'react';

const useLazyImage = (src) => {
  const imageRef = useRef();

  useEffect(() => {
    const options = {};
    const handleObserverObserved = (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const { target } = entry;
        const { previousSibling } = target;

        const jpgSrc = target.dataset.src;
        const webpSrc = previousSibling.dataset.srcset;

        entry.target.src = jpgSrc;
        previousSibling.srcset = webpSrc;
        observer.unobserve(entry.target);
      });
    };

    const observer = new IntersectionObserver(handleObserverObserved, options);
    observer.observe(imageRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return imageRef;
};

export default useLazyImage;
