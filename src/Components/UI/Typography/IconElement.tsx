import { IconType, IconBaseProps } from "react-icons";

type IconProps = {
  Icon: IconType;
  size?: number;
  styles?: string;
} & IconBaseProps;

const IconElement = ({ Icon, size = 20, styles, ...rest }: IconProps) => {
  return (
    <Icon
      className={`text-theme font-extralight ${styles}`}
      size={size}
      {...rest}
    />
  );
};

export default IconElement;
