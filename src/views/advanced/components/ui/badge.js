import { cva } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../utils/utils";

const badgeVariants = cva(
  "inline-flex items-center border rounded-full px-2.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-primary hover:bg-primary/80 border-transparent text-primary-foreground",
        gray: "bg-border hover:bg-border/80 text-secondary-foreground",
        secondary:
          "bg-secondary hover:bg-secondary/80 border-transparent text-secondary-foreground",
        destructive:
          "bg-destructive hover:bg-destructive/80 border-transparent text-destructive-foreground",
        outline: "text-foreground",
      },
      size: {
        sm: "h-4 text-xs",
        md: "h-5 text-sm",
        lg: "h-6 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({ className, variant, size, ...props }) {
  return (
    React.createElement("div", {
      className: cn(badgeVariants({ variant, size }), className),
      ...props
    })
  );
}

export { Badge, badgeVariants };
