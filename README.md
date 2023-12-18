# LInklab Test Client

https://linklab-test-client.vercel.app/

## Pré-requisitos
- Node.js instalado
- npm (Node Package Manager) instalado

## Instalação
1. Clone este repositório: `git clone https://github.com/angelomarques/linklab-test-client`
2. Acesse o diretório do projeto: `cd linklab-test-client`
3. Instale as dependências: `npm install`

## Configuração
1. Duplique o arquivo `.env.example` e renomeie para `.env`
2. Preencha as variáveis de ambiente no arquivo `.env` conforme necessário
3. use `http://localhost:3001/api/` como valor de `NEXT_PUBLIC_API_URL` no `.env` se estiver rodando a API localmente ou use `https://linklab-test-server.onrender.com/api/` caso queira usar a API com o link de produção 

## Execução
Execute o seguinte comando para iniciar a aplicação:

```bash
npm run dev
