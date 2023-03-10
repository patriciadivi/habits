<div align="center">
<h1 fontsize="80px">Bem vindo ao repositório Habits! 📋</h1>
  </br>
  <img src="https://gist.githubusercontent.com/patriciadivi/003fab0e7834070b1f225aae4645d776/raw/a3dacca628b16eb8207a60bceb3c9e8178c30cf6/habitsCompleted.svg" />
  
  <h4 align="center"> 
	🚧  Habits ♻️ Em Desenvolvimento 🚀 🚧
  </h4>
  <p align="center">
   • <a href="#-sobre-o-projeto">Sobre o projeto</a> •
   <a href="#-projeto-em-sua-maquina">Projeto em sua maquina</a> •
   <a href="#-como-executar-o-projeto">Como executar o projeto</a> •
   <a href="#-tecnologias">Tecnologias</a> •
  </p>
 
  
 <div align="left">

  ## 💻 Sobre o projeto
  <h3>
    O projeto tem a função de organizar e controlar os hábitos diários criados pelos <br>
    usuários para auxiliar no resultado final de seus objetivos.
  </h3>
 
  </br>
  
  ## 🔗 Projeto em sua maquina
  ```Bash

  > 1 - Clone este repositório
    
  # Abra o seu TERMINAL e digite o comando abaixo.
  $ git clone git@github.com:patriciadivi/habits.git

  # Acesse a pasta do projeto no terminal/cmd
  $ cd habits

  # Caso tenha o editor de codigo(VSCode) digite o comando abaixo.
  $ code .
    - OBS: Caso não tenha, acesse a seção `Como executar o projeto` através do índice e realize o download.

  ```
  
<details align="left">
	<summary>
		<h1>🚨</h1><strong>Caso não queria subir esse projeto para o seu GitHub, 'IGNORE' os proximos passos dessa seção.</strong><h1>🚨</h1> 
	</summary>
	<br />
	
```Bash
> 2 - Criando uma repositório no seu GitHub
		# Abra seu GitHub
		- Crie um `novo repositório`.
```

<div align="center">
	<img src="https://user-images.githubusercontent.com/38478917/188983072-db5702fb-bb5d-4835-9338-d0a0bb981741.png"/>
</div>
<br />
	
```bash
	
> Defina um `nome` ao seu `repositório` e aperte o botão `crie o repositório`.
	
```

<br />

<div align="center">
	<img src="https://user-images.githubusercontent.com/38478917/188986397-3f3177d7-9d13-414b-9b2b-089c3719e771.png"/>
	<img src="https://user-images.githubusercontent.com/38478917/188987212-0ba26086-f06e-49a6-aaf9-0c7b1f9ed0c0.png"/>
</div>
<br />
	
```bash
> 3 - Vá até a aba do seu repositório criado

 # Encontre o campo abaixo, deixe a guia aberta pois, vamos usa-la no 'PASSO 5'.
```
	
<br />

<div align="center">
	<img src="https://user-images.githubusercontent.com/38478917/188980734-6f857914-9c4a-4597-80f4-e40a55171343.png"/>
</div>
<br />
	
```bash
> 4 - Adicione as mudanças ao _stage_ do Git e faça um `commit`

 # Voltei ao seu terminal.
 # Verifique que as mudanças ainda não estão no _stage_ digite o comando abaixo.
  # Exemplo:
   $ `git status` (devem aparecer listadas as novas alterações em vermelho)
 # Adicione o arquivo alterado, realizado no 'PASSO 3' ao stage do Git
   $ `git add .` (adicionando todas as mudanças - que estavam em vermelho - ao stage do Git)
   $ `git status` (devem aparecer listadas as novas alterações em verde)
 # Faça seus `commit`
  # Exemplo:
   $ `git commit -m "feat:  Iniciando novo projeto 🚀" `.
   $ `git status` (deve aparecer uma mensagem tipo nothing to commit )

> 5 - Adicione o projeto local ao seu repositório criado no `PASSO 2`.
	
 # Adicione o projeto local ao seu repositório criado no 'PASSO 3'.
  # Rode os comando abaixo, de acordo com a sua GUIA mostrada no 'PASSO 3'.
  # 1° comando. Exemplo:
   $ `git remote add origin git@github.com:patriciadivi/repositorioTeste.git`.
  # 2° comando. Exemplo:
   $ `git branch -M main`.
  # 3° comando. Exemplo:
   $ `git push -u origin main`.
	
` AGORA É SÓ ATUALIZAR A PÁGINA E SER FELIZ `😊🎉
	
```

<br />
	
</details>
  
  </br>
  
  ## 🚀 Como executar o projeto

  Este projeto é divido em três partes:
  1. Backend (pasta server) 
  2. Frontend (pasta web)
  3. Mobile (pasta mobile)

  💡Tanto o Frontend quanto o Mobile precisam que o Backend esteja sendo executado para funcionar.

  ### Pré-requisitos

  Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
  [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
  Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)
  
  
  <details align="left">
    <summary><h2>🎲</h2> <strong>Rodando o Backend (servidor)</strong></summary>

  ```bash

  > 1 - Na raiz do projeto execute os comandos abaixo: 
   # Vá para a pasta server
    $ cd server

  > 2 - Instale as dependências
    $ npm install

  > 3 - Execute a aplicação em modo de desenvolvimento
    $ npm run dev

  # O servidor inciará na porta:3333 - acesse http://localhost:3333 

  ```
