# dotChallenge


## 1. História do Usuário
   
   Como usuário do site da Amazon, quero pesquisar por notebooks na barra de busca, para visualizar e comparar opções disponíveis para compra.


## 2. Critérios de Aceite
   
   O campo de busca deve permitir a entrada do termo "Notebook".
   
   Ao clicar no botão de pesquisa, deve exibir os resultados relacionados.
   
   A página de resultados deve exibir:
   
     -> Lista de notebooks com imagem, título, preço e avaliações.
     -> Filtros relevantes, como marca, preço e avaliações.
     -> O termo pesquisado deve aparecer no campo de busca após a execução.


## 3. Casos de Teste
   **Funcionais:**

     -> Verificar se o campo de busca está visível na página inicial.
     -> Testar se é possível digitar "notebook" no campo de busca.
     -> Garantir que o botão de busca executa a pesquisa.
     -> Validar que os resultados contêm itens relacionados a "notebook".
     -> Verificar se o termo pesquisado aparece no campo de busca na página de resultados.


   **Negativo:**

     -> Testar o comportamento com um termo inválido (ex.: "ZXCVBNM") 
     -> Verificar se a busca não retorna um objeto buscado anteriormente.


## 4. Estimativa de Tempo e Cálculo

**Estimativa para Execução Manual:**
  > Casos Funcionais (5 casos, 1 min cada): 5 minutos
  > Casos Negativos (2 casos, 1 min cada): 2 minutos

**Estimativa para Automação:**
  > Configuração inicial do projeto Cypress: 30 minutos

**Desenvolvimento dos testes automatizados:**
  > 7 testes (15 minutos por teste): 1 hora e 45 minutos

**Configuração do pipeline: 30 minutos**

**Total automação: 2 horas e 22 minutos**


   ## Pré-requisitos

   Antes de começar, certifique-se de ter o seguinte instalado:

   - [Node.js](https://nodejs.org/) (v14 ou superior)
   - [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js)


   ## Instalação

   1. **Clone o repositório**

      > git clone https://github.com/jaiirsilva/dotChallenge

   2. **Instale as dependências**

      Isso instalará o Cypress e outras dependências listadas no package.json.
      > npm install

      Instale o Cypress como dependência de desenvolvimento:
      > npm install cypress --save-dev
  
