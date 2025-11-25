# 🚀 Guia Rápido - GameRent

## ⚡ Início Rápido

### Este projeto NÃO USA banco de dados!

✅ **É um protótipo 100% frontend**
✅ **Todos os dados estão em memória (JavaScript)**
✅ **Ao recarregar a página, tudo é resetado**
✅ **Não precisa instalar MySQL, PostgreSQL ou qualquer banco**

---

## 📁 Arquivos Principais

| Arquivo | O que faz |
|---------|-----------|
| `/App.tsx` | **Cérebro do app** - gerencia todo o estado e navegação |
| `/components/HomePage.tsx` | Página inicial com catálogo de jogos |
| `/components/GameDetailsPage.tsx` | Detalhes de um jogo específico |
| `/components/LoginDialog.tsx` | Modal de login/registro (simulado) |
| `/components/CalendarPage.tsx` | Calendário para escolher data |
| `/components/ReservationManagement.tsx` | Gerenciar reservas |

---

## 🎯 Onde Modificar Cada Coisa

### Adicionar/Editar Jogos
**Arquivo:** `/App.tsx`
**Linha:** 41
**O que fazer:** Adicione objetos ao array `gamesData`

```typescript
{
  id: '7',
  name: 'Novo Jogo',
  category: 'Categoria',
  // ... etc
}
```

### Mudar Cores do Site
**Arquivo:** `/styles/globals.css`
**Procure por:** `--indigo-600`, `--slate-900`, etc
**Altere:** Os valores das cores

### Mudar Informações de Contato
**Arquivo:** `/components/Footer.tsx`
**Linhas:** 30 (email), 34 (telefone)

### Adicionar Datas Indisponíveis
**Arquivo:** `/components/CalendarPage.tsx`
**Linha:** 43
**Adicione:** Novas datas ao array

```typescript
const unavailableDates = [
  new Date(2025, 10, 20),  // 20 de novembro
  new Date(2025, 11, 25),  // 25 de dezembro
];
```

**⚠️ ATENÇÃO:** Janeiro = 0, Dezembro = 11

---

## 🔄 Como Funciona o Fluxo de Dados

### 1. Usuário clica em um jogo
```
GameCard (onClick) 
  → App.tsx (handleGameSelect)
    → Muda selectedGame
      → Muda currentPage para 'game'
        → Renderiza GameDetailsPage
```

### 2. Usuário clica "Alugar"
```
GameDetailsPage (onRentClick)
  → App.tsx (handleRentClick)
    → Verifica isLoggedIn
      → Se NÃO: abre LoginDialog
      → Se SIM: vai para CalendarPage
```

### 3. Usuário faz login
```
LoginDialog (onLogin)
  → App.tsx (handleLogin)
    → Muda isLoggedIn para true
      → Se tinha jogo pendente: vai para CalendarPage
```

### 4. Usuário escolhe data
```
CalendarPage (onDateSelect)
  → App.tsx (handleDateSelect)
    → Cria nova reserva
      → Adiciona ao array de reservations
        → Vai para ReservationManagement
```

---

## 🔍 Principais Conceitos do Código

### useState - Guarda Informações

```typescript
// Cria uma variável que, ao mudar, atualiza a tela
const [nome, setNome] = useState('valor inicial');

// Para LER:
console.log(nome);

// Para MODIFICAR:
setNome('novo valor');
```

### Props - Passa Dados Entre Componentes

```typescript
// Pai passa dados para filho:
<Filho nome="João" idade={25} />

// Filho recebe:
function Filho({ nome, idade }) {
  return <div>{nome} tem {idade} anos</div>
}
```

### Map - Transforma Array em Elementos

```typescript
const frutas = ['maçã', 'banana', 'laranja'];

// Transforma em elementos HTML:
{frutas.map(fruta => (
  <div key={fruta}>{fruta}</div>
))}

// Resultado na tela:
// maçã
// banana
// laranja
```

### Renderização Condicional

```typescript
// Mostra apenas se condição for verdadeira:
{logado && <BotaoSair />}

// If/Else:
{logado ? <BotaoSair /> : <BotaoEntrar />}
```

---

## 🎨 Estrutura de Componentes

```
App (gerencia tudo)
├── Header
│   ├── Logo (clicável - volta ao início)
│   ├── Link Contato
│   ├── Botão Minhas Reservas (se logado)
│   └── Botão Login/Logout
│
├── Main (conteúdo muda conforme a página)
│   ├── HomePage
│   │   └── GameCard (um para cada jogo)
│   │
│   ├── GameDetailsPage
│   │   ├── Carrossel de Imagens
│   │   └── Informações + Botão Alugar
│   │
│   ├── CalendarPage
│   │   ├── Resumo da Reserva
│   │   └── Calendário
│   │
│   └── ReservationManagement
│       ├── Lista de Ativas
│       └── Lista de Canceladas
│
├── Footer
│   ├── Sobre
│   ├── Contato
│   └── Horário
│
└── LoginDialog (modal)
    ├── Aba Login
    └── Aba Registro
```

---

## 📊 Estrutura de Dados

### Interface Game

```typescript
interface Game {
  id: string;           // "1", "2", "3"...
  name: string;         // "Magic: The Gathering"
  category: string;     // "Jogo de Cartas"
  summary: string;      // Texto curto
  price: number;        // 25.00
  images: string[];     // ["url1", "url2"]
  description: string;  // Texto longo
  howToPlay: string;    // Como jogar
  rules: string[];      // ["Regra 1", "Regra 2"]
  players: string;      // "2-4 jogadores"
  duration: string;     // "30-60 minutos"
}
```

