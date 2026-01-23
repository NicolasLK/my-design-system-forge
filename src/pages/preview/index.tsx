// ==== Components - Base Essentials ====
//=======================================
// ==== Components - Feedback ====
//================================
// ==== Components - Layout ====
//==============================
// ==== Components - Advanced Forms ====
//======================================
// ==== Components - Data / Presentation ====
//===========================================
// ==== Components - Users ====
//=============================
// ==== Components - Extra ====
//=============================
// ==== Components - Others ====
//==============================
// ==== Functions and Hooks ====
//==============================
// ==== Interfaces and Types ====
import { Link } from 'react-router-dom';
//===============================

// --- 1. Estruturas de Dados ---
// interface Project {
//     id: number;
//     name: string;
//     status: string;
//     deadline: string;
//     value: number;
// }

// const sectionStyle = {
//     margin: '20px 0',
// };

// const h2Style = {
//     marginTop: '2rem',
// };

// const divStyle = {
//     display: 'flex',
//     gap: '1rem',
//     FlexWrap: 'wrap',
// };

// === Dados de Exemplo - Table ===
// const PROJECT_COLUMNS = [
//     { key: 'nome', label: 'Nome do Projeto', sortable: true },
//     { key: 'status', label: 'Status', sortable: true },
//     { key: 'prazo', label: 'Prazo Final', sortable: false },
//     { key: 'valor', label: 'Valor Estimado', sortable: true },
// ];

// const PROJECT_DATA: Project[] = [
//     {
//         id: 1,
//         name: 'E-commerce Redesign',
//         status: 'Em Progresso',
//         deadline: '15/12/2025',
//         value: 15000,
//     },
//     {
//         id: 2,
//         name: 'App Mobile Beta',
//         status: 'Concluído',
//         deadline: '01/11/2025',
//         value: 8000,
//     },
//     {
//         id: 3,
//         name: 'Infra Cloud Mig.',
//         status: 'Pendente',
//         deadline: '30/01/2026',
//         value: 22000,
//     },
//     {
//         id: 4,
//         name: 'Relatórios Mensais',
//         status: 'Em Progresso',
//         deadline: '05/12/2025',
//         value: 3500,
//     },
// ];
//=================================

// const CogIcon = () => (
//     <svg
//         width="1em"
//         height="1em"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//     >
//         <circle cx="12" cy="12" r="3" />
//         <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0-.33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0 .33 1.82 1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1.82.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0 .33 1.82 1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2z" />
//     </svg>
// );
// const InfoIcon = () => <span style={{ fontSize: '1.2em' }}>ⓘ</span>;
// const SuccessIcon = () => <span style={{ fontSize: '1.2em' }}>✓</span>;

// === Dados de Exemplo - AvatarGroup ===
// const USER_LIST = [
//     {
//         name: 'Alex Mota',
//         src: 'https://i.pravatar.cc/150?img=4',
//         alt: 'Alex Mota',
//     },
//     {
//         name: 'Bruce Wayne',
//         src: 'https://i.pravatar.cc/150?img=12',
//         alt: 'Bruce Wayne',
//     },
//     {
//         name: 'Catarina Silva',
//         src: 'https://i.pravatar.cc/150?img=15',
//         alt: 'Catarina Silva',
//     },
//     {
//         name: 'David Jones',
//         src: 'https://i.pravatar.cc/150?img=16',
//         alt: 'David Jones',
//     },
//     {
//         name: 'Eve Lima',
//         src: 'https://i.pravatar.cc/150?img=17',
//         alt: 'Eve Lima',
//     },
//     { name: 'Frank N.' }, // Fallback
// ];
//=======================================

// === Dados de Exemplo - BadgeGroup ===
// const PROJECT_TAGS_LIST = [
//     {
//         text: 'React',
//     },
//     {
//         text: 'TypeScript',
//     },
//     {
//         text: 'Java',
//         color: 'destructive',
//     },
//     {
//         text: 'Rust',
//     },
//     {
//         text: 'Python',
//         color: 'secondary',
//     },
//     {
//         text: 'Delphi',
//     },
// ];
//======================================

export default function PreviewPage() {
    // ==== Estados ====
    // const [isModalOpen, setIsModalOpen] = useState(false);

    // const [selectedPlan, setSelectedPlan] = useState('');
    // const [showToast, setShowToast] = useState(false);
    // const [city, setCity] = useState('');
    // const [open, setOpen] = useState(false);
    // const [openDropdown, setOpenDropdown] = useState(false);

    // const [selectedTag, setSelectedTag] = useState('react');
    // const [removableTags, setRemovableTags] = useState([
    //     'TypeScript',
    //     'GraphQL',
    //     'Redux',
    // ]);
    // const [statusTags, setStatusTags] = useState(['pending', 'urgent']);
    // const [radioGroupPlans, setRadioGroupPlans] = useState('Free');
    //==================

    // ==== Hooks ====
    // const { active, setActive, isActive } = useTabs('tab1'); // Tabs

    // // Lógica de Ordenação: Recebe os dados e retorna o estado de ordenação e os dados ordenados.
    // const { sortedData, sortKey, sortDir, toggleSort } = useTableSort({
    //     data: PROJECT_DATA,
    //     initialSortKey: 'name',
    // }); // Table

    // const { formatCurrency } = useCurrencyFormatter();
    //================

    // ==== Functions ====
    // const handleRemove = (tag: string) => {
    //     setRemovableTags(removableTags.filter((t) => t !== tag));
    //     console.log(`Removendo: ${tag}`);
    // };

    // const handleRemoveTag = (tag: string) => {
    //     setStatusTags(statusTags.filter((t) => t !== tag));
    //     console.log(`Tag removida: ${tag}`);
    // };
    //====================

    return (
        <>
            <section className="u-flex u-flex-col u-gap-6 u-p-6 u-max-w-full">
                <article className="u-flex u-flex-col u-gap-2">
                    <h1 className="u-text-lg u-text-bold">
                        Página de Preview (Categories)
                    </h1>

                    <div className="u-flex u-items-center u-justify-around">
                        <Link to="/" className="u-text-primary u-text-sm">
                            ⬅ Voltar para: Home Page
                        </Link>

                        <Link
                            to="categories/advanced-components"
                            className="u-text-primary u-text-sm"
                        >
                            Ir para: Advanced Components Page ➡
                        </Link>

                        <Link
                            to="categories/foundations-components"
                            className="u-text-primary u-text-sm"
                        >
                            Ir para: Foundations Components Page ➡
                        </Link>

                        <Link
                            to="categories/form-controls-components"
                            className="u-text-primary u-text-sm"
                        >
                            Ir para: Form-Controls Components Page ➡
                        </Link>
                    </div>
                </article>
            </section>
        </>
    );
}
