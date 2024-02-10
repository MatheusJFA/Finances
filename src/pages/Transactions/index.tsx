import { useContext } from "react"
import { Search } from "../../components/Search"
import { DeleteButton, PriceHighlight, TransactionsContainer, TransactionsTable } from "./style"
import { TransactionsContext } from "../../contexts/transactionsContext"

import { dateFormatter, priceFormatter } from "../../utils/formatter"
import { Trash } from "phosphor-react"

export function Transactions() {

    const { transactions, deleteTransaction } = useContext(TransactionsContext);

    async function handleDeleteTransaction(id: number) {
        await deleteTransaction(id);
    }

    return (
        <TransactionsContainer>
            <Search />
            <TransactionsTable>
                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td width="50%">{transaction.title}</td>
                            <td>
                                {transaction.type === "income" ? " + " : " - "}
                                <PriceHighlight variant={transaction.type}>
                                    {priceFormatter.format(transaction.amount)}
                                </PriceHighlight>
                            </td>
                            <td>{transaction.category}</td>
                            <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                            <td>
                                <DeleteButton onClick={() => handleDeleteTransaction(transaction.id)}>
                                    <Trash size={24} color="#f75a68" />
                                </DeleteButton>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </TransactionsTable>
        </TransactionsContainer>
    )
}