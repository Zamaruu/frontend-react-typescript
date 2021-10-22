import { useEffect, useState } from "react";
import { getUnanswerdQuestions, IQuestionData } from "../bloc/QuestionData";
import { PageTitle } from "../components/PageTitle";
import { Question } from "../components/Question";
import { QuestionList } from "../components/QuestionList";
import { Page } from "./Page";

export const HomePage = () => {
    const [questionState, setQuestions] = useState<IQuestionData[]>([]);
    const [loadingState, setLoading] = useState<boolean>(true);

    useEffect(() => {
        console.log('first render');
        const doGetUnansweredQuestions = async () => {
            const questions = await getUnanswerdQuestions();
            setQuestions(questions);
            setLoading(false);
        }
        doGetUnansweredQuestions();
    }, []);

    //Methods
    const handleAskQuestionClick = () => {
        console.log('TODO- move to the AskPage');
    }


    return (
        <Page>
            <div>
                <PageTitle>Unanswerd Querstions</PageTitle>
                <button onClick={handleAskQuestionClick}>
                    Ask a Question
                </button>
            </div>
            {
                loadingState ? (
                    <div>Loading...</div>
                ): (
                    <QuestionList
                        data={questionState}
                        // renderItem={(question) => <div>{question.title}</div>}
                    />
                )
            }
        </Page>
    );   
}