/* @jsx createElement */

import people from './people';

function createElement(tagName, props, ...children) {
  const element = document.createElement(tagName);

  Object.entries(props || {}).forEach(([name, value]) => {
    element[name.toLowerCase()] = value;
  });

  children.flat().forEach((child) => {
    if (child instanceof Node) {
      element.appendChild(child);
    } else {
      const textNode = document.createTextNode(child);
      element.appendChild(textNode);
    }
  });

  return element;
}

const root = (
  <div>
    {people.map(({ name }) => (
      <p>{name}</p>
    ))}
  </div>
);

document.getElementById('app')
  .appendChild(root);
