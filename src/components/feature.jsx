import React from 'react';

function FeatureSection({ data }) {
  return (
    <header class="react-feature" style={{backgroundImage: `url(${data.backgroundImage})`, backgroundSize: 'cover'}}>
      <h1>{data.title}</h1>
      <h2>{data.subtitle}</h2>
      <button>Call to Action</button>
    </header>
  );
}

export default FeatureSection;


//onClick={data.onButtonClick}