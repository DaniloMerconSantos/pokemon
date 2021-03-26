import React from "react";
import Loader from "../Loader";

interface WithLoaderComponenteProps {
  isLoading: boolean;
}

const WithLoader = (
  Component: React.FC
): React.FC<WithLoaderComponenteProps> => {
  const WithLoaderComponente: React.FC<WithLoaderComponenteProps> = ({
    isLoading,
    ...props
  }) => {
    return (
      <>
        {isLoading && <Loader />}
        <Component {...props} />
      </>
    );
  };

  return WithLoaderComponente;
};

export default WithLoader;
