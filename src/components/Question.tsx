/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { gray2, gray3 } from '../css/Styles';
import React from 'react';
import { IQuestionData } from "../bloc/QuestionData";

interface IProps{
    data: IQuestionData;
    showContent?: boolean;
}

export const Question = ({data, showContent = true}: IProps) => (
    <div
    css={css`
        padding: 10px 0px;
    `}
    >
        <div
            css={css`
                padding: 10px 0px;
                font-size: 19px;
            `}
        >
            {data.title}
        </div>
        <div
             css={css`
                padding-bottom: 10px;
                font-size: 15px;
                color: ${gray2};
            `}
        >
            {   showContent && (
                    data.content.length > 50
                    ? `${data.content.substring(0, 50)}...`
                    : data.content
            )}
        </div>
        <div
            css={css`
                font-size: 12px;
                font-style: italic;
                color: ${gray3};
            `}
        >
            {
                `Asked by ${data.userName} on ${data.createdAt.toLocaleDateString()} ${data.createdAt.toLocaleTimeString()}` 
            }
        </div>
    </div>
);
// Question.defaultProps = {
//     showContent: true,
// };