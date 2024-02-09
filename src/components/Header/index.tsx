import { HeaderContainer, HeaderContent, Logo, NewTransactionButton } from "./style";
import logo from "../../assets/logo.svg";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <Logo src={logo} alt="A logo da aplicação que é um cifrão com uma seta atrás" />
                <NewTransactionButton>Nova transação</NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
    )
}