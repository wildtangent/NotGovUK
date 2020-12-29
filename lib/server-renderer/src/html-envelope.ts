import { createElement as h } from 'react';
import { renderToStaticMarkup as r } from 'react-dom/server';
import { HelmetHead, HelmetHeadProps } from './HelmetHead';
import { Scripts, ScriptsProps } from './Scripts';

export type HtmlEnvelope = (options: HelmetHeadProps & Partial<ScriptsProps>) => {
  head: string
  foot: string
};

export const htmlEnvelope: HtmlEnvelope = ({
  assetsPath,
  charSet,
  helmet,
  hydrationData,
  rootId,
  scripts: _scripts,
  stylesheets
}) => {
  const head = r(h(HelmetHead, {
    assetsPath,
    charSet,
    helmet,
    hydrationData,
    rootId,
    stylesheets
  } ));
  const scripts = (
    !_scripts
      ? ''
      : r(h(Scripts, {
        assetsPath,
        scripts: _scripts
      } ))
  );

  return ({
    head: `
<!doctype html>
<html ${helmet.htmlAttributes.toString()}>
  ${head}
  <body ${helmet.bodyAttributes.toString()}>
    <div id="${rootId}">
`,
    foot: `
    </div>
    ${scripts}
  </body>
</html>
`,
  });
};

export default htmlEnvelope;
