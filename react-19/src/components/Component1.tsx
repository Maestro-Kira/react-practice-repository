import { motion } from "framer-motion";

type Component1Props = {
  products: string;
};

const Button = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="px-4 py-2 border-2 border-green-950 cursor-pointer hover:bg-green-800 transition-all duration-200 "
    >
      CLickme
    </motion.button>
  );
};

const Component1 = ({ products }: Component1Props) => {
  return (
    <div>
      <h2 className="text-2xl mb-2">{products}</h2>
      <Button />
    </div>
  );
};
export default Component1;
