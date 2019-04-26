import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import Table from './table';
import Select from 'react-select';

class PageWelcome extends Component {

    state = {
        characters: []
    };    

    handleOpen = () => {
        const { dispatch } = this.props;
        dispatch({ type: 'GET_TESTE', payload: { objeto: 'testando123' }});
    }
        
    render() {

        var anosCombo = [];
        var mesesCombo = [];
        var data = new Date();
        var anoAtual = data.getFullYear();  
        var coReg = 0;        

        while (coReg <=10) {
            anosCombo.push({ label: anoAtual - coReg, value: anoAtual - coReg });
            coReg++
        }

        coReg = 1;

        while (coReg <= 12) {
            mesesCombo.push({ label: coReg, value: coReg });
            coReg++
        }        

        const { characters } = this.state;
        return (
            <div className="row">
                <div className="col-md-12">
                    <h2>Integração COSMOS/SAP</h2>

                    <div className="row col-md-12">                        
                        <h4>Período</h4>
                        <hr />                        
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <label for="exampleFormControlInput1">Ano</label>
                            <Select options={anosCombo} />
                        </div>

                        <div className="col-md-6">
                            <label for="exampleFormControlInput1">Mês</label>
                            <Select options={mesesCombo} />
                        </div>
                    </div>  

                    <div className="row col-md-12">
                        <h4>Transações</h4>
                        <hr />
                    </div>

                    <div className="row">
                        <div className="col-md-3">
                            <input class="form-check-input" type="checkbox" id="inlineFormCheck" />
                            <label class="form-check-label" for="inlineFormCheck">
                                &nbsp;Compras CD
                            </label>
                        </div>
                        <div className="col-md-3">
                            <input class="form-check-input" type="checkbox" id="inlineFormCheck" />
                            <label class="form-check-label" for="inlineFormCheck">
                                &nbsp;Compras Loja
                            </label>
                        </div>
                        <div className="col-md-3">
                            <input class="form-check-input" type="checkbox" id="inlineFormCheck" />
                            <label class="form-check-label" for="inlineFormCheck">
                                &nbsp;Trans.CD/Loja
                            </label>
                        </div>
                        <div className="col-md-3">
                            <input class="form-check-input" type="checkbox" id="inlineFormCheck" />
                            <label class="form-check-label" for="inlineFormCheck">
                                &nbsp;Dev.Loja/CD
                            </label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3">
                            <input class="form-check-input" type="checkbox" id="inlineFormCheck" />
                            <label class="form-check-label" for="inlineFormCheck">
                                &nbsp;Compras CD
                            </label>
                        </div>
                        <div className="col-md-3">
                            <input class="form-check-input" type="checkbox" id="inlineFormCheck" />
                            <label class="form-check-label" for="inlineFormCheck">
                                &nbsp;Compras Loja
                            </label>
                        </div>
                        <div className="col-md-3">
                            <input class="form-check-input" type="checkbox" id="inlineFormCheck" />
                            <label class="form-check-label" for="inlineFormCheck">
                                &nbsp;Trans.CD/Loja
                            </label>
                        </div>
                        <div className="col-md-3">
                            <input class="form-check-input" type="checkbox" id="inlineFormCheck" />
                            <label class="form-check-label" for="inlineFormCheck">
                                &nbsp;Dev.Loja/CD
                            </label>
                        </div>
                    </div>

                    <div className="row col-md-12">
                        <h4>Resultado Leitura</h4>
                        <hr />
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <Table
                                characterData={characters}                               
                            />
                        </div>
                    </div>                      
                                
                    <Button 
                        bsStyle="warning"
                        onClick={this.handleOpen}
                    >Clique aqui para testar chamado!</Button>
                </div>
            </div>
        );
    }
}

export default connect()(PageWelcome);
