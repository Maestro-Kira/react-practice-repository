import BouncingBall from "./components/BouncingBall";

import BackgroundColorChanger from "./components/BackgroundColorChanger";

import WaveEffect from "./components/WaveEffect";

import ZigZag from "./components/ZigZag";

import SlidingText from "./components/SlidingText";

import Square from "./components/Square";

import PulsatingButton from "./components/PulsatingButton";

const App = () => {
  return (
    <div className="flex flex-wrap">
      <BouncingBall />
      <PulsatingButton />
      <Square />
      <SlidingText />
      <ZigZag />
      <WaveEffect />
      <BackgroundColorChanger />
    </div>
  );
};
export default App;
