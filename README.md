# 🎓 Catálogo de Cursos Interativos

Aplicativo mobile desenvolvido em **React Native com Expo**, aplicando os conceitos de **arquitetura componentizada**, **comunicação via Props** (Pai → Filho e Filho → Pai), **gerenciamento de estado (`useState`)** e **renderização de listas (`FlatList` e `ScrollView`)**.

---

## 📱 Demonstração (Telas do Projeto)

| Tela Inicial (Todos os Cursos) | Filtro por Categoria e Matrícula Ativa |
| :---: | :---: |
| <img src="./screenshots/tela-inicial.jpg" alt="Tela Inicial do Catálogo de Cursos" width="300" /> | <img src="./screenshots/filtro-e-matricula.png" alt="Filtro Mobile e Curso Matriculado" width="300" /> |

---

## ✨ Funcionalidades

- **Cabeçalho com Contador Dinâmico (`HeaderCatalogo`):** Exibe o título do catálogo e um badge numérico no canto superior direito que atualiza em tempo real conforme o aluno realiza ou cancela matrículas.
- **Filtro Horizontal de Categorias (`FiltroCategoria`):** Barra de chips clicáveis dentro de um `ScrollView` horizontal (`Todos`, `Mobile`, `Back-end`, `Dados`, `Infraestrutura`) com destaque visual na categoria ativa.
- **Cards de Cursos Interativos (`CursoCard`):**
  - Exibe categoria, nível, carga horária, título, descrição, instrutor e total de vagas disponíveis.
  - Ao clicar em **"Garantir Vaga"**, o card recebe destaque com borda verde (`#10B981`), subtrai `1` da quantidade de vagas disponíveis e altera o botão para **"✓ Matriculado (Toque para cancelar)"**.
  - Permite cancelar a matrícula a qualquer momento clicando novamente no botão.

---

## 📂 Estrutura de Pastas

```text
├── App.js
├── screenshots/
│   ├── tela-inicial.jpg
│   └── filtro-e-matricula.png
└── src/
    ├── data/
    │   └── cursos.js
    └── components/
        ├── HeaderCatalogo.js
        ├── FiltroCategoria.js
        └── CursoCard.js
```

---

## 🚀 Tecnologias Utilizadas

- [React Native](https://reactnative.dev/) (`0.76.5`)
- [Expo](https://expo.dev/) (`~52.0.0`)
- [React](https://react.dev/) (`18.3.1`)

---

## 🛠️ Como Executar o Projeto Passo a Passo

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado na máquina
- Aplicativo **Expo Go** instalado no celular (Android ou iOS) ou um **Emulador Android/iOS** configurado no computador

### 1. Clonar o repositório
```bash
git clone https://github.com/Lucas-Quandt/Cat-logo_Cursos_Interativos_Mobile.git
cd Cat-logo_Cursos_Interativos_Mobile
```

### 2. Instalar as dependências
```bash
npm install
```

### 3. Iniciar o servidor do Expo
```bash
npx expo start
```

### 4. Abrir o aplicativo
- **No celular físico:** Abra o aplicativo **Expo Go** (Android) ou a **Câmera** (iPhone) e escaneie o QR Code exibido no terminal (certifique-se de que o celular e o computador estejam na mesma rede Wi-Fi, ou utilize `npx expo start --tunnel`).
- **No Emulador Android:** Pressione a tecla **`a`** no terminal.
- **No Navegador Web:** Pressione a tecla **`w`** no terminal.
