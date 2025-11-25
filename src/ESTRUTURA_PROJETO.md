# 📂 Estrutura Completa do Projeto

## 🌳 Árvore de Arquivos

```
gamerent/
│
├── 📄 App.tsx                        # ⭐ ARQUIVO PRINCIPAL
│   ├── Gerencia todo o estado (useState)
│   ├── Contém os dados dos jogos (gamesData)
│   ├── Controla navegação entre páginas
│   └── Define as interfaces (Game, Reservation)
│
├── 📁 components/                    # Todos os componentes React
│   │
│   ├── 📄 Header.tsx                 # Cabeçalho fixo no topo
│   │   ├── Logo (clicável)
│   │   ├── Link de contato
│   │   ├── Botão "Minhas Reservas"
│   │   └── Botão Login/Logout
│   │
│   ├── 📄 Footer.tsx                 # Rodapé com informações
│   │   ├── Sobre a empresa
│   │   ├── Dados de contato
│   │   └── Horário de atendimento
│   │
│   ├── 📄 HomePage.tsx               # Página inicial (catálogo)
│   │   ├── Título e descrição
│   │   └── Grid com todos os jogos
│   │
│   ├── 📄 GameCard.tsx               # Card de cada jogo
│   │   ├── Imagem do jogo
│   │   ├── Nome e categoria
│   │   ├── Resumo
│   │   └── Preço e nº de jogadores
│   │
│   ├── 📄 GameDetailsPage.tsx        # Detalhes completos do jogo
│   │   ├── Carrossel de imagens
│   │   ├── Informações completas
│   │   ├── Regras básicas
│   │   └── Botão "Alugar Jogo"
│   │
│   ├── 📄 LoginDialog.tsx            # Modal de login/registro
│   │   ├── Aba de Login
│   │   └── Aba de Criar Conta
│   │
│   ├── 📄 CalendarPage.tsx           # Seleção de data
│   │   ├── Resumo da reserva
│   │   ├── Calendário interativo
│   │   └── Botão confirmar
│   │
│   ├── 📄 ReservationManagement.tsx  # Gerenciar reservas
│   │   ├── Lista de reservas ativas
│   │   ├── Lista de reservas canceladas
│   │   ├── Modal para editar data
│   │   └── Modal para cancelar
│   │
│   └── 📁 ui/                        # Componentes ShadCN
│       ├── button.tsx                # Botões
│       ├── card.tsx                  # Cards
│       ├── dialog.tsx                # Modais
│       ├── calendar.tsx              # Calendário
│       ├── input.tsx                 # Campos de texto
│       ├── label.tsx                 # Labels
│       ├── badge.tsx                 # Etiquetas
│       ├── tabs.tsx                  # Abas
│       └── ... (outros componentes)
│
├── 📁 styles/
│   └── 📄 globals.css                # Estilos globais e variáveis CSS
│
├── 📄 DOCUMENTACAO.md                # 📖 Documentação completa
├── 📄 GUIA_RAPIDO.md                 # ⚡ Guia rápido de referência
├── 📄 BANCO_DE_DADOS.md              # 💾 Tudo sobre dados
└── 📄 ESTRUTURA_PROJETO.md           # 📂 Este arquivo
```

---

## 🔄 Fluxo de Dados Entre Componentes

```
                    ┌─────────────┐
                    │   App.tsx   │
                    │  (Estado)   │
                    └──────┬──────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
        ▼                  ▼                  ▼
    ┌────────┐        ┌────────┐        ┌────────┐
    │ Header │        │  Main  │        │ Footer │
    └────────┘        └───┬────┘        └────────┘
                          │
        ┌─────────────────┼─────────────────┐
        │                 │                 │
        ▼                 ▼                 ▼
   ┌─────────┐     ┌──────────────┐  ┌──────────┐
   │ HomePage│     │GameDetailsPage│  │Calendar  │
   │         │     │              │  │Page      │
   │ ┌─────┐ │     │  ┌────────┐  │  └──────────┘
   │ │Card │ │     │  │Carousel│  │
   │ └─────┘ │     │  └────────┘  │
   └─────────┘     └──────────────┘
        │
        ▼
   ┌─────────────────────┐
   │LoginDialog (Modal)  │
   └─────────────────────┘
```

---

## 📊 Hierarquia de Componentes Detalhada

