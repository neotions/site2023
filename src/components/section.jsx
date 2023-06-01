import React, { useEffect, useState } from 'react';

// Assume that the ComponentMap object maps "component-type" strings to actual React components.
// For example, you might have something like this:
// const ComponentMap = {
//   "feature": FeatureComponent,
//   // other component types...
// };

function SectionReact({ content }) { // using destructuring to get the `content` prop
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("data.json")
      .then(response => response.json())
      .then(data => setData(data.sections[content])); // using [content] to access the key dynamically
  }, [content]); // adding `content` as a dependency to the effect

  return (
    <div>
      {data && Object.values(data.components).map((component, index) => { // ensuring `data` is not null before trying to access its properties
        const Component = ComponentMap[component["component-type"]];
        return Component ? (
          <Component {...component.props} key={index} />
        ) : null;
      })}
    </div>
  );
};

export default SectionReact;