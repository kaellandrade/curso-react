import React from 'react'

export default props => {
    const minIdade = 50;
    const maxIdade = 70;
    const gerarIdade = () => parseInt(Math.random() * (maxIdade - minIdade) + minIdade);
    const gerarNerd = () => Math.random() > 0.5;
    
    return (
        <div>
            <div>
                <div>
                    Filho
                </div>
                <button onClick={e => { props.quandoClicar('João', gerarIdade(), gerarNerd()) }
                }>Fornecer Informações</button>
            </div>
        </div>
    )
}