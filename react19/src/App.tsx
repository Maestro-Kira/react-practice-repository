import AnimateGallery from "./components/AnimateGallery";

const App = () => {
  return (
    <div>
      <h1 className="text-center text-3xl mb-4">Scroll me please</h1>
      <div className="h-screen"></div>
      <AnimateGallery />
    </div>
  );
};
export default App;
