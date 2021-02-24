import React from 'react';
import tw from 'twin.macro';

const FooterContainer: React.FC = tw.footer`w-full h-16 border-t flex justify-center items-center`;

const FooterMainDiv = tw.div`container mx-auto px-6 py-4`;

const Footer: React.FunctionComponent = () => (
  <FooterContainer>Created by Greg - Powered by Vercel</FooterContainer>
);

export default Footer;
