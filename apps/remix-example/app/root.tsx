import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import { NotGovUKPage } from '@not-govuk/components';

import "./style.scss";

export const links: LinksFunction = () => [
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#0b0c0c" />
        <link rel="shortcut icon" sizes="16x16 32x32 48x48" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/apple-touch-icon-167x167.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta property="og:image" content="/opengraph-image.png" />
        <Meta />
        <Links />
      </head>
      <body>
        <NotGovUKPage
          breadcrumbs={[
            {
              href: "/",
              text: "Home"
            },
            {
              href: "/one",
              text: "One"
            },
            {
              href: "/one/two",
              text: "Two"
            }
          ]}
          feedbackHref="/feedback"
          navigation={[
            {
              href: "/one",
              text: "One"
            },
            {
              href: "/one/two",
              text: "Two"
            },
            {
              href: "/three",
              text: "Three"
            },
            {
              href: "/four",
              text: "Four"
            }
          ]}
          organisationHref="/"
          organisationText="!GOV.UK"
          phase="alpha"
          serviceName="Remix App"
          serviceHref="/"
          title="NotGovUK"
        >
          {children}
        </NotGovUKPage>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
