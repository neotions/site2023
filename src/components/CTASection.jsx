import React from 'react';

function CTASection({ data }) {
  return (
    <div  class="react-cta" style="margin-auto;">
      <button href={data.url}>{data.text}</button>
      <button href={data.url2}>{data.text2}</button>
    </div>
  );
}

export default CTASection;