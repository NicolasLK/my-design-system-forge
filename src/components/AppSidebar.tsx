import { Sidebar } from './ui/navigation/sidebar';

export const AppSidebar = () => {
    return (
        <>
            <Sidebar.Panel>
                <Sidebar.Header>
                    <div className="sidebar-logo">Forge Design</div>
                </Sidebar.Header>

                <Sidebar.Content>
                    <Sidebar.Group>
                        {/* Group da Sidebar */}
                        <nav className="sidebar-nav">
                            <ul>
                                <li>Home</li>
                                <li>Preview</li>
                                <li>Tokens</li>
                            </ul>
                        </nav>
                    </Sidebar.Group>

                    <Sidebar.Group>
                        <small>Configurações</small>
                    </Sidebar.Group>
                </Sidebar.Content>

                <Sidebar.Footer>
                    {/* Espaço para Perfil ou Logout */}
                    <div className="sidebar-user">Usuário</div>
                </Sidebar.Footer>
            </Sidebar.Panel>
        </>
    );
};
