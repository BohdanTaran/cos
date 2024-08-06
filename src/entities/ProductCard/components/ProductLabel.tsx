interface Props {
  label?: string;
  direction: string;
}

const ProductLabel = ({ label, direction }: Props) => {
  const backgroundLabel = () => {
    switch (label) {
      case 'EXCLUSIVE':
        return 'bg-product-label-exclusive';
      case 'NEW':
        return 'bg-product-label-new';
      case 'SALE':
        return 'bg-product-label-sale';
      case 'LIMITED':
        return 'bg-product-label-limited';
    }
  };

  return (
    <>
      {direction === 'column' ? (
        <div
          style={{
            transformOrigin: 'left bottom',
            clipPath:
              'polygon(0 0, 100% 0, calc(100% - 5%) 50%, 100% 100%, 0 100%)',
          }}
          className={`pr-3 absolute top-[-14px] left-[8px] max-w-[101px] h-[14px] flex items-center text-[10px] transform rotate-90 text-white ${backgroundLabel()} bg-cover bg-left-bottom laptop:top-[-28px] laptop:left-[15px] laptop:h-[27px] laptop:text-sm laptop:font-medium`}
        >
          <span className="ml-1 laptop:ml-2">{label}</span>
        </div>
      ) : (
        <div
          style={{
            transformOrigin: 'left bottom',
            clipPath:
              'polygon(0 0, 100% 0, calc(100% - 5%) 50%, 100% 100%, 0 100%)',
          }}
          className={`w-[38px] flex items-center text-[10px] text-white ${backgroundLabel()} bg-cover bg-left-bottom laptop:h-[24px] w-[48px]`}
        >
          <span className="ml-1 laptop:ml-2 text-[12px] font-medium">
            {label}
          </span>
        </div>
      )}
    </>
  );
};
export default ProductLabel;
