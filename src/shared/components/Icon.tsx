import svgSprite from '../../../public/icons.svg';
interface Props {
  icon: string;
  color: string;
  size?: string;
  outlineColor?: string;
  outlineWidth?: number;
  styles?: string;
  rotate?: number;
}

const Icon = ({
  icon,
  color,
  outlineColor,
  size,
  outlineWidth = 0,
  styles,
  rotate,
}: Props) => {
  const rotationStyle = rotate ? { transform: `rotate(${rotate}deg)` } : {};
  return (
    <svg
      className={`${size} ${color} ${outlineColor} ${styles}`}
      style={{ strokeWidth: outlineWidth, ...rotationStyle }}
    >
      <use href={`${svgSprite}#${icon}`} />
    </svg>
  );
};

export default Icon;
