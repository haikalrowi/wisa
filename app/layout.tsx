"use client";

import "./globals.css";
import "./fonts.css";

import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [asideIsHidden, setAsideIsHidden] = useState(true);

  const view = {
    aside: {
      state: asideIsHidden,
      toggle() {
        setAsideIsHidden(!asideIsHidden);
      },
      forceHide() {
        setAsideIsHidden(true);
      },
    },
  };

  return (
    <html lang="id">
      <body
        className="font-['TW_Cen_MT']
        md:grid
        md:grid-cols-[repeat(3,_1fr)]"
      >
        <main
          className="prose min-h-screen p-4
          md:order-2
          md:col-span-2"
          onClick={view.aside.forceHide}
        >
          {children}
        </main>

        <aside
          className="sticky bottom-0 bg-neutral-100
          md:top-0
          md:order-1
          md:flex
          md:h-screen
          md:max-w-[16rem]
          md:flex-col"
        >
          <nav
            className="absolute inset-x-0 bottom-full h-64 overflow-y-auto bg-inherit p-2
            md:static
            md:flex-auto
            md:![display:revert]"
            style={{ display: view.aside.state ? "none" : "revert" }}
          >
            <ul>
              <NavLink href="/" name="Home" />
              <NavGroup name="Fundamental">
                <NavLink href="/typography" name="Typography" />
                <NavLink href="/colors" name="Colors" />
                <NavLink href="/mascot" name="Mascot" />
                <NavLink href="/icons" name="Icons" />
              </NavGroup>
              <NavGroup name="Components">
                <NavLink href="/components/alert" name="Alert" />
                <NavLink href="/components/button" name="Button" />
                <NavLink href="/components/card" name="Card" />
                <NavLink href="/components/dropdown" name="Dropdown" />
              </NavGroup>
            </ul>
          </nav>

          <div className="grid gap-2 p-2">
            <button
              className="rounded border border-black bg-neutral-300
              md:hidden"
              onClick={view.aside.toggle}
            >
              Menu
            </button>
            {/* <button className="rounded border border-black bg-neutral-300">
              Dark: off
            </button> */}
          </div>
        </aside>
      </body>
    </html>
  );
}

/* components */

function NavGroup({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) {
  return (
    <li>
      <div className="opacity-50">{name}</div>
      <ul className="ml-2">{children}</ul>
    </li>
  );
}

function NavLink({ href, name }: { href: string; name: string }) {
  return (
    <li className="relative">
      <a className="before:absolute before:inset-0" href={href}>
        {name}
      </a>
    </li>
  );
}
