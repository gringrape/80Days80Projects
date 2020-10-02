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

const containerStyle = `
  background-color: yellow;
  width: 800px;
  height: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 20px;
  transform: translate(-50%,-50%);
  display: flex;
`;

const leftPanelStyle = `
  width: 20%;
  height: 100%;
  background-color: red;  
`;

const rightPanelStyle = `
  margin-left: 20px;
  width: 100%;
  height: 100%;
  background-color: blue;
`;

function render({ personName = '김덕수' }) {
  const personStatus = Object.entries(
    people.find(({ name }) => name === personName),
  );

  const handleNameClick = (name) => {
    render({ personName: name });
  };

  const root = (
    <div style={containerStyle}>
      <div style={leftPanelStyle}>
        {people.map(({ name }) => (
          <p>
            <button onClick={() => handleNameClick(name)} type="button">
              {name}
            </button>
          </p>
        ))}
      </div>
      <div style={rightPanelStyle}>
        {personStatus.map(([key, value]) => (
          <p>
            {key}
            :
            {value}
          </p>
        ))}
      </div>
    </div>
  );

  document.getElementById('app')
    .appendChild(root);
}

render({});
