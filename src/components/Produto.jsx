import React from "react";

const Produto = ({produto}) => {
    const [produtoFav, setProdutoFav] = React.useState(null);
    // useEffect para executar apenas uma vez, sem dependência, após o click do botão e realizar um fetch
    React.useEffect(() => {
        if( produto !== null) {
            fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
            .then((response) => response.json())
            .then(responseJson => setProdutoFav(responseJson));
        }
        
    },[produto]);
    
    if(produtoFav !== null) {
        return (
            <div>
                <h1>{produtoFav.nome}</h1>
                <p>{produtoFav.preco}</p>
            </div>
        );
    } else {
        return null;
    }
}

export default Produto;