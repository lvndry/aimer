import Head from "next/head";
import { type ReactNode } from "react";

type onboardingProps = {
  children: ReactNode;
};

export default function Layout({ children }: onboardingProps) {
  return (
    <>
      <Head>
        <title>Onboarding</title>
      </Head>
      <article className="flex min-h-screen flex-col items-center justify-center bg-blue-300 text-white">
        {children}
      </article>
    </>
  );
}
