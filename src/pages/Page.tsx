import { PageTitle } from "../components/PageTitle";

interface IProps {
    title?: string;
    children: React.ReactNode;
}

export const Page = ({title, children}: IProps) => (
    <div>
        {title && <PageTitle>{title}</PageTitle>}
        {children}
    </div>
);