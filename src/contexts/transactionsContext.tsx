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
    deleteTransaction: (id: number) => Promise<void>;
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

    async function deleteTransaction(id: number) {
        await axios.delete(`${import.meta.env.VITE_API_URL}/transactions/${id}`)
        setTransactions(state => state.filter(transaction => transaction.id !== id))
    }

    useEffect(() => {
        fetchTransactions();
    }, [])


    return (
        <TransactionsContext.Provider value={{
            transactions,
            fetchTransactions,
            createTransaction,
            deleteTransaction
        }}>
            {children}
        </TransactionsContext.Provider>
    )
}

