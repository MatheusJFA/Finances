import styled from "styled-components";

export const SearchFormContainer = styled.form`
    display: flex;
    gap: 1rem;

    input {
        flex: 1;
        border-radius: 0.25rem;

        border: 0;
        background: ${props => props.theme["gray-900"]};
        
        color: ${props => props.theme["gray-300"]};

        padding: 1rem;

        &::placeholder {
            color: ${props => props.theme["gray-500"]};
        }	
    }

    button {
        display: flex;
        align-items: center;
        gap: 0.75rem;

        border: 0;
        padding: 1rem;

        background: transparent;
        color: ${props => props.theme["primary-300"]};
        border: 1px solid ${props => props.theme["primary-300"]};
        font-weight: bold;
        border-radius: 0.25rem;

        transition: background-color 0.5s, color 0.5s, border-color 0.5s;

        &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }

        &:not(:disabled):hover {
            background: ${props => props.theme["primary-300"]};
            border: 1px solid ${props => props.theme["primary-300"]};
            color: ${props => props.theme["primary-700"]};
        }
    }
`