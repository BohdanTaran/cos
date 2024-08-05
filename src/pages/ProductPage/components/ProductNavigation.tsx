import Icon from '../../../shared/components/Icon'

const ProductNavigation = () => {
  return (
    <nav className="flex text-sm font-roboto ">
      <Icon icon="home" color="fill-black/45" size="w-4 h-4" />
      <span className="px-2 text-black/45">/</span>
      <li className="text-black/45">Funko POP!</li>
      <span className="px-2">/</span>
      <li>Harry Potter with a wand</li>
    </nav>
  );
};
export default ProductNavigation;
