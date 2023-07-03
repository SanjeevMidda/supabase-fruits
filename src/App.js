import "./index.css";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

function App() {
  const [fruits, setFruits] = useState("");

  const supabase = createClient(
    "https://yfuxmocednamqrybpyus.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlmdXhtb2NlZG5hbXFyeWJweXVzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4ODI4OTQ1MywiZXhwIjoyMDAzODY1NDUzfQ.p7FHiYR7A__PZNWXJNEzwf3awtzIJw5tgqfu6ZyMl7g"
  );

  async function getFruits() {
    const { data } = await supabase.from("fruitTable").select();
    setFruits(data);
  }

  let insertFruit = async () => {
    const { data } = await supabase
      .from("fruitTable")
      .insert({ id: 6, name: "cherries", color: "burgundy", quantity: 57 });
  };

  useEffect(() => {
    getFruits();
    insertFruit();
    console.log(fruits);
  }, []);

  return (
    <div className="App">
      <h1>FRUITS</h1>
      <div className="fruitContainer">
        {fruits &&
          fruits.map((fruit) => {
            return (
              <div>
                <div className="item">
                  <h3>{fruit.id}</h3>
                  <h3>{fruit.name}</h3>
                  <h3>{fruit.color}</h3>
                  <h3>{fruit.quantity}</h3>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
