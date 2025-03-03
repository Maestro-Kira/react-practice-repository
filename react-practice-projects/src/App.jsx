import Accordeon from "./components/Accordeon";
import { accordionData } from "./utils/content";

const App = () => {
  return (
    <div>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordeon title={title} content={content} key={title} />
        ))}
      </div>
    </div>
  );
};
export default App;
