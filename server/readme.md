# <p align="center">Pitu: Backend</p>

# Rotas da aplicação

<br>

## **Links**

### **`POST` - /links**

**Objetivo**: A rota deve ser capaz de criar um link encurtado.

**Formato**: A rota deve receber `url` dentro do corpo da requisição.

**Retorno**: Se bem sucedida, a rota retornará uma resposta do formato abaixo.

```json
{
  "id": "number",
  "url": "string",
  "url_code": "string",
  "hits": "number",
  "updatedAt": "Date",
  "createdAt": "Date"
}
```

### **`GET` - /links/:url_code**

**Objetivo**: A rota deve ser capaz de resgatar as informações necessárias para um redirecionamento e iteração no registro de acessos.

**Formato**: A rota deve receber `url_code` dentro dos parametros de rota da requisição.

**Retorno**: Se bem sucedida, a rota retornará uma resposta do formato abaixo.

```json
{
  "id": "number",
  "url": "string",
  "url_code": "string",
  "hits": "number", // atualizado +1
  "updatedAt": "Date",
  "createdAt": "Date"
}
```

### **`GET` - /links/:url_code/stats**

**Objetivo**: A rota deve ser capaz de resgatar as estatísticas de acesso da url, mas sem iterar nos acessos.

**Formato**: A rota deve receber `url_code` dentro dos parametros de rota da requisição.

**Retorno**: Se bem sucedida, a rota retornará uma resposta do formato abaixo.

```json
{
  "id": "number",
  "url": "string",
  "url_code": "string",
  "hits": "number",
  "updatedAt": "Date",
  "createdAt": "Date"
}
```
