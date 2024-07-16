interface Props {
  styles?: string;
}

export const HeaderUserIcon = ({ styles }: Props) => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles}
    >
      <path
        d="M18.6284 17C21.9421 17 24.6284 14.3137 24.6284 11C24.6284 7.68629 21.9421 5 18.6284 5C15.3147 5 12.6284 7.68629 12.6284 11C12.6284 14.3137 15.3147 17 18.6284 17Z"
        stroke="#111113"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M6.50525 25.7467C7.57722 21.8383 11.647 20 15.7235 20H21.2762C25.3527 20 29.4225 21.8383 30.4962 25.7467C30.73 26.595 30.8954 27.4605 30.991 28.335C31.0917 29.2517 30.3301 30 29.4041 30H7.59567C6.66965 30 5.90971 29.25 6.00869 28.3367C6.10414 27.4616 6.2713 26.5956 6.50525 25.7467Z"
        stroke="#111113"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
};
