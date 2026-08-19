import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "accent" | "outline";
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  icon,
  children,
  className = "",
  ...props
}) => {
  const variantClass =
    variant === "accent"
      ? "btn-atlas-accent"
      : variant === "outline"
      ? "btn-atlas-outline"
      : "btn-atlas-primary";

  return (
    <button className={`${variantClass} ${className}`} {...props}>
      {children}
      {icon && <span className="d-inline-flex align-items-center">{icon}</span>}
    </button>
  );
};

export default Button;
