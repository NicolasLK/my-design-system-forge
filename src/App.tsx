import './styles/base.css'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { Alert } from './components/Alert'
import { Badge } from './components/Badge'
import { Input } from './components/Input'
import { Switch } from './components/Switch'
import { Modal } from './components/Modal'
import { useState } from 'react'
import { Divider } from './components/Divider'
import { Tabs } from './components/Tabs'
import { Tooltip } from './components/Tooltip'
import { Accordion } from './components/Accordion'
import { Typography } from './components/Typography'
import { Avatar } from './components/Avatar'
import { Progress } from './components/Progress'
import { Breadcrumb } from './components/Breadcrumb'
import { Pagination } from './components/Pagination'
import { Stepper } from './components/Stepper'
import { ProgressCircular } from './components/ProgressCircular'
import { Toast } from './components/Toast'
import { BadgeGroup } from './components/BadgeGroup'
import { Tag } from './components/Tag'
import { Chip } from './components/Chip'
import { Dropdown } from './components/Dropdown'
import { Select } from './components/Select'
import { Slider } from './components/Slider'
import { Spinner } from './components/Spinner'
import { AvatarGroup } from './components/AvatarGroup'
import { Calendar } from './components/Calendar'
import { Checkbox } from './components/Checkbox'
import { Radio } from './components/Radio'
import { Textarea } from './components/Textarea'
import { Skeleton } from './components/Skeleton'
import { FileInput } from './components/FileInput'
import { TagInput } from './components/TagInput'
import { TooltipAdvanced } from './components/TooltipAdvanced'
import { Table } from './components/Table'
import { LoadingOverlay } from './components/LoadingOverlay'
import { DateRangePicker } from './components/DateRangePicker'

