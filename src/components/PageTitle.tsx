interface IProps{
    children: React.ReactNode;
}

export const PageTitle = ({children,}: IProps) => (
    <h2>{children}</h2>
);