### Interface Reservation

```typescript
interface Reservation {
  id: string;           // "1699999999999"
  gameId: string;       // "1" (relaciona com Game)
  gameName: string;     // "Magic: The Gathering"
  date: Date;           // new Date(2025, 10, 20)
  status: 'active' | 'cancelled';
}
```

---

## 🛠️ Comandos VS Code Úteis

| Atalho | O que faz |
|--------|-----------|
| `Ctrl + P` | Buscar arquivo por nome |
| `Ctrl + F` | Buscar texto no arquivo atual |
| `Ctrl + Shift + F` | Buscar texto em todos os arquivos |
| `Ctrl + /` | Comentar/descomentar linha |
| `Alt + ↑/↓` | Mover linha para cima/baixo |
| `Ctrl + D` | Selecionar próxima ocorrência |
| `F12` | Ir para definição |
| `Alt + F12` | Ver definição (preview) |

---

## 🐛 Debug - Como Descobrir Problemas

### 1. Console do Navegador

Abra com `F12` → Aba "Console"

```typescript
// Adicione no código para ver valores:
console.log('Nome da variável:', variavel);
```

### 2. React DevTools

- Instale a extensão "React Developer Tools"
- Abra F12 → Aba "Components"
- Veja todos os estados e props em tempo real

### 3. Breakpoints

No VS Code:
- Clique à esquerda do número da linha (aparece um ponto vermelho)
- Execute em modo debug (F5)
- O código para quando chegar naquele ponto

---

## ✅ Checklist de Teste

Teste se tudo funciona:

- [ ] Página inicial carrega com 6 jogos
- [ ] Clicar em um jogo abre a página de detalhes
- [ ] Carrossel de imagens funciona (se o jogo tiver múltiplas imagens)
- [ ] Clicar "Alugar Jogo" sem login abre o modal
- [ ] Consegue fazer login com qualquer credencial
- [ ] Consegue criar conta
- [ ] Após login, vai direto para o calendário
- [ ] Consegue selecionar uma data futura
- [ ] Datas passadas estão desabilitadas
- [ ] Consegue confirmar a reserva
- [ ] Reserva aparece em "Minhas Reservas"
- [ ] Consegue editar a data da reserva
- [ ] Consegue cancelar a reserva
- [ ] Reserva cancelada aparece na seção "Canceladas"
- [ ] Botão "Minhas Reservas" só aparece quando logado
- [ ] Link "Contato" no header faz scroll para o footer
- [ ] Logout funciona e limpa as reservas

---

## 🎓 Para Aprender Mais

### Iniciante
1. HTML básico
2. CSS básico
3. JavaScript básico
4. Depois: React

### Intermediário
1. TypeScript
2. React Hooks (useState, useEffect)
3. Props e Component Communication
4. Conditional Rendering

### Avançado
1. React Context (gerenciamento de estado global)
2. React Router (múltiplas páginas/URLs)
3. API Integration
4. Authentication com JWT

---

## 💾 Versão com Banco de Dados

Se quiser adicionar persistência de dados:

### Opção 1: LocalStorage (Mais Simples)

```typescript
// Salvar:
localStorage.setItem('reservas', JSON.stringify(reservations));

// Carregar:
const saved = localStorage.getItem('reservas');
const reservations = saved ? JSON.parse(saved) : [];
```

### Opção 2: Firebase (Recomendado para Iniciantes)

1. Crie conta no [Firebase](https://firebase.google.com/)
2. Crie um projeto
3. Adicione Firebase ao código:

```bash
npm install firebase
```

```typescript
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Suas credenciais do Firebase
const app = initializeApp({ /* config */ });
const db = getFirestore(app);
```

### Opção 3: Backend Próprio

Você precisaria:
- Node.js + Express (backend)
- PostgreSQL ou MongoDB (banco)
- APIs REST para comunicação
- Autenticação JWT

---

## 🎯 Exercícios para Praticar

### Nível 1: Básico
1. Mude a cor principal do site
2. Adicione um 7º jogo ao catálogo
3. Mude o telefone e e-mail do rodapé
4. Altere o nome "GameRent" para outro

### Nível 2: Intermediário
1. Adicione um campo "estoque" aos jogos
2. Mostre quantas vezes cada jogo foi alugado
3. Adicione filtros por categoria na home
4. Adicione busca de jogos por nome

### Nível 3: Avançado
1. Implemente sistema de avaliação (estrelas)
2. Adicione carrinho (alugar múltiplos jogos de uma vez)
3. Calcule valor total considerando múltiplos dias
4. Crie dashboard administrativo

---

## 📞 Dúvidas Frequentes

### "Onde está o banco de dados?"
Não há! É um protótipo frontend-only.

### "Por que os dados somem ao recarregar?"
Porque estão apenas na memória (React state). Use localStorage ou banco de dados para persistir.

### "Posso usar este código em produção?"
Não sem adicionar: backend, autenticação real, banco de dados, validações, segurança.

### "Como adiciono mais páginas?"
Você precisaria do React Router. Este projeto usa "renderização condicional" ao invés de rotas.

### "É seguro?"
Não! O login aceita qualquer senha. Em produção, nunca faça assim.

---

**Boa sorte com seu projeto! 🚀**
