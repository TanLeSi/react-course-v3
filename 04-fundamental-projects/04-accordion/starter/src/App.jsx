import questions from "./data";
import QuestionList from "./QuestionList";
const App = () => {
  return (
    <main>
      <QuestionList questions={questions} />
    </main>
  )
};
export default App;
