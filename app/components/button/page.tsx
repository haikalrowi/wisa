import Code from "@/app/_components/Code";

export default function Button() {
  const modal = {
    button: {
      code: {
        htm: "<button>Button</button>",
        css: `button {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  background-color: #6cc2fb;
  border-radius: 0.25rem;
}`,
      },
    },
  };

  return (
    <article>
      <h1>Button</h1>
      <div className="not-prose">
        <ul>
          <li>
            <_Button />
            <Code language="htm" code={modal.button.code.htm} />
            <Code language="css" code={modal.button.code.css} />
          </li>
        </ul>
      </div>
    </article>
  );
}

export { _Button };

function _Button() {
  return <button className="rounded bg-ws-blue-300 px-2">Button</button>;
}
