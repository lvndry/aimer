/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import { type ReactNode, useState } from "react";
import { useForm, FormProvider, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Step } from "./Step";
import { Confirmation } from "./Confirmation";
import { BasicInfo } from "./BasicInfo";
import { api } from "~/trpc/react";
import { type CreateUser, createCreativeSchena } from "~/types/creative";
import { useRouter } from "next/navigation";

export type FormFields = keyof CreateUser;

export function Form() {
  const methods = useForm<CreateUser>({
    resolver: zodResolver(createCreativeSchena),
  });
  const { handleSubmit, trigger } = methods;
  const [formStepIndex, setFormStepIndex] = useState(0);
  const createUser = api.creative.create.useMutation();

  const router = useRouter();

  const onSubmit: SubmitHandler<CreateUser> = async (data) => {
    const createdUser = await createUser.mutateAsync({ ...data });
    router.push(`/@${createdUser.username}`);
  };

  const steps: { component: ReactNode; fields?: FormFields[] }[] = [
    {
      component: <BasicInfo key="basic-info" />,
      fields: ["firstName", "lastName", "location", "birthdate", "username"],
    },
    { component: <Confirmation key="confirmation" /> },
  ];

  const goPrev = () => {
    if (formStepIndex > 0) {
      setFormStepIndex(formStepIndex - 1);
    }
  };

  const goNext = async () => {
    const fields = steps[formStepIndex]?.fields;
    if (fields) {
      const output = await trigger(fields, { shouldFocus: true });
      if (!output) return;

      if (formStepIndex < steps.length - 1) {
        setFormStepIndex(formStepIndex + 1);
      }
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Step
          goPrev={goPrev}
          goNext={goNext}
          lastStep={formStepIndex === steps.length - 1}
          onSubmit={() => handleSubmit(onSubmit)()}
        >
          {steps[formStepIndex]?.component}
        </Step>
      </form>
    </FormProvider>
  );
}
