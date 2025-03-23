"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type ButtonProps = {
  text?: string;
  fontsize?: string;
  icon?: IconDefinition;
  onClick?: () => void;
  border?: string;
  background?: string;
  color?: string;
  href?: string;
  target?: string;
};

const Button: React.FC<ButtonProps> = ({ text, icon, onClick, border, background, color, href, target, fontsize }) => {
  const baseStyles = "cursor-pointer flex text-[14px] min-h-[42px] max-h-[42px] min-w-[42px] items-center justify-center rounded-lg gap-2 p-2 hover:scale-[1.02] hover:transition-all hover:duration-200 border hover:border-2";
  
  const content = (
    <button
      className={baseStyles}
      onClick={onClick}
      style={{
        background: background || "#ff5e0060",
        borderColor: border || "#ff6900",
        color: color || "white",
        fontSize: fontsize || "14px",
      }}
    >
      {icon && <FontAwesomeIcon icon={icon} />}
      {text}
    </button>
  );

  return href ? <a href={href} target={target} rel="noopener noreferrer">{content}</a> : content;
};

export default Button;
