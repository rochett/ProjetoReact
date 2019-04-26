# REACT BASE
Projeto base para criação de novos projeto em react. Utiliza o create-react-app que é um CLI react.

------

# [REACT-BASE](../README.md)
Arquitetura de diretórios:
Na pasta templates/
possui os componentes visuais do Bootstrap, Ex.

- *Head:* Navbar com seus menus.
- *Foot:* Rodapé com o nome da empresa.
- *Index:* que junta todos os componentes.

```
ENG_RT_REACT-BASE/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.png
    css/
      bootstrap-theme.min.css
      bootstrap.min.css
      font-awesome.min.css
    font/
      fontawesome-webfont.eot
      fontawesome-webfont.svg
      fontawesome-webfont.ttf
      fontawesome-webfont.woff
      fontawesome-webfont.woff2
      Fontawesome.otf
      glyphicons-halflings-regular.eot
      glyphicons-halflings-regular.svg
      glyphicons-halflings-regular.ttf
      glyphicons-halflings-regular.woff
      glyphicons-halflings-regular.woff2
    images/
      favicon.png
      logo-pmenos-branca.png
      logo-pmenos.png
  src/
    actions/
      index.js
    components/
    containers/
      DevTools.js
    reducers/
      index.js
      status.js
      usuario.js
    sagas/
      index.js
      usuario.js
    store/
      configureStore.dev.js
      configureStore.js
      configureStore.prod.js
    templates/
      footer.js
      header.js
      index.js
      login.js
      page-welcome.js
      status.js
    App.css
    App.js
    App.dev.js
    App.prod.js
    App.test.js
    Ultil.js
    index.css
    index.js
    logo.svg
```

Foi instalado o componente DevTools que facilita no desenvolvimento, mostrando o conteúdo da store

## Visão Geral da Arquitetura

**Ambiente de Desenvolvimento**
- *Tipo:* Frontend
- *Plataforma:* Web
- *Linguagem:* Javascript
- *Framework:* React, React-Redux, Redux e Saga
- 

**Roteiro de Deploy**  
- *Novo*: 
```
    npm run build
```
*Vai ser gerada uma pasta build, essa pasta deve ser compactada e enviada para o servidor.*
- *Atualização*:
```
    npm run build
```
*Vai ser gerada uma pasta build, essa pasta deve ser compactada e enviada para o servidor.*


.