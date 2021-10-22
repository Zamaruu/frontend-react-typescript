import { render } from "react-dom";
import { IQuestionData } from "../bloc/QuestionData";
import { Question } from "./Question";

interface IProps{
    data: IQuestionData[];
    renderItem?: (item: IQuestionData) => JSX.Element;
}

export const QuestionList = ({data, renderItem}: IProps) => (
    <ul>
        {
            data.map((question) => (
                <li key={question.questionId}>
                    {
                        renderItem 
                            ? renderItem(question)
                            : <Question data={question}></Question>
                    }
                </li>
            ))
        }
    </ul>
);