import Code from "@/app/_components/Code";

export default function Card() {
  const modal = {
    card: {
      code: {
        htm: `<div>
  <div><!-- image --></div>
  <div><!-- date --></div>
  <div><!-- title --></div>
  <div><!-- text --></div>
</div>`,
        css: `div {
  display: grid;
  max-width: 16rem;
  gap: 0.5rem;
  border-radius: 0.25rem;
  padding: 0.5rem;
}

div /* image */ {
  height: 8rem;
  width: 100%;
  border-radius: 0.25rem;
}

div /* date */ {
  font-size: 0.75rem;
  opacity: 0.5;
}

div /* title */ {
  font-size: 1.25rem;
  font-weight: 700;
}

div /* text */ {
}`,
      },
    },
  };

  return (
    <article>
      <h1>Card</h1>
      <div className="not-prose">
        <ul>
          <li>
            <_Card />
            <Code language="htm" code={modal.card.code.htm} />
            <Code language="css" code={modal.card.code.css} />
          </li>
        </ul>
      </div>
    </article>
  );
}

function _Card() {
  return (
    <div className="grid max-w-[16rem] gap-2 rounded p-2">
      <div className="h-[8rem] w-full rounded bg-ws-blue-100 text-center leading-[8rem] text-ws-blue-300">
        image
      </div>
      <div className="text-[.75rem] opacity-50">5 Juli 2023</div>
      <div className="text-[1.25rem] font-bold">
        Lorem ipsum dolor sit amet.
      </div>
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
        accusantium quaerat vitae.
      </div>
    </div>
  );
}
