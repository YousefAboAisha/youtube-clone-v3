import React, { forwardRef } from "react";

type InputProps = {
  placeholder: string;
  additionalStyles?: string;
  icon?: JSX.Element;
  error?: string;
  pattern?: string;
  required?: boolean;
} & React.ComponentProps<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      placeholder,
      additionalStyles,
      icon,
      error,
      pattern,
      required = true,
      ...rest
    },
    ref
  ) => {
    const hasError = error;

    return (
      <>
        <div className="relative bg-theme rounded-[40px]">
          <div className="absolute flex justify-center p-2 rounded-l-md items-center left-2 top-[50%] translate-y-[-50%] h-full border-none outline-none text-theme text-theme">
            {icon}
          </div>

          <input
            ref={ref}
            {...rest}
            className={`h-[40px] pl-11 full-theme rounded-[40px] text-md outline-none duration-300 w-full disabled:cursor-not-allowed ${
              error ? "!border-[red] animate-shake" : ""
            } ${additionalStyles}`}
            placeholder={placeholder}
            pattern={pattern}
            required={required}
          />
        </div>
        {error ? <span className="text-[red] text-[12px]">{error}</span> : null}
      </>
    );
  }
);

export default Input;
