import { ReactNode } from "react";

interface IButtonProps {
  children: ReactNode;
  href?: string;
}

export default function Button({ children, href }: IButtonProps) {
  function openInNewTab() {
    window.open(href, "_blank")?.focus();
  }

  return (
    <button
      onClick={openInNewTab}
      className="z-10 px-4 py-2 bg-black text-white text-sm shadow-[4px_4px_0_#2D6EEB]"
    >
      {children}
    </button>
  );
}
