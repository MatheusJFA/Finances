import { useContext } from "react"
import { Search } from "../../components/Search"
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./style"
import { TransactionsContext } from "../../contexts/transactionsContext"

import { dateFormatter, priceFormatter } from "../../utils/formatter"

export function Transactions() {

    const { transactions } = useContext(TransactionsContext)

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
                            </tr>
                        ))}
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
    )
}