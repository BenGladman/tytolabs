import React from "react";
import { PageContextProvider, usePageContext } from "./usePageContext";
import type { PageContext } from "./types";
import "./global.css";
import { Footer, Header } from "../components";

export function PageShell({
  children,
  pageContext,
}: {
  children: React.ReactNode;
  pageContext: PageContext;
}) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Header />
        {children}
        <Footer />
      </PageContextProvider>
    </React.StrictMode>
  );
}

export function Link(props: {
  href?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const pageContext = usePageContext();
  const className = [
    props.className,
    pageContext.urlPathname === props.href && "is-active",
  ]
    .filter(Boolean)
    .join(" ");
  return <a {...props} className={className} />;
}
