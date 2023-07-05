export default Button;

export { props };

function Button() {
  return <button className="rounded bg-ws-blue-300 px-2">Button</button>;
}

function props() {
  return Button().props;
}
