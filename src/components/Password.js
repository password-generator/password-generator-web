import React from 'react';

export default class Password extends React.Component {
    // construtor com o que vai usar na página //
    constructor(props) {

        super(props);

        /* propriedades que deseja armazenar da página
           como se fosse variáveis, mas dentro de um objeto */
        this.state = {
	    password: undefined,
            password_lenght: 6,
            poke_names: true,
            uppercase: false,
            lowercase: false,
            numbers: true,
            symbols: false
        };

        // como se fosse uma função de onchance comum do HTML //
        this.handleChange = this.handleChange.bind(this);

    }

    // aqui vai a lógica da página, suas funções //

    // função onChange, ativada quando muda algo no input ou quando o botão é clicado //
    handleChange(event) {
        /* pega o valor que foi recebido no input e seta no estado (state) la em cima
           como são vários valores é preciso de um if verificando o id */
        let id = event.target.id;
	if (id === 'buttom_generate') {
 	    this.setState({ password: this.generatePassword() })
	}
        if (id === 'number_password_lenght') {
            this.setState({ password_lenght: event.target.value });
        }
	if (id === 'check_poke_names') {
	    this.setState({ poke_names: event.target.checked });
        }
	if (id === 'check_uppercase') {
	    this.setState({ uppercase: event.target.checked });
	}
        if (id === 'check_lowercase') {
            this.setState({ lowercase: event.target.checked });
        }
        if (id === 'check_numbers') {
            this.setState({ numbers: event.target.checked });
        }
        if (id === 'check_symbols') {
            this.setState({ symbols: event.target.checked });
        }
    };

    // função generatePassword, ativada pelo handleChange ao clicar no botão //
    generatePassword() {
	if (Number(this.state.password_lenght > 20 || this.state.password_lenght < 6)) {
	    alert('Invalid password lenght!')
	    return undefined
	}
        return 'password'
    };

    // aqui ele vai renderizar os elementos do "HTML" //
    render() {
        return (
            <div>
                <h2>Password Generator</h2>
		<p>Password: {this.state.password}</p>
                <div>
                    <div>
                        <label>Password lenght</label>
                        <input type="number" id="number_password_lenght" value={this.state.password_lenght} min="6" max="20" onChange={this.handleChange}/>
                    </div>

                    <div>
                        <label>Include pokemon custom name</label>
                        <input type="checkbox" id="check_poke_names" value={this.state.poke_names} defaultChecked={true} onChange={this.handleChange}/>
                    </div>

                    <div>
                        <label>Include uppercase letters</label>
                        <input type="checkbox" id="check_uppercase" value={this.state.uppercase} onChange={this.handleChange}/>
                    </div>

                    <div>
                        <label>Include lowercase letters</label>
                        <input type="checkbox" id="check_lowercase" value={this.state.lowercase} onChange={this.handleChange}/>
                    </div>

                    <div>
                        <label>Include numbers</label>
                        <input type="checkbox" id="check_numbers" value={this.state.numbers} onChange={this.handleChange}/>
                    </div>

                    <div>
                        <label>Include symbols</label>
                        <input type="checkbox" id="check_symbols" value={this.state.symbols} onChange={this.handleChange}/>
                    </div>
                </div>

                <button id="buttom_generate" onClick={this.handleChange}>
                    Generate password
                </button>
            </div>

        );
    }
}
