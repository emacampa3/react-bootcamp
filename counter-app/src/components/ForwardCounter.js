import Card from './Card';
import useCounter from '../hooks/use-counter';

const ForwardCounter = () => {
  const counter = useCounter() /* calling the custom hook function  */

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