### App.tsx (Raiz)
```
App
│
├─ Header
│  ├─ Button (Login/Logout)
│  └─ Button (Minhas Reservas)
│
├─ Main (renderização condicional)
│  │
│  ├─ HomePage (se currentPage === 'home')
│  │  └─ GameCard (x6 - um para cada jogo)
│  │     ├─ Card
│  │     │  ├─ ImageWithFallback
│  │     │  ├─ CardHeader
│  │     │  ├─ CardContent
│  │     │  └─ CardFooter
│  │     └─ Badge
│  │
│  ├─ GameDetailsPage (se currentPage === 'game')
│  │  ├─ ImageWithFallback (carousel)
│  │  ├─ Badge
│  │  ├─ Card (descrição)
│  │  ├─ Card (regras)
│  │  └─ Button (Alugar)
│  │
│  ├─ CalendarPage (se currentPage === 'calendar')
│  │  ├─ Card (resumo)
│  │  ├─ Calendar (seleção)
│  │  └─ Button (Confirmar)
│  │
│  └─ ReservationManagement (se currentPage === 'reservations')
│     ├─ Card (reserva ativa) (x N)
│     ├─ Card (reserva cancelada) (x N)
│     ├─ Dialog (editar)
│     │  └─ Calendar
│     └─ Dialog (cancelar)
│
├─ Footer
│  └─ (conteúdo estático)
│
└─ LoginDialog
   ├─ Tabs
   │  ├─ TabsContent (Login)
   │  │  ├─ Input (username)
   │  │  ├─ Input (password)
   │  │  └─ Button (Entrar)
   │  │
   │  └─ TabsContent (Registro)
   │     ├─ Input (username)
   │     ├─ Input (email)
   │     ├─ Input (password)
   │     ├─ Input (confirm password)
   │     └─ Button (Criar Conta)
   └─ Dialog
```

---

## 🎨 Componentes ShadCN Utilizados

### Componentes de Layout
- `Card` - Containers com bordas arredondadas
- `CardHeader` - Cabeçalho do card
- `CardContent` - Conteúdo do card
- `CardFooter` - Rodapé do card

### Componentes de Formulário
- `Input` - Campos de texto
- `Label` - Rótulos dos campos
- `Button` - Botões
- `Calendar` - Seletor de data

### Componentes de Navegação
- `Tabs` - Sistema de abas
- `TabsList` - Lista de abas
- `TabsContent` - Conteúdo de cada aba
- `TabsTrigger` - Botão de aba

### Componentes de Feedback
- `Dialog` - Modais/Pop-ups
- `DialogContent` - Conteúdo do modal
- `DialogHeader` - Cabeçalho do modal
- `DialogTitle` - Título do modal
- `DialogDescription` - Descrição do modal
- `DialogFooter` - Rodapé do modal
- `Badge` - Etiquetas/Tags

### Ícones (Lucide React)
- `Gamepad2` - Ícone de jogo
- `Mail` - Ícone de email
- `Phone` - Ícone de telefone
- `User` - Ícone de usuário
- `LogOut` - Ícone de sair
- `Calendar` - Ícone de calendário
- `ArrowLeft` - Seta para esquerda
- `Clock` - Ícone de relógio
- `Users` - Ícone de usuários
- `ChevronLeft/Right` - Setas do carousel
- `Edit2` - Ícone de editar
- `Trash2` - Ícone de lixeira
- `CheckCircle` - Ícone de check
- `XCircle` - Ícone de X

---

## 📦 Dependências do Projeto

### Principais
- `react` - Biblioteca principal
- `react-dom` - Renderização no DOM
- `typescript` - Tipagem estática
- `lucide-react` - Ícones

### UI Components (ShadCN)
Todos os componentes em `/components/ui/` são do ShadCN

### Estilos
- `tailwindcss` - Framework CSS
- Tailwind v4.0 (configuração em `globals.css`)

---

## 🗂️ Organização de Código

### Por Funcionalidade

**Autenticação:**
- `App.tsx` - Estado `isLoggedIn`
- `LoginDialog.tsx` - UI de login/registro
- `Header.tsx` - Botão de login/logout

**Catálogo de Jogos:**
- `App.tsx` - Array `gamesData`
- `HomePage.tsx` - Lista de jogos
- `GameCard.tsx` - Card individual
- `GameDetailsPage.tsx` - Detalhes

**Reservas:**
- `App.tsx` - Array `reservations`
- `CalendarPage.tsx` - Seleção de data
- `ReservationManagement.tsx` - CRUD de reservas

**Navegação:**
- `App.tsx` - Estado `currentPage`
- `Header.tsx` - Links de navegação

**Layout:**
- `Header.tsx` - Topo
- `Footer.tsx` - Rodapé
- `App.tsx` - Container principal

---

## 🔍 Onde Encontrar Cada Funcionalidade

### Preciso mudar a cor do botão
→ `/components/ui/button.tsx` ou adicionar className

### Preciso adicionar um jogo
→ `/App.tsx` linha 41, array `gamesData`

### Preciso mudar o layout do card
→ `/components/GameCard.tsx`

### Preciso adicionar um novo campo no formulário de login
→ `/components/LoginDialog.tsx`

### Preciso mudar as datas indisponíveis
→ `/components/CalendarPage.tsx` linha 43

