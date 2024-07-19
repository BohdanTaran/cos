interface Props {
  isRight?: boolean;
  styles?: string;
  color?: string;
  size?: number
}

export const ArrowIcon = ({ isRight, styles, color, size }: Props) => {
  return (
    <svg
      width="12"
      height={size ? size : 19}
      viewBox="0 0 12 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${isRight ? 'rotate-180' : 'rotate-0'} ${styles}`}
    >
      <path
        d="M11.9692 2.61587V0.804151C11.9692 0.64712 11.7888 0.560401 11.6669 0.656495L1.10127 8.90884C1.0115 8.97865 0.938865 9.06804 0.888898 9.1702C0.838932 9.27235 0.812958 9.38457 0.812958 9.49829C0.812958 9.61201 0.838932 9.72423 0.888898 9.82639C0.938865 9.92854 1.0115 10.0179 1.10127 10.0877L11.6669 18.3401C11.7911 18.4362 11.9692 18.3495 11.9692 18.1924V16.3807C11.9692 16.2659 11.9153 16.1557 11.8263 16.0854L3.38877 9.49946L11.8263 2.91118C11.9153 2.84087 11.9692 2.73071 11.9692 2.61587Z"
        fill={color}
      />
    </svg>
  );
};
