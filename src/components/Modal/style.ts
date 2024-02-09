import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";

import styled from "styled-components";

export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    width: 100vw;
    height: 100vh;

    inset: 0;
    background: rgba(0, 0, 0, 0.75);
`;

export const ModalHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
`;

export const Content = styled(Dialog.Content)`
    min-width: 32rem;
    border-radius: 0.5rem;

    padding: 2.5rem 3rem;

    background: ${props => props.theme["gray-800"]};

    position: fixed;

    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    form {
        margin-top: 2rem;

        display: flex;
        flex-direction: column;

        gap: 1rem;


        input {
            padding: 1rem;
            border-radius: 0.25rem;
            border: 0;
            background: ${props => props.theme["gray-900"]};
            color: ${props => props.theme["gray-300"]};

            &::placeholder {
                color: ${props => props.theme["gray-500"]};
            }
        }

        button[type="submit"] {
            height: 3rem;
            border: 0;
            background-color: ${props => props.theme["primary-500"]};
            color: ${props => props.theme.white};

            font-weight: bold;
            padding: 0 1.25rem;
            border-radius: 0.25rem;
            margin-top: 1rem;

            transition: background-color 0.5s;
            
            &:hover {
                background-color: ${props => props.theme["primary-700"]};
            }
        }
    }
`;

export const TransactionsTypeContainer = styled(RadioGroup.Root)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-top: 0.5rem;
`;

interface TransactionsTypeButtonProps {
    variant: "income" | "outcome";
}

export const TransactionsTypeButton = styled(RadioGroup.Item)<TransactionsTypeButtonProps>`
    background-color: ${props => props.theme["gray-700"]};
    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;

    border-radius: 0.25rem;

    cursor: pointer;

    border: 0;

    color: ${props => props.theme["gray-300"]};

    svg {
        color: ${props => props.variant === "income" ? props.theme["green-500"] : props.theme["red-500"]};
    }

    &[data-state="unchecked"]:hover {
        transition: background-color 0.5s;
        background-color: ${props => props.theme["gray-600"]};
    }

    &[data-state="checked"] {
        color: ${props => props.theme.white};
        background-color: ${props => props.variant === "income" ? props.theme["green-500"] : props.theme["red-500"]};

        svg {
            color: ${props => props.theme.white};
        }
    }
`;



export const CloseButton = styled(Dialog.Close)`
  background: transparent;
  border: 0;
  box-shadow: none;
  cursor: pointer;
  color: ${props => props.theme["gray-500"]};
`;