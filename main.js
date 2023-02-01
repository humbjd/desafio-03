var listaFilmes = ['https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/96/07/36/20443914.jpg', 'https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/90/62/76/20105399.jpg',
                  'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/93/20/20120876.jpg',
                  'https://upload.wikimedia.org/wikipedia/pt/9/97/BackFuturePoster.jpg','https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/91/32/20224832.jpg', 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/72/73/89/20535463.jpg', 'https://br.web.img3.acsta.net/c_310_420/pictures/16/10/14/14/52/155667.jpg', 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/95/80/87/20428742.jpg', 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/05/56/20369174.jpg', 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/86/98/32/19870786.jpg', 'https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/90/95/85/20122112.jpg', 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/96/54/75/20474449.jpg', 'https://br.web.img3.acsta.net/c_310_420/pictures/15/05/14/21/14/504650.jpg', 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/76/72/20162489.jpg' ];



/*for (var i = 0; i < listaFilmes.length;  i++) {
  document.write('<img src=' + listaFilmes[i] + '>');
}
*/

var nomeFilmes = ['O Resgate do Soldado Ryan', 'Coração Valente', 'O Poderoso Chefão', 'De Volta para o Futuro', 'O Senhor dos Anéis', 'Star Wars - o Império Contra Ataca', 'Rogue One - Star Wars', 'O Predador', 'Jurassic Park', 'Batman- O Cavaleiro das Trevas', 'Curtindo a Vida Adoidado', 'Jumanji', 'Alien - O Oitavo Passageiro', 'Os Goonies']

var i = 0;

while (i < listaFilmes.length) {
  document.write (`<p id='final'> <img src='${listaFilmes[i]}'> ${nomeFilmes[i]}</p>`);
  i++
}