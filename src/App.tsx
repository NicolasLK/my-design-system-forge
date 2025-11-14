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

    </>
  )
}

export default App
