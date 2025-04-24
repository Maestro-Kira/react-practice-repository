const cats = [
  {
    name: "Puffins",
    breed: "Bengal",
    url: "https://placehold.co/600x400",
    description:
      "Curious and vocal, Whiskers loves to chat and nap in sunbeams all day long.",
    age: 6,
  },
  {
    name: "Whiskers",
    breed: "Siamese",
    url: "https://placehold.co/600x400",
    description:
      "Curious and vocal, Whiskers loves to chat and nap in sunbeams all day long.",
    age: 4,
  },
  {
    name: "Mittens",
    breed: "Maine Coon",
    url: "https://placehold.co/600x400",
    description:
      "Big and fluffy, Mittens is gentle, affectionate, and loves to be brushed.",
    age: 5,
  },
  {
    name: "Luna",
    breed: "Ragdoll",
    url: "https://placehold.co/600x400",
    description:
      "With striking blue eyes, Luna is calm, cuddly, and loves belly rubs.",
    age: 3,
  },
  {
    name: "Ziggy",
    breed: "Scottish Fold",
    url: "https://placehold.co/600x400",
    description:
      "Ziggy is playful, quirky, and always up to something mischievous.",
    age: 2,
  },
  {
    name: "Nibbles",
    breed: "Sphynx",
    url: "https://placehold.co/600x400",
    description:
      "Nibbles is warm, affectionate, and full of energy despite being hairless!",
    age: 1,
  },
];

const StaggeredList = () => {
  return (
    <div className="bg-white p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {cats.map(({ name, breed, url, description, age }, index) => (
        <div
          key={index}
          className="flex flex-col w-48 border border-black rounded shadow-lg"
        >
          <div className="w-full">
            <img src={url} className="w-full rounded" />
          </div>
          <div className="p-4">
            <h2 className="font-bold pt-1">{name}</h2>
            <div className="flex gap-2 pt-2">
              <p className="text-gray-600 italic"> {breed}</p>
              <p className="text-gray-600 italic">{`${age}  ${
                age === 1 ? "* year" : "* years"
              }`}</p>
            </div>
            <p className="font-black pt-3">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default StaggeredList;
