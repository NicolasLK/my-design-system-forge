import { useState } from 'react';
// ==== Components - Base Essentials ====
import { Button } from '@/components/ui/form-controls/button';
import { Checkbox } from '@/components/ui/form-controls/checkbox';
import { Radio } from '@/components/ui/form-controls/radio';
import { Switch } from '@/components/ui/form-controls/switch';
import { Textarea } from '@/components/ui/form-controls/textarea';
//=======================================
// ==== Components - Feedback ====
import { Alert } from '@/components/ui/feedback/alert';
import { Skeleton } from '@/components/ui/feedback/skeleton';
import { Spinner } from '@/components/ui/feedback/spinner';
import { Toast } from '@/components/ui/feedback/toast';
import { Modal } from '@/components/ui/overlay/modal';
import { Tooltip } from '@/components/ui/overlay/tooltip';
//================================
// ==== Components - Layout ====
import { Card } from '@/components/ui/data-display/card';
import { Tabs } from '@/components/ui/navigation/tabs';
//==============================
// ==== Components - Advanced Forms ====
import { FileInput } from '@/components/ui/file-input';
import { Select } from '@/components/ui/form-controls/select';
import { Slider } from '@/components/ui/form-controls/slider';
import { Dropdown } from '@/components/ui/overlay/dropdown';
import { TagInput } from '@/components/ui/tag-input';
//======================================
// ==== Components - Data / Presentation ====
import { Table } from '@/components/ui/data-display/table';
import { Progress } from '@/components/ui/feedback/progress';
import { Breadcrumb } from '@/components/ui/navigation/breadcrumb';
import { Pagination } from '@/components/ui/navigation/pagination';
import { Stepper } from '@/components/ui/navigation/stepper';
//===========================================
// ==== Components - Users ====
import { Avatar } from '@/components/ui/data-display/avatar';
import { AvatarGroup } from '@/components/ui/data-display/avatar-group';
import { Chip } from '@/components/ui/data-display/chip';
import { Tag } from '@/components/ui/data-display/tag';
//=============================
// ==== Components - Extra ====
import { TooltipAdvanced } from '@/components/ui/overlay/tooltip-advanced';
//=============================
// ==== Components - Others ====
import { Badge } from '@/components/ui/data-display/badge';
import { BadgeGroup } from '@/components/ui/data-display/badge-group';
import { ProgressCircular } from '@/components/ui/feedback/progress-circular';
//==============================
// ==== Functions and Hooks ====
import { cn } from '@/lib/utils/cn';
import { useCurrencyFormatter } from '@/models/hooks/useCurrencyFormatter';
import { useTableSort } from '@/models/hooks/useTableSort';
import { useTabs } from '@/models/hooks/useTabs';
//==============================
// ==== Interfaces and Types ====
import { RadioGroup } from '@/components/ui/form-controls/radio-group';
import { Label } from '@/components/ui/foundations/label';
import { Link } from 'react-router-dom';
//===============================

// --- 1. Estruturas de Dados ---
interface Project {
    id: number;
    name: string;
    status: string;
    deadline: string;
    value: number;
}

const sectionStyle = {
    margin: '20px 0',
};

const h2Style = {
    marginTop: '2rem',
};

const divStyle = {
    display: 'flex',
    gap: '1rem',
    FlexWrap: 'wrap',
};

// === Dados de Exemplo - Table ===
const PROJECT_COLUMNS = [
    { key: 'nome', label: 'Nome do Projeto', sortable: true },
    { key: 'status', label: 'Status', sortable: true },
    { key: 'prazo', label: 'Prazo Final', sortable: false },
    { key: 'valor', label: 'Valor Estimado', sortable: true },
];

const PROJECT_DATA: Project[] = [
    {
        id: 1,
        name: 'E-commerce Redesign',
        status: 'Em Progresso',
        deadline: '15/12/2025',
        value: 15000,
    },
    {
        id: 2,
        name: 'App Mobile Beta',
        status: 'Concluído',
        deadline: '01/11/2025',
        value: 8000,
    },
    {
        id: 3,
        name: 'Infra Cloud Mig.',
        status: 'Pendente',
        deadline: '30/01/2026',
        value: 22000,
    },
    {
        id: 4,
        name: 'Relatórios Mensais',
        status: 'Em Progresso',
        deadline: '05/12/2025',
        value: 3500,
    },
];
//=================================

