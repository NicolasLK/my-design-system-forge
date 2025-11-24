// ==== Components - Base Essentials ====
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Radio } from '@/components/ui/radio'
import { Switch } from '@/components/ui/switch'
//=======================================
// ==== Components - Feedback ====
import { Alert } from '@/components/ui/alert'
import { Toast } from '@/components/ui/toast'
import { Modal } from '@/components/ui/modal'
import { Tooltip } from '@/components/ui/tooltip'
import { Skeleton } from '@/components/ui/skeleton'
import { Spinner } from '@/components/ui/spinner'
//================================
// ==== Components - Layout ====
import { Card } from '@/components/ui/card'
import { Badge } from './components/Badge'
import { useState } from 'react'
import { Divider } from './components/Divider'
import { Tabs } from './components/Tabs'
import { Accordion } from './components/Accordion'
import { Typography } from './components/Typography'
import { Avatar } from './components/Avatar'
import { Progress } from './components/Progress'
import { Breadcrumb } from './components/Breadcrumb'
import { Pagination } from './components/Pagination'
import { Stepper } from './components/Stepper'
import { ProgressCircular } from './components/ProgressCircular'
import { BadgeGroup } from './components/BadgeGroup'
import { Tag } from './components/Tag'
import { Chip } from './components/Chip'
import { Dropdown } from './components/Dropdown'
import { Select } from './components/Select'
import { Slider } from './components/Slider'
import { AvatarGroup } from './components/AvatarGroup'
import { Calendar } from './components/Calendar'
import { FileInput } from './components/FileInput'
import { TagInput } from './components/TagInput'
import { TooltipAdvanced } from './components/TooltipAdvanced'
import { Table } from './components/Table'
import { LoadingOverlay } from './components/LoadingOverlay'
import { DateRangePicker } from './components/DateRangePicker'

const sectionStyle = {
  marginTop: "2rem"
}

const h2Style = {
  marginTop: "2rem"
}

