# 💰 Conversor de Moedas

Este é um **Conversor de Moedas** desenvolvido utilizando **React (Frontend)** e **Node.js + Express + TypeScript (Backend)**. Ele permite converter valores entre diferentes moedas em tempo real, consumindo uma API externa para obter as taxas de câmbio atualizadas.

---

## 🚀 Tecnologias Utilizadas

### 📌 **Frontend**
- ⚛️ **React** (Create React App)
- 🔹 **Axios** (para requisições HTTP)
- 🎨 **CSS Puro** (sem Tailwind)
- ✅ **TypeScript**

### 📌 **Backend**
- 🚀 **Node.js + Express**
- 🔹 **TypeScript**
- 🌍 **Axios** (para consumir API de conversão)
- 🔐 **Dotenv** (para variáveis de ambiente)
- 🔓 **Cors** (para permitir comunicação com o frontend)

---

## 📅 Instalação e Execução

### 🖥 **1. Clonar o Repositório**
```bash
git clone https://github.com/SamuelLucasVieira/conversor-moedas.git
cd conversor-moedas
```

---

## 🏭 Backend (Servidor Node.js)

### 🔹 **1. Acesse a Pasta do Backend**
```bash
cd backend
```

### 🔹 **2. Instale as Dependências**
```bash
npm install
```

### 🔹 **3. Configure as Variáveis de Ambiente**
Crie um arquivo **`.env`** na raiz do backend e adicione:

```
PORT=5000
EXCHANGE_API_URL=https://api.exchangerate-api.com/v4/latest/
```

### 🔹 **4. Inicie o Servidor**
```bash
npm start
```
O backend estará rodando em **http://localhost:5000/**.

---

## 🎨 Frontend (Aplicação React)

### 🔹 **1. Acesse a Pasta do Frontend**
```bash
cd ../frontend
```

### 🔹 **2. Instale as Dependências**
```bash
npm install
```

### 🔹 **3. Configure a URL do Backend**
Crie um arquivo **`.env`** na raiz do frontend e adicione:

```
REACT_APP_API_URL=http://localhost:5000
```

### 🔹 **4. Inicie o Projeto**
```bash
npm start
```

O frontend estará rodando em **http://localhost:3000/**.

---

## 🛠 Endpoints da API

| Método | Rota       | Descrição |
|--------|-----------|-----------|
| GET    | `/convert?from=USD&to=EUR&amount=10` | Converte 10 USD para EUR |

📌 **Exemplo de Resposta da API:**
```json
{
  "from": "USD",
  "to": "EUR",
  "amount": 10,
  "convertedAmount": 9.35
}
```

---

## 📝 Como Funciona?
1. O usuário insere o valor e seleciona as moedas de origem e destino.
2. Ao clicar em **Converter**, o frontend envia uma requisição para o backend.
3. O backend consulta uma API de conversão de moedas e retorna o valor convertido.
4. O resultado é exibido na tela.

---

## 💎 Licença

Este projeto é open-source e pode ser utilizado para estudos e melhorias.  
Sinta-se à vontade para contribuir! 🚀

---

## 📌 Contato

Se tiver dúvidas ou sugestões, entre em contato:

📧 **Email:** samuellucasvieira.melo@gmail.com
🔗 **GitHub:** [seu-usuario](https://github.com/SamuelLucasVieira)  

---
🎉 **Agora você pode executar o projeto e começar a converter moedas!** 💰🚀