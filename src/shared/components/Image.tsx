interface Props {
  src: string;
  size?: number;
  styles?: string;
}

const Image = ({src, size, styles}: Props) => {
	return <img className={styles} width={size} src={src} alt="img" />;
}
export default Image