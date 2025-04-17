import { motion } from "framer-motion";
import { useState } from "react";
import { RiArrowDownDoubleLine } from "react-icons/ri";

const items = [
  { title: "Title 1", content: "Lorem ipsum dolor sit amet, consectetur." },
  { title: "Title 2", content: "Aliquam vel sem at nulla posuere egestas." },
  { title: "Title 3", content: "Curabitur vitae sapien non metus varius." },
  { title: "Title 4", content: "Sed in urna a justo dictum tincidunt." },
];

const Accordion = () => {
  const [openAccordeon, setOpenAccordeon] = useState<number | null>(null);
  const toggleAccordeon = (index: number) => {
    setOpenAccordeon(openAccordeon === index ? null : index);
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col w-96 space-y-2">
        {items.map((item, index) => (
          <div key={index}>
            <div>
              <button
                className="p-2 rounded bg-teal-600 w-full flex items-center justify-between focus:outline-none"
                onClick={() => toggleAccordeon(index)}
              >
                {item.title}
                <motion.div
                  animate={{ rotate: openAccordeon === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <RiArrowDownDoubleLine className="text-white" />
                </motion.div>
              </button>
              <motion.div
                className="overflow-hidden"
                initial={{ height: 0 }}
                animate={{ height: openAccordeon === index ? "auto" : "0" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <h1 className="p-2 bg-gray-200 text-black rounded">
                  {item.content}
                </h1>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Accordion;
