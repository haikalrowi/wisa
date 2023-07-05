import Code from "@/app/_components/Code";

export default function Alert() {
  const modal = {
    alert: {
      code: {
        htm: "<div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>",
        css: `div {
  padding: 0.5rem;
  background-color: #cef0fe;
  border-radius: 0.25rem;
}`,
      },
    },
  };

  return (
    <article>
      <h1>Alert</h1>
      <div className="not-prose">
        <ul>
          <li>
            <_Alert />
            <Code language="htm" code={modal.alert.code.htm} />
            <Code language="css" code={modal.alert.code.css} />
          </li>
        </ul>
      </div>
    </article>
  );
}

function _Alert() {
  return (
    <div className="rounded bg-ws-blue-100 p-2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </div>
  );
}
