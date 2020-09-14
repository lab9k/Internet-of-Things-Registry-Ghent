import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker'
import { ReactComponent as Loading } from '../../icons/loading.svg'

const LoadingSpinnerComponent = () => {
  const { promiseInProgress } = usePromiseTracker();
  const style = {
    width: '300px',
    height: '100px',
    padding: '20px',

    position: 'absolute',
    top: '50%',
    left: '50%',

    margin: '-70px 0 0 -170px',
    textAlign: 'center',
    zIndex: 10000,
    borderColor: 'black',
    borderWidth: '2px'
  }
  return (
    <div className="sweet-loading">
      {(promiseInProgress) ? <Loading style={style} />
        : null}
    </div>
  );
}
export default LoadingSpinnerComponent
