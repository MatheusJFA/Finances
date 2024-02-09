import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, ModalHeader, Overlay, TransactionsTypeButton, TransactionsTypeContainer } from "./style";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import * as zod from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/transactionsContext";

const newTransactionSchema = zod.object({
    title: zod.string(),
    amount: zod.number(),
    category: zod.string(),
    type: zod.enum(["income", "outcome"])
})

type newTransactionType = zod.infer<typeof newTransactionSchema>;

export function Modal() {
    const { createTransaction } = useContext(TransactionsContext);

    const { control, register, handleSubmit, reset, formState: { isSubmitting } } = useForm<newTransactionType>({
        resolver: zodResolver(newTransactionSchema)
    });

    async function handleNewTransaction(data: newTransactionType) {
        const { amount, title, type, category } = data;
        await createTransaction({ amount, title, type, category });
        reset();
    }

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

                <form onSubmit={handleSubmit(handleNewTransaction)}>
                    <input
                        type="text"
                        placeholder="Descrição"
                        {...register("title")} required />

                    <input
                        type="number"
                        placeholder="Preço"
                        {...register("amount", { valueAsNumber: true })} required />

                    <input
                        type="text"
                        placeholder="Categoria"
                        {...register("category")} />

                    <Controller
                        control={control}
                        name="type"
                        render={({ field }) => {
                            return (
                                <TransactionsTypeContainer onValueChange={field.onChange} value={field.value}>
                                    <TransactionsTypeButton variant="income" value="income">
                                        <ArrowCircleUp size={24} />
                                        Entrada
                                    </TransactionsTypeButton>

                                    <TransactionsTypeButton variant="outcome" value="outcome">
                                        <ArrowCircleDown size={24} />
                                        Saída
                                    </TransactionsTypeButton>
                                </TransactionsTypeContainer>
                            )
                        }}
                    />

                    <button type="submit" disabled={isSubmitting}>Cadastrar</button>
                </form>
            </Content>

        </Dialog.Portal >
    )
}