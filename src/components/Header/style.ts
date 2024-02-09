import styled from "styled-components";

export const HeaderContainer = styled.div`
    background: ${props => props.theme["gray-900"]};
    padding: 2.5rem 0 7.5rem;
`

export const Logo = styled.img`
    height: 5rem;
    width: 5rem;
`

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;    

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const NewTransactionButton = styled.button`
    height: 3.125rem;
    border: none;
    background-color: ${props => props.theme["primary-500"]};
    color: ${props => props.theme["white"]};
    font-weight: bold;
    padding: 0 1.25rem;
    border-radius: 8px;

    cursor: pointer;
    transition: background-color 0.5s;

    &:hover {
        background-color: ${props => props.theme["primary-700"]};
    }
`