//Interfaces
export interface IQuestionData {
    questionId: number;
    title: string;
    content: string;
    userName: string;
    createdAt: Date;
    answers: IAnswerData[]; //Ein Array von Antworten der Frage
}

export interface IAnswerData {
    answerId: number;
    content: string;
    userName: string;
    createdAt: Date;
}

//Methods
const wait = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const getUnanswerdQuestions= async (): Promise<IQuestionData[]> => {
  await wait(500);
  return questions.filter(q => q.answers.length === 0);
}

// export const getUnanswerdQuestions = (): IQuestionData[] => {
//   return questions.filter(q => q.answers.length === 0);
// }

//Mocked Data
const questions: IQuestionData[] = [
    {
      questionId: 1,
      title: 'Why should I learn TypeScript?',
      content:'TypeScript seems to be getting popular so I wondered whether it is worth my time learning it? What benefits does it give over JavaScript?',
      userName: 'Bob',
      createdAt: new Date(),
      answers: [
        {
          answerId: 1,
          content: 'To catch problems earlier speeding up your developments',
          userName: 'Jane',
          createdAt: new Date(),
        },
        {
          answerId: 2,
          content: 'So, that you can use the JavaScript features of tomorrow, today',
          userName: 'Fred',
          createdAt: new Date(),
        },
      ],
    },
    {
      questionId: 2,
      title: 'Which state management tool should I use?',
      content: 'There seem to be a fair few state management tools around for React - React, Unstated, ... Which one should I use?',
      userName: 'Bob',
      createdAt: new Date(),
      answers: [],
    },
  ];