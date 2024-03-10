const produtos = [
    { imagem: 'produto1.jpg', descricao: 'Descrição do Produto 1' },
    { imagem: 'produto2.jpg', descricao: 'Descrição do Produto 2' },
    { imagem: 'produto3.jpg', descricao: 'Descrição do Produto 3' }
];

document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');

    produtos.forEach((produto, index) => {
        const item = document.createElement('div');
        item.classList.add('item');

        const image = document.createElement('img');
        image.src = produto.imagem;
        image.alt = 'Produto';

        const descricao = document.createElement('p');
        descricao.textContent = produto.descricao;
        descricao.contentEditable = true; // Permitir edição
        descricao.addEventListener('input', function() {
            produtos[index].descricao = descricao.textContent;
        });

        item.appendChild(image);
        item.appendChild(descricao);
        gallery.appendChild(item);
    });
});