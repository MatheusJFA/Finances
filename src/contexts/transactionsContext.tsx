import { ReactNode, createContext, useEffect, useState } from "react";
import axios from "axios";

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: "income" | "outcome";
    category: string;
    createdAt: string;
}

interface CreateTransactionProps {
    title: string;
    amount: number;
    type: "income" | "outcome";
    category: string;
}

interface TransactionsContextType {
    transactions: Transaction[];
    fetchTransactions: (query?: string) => Promise<void>;
    createTransaction: (data: CreateTransactionProps) => Promise<void>;
}

export const TransactionsContext = createContext({} as TransactionsContextType);

interface TransactionsProviderProps {
    children: ReactNode;
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])


    async function fetchTransactions(query?: string) {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/transactions`, {
            params: {
                q: query
            }
        })

        setTransactions(response.data)
    }

    async function createTransaction(data: CreateTransactionProps) {
        const { amount, title, type, category } = data;
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/transactions`, {
            amount,
            title,
            type,
            category,
            createdAt: new Date()
        })

        setTransactions(state => [response.data, ...state])
    }

    useEffect(() => {
        fetchTransactions();
    }, [])


    return (
        <TransactionsContext.Provider value={{
            transactions,
            fetchTransactions,
            createTransaction
        }}>
            {children}
        </TransactionsContext.Provider>
    )
}

