function Busca({busca, setBusca }) {

  return (
    <div className="Busca">
        <h2>Pesquisa: </h2>
        
        <input type="text" value = {busca} onChange={(e) => setBusca(e.target.value)} placeholder="Digite para pesquisar"/>
    </div>
  )
}

export default Busca