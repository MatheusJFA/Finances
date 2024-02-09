import { MagnifyingGlass } from "phosphor-react"
import { SearchFormContainer } from "./style"
import { useForm } from "react-hook-form";

import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export function Search() {
    const searchTransactionSchema = zod.object({
        query: zod.string()
    })

    const {
        register,
        handleSubmit,
        formState: { isSubmitting }
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchTransactionSchema)
    });

    type SearchFormInputs = zod.infer<typeof searchTransactionSchema>;


    async function handleSearchTransactions(data: SearchFormInputs) {
        fetch(`${import.meta.env.VITE_API_URL}/transactions?q=${data.query}`)
            .then(response => response.json())
            .then(data => console.log(data))
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
