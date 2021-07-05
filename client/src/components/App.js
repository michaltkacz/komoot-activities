import React from 'react';

import '../styles/App.scss';

import ControlsBar from './ControlsBar';
import { Map } from './Map.js';
import NavigationBar from './NavigationBar';
import PageLayout from './PageLayout';

export default function App() {
  // const fetchData = (e, id) => {
  //   e.preventDefault();
  //   //setUrl(`/api/user/${id}/tours`);
  //   // setUrl(`/dev/fulldb`);
  // };

  return (
    <PageLayout
      top={
        <>
          <NavigationBar />
          <ControlsBar />
        </>
      }
      left={
        <div
          style={{
            height: '100%',
            overflow: 'auto',
          }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima,
          quisquam veniam? Ipsa quas voluptatem voluptatum sequi dolorem, est,
          dolor repudiandae magnam necessitatibus ex, fuga neque! Autem deleniti
          nam omnis ab.Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Minima, quisquam veniam? Ipsa quas voluptatem voluptatum sequi
          dolorem, est, dolor repudiandae magnam necessitatibus ex, fuga neque!
          Autem deleniti nam omnis ab.Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Minima, quisquam veniam? Ipsa quas voluptatem
          voluptatum sequi dolorem, est, dolor repudiandae magnam necessitatibus
          ex, fuga neque! 
        </div>
      }
      right={<Map />}
    />
  );
}
