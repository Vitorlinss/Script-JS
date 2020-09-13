function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anoMax = 1897
    var formAno = window.document.querySelector("input#textani")
    var result = window.document.querySelector("div#resultado")
    var anim = window.document.querySelector("div#nome")
    anim.innerHTML = ` `
    anim.style.textAlign ="center"
    var sin = window.document.querySelector("div#sino")
    sin.innerHTML = ` `
    sin.style.textAlign ="center"

    // Validação de campo. Se o valor declarado for igual a 0, ou a data declarada for maior que a atual, então print [ERROR]
    if(formAno.value.length == 0 || Number(formAno.value) > ano || Number(formAno.value) < anoMax) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        var fsex = window.document.getElementsByName("radsex")
        var idade = ano - Number(formAno.value)
        var gênero = ""
        var img = document.createElement("img") // Criamos um elemento img, e adicionamos um identificador (ID) "foto"//

        if(fsex[0].checked) {
            gênero = "Animes recomendados por meninos"
            if(idade >= 0 && idade <= 10) {
                // Criança
                img.setAttribute("src", "imgAnime/bokunohero.png")
                anim.innerHTML += `<h1>Boku no hero</h1>`
                sin.innerHTML += `<p class="lead">Tudo acontece num mundo onde diferente da maioria das historias o estranho é não ter nenhum super poder. Mais de 80% da população mundial nasce com habilidades e poderes especiais. Mas nosso protagonista Midoriya Izuku, pra sua profunda tristeza, faz parte dos 20% que não tem nenhum poder.</p>`
                
                } else if(idade <= 12){
                    // jovem
                    img.setAttribute("src","imgAnime/naruto.png")
                    anim.innerHTML += `<h1>Naruto</h1>`
                    sin.innerHTML += `<p class="lead">Naruto é um jovem órfão habitante da Vila da Folha que sonha em se tornar o quinto Hokage, o maior guerreiro e governante da vila. Ao se graduar como ninja, descobre que tem um demônio raposa selado dentro de si.</p>`
                }else if(idade < 14){
                    // pré adolescente
                    img.setAttribute("src","imgAnime/tokyo.png")
                    anim.innerHTML += `<h1>Tokyo Ghoul</h1>`
                    sin.innerHTML += `<p class="lead">A história de Tokyo Ghoul gira em torno de Ken Kaneki, um estudante que mal sobrevive a um encontro mortal com Rize Kamishiro, uma mulher que se revela um ghoul; ghoul são criaturas semelhantes a humanos que caçam e devoram carne humana </p>`
                }else if(idade < 18){
                    // Adolescente
                    img.setAttribute("src", "imgAnime/hunter.png")
                    anim.innerHTML += `<h1>Hunter x Hunter</h1>`
                    sin.innerHTML += `<p class="lead">A série conta a história de Gon Freecss, um garoto de 12 anos que pretende se tornar um Hunter. Contudo, ao contrário da maioria dos Hunters que procuram fama e dinheiro, o herói da história tem uma motivação maior para querer ser um caçador – encontrar seu pai – um dos mais famosos hunters do mundo.</p>`

                } else {
                    // Adulto
                    img.setAttribute("src", "imgAnime/thepromised.png")
                    anim.innerHTML += `<h1>Yakusoku no Neverland</h1>`
                    sin.innerHTML += `<p class="lead">Emma vive em um orfanato chamado Grace Field House junto com outras crianças. Duas delas são Norman e Ray que, com Emma, são os mais velhos. Os três sempre alcançam as pontuações mais altas em testes diários que precisam fazer. Todas as crianças são proibidas de sair para o mundo exterior, isso por que o orfanato é uma fazenda que produz carne humana de alta qualidade para demônios.</p>`
                }
                

                }else if (fsex[1].checked){
                gênero = "Animes recomendados por meninas"
                if(idade >= 0 && idade < 10){
                    // criança
                    img.setAttribute("src", "Public/imgAnime/madoka.png")
                    anim.innerHTML += `<h1>Madoka Magica</h1>`
                    sin.innerHTML += `<p class="lead">Madoka é uma garota comum que um dia teve um sonho estranho… ela viu uma garota lutando sozinha contra algo imenso, algo que claramente ela não poderia derrotar por si só. Para sua surpresa essa mesma garota é a nova aluna de sua classe, a misteriosa Homura Akemi</p>`

                }else if(idade < 12){
                    // jovem
                    img.setAttribute("src", "Public/imgAnime/kimetsu.png")
                    anim.innerHTML += `<h1>Kimetsu no Yaiba</h1>`
                    sin.innerHTML += `<p class="lead"> Kimetsu no Yaiba consiste na história de Tanjiro Kamado, um jovem que teve toda a família atacada por Onis. A história se passa no período Taisho, quando as capitais japonesas começavam a se desenvolver...`
                }else if(idade < 14){
                    // Adulto
                    img.setAttribute("src", "Public/imgAnime/sniper.png")
                    anim.innerHTML += `<h1>Sword Art Online</h1>`
                    sin.innerHTML += `<p class="lead"> Sword Art Online é centrado na saga de Kirito, jovem que ficou preso dentro do mundo do jogo que leva o mesmo nome do anime, por meio de um visor de realidade virtual. Lá ele conhece diversos aliados, como a espadachim Asuna, que se tornam aliados em sua jornada para conseguir deslogar do game – caso contrário, seu corpo no mundo real pode morrer de verdade, assim como o de outros jogadores.</p>`

                }else if(idade < 18){
                    // Adulto
                    img.setAttribute("src", "Public/imgAnime/kakegurui.png")
                    anim.innerHTML += `<h1>Kakegurui</h1>`
                    sin.innerHTML += `<p class="lead"> A história se passa em uma escola privada chamada Hyakkaou Private Academy aonde todos seus estudantes possuem um currículo um tanto quanto peculiar. Além de serem filhos de famílias absurdamente ricas, eles também adoram apostas. </p>`

                } else {
                    // idoso
                    img.setAttribute("src", "Public/imgAnime/atk.png")
                    anim.innerHTML += `<h1>Shingeki no Kyojin</h1>`
                    sin.innerHTML += `<p class="lead"> Há várias décadas, a humanidade foi quase exterminada pelo súbito aparecimento de seres humanoides conhecido como “titãs”, criaturas gigantescas e de inteligência aparentemente baixa, que devoram humanos por prazer. No entanto, um pequeno grupo de seres humanos sobreviveu no interior de uma cidade protegida por muralhas</p>`
                }

                } else if (fsex[2].checked) {
                gênero = "Filmes recomendados"
                if(idade >= 0 && idade < 10){
                // criança
                img.setAttribute("src", "Public/imgAnime/ponyo.png")
                anim.innerHTML += `<h1>Ponyo</h1>`
                sin.innerHTML += `<p class="lead"> O garoto Sousuke encontra um peixinho dourado preso em uma garrafa e decide libertá-lo, sem saber que se trata da deusa do mar Ponyo. Filha de um poderoso mago, ela se comove com a atitude do menino e usa a magia do pai para se transformar em humana. </p>`

                } else if(idade < 12){
                // jovem
                img.setAttribute("src", "Public/imgAnime/your.png")
                anim.innerHTML += `<h1>Kimi no na wa</h1>`
                sin.innerHTML += `<p class="lead"> Mitsuha é a filha do prefeito de uma pequena cidade, mas sonha em tentar a sorte em Tóquio. Taki trabalha em um restaurante em Tóquio e deseja largar o seu emprego. Os dois não se conhecem, mas estão conectados pelas imagens de seus sonhos. </p>`

                } else if(idade < 14){
                // Adulto
                img.setAttribute("src", "Public/imgAnime/vagalume.png")
                anim.innerHTML += `<h1>Hotaru no Haka</h1>`
                sin.innerHTML += `<p class="lead"> Após a morte da mãe num bombardeio americano e a convocação do pai para a Guerra, eles vão morar com alguns parentes. Insatisfeitos, saem da cidade e acabam num abrigo isolado na floresta, onde lutam contra a fome e as doenças e se divertem com as luzes dos vaga-lumes. </p>`
                

                } else if(idade < 18){
                // Adulto
                img.setAttribute("src", "Public/imgAnime/garden.png")
                anim.innerHTML += `<h1>The Garden of Words</h1>`
                sin.innerHTML += `<p class="lead"> Takao, que está treinando para ser sapateiro, matou aula e está desenhando sapatos em um jardim Japonês. Ele conhece uma misteriosa mulher, Yukino, que é mais velha do que ele. Então, sem marcar os horários, os dois começam a se ver periodicamente, mas somente em dias chuvosos. Eles aprofundam sua relação e se abrem um para o outro, mas o fim da temporada de chuva logo se aproxima… </p>`

                } else {
                // idoso
                img.setAttribute("src", "Public/imgAnime/made.png")
                anim.innerHTML += `<h1>Made in Abyss</h1>`
                sin.innerHTML += `<p class="lead"> A sequeência gira em torno de Riko e Reg, a primeira é uma órfã que sonha em alcançar o legado da mãe falecida e, o segundo, é um robô com passado misterioso que veio do fundo do Abismo e não tem quaisquer lembranças de seu passado. O Abismo é absurdamente fundo, com mais de 20.000 metros conhecidos e ainda sem nem sinal de final e, a depender do lugar, muda-se toda a biologia, relevo e clima, por isso ele foi divido em camadas e, quando mais se desce nestas camadas, as criaturas que vivem lá ficam mais espertas e perigosas são... </p>`
                }
            }
    
    result.style.textAlign ="center"
    result.innerHTML = `<p>Foi selecionada a opção "<strong>${gênero}</strong>", o sistema informou que o usuário possue idade equivalente a <strong>${idade}</strong> anos.</p>`
    result.appendChild(img)             // Propriedade utilizada para adicionar um elemento, ou seja fazer as imagens aparecerem

}
}

