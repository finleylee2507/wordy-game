import * as React from 'react';

export const usePageFirstLoad = (pageId: string) => {
  const [isPageFirstLoad, setIsPageFirstLoad] = React.useState<boolean>(() => {
    const cachedValue = sessionStorage.getItem(pageId);

    // If nothing in storage, this is the first load
    // Otherwise parse the stored boolean value
    return cachedValue === null ? true : JSON.parse(cachedValue);
  });

  const markPageAsLoaded = () => {
    setIsPageFirstLoad(false);
  };

  React.useEffect(() => {
    sessionStorage.setItem(pageId, JSON.stringify(isPageFirstLoad));
  }, [isPageFirstLoad, pageId]);

  return { isPageFirstLoad, markPageAsLoaded };
};
