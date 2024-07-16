interface Props {
  styles: string;
}

export const DropdownArrowIcon = ({ styles }: Props) => {
  return (
    <svg
      width="12"
      height="7"
      viewBox="0 0 12 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles}
    >
      <path
        d="M11.086 0H10.0606C9.99087 0 9.92525 0.0341798 9.88423 0.0902345L6.00005 5.44414L2.11587 0.0902345C2.07486 0.0341798 2.00923 0 1.9395 0H0.914114C0.825246 0 0.773293 0.101172 0.825246 0.173633L5.64595 6.81953C5.82095 7.06016 6.17915 7.06016 6.35279 6.81953L11.1735 0.173633C11.2268 0.101172 11.1749 0 11.086 0Z"
        fill="white"
      />
    </svg>
  );
};