const CogIcon = () => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0-.33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0 .33 1.82 1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1.82.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0 .33 1.82 1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2z" />
    </svg>
);
const InfoIcon = () => <span style={{ fontSize: '1.2em' }}>ⓘ</span>;
const SuccessIcon = () => <span style={{ fontSize: '1.2em' }}>✓</span>;

// === Dados de Exemplo - AvatarGroup ===
const USER_LIST = [
    {
        name: 'Alex Mota',
        src: 'https://i.pravatar.cc/150?img=4',
        alt: 'Alex Mota',
    },
    {
        name: 'Bruce Wayne',
        src: 'https://i.pravatar.cc/150?img=12',
        alt: 'Bruce Wayne',
    },
    {
        name: 'Catarina Silva',
        src: 'https://i.pravatar.cc/150?img=15',
        alt: 'Catarina Silva',
    },
    {
        name: 'David Jones',
        src: 'https://i.pravatar.cc/150?img=16',
        alt: 'David Jones',
    },
    {
        name: 'Eve Lima',
        src: 'https://i.pravatar.cc/150?img=17',
        alt: 'Eve Lima',
    },
    { name: 'Frank N.' }, // Fallback
];
//=======================================

// === Dados de Exemplo - BadgeGroup ===
const PROJECT_TAGS_LIST = [
    {
        text: 'React',
    },
    {
        text: 'TypeScript',
    },
    {
        text: 'Java',
        color: 'destructive',
    },
    {
        text: 'Rust',
    },
    {
        text: 'Python',
        color: 'secondary',
    },
    {
        text: 'Delphi',
    },
];
//======================================

