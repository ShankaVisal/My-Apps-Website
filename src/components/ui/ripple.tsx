"use client";

import { cn } from "@/lib/utils";
import React, { CSSProperties } from "react";

const Ripple = React.memo(
  React.forwardRef<
    HTMLDivElement,
    {
      ripples?: number;
      duration?: number;
      className?: string;
      style?: CSSProperties;
      children?: React.ReactNode;
    }
  >(
    (
      {
        ripples = 5,
        duration = 1000,
        className,
        style,
        children,
        ...props
      },
      ref,
    ) => {
      const ripplesArray = Array(ripples).fill(0);
      const rippleDuration = `${duration}ms`;

      return (
        <div
          ref={ref}
          className={cn(
            "relative flex size-full items-center justify-center",
            className,
          )}
          style={style}
          {...props}
        >
          <div className="z-10">{children}</div>
          <div className="absolute inset-0">
            {ripplesArray.map((_, i) => (
              <div
                key={i}
                className="absolute size-full animate-ripple rounded-full bg-primary/10"
                style={
                  {
                    "--ripple-duration": rippleDuration,
                    animationDelay: `${(i * duration) / ripples / 2}ms`,
                  } as CSSProperties
                }
              />
            ))}
          </div>
        </div>
      );
    },
  ),
);

Ripple.displayName = "Ripple";

export default Ripple;
