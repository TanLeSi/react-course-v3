import Values from "values.js";
import ColorList from "./ColorList";
import Form from "./Form";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const defaultColor = "#f15025";
const App = () => {
  const [color, setColor] = useState(defaultColor);
  const setInputColor = (hexColor) => {
    try {
      new Values(hexColor).all(10);
      setColor(hexColor);
    } catch (err) {
      toast.error(
        "error",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      )
    }
  }
  return (
    <main>
      <Form setColor={setInputColor} color={color} />
      <ToastContainer position="top-center" />
      <ColorList colors={new Values(color).all(10)} />
    </main>
  )
};
export default App;