const divStyle = {
  display: "flex",
  gap: "1rem",
  FlexWrap: "wrap"
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState("")
  const [showToast, setShowToast] = useState(false);


  return (
    <>
      <h1>Design System Preview</h1>

      <h2>Base Essentials Components</h2>
      <section className="u-mt-4">
        <h3>Botões</h3>
        <div className="u-flex u-flex-col u-gap-4">
          {/* Sólidos (Default Visual Variant) */}
          <h3 className="u-mt-6 u-mb-3">1. Cores Sólidas (Default)</h3>
          <div className="u-flex u-flex-wrap u-gap-3">
            <Button colorVariant="primary" className="u-text-transform-capitalize">primary</Button>
            <Button colorVariant="secondary" className="u-text-transform-capitalize">secondary</Button>
            <Button colorVariant="tertiary" className="u-text-transform-capitalize">tertiary</Button>
            <Button colorVariant="success" className="u-text-transform-capitalize">success</Button>
            <Button colorVariant="warning" className="u-text-transform-capitalize">warning</Button>
            <Button colorVariant="destructive" className="u-text-transform-capitalize">destructive</Button>
            <Button colorVariant="neutral" className="u-text-transform-capitalize">neutral</Button>
          </div>

          {/* Variantes Visuais (Outline) */}
          <h3 className="u-mt-6 u-mb-3">2. Variante Outline</h3>
          <div className="u-flex u-flex-wrap u-gap-3">
            <Button colorVariant="primary" visualVariant="outline">Primary Outline</Button>
            <Button colorVariant="secondary" visualVariant="outline">Secondary Outline</Button>
            <Button colorVariant="destructive" visualVariant="outline">Destructive Outline</Button>
            <Button colorVariant="neutral" visualVariant="outline">Neutral Outline</Button>
          </div>

          {/* Tamanhos */}
          <h3 className="u-mt-6 u-mb-3">3. Tamanhos e Iconografia</h3>
          <div className="u-flex u-items-end u-flex-wrap u-gap-3">
            <Button colorVariant="primary" size="small">Small (sm)</Button>
            <Button colorVariant="primary" size="medium">Medium (default)</Button>
            <Button colorVariant="primary" size="large">Large (lg)</Button>

            <Button disabled>
              <Spinner size="small" />
              Processando...
            </Button>
          </div>

          {/* Estados  */}
          <h3 className="u-mt-6 u-mb-3">4. Estados (Desabilitado e Ação)</h3>
          <div className="u-flex u-flex-wrap u-gap-3">
            {/* Botão Desabilitado Sólido */}
            <Button colorVariant="primary" disabled>
              Ação Primária (Disabled)
            </Button>
            {/* Botão Desabilitado Outline */}
            <Button colorVariant="destructive" visualVariant="outline" disabled>
              Excluir (Disabled)
            </Button>

            {/* Botão com texto customizado */}
            <Button>
              Salvar Alterações
            </Button>
          </div>
        </div>
      </section>

      <section style={sectionStyle}>
        <h3>Inputs</h3>
        <div style={divStyle}>
          {/* Input Padrão (Medium) */}
          <Input label="E-mail" placeholder="usuario@exemplo.com" type="email" />

          {/* Input Grande */}
          <Input label="Senha" placeholder="Digite sua senha" inputSize="large" type="password" />

          {/* Input de Erro com Mensagem */}
          <Input
            label="CEP"
            placeholder="99999-999"
            inputSize="small"
            error={true}
            errorMessage="O CEP informado é inválido."
          />

          {/* Input Desabilitado */}
          <Input label="Telefone" placeholder="Apenas para administradores" disabled={true} />
        </div>
      </section>

      <section style={sectionStyle}>
        <h3>Textarea</h3>
        <div style={divStyle}>
          <Textarea label="Descrição" placeholder="Digite uma descrição..." />

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
            checked={selectedPlan === "basic"}
            onChange={(v) => setSelectedPlan(v)}
          />
          <Radio
            name="plan"
            value="pro"
            label="Profissional"
            checked={selectedPlan === "pro"}
            onChange={(v) => setSelectedPlan(v)}
          />
          <Radio
            name="plan"
            value="vip"
            label="VIP"
            checked={selectedPlan === "vip"}
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
            checked={selectedPlan === "small"}
            onChange={(v) => setSelectedPlan(v)}
          />
        </div>
      </section>

      <section style={sectionStyle}>
        <h3>Switchs</h3>
        <div style={divStyle}>
          <Switch
            label="Ativar notificações"
            onCheckedChange={(state) => console.log('Switch agora está:', state)}
          />
          <Switch label="Ativar modo escuro" />
        </div>
      </section>

      <h2 style={h2Style}>Feedback Components</h2>

      <section style={sectionStyle}>
        <h3>Alerts</h3>
        <div style={divStyle}>
          {/* Alerts Normais */}
          <Alert variant="primary" />
          <Alert variant="success" />

          {/* Alert Warning com título customizado */}
          <Alert
            variant="warning"
            title="Atenção!"
          />

          {/* Alert Destructive com Título e Descrição */}
          <Alert
            variant="destructive"
            title="Erro ao salvar"
            description="Ocorreu um problema ao salvar suas informações."
          />

          {/* Alert com texto customizado usando children */}
          <Alert variant="default">
            <div>ℹ Alert</div>
          </Alert>
        </div>
      </section>

      <section style={sectionStyle}>
        <h3>Toast</h3>
        <div style={divStyle}>
          <Button colorVariant="primary" onClick={() => setShowToast(true)}>
            Mostrar Toast
          </Button>
          <Toast
            message="Formulário enviado."
            variant='success'
            duration={3000}
            visible={showToast}
            onClose={() => setShowToast(false)}
          />
          <Toast message="Erro ao enviar formulário." variant='destructive' />
        </div>
      </section>

      <section style={sectionStyle}>
        <h3>Modal</h3>
        <div style={divStyle}>

          <Button colorVariant="primary" onClick={() => setIsModalOpen(true)}>
            Abrir Modal
          </Button>
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            size="large"
            title="Confirmação"
            description="Deseja realmente realizar esta ação?" />
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
              <Card.Description>Dados atualizados automaticamente.</Card.Description>
            </Card.Header>

            <Card.Content>
              <p>Email: usuario@exemplo.com</p>
              <p>Status: Ativo</p>
            </Card.Content>

            <Card.Footer>
              <Button colorVariant="primary" size="small">Ação</Button>
            </Card.Footer>
          </Card.Root>
        </div>
      </section>

      <section style={sectionStyle}>
        <h3>Badges</h3>
        <div style={divStyle}>
          {/* Bagges Normais */}
          <Badge variant="primary" />
          <Badge variant="secondary" />
          <Badge variant="success" />
          <Badge variant="destructive" />
          <Badge variant="warning" />

          {/* Badge com texto customizado */}
          <Badge>
            Badge
          </Badge>
        </div>
      </section>

      <section style={sectionStyle}>
        <h3>Divider</h3>
        <div style={divStyle}>
          <Divider />
        </div>
      </section>

      <section style={sectionStyle}>
        <h3>Tabs</h3>
        <div style={divStyle}>
          <Tabs tabs={[
            { label: "Geral", content: <p>Conteúdo da aba Geral</p> },
            { label: "Configurações", content: <p>Conteúdo da aba Configurações</p> },
          ]} />
        </div>
      </section>

      <section style={sectionStyle}>
        <h3>Accordion</h3>
        <div style={divStyle}>
          <Accordion items={[
            {
              title: "O que é a plataforma?",
              content:
                "Nossa plataforma de telessaúde conecta profissionais e pacientes de forma prática, segura e online.",
            },
            {
              title: "Como realizo o cadastro?",
              content:
                "Você pode se cadastrar com seu e-mail e confirmar a conta via link enviado automaticamente.",
            },
            {
              title: "Posso integrar outros serviços?",
              content:
                "Sim. A plataforma possui integrações com Stripe, Memed e Webex para garantir fluxo completo.",
            },
          ]} />
        </div>
      </section>

      <section style={sectionStyle}>
        <h3>Typography</h3>
        <div style={divStyle}>
          <Typography variant="h1" weight="bold">
            Título Principal (H1)
          </Typography>

          <Typography variant="h2" weight="bold">
            Subtítulo Secundário (H2)
          </Typography>

          <Typography variant="h3" weight="bold">
            Subtítulo Terciário (H3)
          </Typography>

          <Typography variant="text1">
            Este é um texto padrão utilizado em descrições ou parágrafos.
          </Typography>

          <Typography variant="text2" color="var(--color-gray-500)">
            Texto de apoio ou descrição
          </Typography>

          <Typography variant="caption" as="span">
            Texto pequeno em linha
          </Typography>
        </div>
      </section>

      <section style={sectionStyle}>
        <h3>Avatar</h3>
        <div style={divStyle}>
          <Avatar name="Nicolas Loffi" size="large" />
          <Avatar src="https://i.pravatar.cc/150?img=3" name="Lucas Souza" size="medium" />
          <Avatar size="small" />
        </div>
      </section>

      <section style={sectionStyle}>
        <h3>Progress</h3>
        <div style={divStyle}>
          <Progress value={45} label="Carregando dados" variant="primary" showPercentage />
          <Progress value={75} label="Upload concluído" variant="success" size="large" />
          <Progress value={30} label="Aguardando resposta" variant="warning" size="small" />
          <Progress value={90} variant="secondary" />
        </div>
      </section>

      <section style={sectionStyle}>
        <h3>Breadcrumb</h3>
        <div style={divStyle}>
          <Breadcrumb
            items={[
              { label: "Início", href: "#" },
              { label: "Usuários", href: "#" },
              { label: "Perfil", href: "#" },
              { label: "Configurações" },
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
            onPageChange={(page) => console.log("Página:", page)}
          />
        </div>
      </section>

      <section style={sectionStyle}>
        <h3>Stepper</h3>
        <div style={divStyle}>
          <Stepper
            currentStep={1}
            steps={[
              { label: "Informações" },
              { label: "Pagamento" },
              { label: "Confirmação" },
            ]}
          />
        </div>
      </section>

      <section style={sectionStyle}>
        <h3>ProgressCircular</h3>
        <div style={divStyle}>
          <ProgressCircular value={65} variant="primary" />
          <ProgressCircular value={90} variant="success" />
          <ProgressCircular value={45} variant="destructive" />
          <ProgressCircular value={70} variant="secondary" />
          <ProgressCircular value={30} variant="warning" />
        </div>
      </section>

      <section style={sectionStyle}>
        <h3>Badgegroup</h3>
        <div style={divStyle}>
          <BadgeGroup maxVisible={3}>
            <Badge variant="primary">Saúde</Badge>
            <Badge variant="secondary">Psicologia</Badge>
            <Badge variant="success">Online</Badge>
            <Badge variant="warning">Premium</Badge>
            <Badge variant="destructive">Inativo</Badge>
          </BadgeGroup>
        </div>
      </section>

      <section style={sectionStyle}>
        <h3>Tag</h3>
        <div style={divStyle}>
          <Tag variant="success">Aprovado</Tag>
          <Tag variant="destructive" closable onClose={() => alert("Removido!")}>
            Erro crítico
          </Tag>
        </div>
      </section>

      <section style={sectionStyle}>
        <h3>Dropdown</h3>
        <div style={divStyle}>
          <Dropdown label="Opções">
            <button>Perfil</button>
            <button>Configurações</button>
            <button>Sair</button>
          </Dropdown>
        </div>
      </section>

      <section style={sectionStyle}>
        <h3>Select</h3>
        <div style={divStyle}>
          <Select
            label="Selecione o plano"
            options={[
              { value: "basic", label: "Básico" },
              { value: "pro", label: "Profissional" },
              { value: "enterprise", label: "Empresarial" },
              { value: "family", label: "Família" },
              { value: "couple", label: "Casal" },
              { value: "children's", label: "Infantil" },
            ]}
            onChange={(val) => console.log("Selecionado:", val)}
          />
        </div>
      </section>

      <section style={sectionStyle}>
        <h3>Chip</h3>
        <div style={divStyle}>
          {/* Padrão */}
          <Chip label="Padrão" />

          {/* Selecionável */}
          <Chip label="Padrão" selected />

          {/* Com variantes de cor */}
          <Chip label="Ativo" variant="primary" />
          <Chip label="Sucesso" variant="success" />
          <Chip label="Aviso" variant="warning" />
          <Chip label="Erro" variant="destructive" />

          {/* Com interação */}
          <Chip
            label="Filtro ativo"
            onClick={() => console.log("Filtro clicado!")}
          />

          {/* Desabilitado */}
          <Chip label="Indisponível" disabled />
        </div>
      </section>

      <section style={sectionStyle}>
        <h3>Slider</h3>
        <div style={divStyle}>
          <Slider defaultValue={30} onChange={(v) => console.log("Valor:", v)} />
          <Slider defaultValue={75} showValue={false} />
        </div>
      </section>

      <section style={sectionStyle}>
        <h3>Avatar Group</h3>
        <div style={divStyle}>
          <AvatarGroup
            size="medium"
            users={[
              { name: "Nicolas Loffi", src: "https://i.pravatar.cc/150?img=11" },
              { name: "Ana Clara", src: "https://i.pravatar.cc/150?img=22" },
              { name: "João Pedro", src: "https://i.pravatar.cc/150?img=33" },
              { name: "Marina Lopes", src: "https://i.pravatar.cc/150?img=44" },
              { name: "Carlos Henrique", src: "https://i.pravatar.cc/150?img=55" },
            ]}
            maxVisible={3}
          />
        </div>
      </section>

      <section style={sectionStyle}>
        <h3>Calendar</h3>
        <div style={divStyle}>
          <Calendar
            onSelect={(date) => console.log("Data selecionada:", date)}
          />
        </div>
      </section>

      <section style={sectionStyle}>
        <h3>TagInput</h3>
        <div style={divStyle}>
          <TagInput
            label="Tags"
            defaultTags={["React", "UI"]}
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
        <h3>TooltipAdvanced</h3>
        <div style={divStyle}>
          <TooltipAdvanced text="Informação útil" position="right" delay={250}>
            <Button colorVariant="primary">Hover aqui</Button>
          </TooltipAdvanced>

          <TooltipAdvanced text="Clique para abrir" trigger="click">
            <Button colorVariant="secondary">Click Tooltip</Button>
          </TooltipAdvanced>
        </div>
      </section>

      <section style={sectionStyle}>
        <h3>Table</h3>
        <div style={divStyle}>
          <Table
            striped
            compact
            columns={[
              { key: "name", label: "Nome", sortable: true },
              { key: "age", label: "Idade", sortable: true },
              { key: "role", label: "Cargo" }
            ]}
            data={[
              { name: "Nicolas", age: 29, role: "Dev" },
              { name: "Ana", age: 31, role: "PM" },
              { name: "João", age: 23, role: "Designer" }
            ]}
          />
        </div>
      </section>

      <section style={{ position: "relative", height: 200 }}>
        <h3>LoadingOverlay</h3>
        <div style={divStyle}>
          <LoadingOverlay active={isLoading} message="Carregando dados..." />
          <p>Conteúdo da página</p>

          <Button colorVariant="primary" onClick={() => setIsLoading(true)}>
            Ativar Loading
          </Button>
        </div>
      </section>

      <section style={sectionStyle}>
        <h3>DateRangePicker</h3>
        <div style={divStyle}>
          <DateRangePicker onChange={(range) => console.log(range)} />
        </div>
      </section>

    </>
  )
}

export default App
