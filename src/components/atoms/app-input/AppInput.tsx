/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@heroui/react";
import type { HTMLInputTypeAttribute } from "react";
import {
  Controller,
  type Control,
  type RegisterOptions,
} from "react-hook-form";

interface AppInputTypeProps {
  label: string;
  name: string;
  control: Control<any>;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  className?: string;
  rules?: RegisterOptions;
  isRequired?: boolean;
  disabled?: boolean;
}

const AppInput = (props: AppInputTypeProps) => {
  const {
    label,
    control,
    name,
    className,
    isRequired,
    placeholder,
    rules,
    type = "text",
    disabled,
  } = props;
  return (
    <Controller
      name={name}
      control={control}
      rules={
        isRequired ? { required: `${label} is required`, ...rules } : rules
      }
      render={({ field, fieldState: { error } }) => {
        return (
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input
              {...field}
              label={label}
              type={type}
              placeholder={placeholder}
              disabled={disabled}
              className={className}
              isRequired={isRequired}
              errorMessage={error?.message}
              variant={error ? "bordered" : "flat"}
              isInvalid={!!error}
              onChange={(e) => field.onChange(e.target.value)}
              onBlur={field.onBlur}
              classNames={{
                inputWrapper: "bg-white h-12",
              }}
            />
          </div>
        );
      }}
    />
  );
};

export default AppInput;