export default function PreviewPage() {
    // ==== Estados ====
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [selectedPlan, setSelectedPlan] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [city, setCity] = useState('');
    const [open, setOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(false);

    const [selectedTag, setSelectedTag] = useState('react');
    const [removableTags, setRemovableTags] = useState([
        'TypeScript',
        'GraphQL',
        'Redux',
    ]);
    const [statusTags, setStatusTags] = useState(['pending', 'urgent']);
    const [radioGroupPlans, setRadioGroupPlans] = useState('Free');
    //==================

    // ==== Hooks ====
    const { active, setActive, isActive } = useTabs('tab1'); // Tabs

    // Lógica de Ordenação: Recebe os dados e retorna o estado de ordenação e os dados ordenados.
    const { sortedData, sortKey, sortDir, toggleSort } = useTableSort({
        data: PROJECT_DATA,
        initialSortKey: 'name',
    }); // Table

    const { formatCurrency } = useCurrencyFormatter();
    //================

    // ==== Functions ====
    const handleRemove = (tag: string) => {
        setRemovableTags(removableTags.filter((t) => t !== tag));
        console.log(`Removendo: ${tag}`);
    };

    const handleRemoveTag = (tag: string) => {
        setStatusTags(statusTags.filter((t) => t !== tag));
        console.log(`Tag removida: ${tag}`);
    };
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

            <section style={sectionStyle}>
                <h3>Textarea</h3>
                <div style={divStyle}>
                    <Textarea
                        label="Descrição"
                        placeholder="Digite uma descrição..."
                    />

                    <Textarea
                        label="Observações"
                        size="large"
                        error
                        errorMessage="Campo obrigatório"
                    />
                </div>
            </section>

            <section style={sectionStyle}>
                <h3>Checkbox</h3>
                <div style={divStyle}>
                    <Checkbox label="Padrão" />
                    <Checkbox label="Erro" error />
                    <Checkbox label="Sucesso" variant="success" />
                    <Checkbox label="Atenção" variant="warning" />
                    <Checkbox label="Destruído" variant="destructive" />
                    <Checkbox label="Pequeno" checkboxSize="small" />
                    <Checkbox label="Desabilitado" disabled />
                </div>
            </section>

            <section style={sectionStyle}>
                <h3>Radio</h3>
                <div style={divStyle}>
                    <Radio
                        name="plan"
                        value="basic"
                        label="Básico"
                        checked={selectedPlan === 'basic'}
                        onChange={(v) => setSelectedPlan(v)}
                    />
                    <Radio
                        name="plan"
                        value="pro"
                        label="Profissional"
                        checked={selectedPlan === 'pro'}
                        onChange={(v) => setSelectedPlan(v)}
                    />
                    <Radio
                        name="plan"
                        value="vip"
                        label="VIP"
                        checked={selectedPlan === 'vip'}
                        onChange={(v) => setSelectedPlan(v)}
                    />
                    <Radio
                        name="plan"
                        value="disabled"
                        label="Desativado"
                        disabled
                    />
                    <Radio
                        name="plan"
                        value="small"
                        label="Pequeno"
                        radioSize="small"
                        checked={selectedPlan === 'small'}
                        onChange={(v) => setSelectedPlan(v)}
                    />
                </div>
            </section>

            <section style={sectionStyle}>
                <h3>Switchs</h3>
                <div style={divStyle}>
                    <Switch
                        label="Ativar notificações"
                        onCheckedChange={(state) =>
                            console.log('Switch agora está:', state)
                        }
                    />
                    <Switch label="Ativar modo escuro" />
                </div>
            </section>

            <h2 style={h2Style}>Feedback Components</h2>

            <section style={sectionStyle}>
                <h3>Alerts</h3>
                <div style={divStyle}>
                    <Alert.Root color="primary">
                        <Alert.Icon>
                            <InfoIcon />
                        </Alert.Icon>
                        <Alert.Title>Atenção do Sistema</Alert.Title>
                        <Alert.Description>
                            Esta é uma notificação informativa padrão com fundo
                            e borda sutis.
                        </Alert.Description>
                    </Alert.Root>

                    <div>
                        <Alert.Root color="success" size="small">
                            <Alert.Icon>
                                <SuccessIcon />
                            </Alert.Icon>
                            <Alert.Title>Sucesso!</Alert.Title>
                        </Alert.Root>
                    </div>

                    {/* <div>
                        <Alert.Root color="warning">
                            <Alert.Icon>
                                <InfoIcon />
                            </Alert.Icon>
                            <Alert.Title>Dados Pendentes</Alert.Title>
                            <Alert.Description>
                                Seu perfil requer validação de segurança. Clique aqui para completar o processo antes do fim do dia.
                            </Alert.Description>
                        </Alert.Root>
                    </div> */}

                    {/* <div>
                        <Alert.Root color="destructive" variant="solid" fullWidth>
                            <Alert.Icon>
                                <InfoIcon />
                            </Alert.Icon>
                            <Alert.Title>Erro Crítico na Conexão</Alert.Title>
                            <Alert.Description>
                                Não foi possível estabelecer a comunicação com o servidor principal. Tente novamente mais tarde.
                            </Alert.Description>
                        </Alert.Root>
                    </div> */}

                    <Alert.Root color="neutral" variant="solid" size="large">
                        <Alert.Icon>
                            <InfoIcon />
                        </Alert.Icon>
                        <Alert.Title>Manutenção Agendada</Alert.Title>
                    </Alert.Root>
                </div>
            </section>

            <section style={sectionStyle}>
                <h3>Toast</h3>
                <div style={divStyle}>
                    <Button
                        colorVariant="primary"
                        onClick={() => setShowToast(true)}
                    >
                        Mostrar Toast
                    </Button>
                    <Toast
                        message="Formulário enviado."
                        variant="success"
                        duration={3000}
                        visible={showToast}
                        onClose={() => setShowToast(false)}
                    />
                    <Toast
                        message="Erro ao enviar formulário."
                        variant="destructive"
                    />
                </div>
            </section>

            <section style={sectionStyle}>
                <h3>Modal</h3>
                <div style={divStyle}>
                    <Button
                        colorVariant="primary"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Abrir Modal
                    </Button>
                    <Modal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        size="large"
                        title="Confirmação"
                        description="Deseja realmente realizar esta ação?"
                    />
                </div>
            </section>

            <section style={sectionStyle}>
                <h3>Tooltips</h3>
                <div style={divStyle}>
                    <Tooltip text="Clique para mais informações">
                        <Button colorVariant="primary">Info</Button>
                    </Tooltip>
                </div>
            </section>

            <section style={sectionStyle}>
                <h3>Skeleton</h3>
                <div style={divStyle}>
                    <Skeleton height="20px" width="150px" />

                    <Skeleton width="60px" height="40px" rounded />

                    <Skeleton width="60px" height="60px" circle />
                </div>
            </section>

            <section style={sectionStyle}>
                <h3>Spinner</h3>
                <div style={divStyle}>
                    {/* Spinners básicos */}
                    <Spinner variant="primary" size="large" />
                    <Spinner variant="success" />
                    <Spinner variant="warning" size="small" />

                    {/* Spinner com texto */}
                    <Spinner variant="primary">
                        <p>Carregando dados...</p>
                    </Spinner>

                    {/* Spinner sem animação */}
                    <Spinner animated={false} />

                    {/* Spinner com largura e altura customizadas */}
                    <Spinner width={50} height={50} variant="secondary" />

                    {/* Spinner dentro de botões ou componentes compostos */}
                    <Button disabled>
                        <Spinner size="small" />
                        Processando...
                    </Button>
                </div>
            </section>

            <h2 style={h2Style}>Layout Components</h2>

            <section style={sectionStyle}>
                <h3>Cards</h3>
                <div style={divStyle}>
                    <Card.Root>
                        <Card.Header>
                            <Card.Title>Informações do Usuário</Card.Title>
                            <Card.Description>
                                Dados atualizados automaticamente.
                            </Card.Description>
                        </Card.Header>

                        <Card.Content>
                            <p>Email: usuario@exemplo.com</p>
                            <p>Status: Ativo</p>
                        </Card.Content>

                        <Card.Footer>
                            <Button colorVariant="primary" size="small">
                                Ação
                            </Button>
                        </Card.Footer>
                    </Card.Root>
                </div>
            </section>

            <section style={sectionStyle}>
                <h3>Tabs</h3>
                <div style={divStyle}>
                    <Tabs.Root>
                        <Tabs.List>
                            <Tabs.Trigger
                                value="tab1"
                                isActive={isActive('tab1')}
                                onSelect={setActive}
                            >
                                Geral
                            </Tabs.Trigger>

                            <Tabs.Trigger
                                value="tab2"
                                isActive={isActive('tab2')}
                                onSelect={setActive}
                            >
                                Configurações
                            </Tabs.Trigger>

                            <Tabs.Trigger
                                value="tab3"
                                isActive={isActive('tab3')}
                                onSelect={setActive}
                            >
                                Usuário
                            </Tabs.Trigger>
                        </Tabs.List>

                        <Tabs.Content
                            value="tab1"
                            activeValue={active}
                            animation="scale"
                        >
                            Conteúdo geral
                        </Tabs.Content>

                        <Tabs.Content
                            value="tab2"
                            activeValue={active}
                            animation="fade"
                        >
                            Configurações do sistema
                        </Tabs.Content>

                        <Tabs.Content
                            value="tab3"
                            activeValue={active}
                            animation="slide"
                        >
                            Configurações do usuário
                        </Tabs.Content>
                    </Tabs.Root>
                </div>
            </section>

            <h2 style={h2Style}>Advanced Forms Components</h2>

            <section style={sectionStyle}>
                <h3>Select</h3>
                <div style={divStyle}>
                    <Select.Root
                        value={city}
                        onChange={setCity}
                        open={open}
                        onOpenChange={setOpen}
                    >
                        <Select.Label className="u-text-transform-capitalize">
                            Cidade: {city}
                        </Select.Label>

                        <Select.Trigger>
                            <Select.Value placeholder="Selecione..." />
                        </Select.Trigger>

                        <Select.Content>
                            <Select.Option value="floripa">
                                Florianópolis
                            </Select.Option>
                            <Select.Option value="lisboa">Lisboa</Select.Option>
                            <Select.Option value="porto">Porto</Select.Option>
                        </Select.Content>
                    </Select.Root>
                </div>
            </section>

            <section style={sectionStyle}>
                <h3>Dropdown</h3>
                <div style={divStyle}>
                    <Dropdown.Root
                        open={openDropdown}
                        onOpenChange={setOpenDropdown}
                    >
                        <Dropdown.Trigger>Abrir Menu de Ações</Dropdown.Trigger>

                        <Dropdown.Content>
                            <Dropdown.Item>Perfil</Dropdown.Item>
                            <Dropdown.Item>Configurações</Dropdown.Item>
                            <Dropdown.Item variant="destructive">
                                Sair
                            </Dropdown.Item>
                        </Dropdown.Content>
                    </Dropdown.Root>
                </div>
            </section>

            <section style={sectionStyle}>
                <h3>TagInput</h3>
                <div style={divStyle}>
                    <TagInput
                        label="Tags"
                        defaultTags={['React', 'UI']}
                        onChange={(tags) => console.log(tags)}
                    />
                </div>
            </section>

            <section style={sectionStyle}>
                <h3>FileInput / FileUpload</h3>
                <div style={divStyle}>
                    <FileInput
                        label="Envie um arquivo"
                        accept="image/*"
                        onChange={(files) => console.log(files)}
                    />
                </div>
            </section>

            <section style={sectionStyle}>
                <h3>Slider</h3>
                <div style={divStyle}>
                    <Slider
                        defaultValue={30}
                        onValueChange={(v) => console.log('Valor:', v)}
                    />
                    <Slider defaultValue={75} showValue={false} />
                </div>
            </section>

            <h2 style={h2Style}>Data / Presentation</h2>

            <section style={sectionStyle}>
                <h3>Table</h3>
                <div style={{ maxWidth: '900px', margin: '20px auto' }}>
                    <h4>Tabela Avançada (Composta e Ordenável)</h4>

                    {/* Componente Raiz: Define o container e o estilo (striped/compact) */}
                    <Table.Root striped compact className="mt-4">
                        {/* Cabeçalho */}
                        <Table.Header>
                            <Table.Row>
                                {PROJECT_COLUMNS.map((col) => (
                                    // Table.Head com lógica de ordenação e estilo
                                    <Table.Head
                                        key={col.key}
                                        onClick={() =>
                                            col.sortable && toggleSort(col.key)
                                        }
                                        className={cn(
                                            col.sortable &&
                                                'table-head-sortable',
                                            col.sortable &&
                                                sortKey === col.key &&
                                                'table-head-sorted',
                                        )}
                                    >
                                        {col.label}
                                        {/* Indicador de ordenação */}
                                        {col.sortable &&
                                            sortKey === col.key && (
                                                <span
                                                    data-slot="sort-indicator"
                                                    className="sort-indicator"
                                                >
                                                    {sortDir === 'asc'
                                                        ? '▲'
                                                        : '▼'}
                                                </span>
                                            )}
                                    </Table.Head>
                                ))}
                            </Table.Row>
                        </Table.Header>

                        {/* Corpo: Itera sobre os dados ordenados */}
                        <Table.Body>
                            {sortedData.map((row) => (
                                // Table.Row para o estilo de linha
                                <Table.Row key={row.id}>
                                    {/* Table.Cell para o estilo da célula */}
                                    <Table.Cell>{row.name}</Table.Cell>

                                    {/* Renderização Avançada na célula de Status */}
                                    <Table.Cell>
                                        {row.status === 'Concluído' ? (
                                            <span
                                                style={{
                                                    color: 'var(--color-success-600)',
                                                }}
                                            >
                                                {row.status}
                                            </span>
                                        ) : (
                                            row.status
                                        )}
                                    </Table.Cell>

                                    <Table.Cell>{row.deadline}</Table.Cell>

                                    {/* Renderização de Formato (Moeda) */}
                                    <Table.Cell>
                                        {formatCurrency(row.value)}
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                            {sortedData.length === 0 && (
                                <Table.Row>
                                    <Table.Cell
                                        colSpan={PROJECT_COLUMNS.length}
                                        style={{ textAlign: 'center' }}
                                    >
                                        Nenhum dado encontrado.
                                    </Table.Cell>
                                </Table.Row>
                            )}
                        </Table.Body>

                        {/* Legenda (Caption) para acessibilidade */}
                        <Table.Caption>
                            Lista de projetos em andamento no sistema. Clique
                            nos cabeçalhos para ordenar.
                        </Table.Caption>

                        {/* Opcional: Rodapé (Footer) */}
                        <Table.Footer>
                            <Table.Row>
                                <Table.Cell colSpan={3}>Total</Table.Cell>
                                <Table.Cell>
                                    {formatCurrency(
                                        PROJECT_DATA.reduce(
                                            (sum, item) => sum + item.value,
                                            0,
                                        ),
                                    )}
                                </Table.Cell>
                            </Table.Row>
                        </Table.Footer>
                    </Table.Root>
                </div>
            </section>

            <section style={sectionStyle}>
                <h3>Progress</h3>
                <div style={divStyle}>
                    <Progress
                        value={45}
                        label="Carregando dados"
                        variant="primary"
                        showPercentage
                    />
                    <Progress
                        value={75}
                        label="Upload concluído"
                        variant="success"
                        size="large"
                    />
                    <Progress
                        value={30}
                        label="Aguardando resposta"
                        variant="warning"
                        size="small"
                    />
                    <Progress value={90} variant="secondary" />
                </div>
            </section>

            <section style={sectionStyle}>
                <h3>Stepper</h3>
                <div style={divStyle}>
                    <Stepper
                        currentStep={1}
                        steps={[
                            { label: 'Informações' },
                            { label: 'Pagamento' },
                            { label: 'Confirmação' },
                        ]}
                    />
                </div>
            </section>

            <section style={sectionStyle}>
                <h3>Pagination</h3>
                <div style={divStyle}>
                    <Pagination
                        totalPages={5}
                        currentPage={2}
                        onPageChange={(page) => console.log('Página:', page)}
                    />
                </div>
            </section>

            <section style={sectionStyle}>
                <h3>Breadcrumb</h3>
                <div style={divStyle}>
                    <Breadcrumb.Root className="mt-4">
                        <Breadcrumb.List>
                            {/* 1. Item Inicial Navegável */}
                            <Breadcrumb.Item>
                                <Breadcrumb.Link href="/dashboard">
                                    Dashboard
                                </Breadcrumb.Link>
                                <Breadcrumb.Separator />
                            </Breadcrumb.Item>

                            {/* 2. Item Intermediário Navegável */}
                            <Breadcrumb.Item>
                                <Breadcrumb.Link href="/dashboard/forms">
                                    Forms Avançados
                                </Breadcrumb.Link>
                                <Breadcrumb.Separator />
                            </Breadcrumb.Item>

                            {/* Opcional: Item de Reticências (Ellipsis) — Se implementado */}
                            {/* <Breadcrumb.Item>
                                <Breadcrumb.Ellipsis />
                                <Breadcrumb.Separator />
                            </Breadcrumb.Item> */}

                            {/* 3. Item Final (Página Atual) */}
                            <Breadcrumb.Item>
                                {/* Breadcrumb.Page é um <span> não clicável, indica a página atual */}
                                <Breadcrumb.Page>
                                    DateRangePicker
                                </Breadcrumb.Page>
                            </Breadcrumb.Item>
                        </Breadcrumb.List>
                    </Breadcrumb.Root>
                </div>
            </section>

            <h2 style={h2Style}>Users</h2>

            <section style={sectionStyle}>
                <h3>Avatar</h3>
                <div style={divStyle}>
                    {/* 1. Large: Fallback de Iniciais (Formato Circular Padrão) */}
                    <Avatar.Root size="large">
                        {/* Não há <Avatar.Image>, então o Fallback é exibido */}
                        <Avatar.Fallback name="Nicolas Loffi" />
                    </Avatar.Root>

                    {/* 2. Medium: Com Imagem (Fallback de Iniciais como segurança) */}
                    <Avatar.Root size="medium">
                        <Avatar.Image
                            src="https://i.pravatar.cc/150?img=3"
                            alt="Lucas Souza"
                        />
                        <Avatar.Fallback name="Lucas Souza" />
                    </Avatar.Root>

                    {/* 3. Small: Fallback de Ícone (Sem nome/imagem) */}
                    <Avatar.Root size="small">
                        <Avatar.Fallback icon={<CogIcon />} />
                    </Avatar.Root>

                    {/* 4. Medium: Quadrado com Iniciais */}
                    <Avatar.Root size="medium" shape="square">
                        <Avatar.Fallback name="TS" />
                    </Avatar.Root>
                </div>
            </section>

            <section style={sectionStyle}>
                <h3>Avatar Group</h3>
                <div style={divStyle}>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                        }}
                    >
                        <div>
                            <h4>Padrão (Medium, Max 4)</h4>
                            <AvatarGroup
                                users={USER_LIST}
                                maxVisible={4}
                                size="medium"
                            />
                        </div>

                        <div>
                            <h4>Pequeno (Max 6, Sem Contador)</h4>
                            <AvatarGroup
                                users={USER_LIST.slice(0, 6)}
                                maxVisible={6}
                                size="small"
                            />
                        </div>

                        <div>
                            <h4>Grande (Max 3, Com Contador +3)</h4>
                            <AvatarGroup
                                users={USER_LIST}
                                maxVisible={3}
                                size="large"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section style={sectionStyle}>
                <h3>Chip</h3>
                <div style={divStyle}>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                        }}
                    >
                        <div>
                            {/* 1. Chips de Seleção (Outline) */}
                            <h4 style={{ width: '100%' }}>
                                Chips de Filtro (Outline)
                            </h4>

                            <Chip
                                visualVariant="outline"
                                color="primary"
                                onClick={() => setSelectedTag('react')}
                                selected={selectedTag === 'react'}
                            >
                                React
                            </Chip>

                            <Chip
                                visualVariant="outline"
                                color="secondary"
                                onClick={() => setSelectedTag('js')}
                                selected={selectedTag === 'js'}
                            >
                                JavaScript
                            </Chip>

                            <Chip
                                visualVariant="outline"
                                color="tertiary"
                                onClick={() => setSelectedTag('css')}
                                selected={selectedTag === 'css'}
                            >
                                CSS/Tokens
                            </Chip>

                            <Chip
                                visualVariant="outline"
                                color="neutral"
                                onClick={() => setSelectedTag('nodeJs')}
                                selected={selectedTag === 'nodeJs'}
                                disabled={true}
                            >
                                NodeJs
                            </Chip>
                        </div>

                        <div>
                            {/* 2. Chips Sólidos (Indicadores de Status) */}
                            <h4 style={{ width: '100%', marginTop: '20px' }}>
                                Chips Sólidos (Status)
                            </h4>

                            <Chip color="success" size="small">
                                Ativo
                            </Chip>

                            <Chip color="warning" size="medium">
                                Aguardando
                            </Chip>

                            <Chip color="destructive" size="large">
                                Arquivado
                            </Chip>
                        </div>

                        <div>
                            {/* 3. Chips Removíveis (Closable) */}
                            <h4 style={{ width: '100%', marginTop: '20px' }}>
                                Chips Removíveis
                            </h4>

                            {removableTags.map((tag) => (
                                <Chip
                                    key={tag}
                                    color="neutral"
                                    // visualVariant="outline"
                                    closable
                                    onClose={() => handleRemove(tag)}
                                    size="medium"
                                >
                                    {tag}
                                </Chip>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section style={sectionStyle}>
                <h3>Tag</h3>
                <div style={divStyle}>
                    {/* Sólida e Grande (default/solid) */}
                    <Tag color="primary" size="large">
                        Serviço Principal
                    </Tag>

                    {/* Sólida e Clicável */}
                    <Tag
                        color="secondary"
                        onClick={() => alert('Abrir detalhe!')}
                    >
                        Clicar para Ação
                    </Tag>

                    {/* Sólida e Removível */}
                    <Tag
                        color="destructive"
                        size="medium"
                        closable
                        onClose={() => console.log('Removido!')}
                    >
                        Inválido
                    </Tag>

                    {/* -------------------------------------------------------------------------- */}

                    {/* Light e Pequena */}
                    <Tag color="warning" visualVariant="light" size="small">
                        Em Revisão
                    </Tag>

                    {/* Light e Média */}
                    <Tag color="tertiary" visualVariant="light">
                        Feature Nova
                    </Tag>

                    {/* Light e Clicável (Primária) */}
                    <Tag
                        color="primary"
                        visualVariant="light"
                        onClick={() => console.log('Light clicked')}
                    >
                        Abrir Documentação
                    </Tag>

                    {/* -------------------------------------------------------------------------- */}

                    {statusTags.map((tag) => (
                        <Tag
                            key={tag}
                            color={tag === 'urgent' ? 'destructive' : 'neutral'}
                            visualVariant={tag === 'urgent' ? 'solid' : 'light'}
                            closable
                            onClose={() => handleRemoveTag(tag)}
                        >
                            {tag.toUpperCase()}
                        </Tag>
                    ))}
                </div>
            </section>

            <h2 style={h2Style}>Extra</h2>

            <section style={sectionStyle}>
                <h3>TooltipAdvanced</h3>
                <div style={divStyle}>
                    {/* 1. Trigger: HOVER (Padrão) - Posição TOP */}
                    <TooltipAdvanced
                        text="Dica: Salvar alterações no banco de dados."
                        position="top"
                    >
                        <Button visualVariant="outline" color="primary">
                            Salvar (Hover Top)
                        </Button>
                    </TooltipAdvanced>

                    {/* 2. Trigger: HOVER - Posição BOTTOM com Atraso */}
                    <TooltipAdvanced
                        text="Exibir detalhes do perfil após 500ms."
                        position="bottom"
                        delay={500}
                    >
                        <Button visualVariant="ghost" color="neutral">
                            Detalhes (Hover Bottom, Delay 500ms)
                        </Button>
                    </TooltipAdvanced>

                    {/* 3. Trigger: CLICK - Posição RIGHT */}
                    <TooltipAdvanced
                        text={
                            <div>
                                <strong>Clique Ativo:</strong> Clique novamente
                                para fechar. Ou clique fora da caixa.
                            </div>
                        }
                        trigger="click"
                        position="right"
                    >
                        <Button visualVariant="default" color="secondary">
                            Configurações (Hover Right, Click)
                        </Button>
                    </TooltipAdvanced>

                    {/* 4. Trigger: HOVER - Posição LEFT */}
                    <TooltipAdvanced
                        text="Alerta: A bateria está fraca."
                        position="left"
                    >
                        <Button visualVariant="solid" color="destructive">
                            Alerta (Hover Left)
                        </Button>
                    </TooltipAdvanced>
                </div>
            </section>

            <h2 style={h2Style}>....</h2>

            <section style={sectionStyle}>
                <h3>Badges</h3>
                <div style={divStyle}>
                    {/* Bagges Normais */}
                    <Badge text="Primary" />
                    <Badge color="secondary" text="Secondary" />
                    <Badge color="success" text="Success" />
                    <Badge color="destructive" text="Destructive" />
                    <Badge color="warning" text="Warning" />
                    <Badge variant="outline" text="Outline primary" />
                    <Badge
                        variant="outline"
                        color="warning"
                        text="Outline warning"
                    />

                    {/* Badge com texto customizado */}
                    <Badge>Badge</Badge>
                </div>
            </section>

            <section style={sectionStyle}>
                <h3>Badge Group</h3>
                <div style={divStyle}>
                    <BadgeGroup items={PROJECT_TAGS_LIST} maxVisible={3} />
                </div>
            </section>

            <section style={sectionStyle}>
                <h3>ProgressCircular</h3>
                <div style={divStyle}>
                    <ProgressCircular value={65} />
                    <ProgressCircular value={70} color="secondary" />
                    <ProgressCircular value={90} color="success" />
                    <ProgressCircular value={45} color="destructive" />
                    <ProgressCircular value={30} color="warning" />
                </div>
            </section>

            <section style={sectionStyle}>
                <h3>RadioGroup</h3>
                <div style={divStyle}>
                    <Label id="plan-label" required>
                        Plano
                    </Label>

                    <RadioGroup
                        name="plan"
                        labelId="plan-label"
                        value={radioGroupPlans}
                        onChange={setRadioGroupPlans}
                        items={[
                            { label: 'Free', value: 'free' },
                            { label: 'Pro', value: 'pro' },
                            {
                                label: 'Enterprise',
                                value: 'enterprise',
                                disabled: true,
                            },
                        ]}
                    />
                </div>
            </section>
        </>
    );
}
