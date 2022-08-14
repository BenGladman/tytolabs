import React from "react";

interface PageProps {
  is404: boolean;
}

export function Page({ is404 }: PageProps) {
  if (is404) {
    return (
      <main>
        <h2>404 Page Not Found</h2>
        <p>This page could not be found.</p>
      </main>
    );
  } else {
    return (
      <main>
        <h2>500 Internal Server Error</h2>
        <p>Something went wrong.</p>
      </main>
    );
  }
}
