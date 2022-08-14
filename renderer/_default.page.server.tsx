import React from "react";
import ReactDOMServer from "react-dom/server";
import type { PageContextBuiltIn } from "vite-plugin-ssr";
import { dangerouslySkipEscape, escapeInject } from "vite-plugin-ssr";
import { logoUrl } from "../components";
import { PageShell } from "./PageShell";
import type { PageContext } from "./types";

// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ["pageProps", "urlPathname"];

export async function render(pageContext: PageContextBuiltIn & PageContext) {
  const { Page, pageProps } = pageContext;
  const pageHtml = ReactDOMServer.renderToString(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  );

  // See https://vite-plugin-ssr.com/head
  const { documentProps } = pageContext.exports;
  const title = (documentProps && documentProps.title) || "Tyto Labs Ltd";
  const desc = (documentProps && documentProps.description) || "Tyto Labs Ltd";

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body id="page-view">${dangerouslySkipEscape(pageHtml)}</body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    },
  };
}
