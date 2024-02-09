import { SummaryCard, SummaryContainer } from "./style";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";

export function Summary() {
    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={24} color="#00b37e" />
                </header>
                <strong>R$ 17.400,00</strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span><p>Saidas</p></span>
                    <ArrowCircleDown size={24} color="#f75a68" />
                </header>
                <strong>R$ 17.400,00</strong>
            </SummaryCard>

            <SummaryCard variant="green">
                <header>
                    <span><p>Total</p></span>
                    <CurrencyDollar size={24} color="#FFFFFF" />
                </header>
                <strong>R$ 17.400,00</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}