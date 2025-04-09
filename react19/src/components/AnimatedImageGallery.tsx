import { motion } from "motion/react";

const img = [
  {
    link: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D",
    caption: "Caption for image 1",
  },
  {
    link: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYWNofGVufDB8fDB8fHww",
    caption: "Caption for image 2",
  },
  {
    link: "https://media.istockphoto.com/id/2153741067/photo/boardwalk-into-tropical-paradise-island.webp?a=1&b=1&s=612x612&w=0&k=20&c=8xqrSdJmY1kEimRbPap_l6z9b_OrISfPV7aKf0d6gHI=",
    caption: "Caption for image 3",
  },
];

const AnimatedImageGallery = () => {
  return (
    <div className="w-[80%] flex ">
      {img.map((image, index) => (
        <motion.div
          whileHover={{ scale: 1.05 }}
          key={index}
          className="relative m-[1rem] overflow-hidden rounded-lg shadow-lg"
        >
          <img
            src={image.link}
            alt={image.caption}
            className="object-cover object-center max-w-sm h-full"
          />

          <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer text-white">
            <p className="text-lg font-bold">{image.caption}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
export default AnimatedImageGallery;
