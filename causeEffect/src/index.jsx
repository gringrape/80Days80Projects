/* @jsx createElement */
function createElement(tagName, props, ...children) {
  const element = document.createElement(tagName);

  Object.entries(props || {}).forEach(([name, value]) => {
    element[name.toLowerCase()] = value;
  });

  children.forEach((child) => {
    if (child instanceof Node) {
      element.appendChild(child);
    } else {
      const textNode = document.createTextNode(child);
      element.appendChild(textNode);
    }
  });

  return element;
}

function handleClick() {
  console.log('Clicked!!');
}

const root = (
  <div id="name" className="person">
    <div>
      <p>hello world</p>
    </div>
    <p>Hello world</p>
    <button type="button" onClick={handleClick}>
      click me
    </button>
  </div>
);

document.getElementById('app')
  .appendChild(root);
