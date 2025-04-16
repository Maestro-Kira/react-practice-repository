import { motion } from "framer-motion";
import { useState } from "react";

const items = [
  { title: "Title 1", content: "This is content of item 1" },

  { title: "Title 2", content: "This is content of item 2" },

  { title: "Title 3", content: "This is content of item 3" },

  { title: "Title 4", content: "This is content of item 4" },
];

const Accordeon = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItems = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index}>
            <button
              onClick={() => toggleItems(index)}
              className="w-full text-left p-2 bg-gray-300 rounded focus:outline-nine"
            >
              {item.title}
            </button>

            <motion.div
              className="overflow-hidden"
              initial={{ height: 0 }}
              animate={{ height: openIndex === index ? "auto" : 0 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="p-2 bg-gray-200 text-black rounded">
                {item.content}
              </h1>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Accordeon;
