import { FC, ReactElement, ReactNode, createElement as h } from 'react';
import reactHelmetDefault, * as reactHelmetNamed from 'react-helmet-async';
import { MemoryRouter } from 'react-router';
import { render as _render, RenderOptions } from '@testing-library/react';
import userEventDefault from '@testing-library/user-event';

import '@testing-library/jest-dom';

const reactHelmet = reactHelmetDefault || reactHelmetNamed;
const { HelmetProvider } = reactHelmet;

const Providers: FC<{ children?: ReactNode, routerProps?: object }> = ({
  children,
  routerProps
}) => (
  h(HelmetProvider, {},
    h(MemoryRouter, routerProps || {
      future: {
        v7_relativeSplatPath: true,
        v7_startTransition: true
      },
      initialEntries: ['/previous', '/current', '/next'],
      initialIndex: 1
    }, children) )
);

export const render = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
): ReturnType<typeof _render> => _render(
  ui,
  {
    wrapper: Providers,
    ...options
  }
)

export const userEvent = (userEventDefault as any).default as typeof userEventDefault;

export * from '@testing-library/react';
