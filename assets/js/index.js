fetch('data/datos.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const tituloPagina = document.getElementById('titulo_pagina');
    tituloPagina.innerHTML = data.titulo_pagina;

    const productos = data.productos;
    console.log(productos);

    let productosHTML = '';
    productosHTML += '<div class="row">';

    for (let i = 0; i < productos.length; i++) {
      productosHTML += `
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
            <img src="${productos[i].imagenes[0]}" class="card-img-top" alt="Imagen del producto">
            <div class="card-body">
              <h5 class="card-title">${productos[i].nombre}</h5>
              <p class="card-text">${productos[i].descripcion}</p>
              <p class="card-text">Precio: $${productos[i].precio.toFixed(2)}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Ver detalles</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    productosHTML += '</div>';

    const productosElement = document.getElementById('tabla_productos');
    productosElement.innerHTML = productosHTML;
  });