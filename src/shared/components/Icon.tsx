import svgSprite from '../../../public/icons.svg';
interface Props {
  icon: string;
  color?: string;
  size?: number;
}

const Icon = ({ color, size, icon }: Props) => {
  return (
    <svg className={`fill-text-${color} w-[${size}px]`}>
      <use href={`${svgSprite}#${icon}`} />
    </svg>
  );
};

export default Icon;
