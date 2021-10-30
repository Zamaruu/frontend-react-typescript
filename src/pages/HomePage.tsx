/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from "react";
import { getUnanswerdQuestions, IQuestionData } from "../bloc/QuestionData";
import { PageTitle } from "../components/PageTitle";
import { QuestionList } from "../components/QuestionList";
import { Page } from "./Page";
import { PrimaryButton } from '../css/Styles';
import { useNavigate } from 'react-router';

export const HomePage = () => {
    const navigate = useNavigate();
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
        navigate('ask');
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