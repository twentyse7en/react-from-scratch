import { React, render } from '@/utils/utils'

import '@/styles/index.scss';

const counter = (
  <div className='container'>
    <h1 className='container__header'> Counter </h1>
    <p className='container__count'> 1 </p>
    <button className='container__button'> Increment </button>
  </div>
);

const container = document.getElementById("root");
render(
  counter,
  container
);
