# next-app-form-cnpj

## Descrição

Este projeto é uma aplicação Next.js focada em consultar e validar CNPJ (Cadastro Nacional da Pessoa Jurídica), oferecendo um formulário moderno, rápido e fácil de usar. Ideal para projetos que necessitam de validação de dados empresariais ou integração com APIs públicas de informações cadastrais.

## Tecnologias Utilizadas

- **Framework:** [Next.js](https://nextjs.org/) (React)
- **Linguagem:** TypeScript ou JavaScript moderno (ES6+)
- **Estilização:** CSS Modules, Styled Components ou Tailwind CSS (personalize conforme o projeto)
- **Validação de Formulário:** Yup, Zod, React Hook Form (opcional)
- **API de Consulta:** Integração com API pública de CNPJ (ex: ReceitaWS, BrasilAPI ou similar)
- **Testes:** Jest, React Testing Library
- **Deploy:** Vercel, Netlify, ou hospedagem própria

## Estrutura de Pastas Sugerida

```
src/
├── components/     # Componentes reutilizáveis (FormCNPJ, ResultCard, etc)
├── pages/          # Páginas da aplicação (index, api, etc)
├── services/       # Serviços de API e utilitários de consulta
├── styles/         # Estilos globais ou customizados
├── utils/          # Funções auxiliares (ex: validação de CNPJ)
└── tests/          # Testes unitários e de integração
```

## Como rodar localmente

1. **Pré-requisitos**
   - Node.js v18+ instalado
   - npm ou yarn

2. **Instalação**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Execução em desenvolvimento**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```
   Acesse [http://localhost:3000](http://localhost:3000) no navegador.

4. **Testes**
   ```bash
   npm test
   # ou
   yarn test
   ```

## Funcionalidades

- Formulário para consulta e validação de CNPJ
- Integração com API pública para retorno de dados cadastrais
- Exibição de dados da empresa consultada
- Validação e feedback em tempo real no formulário
- Layout responsivo e acessível
- Possibilidade de expandir para múltiplos tipos de consulta (CPF, IE, etc)

## Deploy

- Recomenda-se o deploy na [Vercel](https://vercel.com/) (plataforma oficial do Next.js), mas pode ser hospedado em qualquer serviço compatível.
- Consulte a [documentação de deploy do Next.js](https://nextjs.org/docs/deployment) para detalhes.

## Contribuição

1. Faça um fork deste repositório
2. Crie uma branch para sua feature (`git checkout -b minha-feature`)
3. Commit suas alterações (`git commit -am 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin minha-feature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a licença MIT.

---

> Dúvidas, sugestões ou encontrou algum problema? Abra uma Issue ou contribua enviando um Pull Request!