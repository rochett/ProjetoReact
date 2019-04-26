# Abrir Chamado na central
Foi criada um pacote em React para automatizar a abertura de chamado em caso de erros.

## no projeto novo.
Comece por baixar o pacote:
```js
    npm install -s --registry=http://nexusdev.pmenos.com.br:8081/repository/npm-hosted/pmenos-react-central/-/pmenos-react-central-1.0.2.tgz
```

importe a classe Central no footer ou header:
```js
    import Central from 'pmenos-react-central';
    import { INIT_CENTRAL } from 'pmenos-react-central/dist/reducers/central'
```

e adicione em componentWillMount um dispatch para iniciar o sistema.
```js
    componentWillMount() {
        this.props.dispatch({
            type: INIT_CENTRAL,
            payload: {
                sistema: 'ProjetoBase',
                diretoria: 'ENGENHARIA',
                funcao: ''
            }
        });
    }
```
e adicione no Render() o código:
```js
    <Central
        dispatch={dispatch}
        exibirConfirmacao={confirm}
        sistema={sistema}
        funcao={funcao}
        diretoria={diretoria}
        obs={obs}
        usuario={usuario}
        url={API_CENTRAL}
    />
```

no reducer adicione o importe:
```js
    import central from 'pmenos-react-central/dist/reducers/central'
```
e use:

```js
const storeApp = combineReducers({
    central
});
```
