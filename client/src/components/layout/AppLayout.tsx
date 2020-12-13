import React from 'react';
import { AppLayoutWrapper } from './layout.styled';

interface IAppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: IAppLayoutProps) => {
  return <AppLayoutWrapper>{children}</AppLayoutWrapper>;
};

export default AppLayout;
