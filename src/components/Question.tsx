import { IQuestionData } from "../bloc/QuestionData";

interface IProps{
    data: IQuestionData;
    showContent?: boolean;
}

export const Question = ({data, showContent = true}: IProps) => (
    <div>
        <div>
            {data.title}
        </div>
        <div>
            {   showContent && (
                    data.content.length > 50
                    ? `${data.content.substring(0, 50)}...`
                    : data.content
            )}
        </div>
        <div>
            {
                `Asked by ${data.userName} on ${data.createdAt.toLocaleDateString()} ${data.createdAt.toLocaleTimeString()}` 
            }
        </div>
    </div>
);
// Question.defaultProps = {
//     showContent: true,
// };