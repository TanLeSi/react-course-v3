import Questions from "./Questions"

const QuestionList = ({ questions }) => {
  return (
    <section className="container">
      <h1>Questions</h1>
      {
        questions.map((question) => {
          return (
            <Questions key={question.id} question={question} />
          )
        })
      }
    </section>
  )
}

export default QuestionList
