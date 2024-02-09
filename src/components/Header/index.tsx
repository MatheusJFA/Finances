import { HeaderContainer, HeaderContent, Logo, NewTransactionButton } from "./style";
import logo from "../../assets/logo.svg";
import { Modal } from "../Modal";

import * as Dialog from "@radix-ui/react-dialog";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <Logo src={logo} alt="A logo da aplicação que é um cifrão com uma seta atrás" />

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova transação</NewTransactionButton>
                    </Dialog.Trigger>

                    <Modal />
                </Dialog.Root>

            </HeaderContent>
        </HeaderContainer>
    )
}