### Preciso mudar as informações de contato
→ `/components/Footer.tsx`

### Preciso adicionar uma nova página
→ Criar componente novo e adicionar em `/App.tsx` no `<main>`

### Preciso mudar as cores do site
→ `/styles/globals.css` variáveis CSS

---

## 📏 Convenções de Código

### Nomenclatura de Arquivos
- Componentes: `PascalCase.tsx` (ex: `GameCard.tsx`)
- Arquivos de estilo: `kebab-case.css` (ex: `globals.css`)
- Documentação: `UPPERCASE.md` (ex: `README.md`)

### Nomenclatura de Variáveis
- Componentes: `PascalCase` (ex: `GameCard`)
- Variáveis: `camelCase` (ex: `selectedGame`)
- Constantes: `camelCase` ou `UPPER_CASE` (ex: `gamesData` ou `MAX_GAMES`)
- Interfaces: `PascalCase` (ex: `Game`, `Reservation`)

### Nomenclatura de Funções
- Handlers: `handle` + `Ação` (ex: `handleLogin`, `handleDateSelect`)
- Getters: `get` + `Nome` (ex: `getActiveReservations`)
- Setters: `set` + `Nome` (ex: `setSelectedGame`)
- Checkers: `is` + `Condição` (ex: `isDateInPast`)

### Estrutura de Componente

```typescript
// 1. Imports
import { useState } from 'react';
import { Button } from './ui/button';

// 2. Interfaces/Types
interface ComponentProps {
  name: string;
  onAction: () => void;
}

// 3. Componente
export function Component({ name, onAction }: ComponentProps) {
  // 4. Estados
  const [value, setValue] = useState('');
  
  // 5. Funções
  const handleClick = () => {
    // lógica
  };
  
  // 6. Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
}
```

---

## 🎯 Padrões de Design Utilizados

### 1. Component Composition
Componentes pequenos que se combinam para formar maiores

```
HomePage
  └─ GameCard (usado 6x)
```

### 2. Props Drilling
Dados passados do pai para filhos

```
App → GameDetailsPage → Button
```

### 3. Controlled Components
Formulários controlados pelo React

```typescript
<Input 
  value={username} 
  onChange={(e) => setUsername(e.target.value)}
/>
```

### 4. Conditional Rendering
Mostra/esconde baseado em condições

```typescript
{isLoggedIn && <Button>Sair</Button>}
```

### 5. Lift State Up
Estado compartilhado fica no componente pai comum

```
App (tem reservations)
  ├─ CalendarPage (usa para criar)
  └─ ReservationManagement (usa para listar)
```

---

## 📱 Responsividade

### Breakpoints (Tailwind)

- **Mobile**: < 640px
- **Tablet (md)**: 640px - 768px
- **Desktop (lg)**: 768px - 1024px
- **Large Desktop (xl)**: > 1024px

### Classes Responsivas Usadas

```css
/* Mobile first - uma coluna */
grid-cols-1

/* Tablet - duas colunas */
md:grid-cols-2

/* Desktop - três colunas */
lg:grid-cols-3
```

---

## 🚀 Performance

### Otimizações Implementadas

✅ Key única em listas (previne re-renders)
✅ Componentes funcionais (mais leves)
✅ useState ao invés de state complexo
✅ Lazy loading de imagens (ImageWithFallback)

### Otimizações Possíveis (Futuro)

- [ ] React.memo para componentes puros
- [ ] useMemo para cálculos pesados
- [ ] useCallback para funções
- [ ] Code splitting (React.lazy)
- [ ] Virtual scrolling para listas grandes

---

## 🧪 Como Testar Mudanças

1. **Faça uma mudança pequena**
2. **Salve o arquivo** (Ctrl+S)
3. **Veja o resultado** (hot reload automático)
4. **Se deu erro**: Olhe o console (F12)
5. **Se funcionou**: Commite (Git) antes de continuar

### Exemplo de Teste

```typescript
// Mudança: Adicionar um novo jogo
// Arquivo: App.tsx
// Linha: ~240 (final do array gamesData)

// Adicione:
{
  id: '7',
  name: 'Teste',
  category: 'Teste',
  summary: 'Jogo de teste',
  price: 10,
  images: ['https://via.placeholder.com/300'],
  description: 'Descrição teste',
  howToPlay: 'Como jogar teste',
  rules: ['Regra 1'],
  players: '1-2',
  duration: '10min'
}

// Salve e veja se aparece na home
```

---

## 📖 Próximos Passos

1. Leia a `DOCUMENTACAO.md` completa
2. Explore cada arquivo começando por `App.tsx`
3. Faça pequenas mudanças para entender
4. Leia `BANCO_DE_DADOS.md` se quiser persistência
5. Consulte `GUIA_RAPIDO.md` para referência rápida

---

**Boa sorte com o projeto! 🎮**
