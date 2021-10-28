/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from "react";
import { getUnanswerdQuestions, IQuestionData } from "../bloc/QuestionData";
import { PageTitle } from "../components/PageTitle";
import { Question } from "../components/Question";
import { QuestionList } from "../components/QuestionList";
import { Page } from "./Page";
import { PrimaryButton } from '../css/Styles';

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
            <div
                css={css`
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                `}
            >
                <PageTitle>Unanswerd Querstions</PageTitle>
                <PrimaryButton  onClick={handleAskQuestionClick}>
                    Ask a Question
                </PrimaryButton >
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