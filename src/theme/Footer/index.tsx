import React, {ComponentProps} from 'react';
import type FooterType from '@theme/Footer';
import Footer from '@theme-original/Footer';

type Props = ComponentProps<typeof FooterType>;

export default function FooterWrapper(props: Props): JSX.Element {
  return (
    <>
      <Footer {...props} />
    </>
  );
}
