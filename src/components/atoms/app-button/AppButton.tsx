import { Button, type ButtonProps } from "@heroui/react";
import type { ReactNode } from "react";

interface AppButtonTypeProps {
  children: ReactNode;
  color: ButtonProps["color"];
  size?: ButtonProps["size"];
  variant?: ButtonProps["variant"];
  isDisabled?: boolean;
  onClick: () => void;
  className?: string;
  isFullWidth?: boolean;
  isLoading?: boolean;
}

const AppButton = (props: AppButtonTypeProps) => {
  const {
    children,
    color = "primary",
    size,
    variant,
    isDisabled,
    onClick,
    className,
    isFullWidth,
    isLoading = false
  } = props || {};
  return (
    <Button
      color={color}
      size={size}
      variant={variant}
      disabled={isDisabled}
      onPress={onClick}
      className={className}
      fullWidth={isFullWidth}
      isLoading={isLoading}
    >
      {children}
    </Button>
  );
};

export default AppButton;
