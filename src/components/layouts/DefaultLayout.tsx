import { useEffect, type ReactNode } from "react";
import { Header } from "../Header";

interface IDefaultLayoutProps {
    children: ReactNode;
    title?: string;
}

const DefaultLayout = ({
    children,
    title
}: IDefaultLayoutProps) => {

    // Opcional: Mudança do título do documento dinamicamente
    useEffect(() => {
        if (title) {
            document.title = `${title} | Design System Forge`;
        }
    }, [title])

    return (
        <>
            <div className="layout-default-wrapper">
                <Header />

                <main className="default-main-content">
                    {children}
                </main>
            </div>
        </>
    )
}

export default DefaultLayout;