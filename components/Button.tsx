import Link from "next/link";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  href: string;
}

const Button: React.FC<ButtonProps> = ({ children, href }) => {
  return (
    <Link
      href={href}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {children}
    </Link>
  );
};

export default Button;
