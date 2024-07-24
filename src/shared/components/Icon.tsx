import svgSprite from '../../../public/icons.svg';
interface Props {
  icon: string;
  color?: string;
  size: string;
  outlineColor?: string;
  outlineWidth?: number;
}

const Icon = ({ icon, color, outlineColor, size, outlineWidth = 0 }: Props) => {
  return (
    <svg
      fill={color}
      className={size}
      stroke={outlineColor}
      style={{ strokeWidth: outlineWidth }}
    >
      <use href={`${svgSprite}#${icon}`} />
    </svg>
  );
};

export default Icon;
