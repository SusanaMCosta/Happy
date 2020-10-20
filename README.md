# Happy

> Equipe: Projeto desenvolvido por 4 entusiastas do desenvolvimento: Isaac Ribeiro, Samuel Brito, Susana Moreira e Tamires Ariane. 

*O projeto desenvolvido é o proposto pela [NextLevelWeek#3](https://nextlevelweek.com/?utm_source=convertkit&utm_medium=email&utm_campaign=NLW3+Workshops&utm_term=Leads+OmniStack&utm_content=Workshop+5) da Rocketseat.* 

## Versão Web

![Happy.gif](https://media.giphy.com/media/JAwSpBWaquHNFGhsJQ/giphy.gif)

## Versão Mobile



## Informações

O Happy é uma aplicação que conecta pessoas à orfanatos/instituições que cuidam de outras pessoas. Para visualizar onde esses orfanatos se localizam e quais estão mais perto de sua localização, basta clicar no botão no canto inferior a direita da tela inicial; a partir daí, o usuário é direcionado para um mapa contendo as localizações dos orfanatos, sinalizadas com um marcador com a logo da aplicação. Uma das facilidades do Happy, é que ele permite que o usuário cadastre novas instituições, bastando clicar no botão que também se localiza na parte inferior a direita da página.  

## Ferramentas

![ferramentas.png](https://github.com/SusanaMCosta/Happy/blob/main/fer.png)

## Instalação e Start

Cada parte do projeto tem suas dependências e é necessário instalá-las individualmente antes da execução. Para isso, certifique-se de que tenha o [NPM](https://www.npmjs.com/) ou o [YARN](https://yarnpkg.com/) instalado em seu ambiente, além, é claro, o repositório clonado em seu ambiente.

Clone o repositório com:

```sh
git clone https://github.com/SusanaMCosta/Happy.git
```
As demonstrações utilizam YARN por padronização, mas, caso use NPM, basta substituir onde estiver escrito ```yarn``` por ```npm```.

**Instalando dependências do projeto web:**

```sh
cd happy/web
yarn install
```
Para executar o projeto web completo é necessário ter um token de autenticação da API do Mapbox. Acesse sua conta no site e crie um token para ser utilizado no projeto. Com o token em mãos, crie um arquivo ```.env``` e coloque seu token como valor da chave ```REACT_APP_MAPBOX_TOKEN```.

Exemplo:
```sh
REACT_APP_MAPBOX_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Agora starte o projeto em seu ambiente com:
```
yarn start
```

Acesse: ```http://127.0.0.1:3000/``` para visualizar.

**Instalando dependências do projeto backend:**
```
cd happy/backend
yarn install
```

Para executar o projeto **backend** é necessário criar o banco de dados com todas as tabelas utilizadas, para isso, use no diretório correspondente:
```
yarn typeorm migration:run
yarn dev
```

Acesse: ```http://127.0.0.1:3333/``` para visualizar.
