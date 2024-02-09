import { MagnifyingGlass } from "phosphor-react"
import { SearchFormContainer } from "./style"
import { useForm } from "react-hook-form";

import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/transactionsContext";

export function Search() {
    const searchTransactionSchema = zod.object({
        query: zod.string()
    })

    const { fetchTransactions } = useContext(TransactionsContext);

    const {
        register,
        handleSubmit,
        formState: { isSubmitting }
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchTransactionSchema)
    });

    type SearchFormInputs = zod.infer<typeof searchTransactionSchema>;


    async function handleSearchTransactions(data: SearchFormInputs) {
        await fetchTransactions(data.query);
    }

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input
                type="text"
                placeholder="Busque por uma transação existente"
                {...register("query")}
            />


            <button type="submit" disabled={isSubmitting}>
                <MagnifyingGlass size={24} color="#c64a08" />
                Buscar
            </button>

        </SearchFormContainer>
    )
}
