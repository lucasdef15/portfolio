import type { ReactNode } from 'react';

type TooltipProps = {
  children: ReactNode;
  text: string;
  position?: 'top' | 'bottom';
};

export default function Tooltip({ children, text, position = 'top' }: TooltipProps) {
  const tipPos =
    position === 'top'
      ? 'bottom-[125%] left-1/2 -translate-x-1/2'
      : 'left-1/2 top-[125%] -translate-x-1/2';

  return (
    <div className="group relative block cursor-pointer">
      {children}
      <span
        className={`pointer-events-none invisible absolute z-10 whitespace-nowrap rounded-md bg-[#111] px-2.5 py-1.5 text-center font-sans text-xs text-white opacity-0 transition-opacity duration-300 group-hover:visible group-hover:opacity-100 ${tipPos}`}
      >
        {text}
      </span>
    </div>
  );
}