const sectionStyle = {
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


  return (
    <>
      <h1>Design System Preview</h1>

      <section style={sectionStyle}>
        <h2>Botões</h2>
        <div style={divStyle}>
          {/* Botões Normais */}
          <Button variant="primary" />
          <Button variant="secondary" />
          <Button variant="success" />
          <Button variant="destructive" />

          {/* Botão com texto customizado */}
          <Button variant="primary">
            Salvar Alterações
          </Button>

          {/* Botão Desabilitado */}
          <Button variant="primary" disabled />
        </div>
      </section>

      <section style={sectionStyle}>
        <h2>Cards</h2>
        <div style={divStyle}>
          <Card />
        </div>
      </section>

      <section style={sectionStyle}>
        <h2>Alerts</h2>
        <div style={divStyle}>
          {/* Alerts Normais */}
          <Alert variant="success" />
          <Alert variant="warning" />
          <Alert variant="destructive" />
          <Alert variant="info" />

          {/* Alert com texto customizado */}
          <Alert variant="info">
            ℹ Alert
          </Alert>
        </div>
      </section>

      <section style={sectionStyle}>
        <h2>Badges</h2>
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
        <h2>Inputs</h2>
        <div style={divStyle}>
          {/* Input Padrão (Medium) */}
          <Input label="E-mail" placeholder="usuario@exemplo.com" type="email" />

          {/* Input Grande */}
          <Input label="Senha" placeholder="Digite sua senha" size="large" type="password" />

          {/* Input de Erro com Mensagem */}
          <Input
            label="CEP"
            placeholder="99999-999"
            size="small"
            error={true}
            errorMessage="O CEP informado é inválido."
          />

          {/* Input Desabilitado */}
          <Input label="Telefone" placeholder="Apenas para administradores" disabled={true} />
        </div>
      </section>

      <section style={sectionStyle}>
        <h2>Switchs</h2>
        <div style={divStyle}>
          <Switch
            label="Ativar notificações"
            onChange={(state) => console.log('Switch agora está:', state)}
          />
          <Switch label="Ativar modo escuro" />
        </div>
      </section>

      <section style={sectionStyle}>
        <h2>Modal</h2>
        <div style={divStyle}>

          <Button variant="primary" onClick={() => setIsModalOpen(true)}>
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
        <h2>Divider</h2>
        <div style={divStyle}>
          <Divider />
        </div>
      </section>

      <section style={sectionStyle}>
        <h2>Tabs</h2>
        <div style={divStyle}>
          <Tabs tabs={[
            { label: "Geral", content: <p>Conteúdo da aba Geral</p> },
            { label: "Configurações", content: <p>Conteúdo da aba Configurações</p> },
          ]} />
        </div>
      </section>

      <section style={sectionStyle}>
        <h2>Tooltips</h2>
        <div style={divStyle}>
          <Tooltip text="Clique para mais informações">
            <Button variant="primary">Info</Button>
          </Tooltip>
        </div>
      </section>

      <section style={sectionStyle}>
        <h2>Accordion</h2>
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
        <h2>Typography</h2>
        <div style={divStyle}>
          <Typography variant="h1" weight="bold">
            Título Principal (H1)
          </Typography>

          <Typography variant="h2" weight="bold">
            Subtítulo Secundário (H2)
          </Typography>

          <Typography variant="text1">
            Este é um texto padrão utilizado em descrições ou parágrafos.
          </Typography>

          <Typography variant="text2" color="var(--color-gray-default)">
            Texto de apoio ou descrição
          </Typography>

          <Typography variant="caption" as="span">
            Texto pequeno em linha
          </Typography>
        </div>
      </section>

      <section style={sectionStyle}>
        <h2>Avatar</h2>
        <div style={divStyle}>
          <Avatar name="Nicolas Loffi" size="large" />
          <Avatar src="https://i.pravatar.cc/150?img=3" name="Lucas Souza" size="medium" />
          <Avatar size="small" />
        </div>
      </section>

      <section style={sectionStyle}>
        <h2>Progress</h2>
        <div style={divStyle}>
          <Progress value={45} label="Carregando dados" variant="primary" showPercentage />
          <Progress value={75} label="Upload concluído" variant="success" size="large" />
          <Progress value={30} label="Aguardando resposta" variant="warning" size="small" />
          <Progress value={90} variant="secondary" />
        </div>
      </section>

      <section style={sectionStyle}>
        <h2>Breadcrumb</h2>
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
        <h2>Pagination</h2>
        <div style={divStyle}>
          <Pagination
            totalPages={5}
            currentPage={2}
            onPageChange={(page) => console.log("Página:", page)}
          />
        </div>
      </section>

      <section style={sectionStyle}>
        <h2>Stepper</h2>
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
        <h2>ProgressCircular</h2>
        <div style={divStyle}>
          <ProgressCircular value={65} variant="primary" />
          <ProgressCircular value={90} variant="success" />
          <ProgressCircular value={45} variant="destructive" />
          <ProgressCircular value={70} variant="secondary" />
          <ProgressCircular value={30} variant="warning" />
        </div>
      </section>

      <section style={sectionStyle}>
        <h2>Toast</h2>
        <div style={divStyle}>
          <Toast message="Erro ao enviar formulário." variant="error" />
        </div>
      </section>

      <section style={sectionStyle}>
        <h2>Badgegroup</h2>
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
        <h2>Tag</h2>
        <div style={divStyle}>
          <Tag variant="success">Aprovado</Tag>
          <Tag variant="destructive" closable onClose={() => alert("Removido!")}>
            Erro crítico
          </Tag>
        </div>
      </section>

      <section style={sectionStyle}>
        <h2>Dropdown</h2>
        <div style={divStyle}>
          <Dropdown label="Opções">
            <button>Perfil</button>
            <button>Configurações</button>
            <button>Sair</button>
          </Dropdown>
        </div>
      </section>

      <section style={sectionStyle}>
        <h2>Select</h2>
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
        <h2>Chip</h2>
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
        <h2>Slider</h2>
        <div style={divStyle}>
          <Slider defaultValue={30} onChange={(v) => console.log("Valor:", v)} />
          <Slider defaultValue={75} showValue={false} />
        </div>
      </section>

      <section style={sectionStyle}>
        <h2>Spinner</h2>
        <div style={divStyle}>
          <Spinner variant="primary" size="large" />
          <Spinner variant="success" />
          <Spinner variant="warning" size="small" />
        </div>
      </section>

      <section style={sectionStyle}>
        <h2>Avatar Group</h2>
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
        <h2>Calendar</h2>
        <div style={divStyle}>
          <Calendar
            onSelect={(date) => console.log("Data selecionada:", date)}
          />
        </div>
      </section>

      <section style={sectionStyle}>
        <h2>Checkbox</h2>
        <div style={divStyle}>
          <Checkbox label="Padrão" />
          <Checkbox label="Erro" error />
          <Checkbox label="Sucesso" variant="success" />
          <Checkbox label="Atenção" variant="warning" />
          <Checkbox label="Destruído" variant="destructive" />
          <Checkbox label="Pequeno" size="small" />
          <Checkbox label="Desabilitado" disabled />
        </div>
      </section>

      <section style={sectionStyle}>
        <h2>Radio</h2>
        <div style={divStyle}>
          <Radio name="plan" value="basic" label="Básico" />
          <Radio name="plan" value="pro" label="Profissional" checked />
          <Radio name="plan" value="vip" label="VIP" />
          <Radio name="plan" value="disabled" label="Desativado" disabled />
          <Radio name="plan" value="small" label="Pequeno" size="small" />
        </div>
      </section>

      <section style={sectionStyle}>
        <h2>Textarea</h2>
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
        <h2>Skeleton</h2>
        <div style={divStyle}>
          <Skeleton height="20px" width="150px" />

          <Skeleton height="40px" rounded />

          <Skeleton width="60px" height="60px" circle />
        </div>
      </section>

      <section style={sectionStyle}>
        <h2>TagInput</h2>
        <div style={divStyle}>
          <TagInput
            label="Tags"
            defaultTags={["React", "UI"]}
            onChange={(tags) => console.log(tags)}
          />
        </div>
      </section>

      <section style={sectionStyle}>
        <h2>FileInput / FileUpload</h2>
        <div style={divStyle}>
          <FileInput
            label="Envie um arquivo"
            accept="image/*"
            onChange={(files) => console.log(files)}
          />
        </div>
      </section>

      <section style={sectionStyle}>
        <h2>TooltipAdvanced</h2>
        <div style={divStyle}>
          <TooltipAdvanced text="Informação útil" position="right" delay={250}>
            <Button variant="primary">Hover aqui</Button>
          </TooltipAdvanced>

          <TooltipAdvanced text="Clique para abrir" trigger="click">
            <Button variant="secondary">Click Tooltip</Button>
          </TooltipAdvanced>
        </div>
      </section>

      <section style={sectionStyle}>
        <h2>Table</h2>
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
        <h2>LoadingOverlay</h2>
        <div style={divStyle}>
          <LoadingOverlay active={isLoading} message="Carregando dados..." />
          <p>Conteúdo da página</p>

          <Button variant="primary" onClick={() => setIsLoading(true)}>
            Ativar Loading
          </Button>
        </div>
      </section>

      <section style={sectionStyle}>
        <h2>DateRangePicker</h2>
        <div style={divStyle}>
          <DateRangePicker onChange={(range) => console.log(range)} />
        </div>
      </section>

    </>
  )
}

export default App
