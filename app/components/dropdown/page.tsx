"use client";

import { MouseEvent, useEffect, useState } from "react";

import Code from "@/app/_components/Code";

import { props } from "../../_components/Button";

export default function Dropdown() {
  const modal = {
    dropdown: {
      code: {
        htm: `<div>
  <button>Dropdown</button>
  <ul>
    <li>Menu 1</li>
    <li>Menu 2</li>
    <li>Menu yang sangat panjang</li>
  </ul>
</div>`,
        css: `div {
  position: relative;
  width: max-content;
}

button {
  border-radius: 0.25rem;
  background-color: #6cc2fb;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

ul {
  position: absolute;
  left: 0px;
  top: 100%;
  margin: 0.25rem;
  width: max-content;
  min-width: 100%;
  border-radius: 0.25rem;
  background-color: #cef0fe;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}`,
      },
    },
  };

  return (
    <article>
      <h1>Dropdown</h1>
      <div className="not-prose">
        <ul>
          <li>
            <_Dropdown />
            <Code language="htm" code={modal.dropdown.code.htm} />
            <Code language="css" code={modal.dropdown.code.css} />
          </li>
        </ul>
      </div>
    </article>
  );
}

function _Dropdown() {
  const [isHidden, setIsHidden] = useState(true);

  const view = {
    button: {
      props: props(),
    },
    dropdown: {
      state: isHidden,
      toggle(event: MouseEvent) {
        event.stopPropagation();
        setIsHidden(!isHidden);
      },
      forceHide() {
        setIsHidden(true);
      },
    },
  };

  useEffect(() => {
    window.addEventListener("click", view.dropdown.forceHide);
  });

  return (
    <div className="relative w-max">
      <button {...view.button.props} onClick={view.dropdown.toggle}>
        Dropdown
      </button>
      <ul
        className="absolute left-0 top-full m-1 w-max min-w-full rounded bg-ws-blue-100 px-2 py-1"
        style={{ display: view.dropdown.state ? "none" : "revert" }}
      >
        <li>Menu 1</li>
        <li>Menu 2</li>
        <li>Menu yang sangat panjang</li>
      </ul>
    </div>
  );
}
