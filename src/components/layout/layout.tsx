import React from 'react';
import tw from 'twin.macro';
import Main from './main';

import Navbar from './navbar';
import Footer from './footer';
import { GlobalStyles } from 'twin.macro';

const LayoutStyle = tw.div`m-0 w-screen min-h-screen flex flex-col overflow-x-hidden`;

const Spacer = tw.div`flex-1`;

type LayoutProps = {
  sidebar?: any;
};

const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
  sidebar,
}) => {
  return (
    <>
      <LayoutStyle>
        <Navbar />
        <Main sidebar={sidebar}>{children}</Main>
        <Spacer />
        <Footer />
      </LayoutStyle>
    </>
  );
};

export default Layout;
