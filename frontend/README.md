# Ale Hotéis - Frontend

Página web para mostrar com imagens os serviços, quartos, praia, piscina, bares, comidas e todas as comodidades que o Ale Hotéis oferece aos seus hóspedes.

## Tecnologias

- React 18.3.1
- TypeScript 5.6.3
- Vite 5.4.11
- React Router DOM 6.26.2
- TailwindCSS 3.4.14
- TanStack Query 5.59.20
- Axios 1.7.7

## Estrutura do Projeto

```
src/
├── app/                    # Configuração da aplicação
│   ├── App.tsx            # Componente raiz
│   ├── main.tsx           # Entry point
│   ├── providers.tsx      # Providers globais
│   └── router.tsx         # Configuração de rotas
├── pages/                 # Páginas da aplicação
│   ├── layouts/          # Layouts compartilhados
│   ├── Home/             # Página inicial
│   └── NotFound/         # Página 404
├── core/                  # Componentes e utilitários globais
│   ├── components/       # Componentes reutilizáveis
│   ├── constants/        # Constantes da aplicação
│   ├── lib/              # Configurações de bibliotecas
│   └── utils/            # Funções utilitárias
├── domain/               # Domínios de negócio (a serem implementados)
└── assets/               # Recursos estáticos
    └── styles/           # Estilos globais
```

## Instalação

```bash
npm install
```

## Configuração

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_API_URL=http://localhost:4000
VITE_API_VERSION=v1
VITE_API_TIMEOUT=30000
```

## Desenvolvimento

```bash
npm run dev
```

Acesse: http://localhost:3000

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Funcionalidades

### Showcase Digital Completo
- Galeria de imagens em alta resolução
- Detalhamento de acomodações
- Visualização de áreas de lazer
- Apresentação de restaurantes e bares
- Listagem de serviços
- Navegação intuitiva e responsiva

## Próximos Passos

1. Implementar páginas de quartos
2. Criar galeria de imagens
3. Adicionar página de serviços
4. Implementar formulário de contato
5. Integrar sistema de reservas

## Padrões de Código

- TypeScript strict mode habilitado
- Componentes funcionais com hooks
- Lazy loading de páginas
- Separação clara de responsabilidades
- Documentação JSDoc completa

## Licença

Proprietary - Ale Hotéis