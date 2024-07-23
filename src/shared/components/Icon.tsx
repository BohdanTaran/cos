import svgSprite from '../../../public/icons.svg';
interface Props {
  icon: string;
  color?: string;
  size?: number;
  outlineColor?: string;
}

const Icon = ({ icon, color, outlineColor, size }: Props) => {
  return (
    <svg height={size} fill={color} stroke={outlineColor}>
      <use href={`${svgSprite}#${icon}`} />
    </svg>
  );
};

export default Icon;
