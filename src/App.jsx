import { useState } from "react";
import "./App.css";
import back from "./assets/back.svg";

function App() {
  const [idx, setIdx] = useState(0);
  const [questions, setQuestions] = useState([
    {
      question: "What is your primary goal?",
      type: "dropdown",
      answer: "",
      options: [
        { label: "Lose weight", value: "Lose weight" },
        { label: "Build Muscle", value: "Build Muscle" },
        { label: "Keep Fit", value: "Keep Fit" },
      ],
    },
    {
      question: "How old are you?",
      type: "input",
      answer: "",
      prefix: "Years",
    },
    {
      question: "How Tall are you?",
      type: "input",
      answer: "",
      prefix: "cm",
    },
    {
      question: "What's your current weight?",
      type: "input",
      answer: "",
      prefix: "cm",
    },
  ]);
  const renderQuestion = () => {
    switch (questions[idx].type) {
      case "input":
        return <input placeholder="" />;
      case "dropdown":
        return (
          <section
            class="quiz_questionsSection__Ohn35"
            data-test="singleSelectQuestion"
            style={{ "--selectableCardActiveColor": "#FFFFFF" }}
          >
            {questions[idx].options?.map((ele) => (
              <div
                data-card-id="20818"
                data-card-idx="0"
                class="quiz_quizCardContainer__qB__T selectable-card_borderedCard__ZPtZh"
              >
                <article class="quiz_quizCard__UBUUC">
                  <div class="quiz_quizCardContent__GdK4N">
                    <div class="quiz_quizCardHeader__egKdh">{ele.label}</div>
                  </div>
                  <span class="quiz_isTransparent__3uLMZ">
                    <input
                      class="checkbox_checkbox__mYYOt"
                      readonly=""
                      type="checkbox"
                      data-checkbox="generated-single-select-question"
                    />
                    <label></label>
                  </span>
                </article>
              </div>
            ))}
          </section>
        );
      default:
        break;
    }
  };
  return (
    <div className="w-50 m-auto">
      <div className="quiz_progressContainer">
        <img
          src={back}
          alt=""
          width={24}
          height={24}
          onClick={() => {
            setIdx((b) => (b > 0 ? b - 1 : b));
          }}
        />
        <span className="header_progress">
          <span className="header_currentProgress">{idx + 1}</span>
          <span>/</span>
          {questions.length}
        </span>
      </div>
      <div class="quiz_quizContent__GBDnO">
        <div class="generated-single-select-question_header__fKUem">
          <h1 class="generated-single-select-question_headerTitle__5iVTB">
            {questions[idx].question}
          </h1>
        </div>
      </div>
      {renderQuestion()}
      <div class="submit-animated-button_staticButton__TXhEJ quiz_buttonContainer__OCzhf">
        <button
          onClick={() => {
            setIdx((b) => b + 1);
          }}
          class="button-module_container__ssMyd button-module_defaultColor__MMrQM"
          data-button="age-question-submit"
          disabled={idx + 1 === questions.length}
        >
          <span as="span" class="typography-module_body1Bold__ghm17">
            NEXT STEP
          </span>
        </button>
      </div>
    </div>
  );
}

export default App;
