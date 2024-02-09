import { MagnifyingGlass } from "phosphor-react"
import { SearchFormContainer } from "./style"

export function Search() {
    return (
        <SearchFormContainer>
            <input type="text" placeholder="Busque por uma transação existente" />
            <button type="submit">
                <MagnifyingGlass size={24} color="#c64a08" />
                Buscar
            </button>

        </SearchFormContainer>
    )
}
