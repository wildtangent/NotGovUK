import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';

export const title = 'Home';

const Page: FC<PageProps> = props => (
  <Fragment>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <h1>{title}</h1>
    <p>This is the home page.</p>
  </Fragment>
);

export default Page;
