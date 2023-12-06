import { type ReactNode } from "react";

type NavigationButtonsProps = {
  lastStep: boolean;
  goPrev: () => void;
  goNext: () => void;
  onSubmit: () => void;
};

export function NavigationButtons({
  goPrev,
  goNext,
  lastStep,
  onSubmit,
}: NavigationButtonsProps) {
  return (
    <div className="absolute bottom-[100px] flex gap-80">
      <button type="button" onClick={goPrev}>
        <p className="">Back</p>
      </button>
      {lastStep ? (
        <button type="button" onClick={onSubmit}>
          <p className="">Submit</p>
        </button>
      ) : (
        <button type="button" onClick={goNext}>
          <p className="">Next</p>
        </button>
      )}
    </div>
  );
}

type StepProps = {
  children: ReactNode;
  lastStep: boolean;
  goPrev: () => void;
  goNext: () => void;
  onSubmit: () => void;
};

export function Step({
  children,
  lastStep = false,
  goPrev,
  goNext,
  onSubmit,
}: StepProps) {
  return (
    <div className="flex min-h-[200px] min-w-[500px] flex-col justify-between">
      {children}
      <NavigationButtons
        goPrev={goPrev}
        goNext={goNext}
        lastStep={lastStep}
        onSubmit={onSubmit}
      />
    </div>
  );
}
