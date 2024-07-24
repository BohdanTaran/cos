import svgSprite from '../../../public/icons.svg';
interface Props {
  icon: string;
  color: string;
  size?: string;
  outlineColor?: string;
  outlineWidth?: number;
  styles?: string;
}

const Icon = ({
  icon,
  color,
  outlineColor,
  size,
  outlineWidth = 0,
  styles,
}: Props) => {
  return (
    <svg
      className={`${size} ${color} ${styles}`}
      stroke={outlineColor}
      style={{ strokeWidth: outlineWidth }}
    >
      <use href={`${svgSprite}#${icon}`} />
    </svg>
  );
};

export default Icon;
