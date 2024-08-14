interface Props {
  openedTopic: string;
  setOpenedTopic: (topic: string) => void;
  reviews: number;
}

const ProductInformationTabs = ({
  openedTopic,
  setOpenedTopic,
  reviews,
}: Props) => {
  return (
    <div className="flex justify-center space-x-4 text-xs pb-6 laptop:justify-between laptop:px-[68px] laptop:text-xl laptop:pb-10 desktop:w-[1076px]">
      <button
        onClick={() => setOpenedTopic('Description')}
        className={`px-2 py-2.5 ${
          openedTopic === 'Description'
            ? 'text-primary-60 border-b border-primary-60'
            : ''
        }`}
      >
        Description
      </button>
      <button
        onClick={() => setOpenedTopic('AddInfo')}
        className={`px-2 py-2.5 ${
          openedTopic === 'AddInfo'
            ? 'text-primary-60 border-b border-primary-60'
            : ''
        }`}
      >
        Additional Information
      </button>
      <button
        onClick={() => setOpenedTopic('Reviews')}
        className={`px-2 py-2.5 ${
          openedTopic === 'Reviews'
            ? 'text-primary-60 border-b border-primary-60'
            : ''
        }`}
      >
        Reviews ({reviews})
      </button>
    </div>
  );
};
export default ProductInformationTabs;
