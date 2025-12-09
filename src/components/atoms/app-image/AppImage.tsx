import { Image } from "@heroui/react";

interface AppImageTypeProps {
  src: string;
  alt: string;
  width: number;
  height?: number;
  className?: string;
}

const AppImage = (props: AppImageTypeProps) => {
  const { src, alt, height, width, className } = props;
  return (
    <Image
      alt={alt}
      src={src}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default AppImage;
