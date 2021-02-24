import React from 'react';
import tw from 'twin.macro';

const MainContainer = tw.main`m-auto mb-8 p-2 container flex flex-col-reverse lg:flex-row lg:flex-nowrap justify-start items-stretch content-start flex-grow`;

const ContentContainer = tw.section`w-auto my-2 lg:w-3/4 xl:w-2/3 flex-grow`;

const SidebarContainer = tw.section`w-auto mb-2 lg:w-1/4 lg:max-w-xs xl:w-1/4 lg:ml-2`;

type MainProps = {
  sidebar?: any;
};

const Main: React.FC<MainProps> = ({ children, sidebar }) => {
  return (
    <MainContainer>
      <ContentContainer>{children}</ContentContainer>
      {sidebar ? <SidebarContainer>{sidebar}</SidebarContainer> : null}
    </MainContainer>
  );
};

export default Main;
