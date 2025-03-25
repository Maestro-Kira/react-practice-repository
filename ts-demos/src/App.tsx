import EventHandling from "./components/EventHandling";
import ContactForm from "./ContactForm";
import FocusInput from "./FocusInput";

const App = () => {
  return (
    <div>
      <FocusInput />
      <ContactForm />
      <EventHandling />
    </div>
  );
};

export default App;
