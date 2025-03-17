
import { cn } from "@/lib/utils";
import React from "react";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
  serif?: boolean;
  gradient?: boolean;
}

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: "xs" | "sm" | "base" | "lg" | "xl";
  muted?: boolean;
}

export function Heading({
  as: Component = "h2",
  size = "xl",
  serif = false,
  gradient = false,
  className,
  children,
  ...props
}: HeadingProps) {
  return (
    <Component
      className={cn(
        // Base styles
        "font-bold tracking-tight",
        // Size variants
        {
          "text-xs": size === "xs",
          "text-sm": size === "sm",
          "text-base": size === "md",
          "text-lg": size === "lg",
          "text-xl": size === "xl",
          "text-2xl": size === "2xl",
          "text-3xl": size === "3xl",
          "text-4xl": size === "4xl",
          "text-5xl": size === "5xl",
          "text-6xl": size === "6xl",
        },
        // Font family
        serif ? "font-serif" : "font-sans",
        // Gradient option
        gradient ? "bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-700" : "",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function Paragraph({
  size = "base",
  muted = false,
  className,
  children,
  ...props
}: ParagraphProps) {
  return (
    <p
      className={cn(
        // Base styles
        "leading-relaxed",
        // Size variants
        {
          "text-xs": size === "xs",
          "text-sm": size === "sm",
          "text-base": size === "base",
          "text-lg": size === "lg",
          "text-xl": size === "xl",
        },
        // Color variants
        muted ? "text-muted-foreground" : "text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export function Label({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-block px-3 py-1 text-xs font-medium rounded-full",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export function Badge({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export function Blockquote({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote
      className={cn(
        "pl-4 border-l-4 border-primary/20 italic text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </blockquote>
  );
}
