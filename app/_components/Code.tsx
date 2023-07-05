"use client";

export default function ({
  language,
  code,
}: {
  language: "css" | "htm";
  code: string;
}) {
  const view = {
    code: {
      button: {
        async copy() {
          await navigator.clipboard.writeText(code);
        },
      },
    },
  };

  return (
    <pre className="my-2 select-all rounded bg-neutral-900 p-2 text-[.75rem] text-neutral-300">
      <div className="flex select-none justify-between gap-2">
        <span>{language}</span>
        <button className="underline" onClick={view.code.button.copy}>
          copy
        </button>
      </div>
      <hr className="my-2 border-t border-neutral-500" />
      <code className="whitespace-pre-wrap">{code}</code>
    </pre>
  );
}
