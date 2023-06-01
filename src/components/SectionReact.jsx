import React, { useEffect, useState } from 'react';

function SectionReact({ content }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("data.json")
      .then(response => response.json())
      .then(data => setData(data.sections[content]));
  }, [content]);

  if (!data || !data.components) {
    return null; // Return null or a loading indicator while data is being fetched
  }

  const renderComponent = (component) => {
    const { "component-type": componentType, props } = component;
    switch (componentType) {
      case "feature":
        return (
          <div className="feature" key={props.title}>
            <h2>{props.title}</h2>
            <p>{props.subtitle}</p>
            <img src={props["background-image"]} alt="" />
          </div>
        );
      // Add more cases for other component types
      default:
        return null;
    }
  };

  return (
    <div>
      {data.components.map((component, index) => (
        renderComponent(component)
      ))}
    </div>
  );
}

export default SectionReact;

