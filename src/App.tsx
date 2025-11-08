import './styles/base.css'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { Alert } from './components/Alert'
import { Badge } from './components/Badge'
import { Input } from './components/Input'
import { Switch } from './components/Switch'

const sectionStyle = {
  marginTop: "2rem"
}

const divStyle = {
  display: "flex",
  gap: "1rem",
  FlexWrap: "wrap"
}

function App() {


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
        </div>
      </section>

      <section style={sectionStyle}>
        <h2>Tabs</h2>
        <div style={divStyle}>
        </div>
      </section>

      <section style={sectionStyle}>
        <h2>Tooltips</h2>
        <div style={divStyle}>
        </div>
      </section>
    </>
  )
}

export default App
