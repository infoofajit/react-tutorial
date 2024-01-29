import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Section from "./components/Section";
import Heading from "./components/Heading";
import Child1 from "./components/Child1";

function App() {
  const {theme} = useContext(ThemeContext)
  
  return (
    <div className="App">
      <ThemeContext.Provider value={{theme}}>
        <Section level={1}>
          <Heading>Title</Heading>
          <Section level={2}>
            <Heading>Heading</Heading>
            <Heading>Heading</Heading>
            <Section level={3}>
              <Heading>Sub-heading</Heading>
              <Section level={4}>
                <Heading>Sub-sub-heading</Heading>
              </Section>
            </Section>
          </Section>
        </Section>
        <Child1 />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