<h4>Caso queira acessar a API do projeto click no botão abaixo</h4>
<a href="https://insomnia.rest/run/?label=Habits%20API&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fpatriciadivi%2Fhabits%2Fmain%2Fserver%2FInsomniaAPI_habits.json" target="_blank">
  <img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia">
</a>
  </details>
  
 <details align="left">
    <summary><h2>👩🏻‍💻</h2> <strong>Frontend (pasta web)</strong></summary>

 ```bash

  > 1 - Na raiz do projeto execute os comandos abaixo: 
   # Vá para a pasta web
    $ cd web

  > 2 - Instale as dependências
    $ npm install

  > 3 - Execute a aplicação em modo de desenvolvimento
    $ npm run dev

  # O servidor web inciará na porta:5173 - acesse http://localhost:5173/

 ``` 
	
 </details>
  <details align="left">
    <summary><h2>📱</h2><strong> Mobile (pasta mobile)</strong></summary>
	
<div>
	<p>> Antes de começar, você vai precisar ter instalado em sua máquina a seguinte ferramenta:
		<a href="https://developer.android.com/studio">Android Studio</a></br>
		> Você precisará realizar a configuração do emulador Android Studio(esse passo só será realizado uma vez) acesso o link com todo o 
		<a href="https://react-native.rocketseat.dev/virtual-devices/android-emulator/">passo à passo</a>
	</p>

