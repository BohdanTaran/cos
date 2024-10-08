import Icon from '../../../shared/components/Icon';

interface Props {
  rating: number;
}

const StarsReview = ({ rating }: Props) => {
  let fullStars = 0;
  let halfStars = 0;
  let emptyStars = 0;

  if (rating !== undefined && rating > 0 && rating <= 5) {
    for (let i = 0; i <= 4; i++) {
      if (rating - 1 >= 0) {
        fullStars = fullStars + 1;
        rating = rating - 1;
      } else if (rating === 0.5) {
        halfStars = halfStars + 1;
        rating = rating - 0.5;
      } else if (rating == 0) {
        emptyStars = emptyStars + 1;
      } else {
        break;
      }
    }
  } else {
    emptyStars = 5;
  }

  return (
    <div className="flex space-x-2">
      {Array.from({ length: fullStars }, () => (
        <Icon icon="star-full" styles="w-5 h-5" color="fill-yellow-300" />
      ))}

      {Array.from({ length: halfStars }, () => (
        <Icon icon="star-half" styles="w-5 h-5" color="fill-yellow-300" />
      ))}

      {Array.from({ length: emptyStars }, () => (
        <Icon icon="star-empty" styles="w-5 h-5" color="fill-yellow-300" />
      ))}
    </div>
  );
};
export default StarsReview;
