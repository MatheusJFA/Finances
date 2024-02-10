import styled from "styled-components";

export const TransactionsContainer = styled.div`
    width: 100%;
    max-width: 1120px;

    margin: 4rem auto 0;
    padding: 0 1.5rem;
`

export const TransactionsTable = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;

    margin-top: 1.5rem;
    
    td {
        padding: 1.25rem 2rem;
        background: ${props => props.theme["gray-700"]};

        &:first-child {
            border-top-left-radius: 0.25rem;
            border-bottom-left-radius: 0.25rem;
        }

        &:last-child {
            border-top-right-radius: 0.25rem;
            border-bottom-right-radius: 0.25rem;
        }
    }
`

interface PriceHighlightProps {
    variant: "income" | "outcome"
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
    color: ${props => props.variant === "income" ? props.theme["green-500"] : props.theme["red-500"]};

`

export const DeleteButton = styled.button`
    border: none;
    background-color: transparent;

    &:hover {
        cursor: pointer;
        filter: brightness(0.8);
    }
`