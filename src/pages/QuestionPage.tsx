/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { gray3, gray6 } from '../css/Styles';


import React from "react";
import { Page } from "./Page";
import { useParams } from "react-router";
import {IQuestionData, getQuestion} from "../bloc/QuestionData";

function QuestionPage() {
    const [question, setQuestion] = React.useState<IQuestionData | null>(null);
    const { questionId } = useParams();

    React.useEffect(() => {
        const doGetQuestion = async (questionId: number) => {
            const foundQuestion = await getQuestion(questionId);
            setQuestion(foundQuestion);
        };
        if (questionId) {
            doGetQuestion(Number(questionId));
        }
    }, [questionId]);

    return (
        <Page>
            <div 
                css={css`
                    background-color: white;
                    padding: 15px 20px 20px 20px;
                    border-radius: 4px;
                    border: 1px solid ${gray6};
                    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
                `}
            >
                <div
                    css={css`
                        font-size: 19px;
                        font-weight: bold;
                        margin: 10px 0px 5px;
                    `}
                >
                    {question === null ? '' : question.title}
                </div>
                {question !== null && (
                <React.Fragment>
                    <p
                    css={css`
                        margin-top: 0px;
                        background-color: white;
                    `}
                    >
                    {question.content}
                    </p>
                    <div
                    css={css`
                        font-size: 12px;
                        font-style: italic;
                        color: ${gray3};
                    `}
                    >
                    {`Asked by ${question.userName} on
                        ${question.createdAt.toLocaleDateString()} 
                        ${question.createdAt.toLocaleTimeString()}`}
                    </div>
                </React.Fragment>
                )}
            </div>
        </Page>
    );
}

export default QuestionPage;