</div>
<br />


 ```bash

 > 1 - Na raiz do projeto execute os comandos abaixo: 
	# Vá para a pasta mobile
	 $ cd mobile

 > 2 - Instale as dependências
	 $ npm install

 > 3 - Execute a aplicação em modo de desenvolvimento
	 $ npx expo start
	 
 > 4 - No terminal aparecerá um menu com algumas opções, entre elas
  `Press a │ open Android`, como mostrada na imagem abaixo,
  digite o comando ele abrirá o emulador(android studio).
	 $ a
	 
 > 5 - Ainda nas opções do terminal, vamos localizar o seu `localhost`,
  pois iremos altera-lo no codigo, na `imagem` abaixo você pode 
	encontra-los com uma seta idicativa na cor `ROXA`
	# Exemplo:
	 `› Opening exp://192.168.11.5:19000 on Pixel_4_API_31`
	Vamos copiar apenas os numero antes dos dois pontos ` : `
	# Exemplo:
	 `192.168.11.5`
  
 > 6 - Agora iremos acessar o arquivo `axios.ts`, para alterar o `localhost`
   realizado no `PASSO 5` que está localizado `mobile\src\lib\axios.ts`,
	 caso queira acompanhar o caminho, a `imagem` abaixo repesenta o mesmo 
	 caminho descrito acima nas setas indicativas na cor ´VERDE´.
	 
 > 7 - Agora com o arquivo `axios.ts` aberto, vamos alterar os numeros do 
   `localhost` copiados no `PASSO 5`, localize a chave `baseURL` dentro do 
	 arquivo `axios.ts` e cole os numeros copiados.
	 # Exemplo:
	   `baseURL: http://`cole-aqui-os-numeros-copiados`:3333`
	 Caso queira localizar o local correto a `imagem` abaixo descreve através 
	 da seta indicativa na cor ´ROXA´, dentro do arquivo `axios.ts`.
	 Em seguida salve o arquivo, o emulador(androind studio) irá `recarregar o
	 app` automaticamente, ele deve ficar igual a `imagem` abaixo.
	 # OBS: Caso o `APP` não recarregue sozinho, realize o `PASSO 8`.
	 
 > 8 - Ainda nas opções do terminal podemos localiza a opção 
   `› Press r │ reload app`, ela realiza o `REFLASH` do APP, caso queira 
	 acompanhar, a `imagem` abaixo está repesentada na cor `LARANJA`.
	 Execute o comando abaixo.
	  $ r
 

 # O servidor web inciará na porta:19000 - acesse http://localhost:19000/

 ``` 
 
<div align="center">
	<img src="https://gist.githubusercontent.com/patriciadivi/e00d05a3eeed51a57112fcbabb3dfd0a/raw/9fbe03b9049ec4809dedc85e6bc702d791d9e261/exeMobile.svg"/>

</div>
 
	
</details>

</br>

  ## 🛠 Tecnologias
	
<p>As seguintes ferramentas foram usadas na construção do projeto:</p>
	
	
  <details>
   <summary>
		 <strong>🎲 Backend </strong>
		 (<a href="https://reactjs.org/docs/getting-started.html">React</a> +
		 <a href="https://www.typescriptlang.org/docs/">TypeScript</a>)
	</summary>
	</br>
		<ul>
		<li><a href="https://day.js.org/docs/en/installation/installation">Day.js</a></li>
		<li><a href="https://www.fastify.io/docs/latest/Guides/Getting-Started/">Fastify</a></li>
		<li><a href="https://mermaid.js.org/intro/">Mermaid</a></li>
		<li><a href="https://www.prisma.io/docs">Prisma ORM</a></li>
		<li><a href="https://www.sqlite.org/docs.html">SQLite</a></li>
		<li><a href="https://tsx-docs.vercel.app/configuration">TSX Docs</a></li>
		<li><a href="https://vee-validate.logaretm.com/v4/integrations/zod-schema-validation">Zod Schema</a></li>
		</ul>
  </details>
	
<details align="left">
    <summary><strong>👩🏻‍💻 <strong>Frontend</strong>
			(<a href="https://reactjs.org/docs/getting-started.html">React</a> +
		 	<a href="https://www.typescriptlang.org/docs/">TypeScript</a>)
		</summary>
		</br>
		<ul>
			<li><a href="https://github.com/postcss/autoprefixer">Autoprefixer</a></li>
			<li><a href="https://axios-http.com/docs/intro">Axios</a></li>
			<li><a href="https://openbase.com/js/clsx/documentation">Clsx</a></li>
			<li><a href="https://day.js.org/docs/en/installation/installation">Day.js</a></li>
			<li><a href="https://openbase.com/js/phosphor-react">Phosphor React</a></li>
			<li><a href="https://github.com/postcss/postcss#source-map-1">PostCSS</a></li>
			<li><a href="https://www.radix-ui.com/docs/primitives/overview/getting-started">Radix Ui</a></li>
			<li><a href="https://pt-br.reactjs.org/docs/react-dom.html">React DOM</a></li>
			<li><a href="https://tailwindcss.com/docs/installation">Tailwind CSS</a></li>
			<li><a href="https://vitejs.dev/guide/">Vite</a></li>
		</ul>
	</details>
	
 <details align="left">
   <summary><strong>📱 Mobile</strong>
	  (<a href="https://reactjs.org/docs/getting-started.html">React</a> +
		<a href="https://www.typescriptlang.org/docs/">TypeScript</a>)
	 </summary>
	 </br>
		<ul>
			<li><a href="https://axios-http.com/docs/intro">Axios</a></li>
			<li><a href="https://babeljs.io/docs/babel-core">Babel Core</a></li>
			<li><a href="https://openbase.com/js/clsx/documentation">Clsx</a></li>
			<li><a href="https://day.js.org/docs/en/installation/installation">Day.js</a></li>
			<li><a href="https://docs.expo.dev/">Expo</a></li>
			<li><a href="https://docs.expo.dev/guides/using-custom-fonts/">Expo Google Fonts</a></li>
			<li><a href="https://docs.expo.dev/versions/latest/sdk/status-bar/">Expo StatusBar</a></li>
			<li><a href="https://docs.expo.dev/guides/customizing-webpack/">Expo Webpack Config</a></li>
			<li><a href="https://www.nativewind.dev/quick-starts/expo">Nativewind</a></li>
			<li><a href="https://pt-br.reactjs.org/docs/react-dom.html">React DOM</a></li>
			<li><a href="https://reactnavigation.org/docs/getting-started/">React Navigation</a></li>
			<li><a href="https://reactnavigation.org/docs/stack-navigator/">React Navigation Stack </a></li>
			<li><a href="https://docs.expo.dev/versions/latest/sdk/safe-area-context/">React Native Safe Area Context</a></li>
			<li><a href="https://docs.expo.dev/versions/latest/sdk/screens/">React Native Screens</a></li>
			<li><a href="https://docs.expo.dev/versions/latest/sdk/svg/">React Native Svg</a></li>
			<li><a href="https://docs.expo.dev/versions/latest/sdk/webview/">React Native WebView</a></li>
			<li><a href="https://docs.expo.dev/versions/latest/sdk/reanimated/">React Native Reanimated</a></li>
			<li><a href="https://tailwindcss.com/docs/installation">Tailwind CSS</a></li>
			<li><a href="https://www.npmjs.com/package/@types/react">Types React</a></li>
			<li><a href="https://reactnavigation.org/docs/typescript/">Types React Native</a></li>
			<li><a href="https://github.com/kristerkari/react-native-svg-transformer">Types React Native Svg Transformer</a></li>
	
</ul>
 </details>
 </br>
 
<details align="left">
  <summary><strong>🏗️ <strong>Utilitários</strong></summary>
<ul>
<li>Commit: <a href="https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits">Conventional Commits</a></li>
<li>Editor: <a href="https://code.visualstudio.com/">Visual Studio Code</a></li>
<li>Extesões: <a href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss">Tailwind CSS IntelliSense</a></li>
<li>Fontes: <a href="https://fonts.google.com/specimen/Inter?query=inter">Inter</a></li>
<li>Teste de API: <a href="https://insomnia.rest/">Insomnia</a></li>
<li>Protótipo: <a href="https://www.figma.com/community/file/1195326661124171197">Figma → Protótipo (Habits)</a></li>
</ul>

</details>
	
 </div>
   
  ---
  ⌨️ com ❤️ por [Patricia Dias Viana](https://github.com/patriciadivi) 😊
</div>
