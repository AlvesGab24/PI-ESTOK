document.getElementById('open-form-btn').addEventListener('click', function() {
    const form = document.getElementById('item-form');
    form.style.display = form.style.display === 'none' || form.style.display === '' ? 'flex' : 'none';
});

document.getElementById('item-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const item = document.getElementById('item').value;
    const cor = document.getElementById('cor').value;
    const quantidade = document.getElementById('quantidade').value;
    const marca = document.getElementById('marca').value;
    const tamanho = document.getElementById('tamanho').value;
    const valorCusto = document.getElementById('valor-custo').value;
    const valorVenda = document.getElementById('valor-venda').value;
    const vendidas = document.getElementById('vendidas').value;
    const itemList = document.getElementById('item-list');

    if (item && cor && quantidade && marca && tamanho && valorCusto && valorVenda && vendidas) {
        const li = document.createElement('li');
        const itemDetails = document.createElement('div');
        itemDetails.classList.add('item-details');
        itemDetails.innerHTML = `<strong>${item}</strong><span>R$ ${valorVenda} - Vendidas: ${vendidas}</span>`;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Excluir';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', function() {
            itemList.removeChild(li);
        });
        li.appendChild(itemDetails);
        li.appendChild(deleteBtn);
        itemList.appendChild(li);

        li.addEventListener('click', function() {
            alert(`Item: ${item}\nCor: ${cor}\nQuantidade: ${quantidade}\nMarca: ${marca}\nTamanho: ${tamanho}\nValor de custo: R$ ${valorCusto}\nValor de venda: R$ ${valorVenda}\nVendidas: ${vendidas}`);
        });

        document.getElementById('item-form').reset();
        document.getElementById('item-form').style.display = 'none';
    }
});

document.getElementById('search').addEventListener('input', function() {
    const searchValue = this.value.toLowerCase();
    const items = document.querySelectorAll('#item-list li');
    items.forEach(function(item) {
        const itemName = item.querySelector('strong').textContent.toLowerCase();
        if (itemName.includes(searchValue)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});
