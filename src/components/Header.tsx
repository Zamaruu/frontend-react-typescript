/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { fontFamily, fontSize, gray1, gray2, gray5 } from '../css/Styles';
import { UserIcon } from "../Icons";
// import styles from '../css/Header.module.css'

export const Header = () => {
    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.value);
    }

    return (
        <div css={css`
            position: fixed;
            box-sizing: border-box;
            top: 0;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 20px;
            background-color: #fff;
            border-bottom: 1px solid ${gray5};
            box-shadow: 0 3px 7px 0 rgba(110, 112, 114, 0.21);
        `}>
            <Link 
                to="/"
                css={css`
                font-size: 24px;
                font-weight: bold;
                color: ${gray1};
                text-decoration: none;
            `}>
                Q & A
            </Link>
            <input 
                onChange={handleSearchInputChange}
                css={css`
                    box-sizing: border-box;
                    font-family: ${fontFamily};
                    font-size: ${fontSize};
                    padding: 8px 10px;
                    border: 1px solid ${gray5};
                    border-radius: 3px;
                    color: ${gray2};
                    background-color: white;
                    width: 200px;
                    height: 30px;
                    :focus {
                        outline-color: ${gray5};
                    }
                `} 
                type="text" 
                placeholder="Search..." 
            />
            <Link 
                to="signin"
                css={css`
                    font-family: ${fontFamily};
                    font-size: ${fontSize};
                    padding: 5px 10px;
                    background-color: transparent;
                    color: ${gray2};
                    text-decoration: none;
                    cursor: pointer;
                    :focus {
                        outline-color: ${gray5};
                    }
                    span {
                        margin-left: 7px;
                    }
                `}
            >
                <UserIcon></UserIcon>
                <span>SignIn</span>
            </Link>
        </div>
    );
}