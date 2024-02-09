import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./style";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";



export function DefaultLayout() {
    return (
        <div>
            <LayoutContainer>
                <Header />
                <Summary />
                <Outlet />
            </LayoutContainer>
        </div>
    )
}