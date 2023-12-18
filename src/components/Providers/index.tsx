"use client";

import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

interface Props {
  children: ReactNode;
}

export const Providers = ({ children }: Props) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
