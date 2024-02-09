import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, ModalHeader, Overlay, TransactionsTypeButton, TransactionsTypeContainer } from "./style";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";

export function Modal() {
    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <ModalHeader>
                    <Dialog.Title> Nova transação</Dialog.Title>
                    <CloseButton>
                        <X size={24} color="#c64a08" />
                    </CloseButton>
                </ModalHeader>

                <form action="">
                    <input type="text" placeholder="Descrição" required />
                    <input type="number" placeholder="Preço" required />
                    <input type="text" placeholder="Categoria" />

                    <TransactionsTypeContainer>
                        <TransactionsTypeButton variant="income" value="income">
                            <ArrowCircleUp size={24} />
                            Entrada
                        </TransactionsTypeButton>

                        <TransactionsTypeButton variant="outcome" value="outcome">
                            <ArrowCircleDown size={24} />
                            Saída
                        </TransactionsTypeButton>
                    </TransactionsTypeContainer>

                    <button type="submit">Cadastrar</button>
                </form>
            </Content>

        </Dialog.Portal>
    )
}