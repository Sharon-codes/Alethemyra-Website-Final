import React, { forwardRef } from "react";

export const CardContainer = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`[perspective:1000px] group ${className}`}>{children}</div>
);

export const CardBody = forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
  ({ children, className = "", ...props }, ref) => (
    <div
      ref={ref}
      className={`transition-transform duration-300 group-hover:rotate-x-6 group-hover:-rotate-y-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
);

export const CardItem = ({
  children,
  className = "",
  as: Component = "div",
  translateZ,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  as?: any;
  translateZ?: number | string;
  [key: string]: any;
}) => {
  const style = translateZ
    ? { transform: `translateZ(${typeof translateZ === "number" ? `${translateZ}px` : translateZ})` }
    : undefined;
  return (
    <Component className={className} style={style} {...props}>
      {children}
    </Component>
  );
};
CardBody.displayName = "CardBody";
