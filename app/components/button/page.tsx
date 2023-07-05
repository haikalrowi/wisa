import Code from "@/app/_components/Code";

import Button from "../../_components/Button";

export default function ButtonPage() {
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
            <Button />
            <Code language="htm" code={modal.button.code.htm} />
            <Code language="css" code={modal.button.code.css} />
          </li>
        </ul>
      </div>
    </article>
  );
}
