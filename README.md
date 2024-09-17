# 🚀 Node Proxy DB Manager

## 📖 Descrição :
O **Node Proxy DB Manager** é uma aplicação Node.js que atua como um proxy para acessar diferentes servidores de banco de dados PostgreSQL através do HAProxy. Ele gerencia permissões de acesso, permitindo que usuários autenticados acessem bancos de dados específicos com permissões definidas (leitura, escrita, etc.).

> 💡 **Nota**: Este projeto faz parte de um artigo pessoal em desenvolvimento no Medium, onde abordo a instalação e configuração de boxes com Vagrant e VirtualBox, incluindo a preparação completa do ambiente. O artigo está em progresso, e logo terá todos os detalhes necessários para a implementação.

## 🛠️ Configuração do Ambiente

### 1️⃣ Navegue até a raiz do projeto
``` 
cd /caminho/para/seu/projeto
```

### 2️⃣ Crie um arquivo .env a partir do .env.example
``` 
cp .env.example .env
``` 

### 3️⃣ Abra o arquivo .env com um editor de texto e preencha as variáveis necessárias
```
# ✏️ Exemplo: vim .env
# ✏️ Altere as variáveis conforme seu ambiente:
#    - DB_USER=
#    - DB_PASSWORD=
#    - DB_PORT=
#    - DB_DATABASE=
#    - PROXY_HOST= 
```

### 4️⃣ Instale as dependências do projeto
``` 
npm install
```

### 5️⃣ Adicione o .env ao .gitignore para evitar o envio de informações sensíveis ao repositório
``` 
echo ".env" >> .gitignore
```

### 6️⃣ Inicie a aplicação em modo de desenvolvimento (utilizando nodemon)
``` 
npm run dev
```

## 📝 Notas Adicionais

O arquivo **.env.example** contém as variáveis de ambiente necessárias para a aplicação. Use-o como um guia para configurar seu próprio .env.

**Modo de Desenvolvimento**: O comando `npm run dev` utiliza o nodemon para reiniciar a aplicação automaticamente em caso de mudanças no código.

## 🛡️ Segurança

Lembre-se de **NUNCA** compartilhar seu arquivo .env diretamente, pois ele pode conter informações sensíveis como senhas e chaves de acesso.



