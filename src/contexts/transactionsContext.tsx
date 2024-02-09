import { ReactNode, createContext, useEffect, useState } from "react";

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: "income" | "outcome";
    category: string;
    createdAt: string;
}

interface TransactionsContextType {
    transactions: Transaction[];
}

export const TransactionsContext = createContext({} as TransactionsContextType);

interface TransactionsProviderProps {
    children: ReactNode;
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])


    async function loadTransactions() {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/transactions`)
        const data = await response.json()

        setTransactions(data)
    }

    useEffect(() => {
        loadTransactions();
    }, [])


    return (
        <TransactionsContext.Provider value={{ transactions }}>
            {children}
        </TransactionsContext.Provider>
    )
}

