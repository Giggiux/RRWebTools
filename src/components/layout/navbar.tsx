import React, { useState, useEffect } from 'react';
import tw, { styled } from 'twin.macro';
import Link from 'next/link';

const Nav = tw.nav`w-full h-16 flex items-center p-4`;
const NavLink = tw.a`text-2xl text-blue-500 hover:text-green-600 px-4 font-medium`;

type NavbarProps = {};

const Navbar: React.FunctionComponent<NavbarProps> = () => {
  return (
    <Nav>
      <Link href="/" passHref>
        <NavLink>Home</NavLink>
      </Link>
    </Nav>
  );
};

export default Navbar;
