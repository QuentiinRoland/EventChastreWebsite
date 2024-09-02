import React from "react";

interface ButtonProps extends React.PropsWithChildren {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ className, children, onClick }) => {
  return (
    <button
      className={`relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#FE8C5F] to-[#FF5E19] shadow-[0px_0px_12px_#F57045] text-white ${className}`}
      onClick={onClick}
    >
      <div className="absolute inset-0">
        <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
        <div className="rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
        <div className="rounded-lg absolute inset-0 shadow-[0_0_10px_rgb(255,132,65,.7)_inset]"></div>
      </div>
      {children}
    </button>
  );
};

export default Button;
