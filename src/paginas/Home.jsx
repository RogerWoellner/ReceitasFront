function Home() {
  return (
    <div className="principal">
      <h3>Principais receitas</h3>
      <div id="container_receita">
      <div class="receita">
        <img id="img_receita" src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=789&q=80" alt="cake" />
        <p id="titulo_receita">Bolo de chocolate!</p>
        <a id="link_receita" href="/linhas/:id1">Receita completa!</a>
      </div>
      <div class="receita">
        <img id="img_receita" src="https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJyb3p8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60" alt="cake" />
        <p id="titulo_receita">Arroz!</p>
        <a id="link_receita" href="">Receita completa!</a>
      </div>
      <div class="receita">
        <img id="img_receita" src="https://static.itdg.com.br/images/1200-630/2755b43438b866d40744bf28ec93b4a0/146782-original.jpg" alt="cake" />
        <p id="titulo_receita">Feijão!</p>
        <a id="link_receita" href="">Receita completa!</a>
      </div>
      <div class="receita">
        <img id="img_receita" src="https://images.unsplash.com/photo-1600803734709-83f30a78e312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hY2FyciVDMyVBM28lMjBib2xvbmhlc2F8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="cake" />
        <p id="titulo_receita">Macarrão ao Molho Bolonhesa!</p>
        <a id="link_receita" href="">Receita completa!</a>
      </div>
      <div class="receita">
        <img id="img_receita" src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3VzaGl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="cake" />
        <p id="titulo_receita">Sushi!</p>
        <a id="link_receita" href="">Receita completa!</a>
      </div><div class="receita">
        <img id="img_receita" src="https://images.unsplash.com/photo-1624371414361-e670edf4898d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2h1cnJvc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="cake" />
        <p id="titulo_receita">Churros!</p>
        <a id="link_receita" href="">Receita completa!</a>
      </div>
      </div>
    </div>
  );
}

export default Home;
