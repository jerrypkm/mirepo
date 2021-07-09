import React from 'react';
import { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import './styles/PageLoading.css';
//import Loader from './Loader.jsx';

function PageLoading() {
  const container = useRef(null);

  useEffect(()=>{
    Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      animationData: require('../images/rocket.json'),
    })
  }, [])
  return (
    <div style={{height:"20%", backgroundColor: "white"}} className="PageLoading container" ref={container}></div>
  );
}

export default PageLoading;