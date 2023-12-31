# Projeto Game: Detona Ralph 

Olá visitante, espero que estejas bem!!

Este repositório foi desenvolvido durante o bootcamp **Desenvolvimento de Jogos** da DIO em parceria com o iFood. Neste projeto, desenvolvi um game **Detona Ralph** utilizando as bases do frontend, JavaScript, CSS e HTML. Durante o desenvolvimento do projeto, utilizamos eventos JavaScript e manipulação de áudios nos browsers.

A baixo, deixo um resumo das aulas e dicas que aprendemos durante a jornada de estudos.

**Como Jogar:**

1. Use as setas direcionais para mover o personagem e a barra de espaço para interagir.

2. Divirta-se explorando e coletando moedas, mas fique atento aos inimigos!

_____________

### Índice

1. [Setup do Projeto](https://github.com/alinealien/projeto-detona-ralph#1-setup-do-projeto)

2. [Estilizando seu Projeto](https://github.com/alinealien/projeto-detona-ralph#2-estilizando-seu-projeto)

3. [Construindo HTML com o Emmet](https://github.com/alinealien/projeto-detona-ralph#3-construindo-html-com-o-emmet)

4. [Criando os Painéis Principais e Elementos CSS](https://github.com/alinealien/projeto-detona-ralph#4-criando-os-pain%C3%A9is-principais-e-elementos-css)

5. [Variáveis View e Values](https://github.com/alinealien/projeto-detona-ralph#5-vari%C3%A1veis-view-e-values)

6.  [Listener de Hitbox](https://github.com/alinealien/projeto-detona-ralph#6-listener-de-hitbox)

7. [Actions](https://github.com/alinealien/projeto-detona-ralph#7-actions)

8. [Áudios](https://github.com/alinealien/projeto-detona-ralph#8-%C3%A1udios)

   

_____________________

### 1. **Setup do Projeto**

Nosso setup inicia com a organização/criação das nossas pastas e arquivos, dessa forma, criamos:

1. Pasta Geral do Projeto, aqui denominamos de: **projeto-detona-ralph.**
2. Criamos nosso **index.html** [Arquivo de entrada].
3.  Dentro da pasta geral do projeto: **projeto-detona-ralph** -> criamos uma sub-pasta chamada **src** que conterá todas as outras partes do nosso código.
4. Criamos as sub-pastas dentro da pasta **src** -> Criamos uma pasta para os **audios**, **imagens**, **script** e **styles.**
5. Dentro da nossa pasta **styles**, criamos dois arquivos importantes: **reset.css** e **main.css**.
6. Dentro da nossa pasta **script**, criamos nosso arquivo **engine.js**.



**IDE utilizada:** VS.code

**Extensão utilizada:** Live Server - ritwickdey.LiveServer - v5.7.9

**Fonte utilizada:** https://fonts.google.com/specimen/Press+Start+2P



**ATENÇÃO:**

É importante criamos nossas pastas em um local adequado, pode ser na área de trabalho, em documentos ou em qualquer outro local de sua preferencia. Contando que facilite a sua manipulação, lembre-se que iremos subir nosso projeto no github, então, é importante que estejamos familiarizados com estruturas de pastas. 

Nomes e estruturas são particulares, deseja criar a estrutura das pastas e arquivos de outra forma? Tudo certo, também.

Detalhes dos arquivos criados foram adicionados em seus respectivos arquivos.  

*Em meu projeto a pasta **script** está no singular, o expert DIO, criou sua pasta no plural, sendo **scripts**. É bom ficar atento as nomenclaturas para não ocorrer divergências e/ou erros. 



__________________________

### 2. Estilizando seu Projeto

Na fase inicial da estilização, criamos algumas divs, sendo:

- container;
- menu;
- menu-time;
- menu-score;
- menu-lives;

Além de iniciarmos algumas definições no CSS em main. Também aprendemos alguns atalhos no VS Code que estão detalhados no código, mas deixo a baixo um breve resumo:

- **Atalho:** div.menu-time+div.menu-score+div.menu-lives: cria 3 divs automaticamente;
- **Atalho:** Alt + shift + seta para baixo: clona o h2;



_______________

### 3. Construindo HTML com o Emmet

Emmet é uma poderosa e eficiente ferramenta de produtividade para  desenvolvedores web que permite escrever código HTML e CSS de forma mais rápida e fácil.

No VS Code, o Emmet está integrado e pode ser facilmente usado para gerar código HTML e CSS de maneira mais rápida. Abaixo, deixo alguns tópicos que podem ajudar para tirar dúvidas e complementar :

1. **Ative o Emmet (se já não estiver ativado):** O Emmet geralmente já vem ativado por padrão no VS Code. No entanto, se você quiser verificar ou ativar manualmente, pode ir para "Configurações" (Preferences > Settings) e pesquisar por "Emmet". Certifique-se de que a opção "Emmet: Enabled" esteja marcada.
2. **Escrevendo abreviações:** O Emmet permite que você escreva abreviações e, em seguida, as expande em código HTML ou CSS completo. Por exemplo, você pode digitar `html:5` e, em seguida, pressionar a tecla "Tab" para expandi-la em um esqueleto básico de HTML5.
3. **Utilizando atalhos de expansão:** Existem muitos atalhos que você pode usar para gerar rapidamente código. Por exemplo:
   - `div` e, em seguida, "Tab" gerará `<div></div>`.
   - `ul>li*3` e, em seguida, "Tab" gerará uma lista não ordenada com três itens de lista.
   - `.classe` e, em seguida, "Tab" gerará uma div com a classe "classe".
   - `#id` e, em seguida, "Tab" gerará uma div com o ID "id".
4. **Aninhamento e seletores:** Emmet também suporta aninhamento e seletores. Por exemplo:
   - `ul>li.item$*3` e, em seguida, "Tab" criará uma lista não ordenada com três itens, cada um com a classe "item1", "item2" e "item3".
5. **Operações matemáticas:** Você pode realizar operações matemáticas nas abreviações. Por exemplo:
   - `div.item$*3>span{Item $}` e, em seguida, "Tab" criará três divs com classes "item1", "item2" e "item3", cada uma contendo um elemento `<span>` com texto "Item 1", "Item 2" e "Item 3", respectivamente.

Acima deixei alguns tópicos de resumo sobre o emmet, no entanto, em nosso projeto o expert utilizou alguns comandos específicos para facilitar a criação dos nossos **panel rows**, o que está detalhado no código do projeto, então, para mais detalhes do que foi implementado com o emmet no jogo as especificidades estão no código geral.

**-> Emmet Realizado:**  .panel-row>.square[id="0"]*3 

__________________

### 4. Criando os Painéis Principais e Elementos CSS

Nessas aulas, focamos em desenvolver nossos painéis no css. O detalhamento do que foi feito, está no código em questão. Também adicionamos as imagens e o áudio que será utilizado no projeto.

Um dica valiosa aprendida é a utilização da função `nth-child()` que é usada para selecionar elementos com base na sua posição em relação aos irmãos dentro de um elemento pai. Essa pseudo-classe permite que  você selecione elementos com base em uma fórmula matemática que  corresponde à posição do elemento filho em relação aos outros elementos  filhos do mesmo pai. Ela é frequentemente usada em combinação com  seletores de tipo ou classe para aplicar estilos a elementos específicos de um conjunto de elementos.

A sintaxe básica da pseudo-classe `nth-child()` é a seguinte:

`:nth-child(an + b)`

- `n` é um número inteiro que representa a posição do elemento em relação aos irmãos.
- `a` e `b` são números inteiros opcionais que você pode usar em sua fórmula.

Aqui estão alguns exemplos de como você pode usar `nth-child()`:

1. Selecione todos os elementos filhos pares de um elemento pai:

```
:nth-child(even)
```

2. Selecione todos os elementos filhos ímpares de um elemento pai:

```
:nth-child(odd)
```

3. Selecione o terceiro elemento filho de um elemento pai:

```
:nth-child(3)
```

4. Selecione todos os elementos filhos a cada 2 elementos, começando pelo segundo elemento:

```
:nth-child(2n+2)
```

5. Selecione todos os elementos filhos a cada 3 elementos, começando pelo quarto elemento:

```
:nth-child(3n+4)
```



________

### 5. Variáveis View e Values

Nos jogos existem muitas variáveis e quando observamos a mecânica por trás deles, observamos que muitas dessas mecânicas são semelhantes independente do jogo, **embora**, haja particularidades específicas como comentado no exemplo da aula(botão acelerar).

**Variáveis View:**

Manipulação visual.

São elementos cruciais nos jogos que afetam a forma como os jogadores  percebem o ambiente virtual, incluindo gráficos, interface do usuário e  informações visuais que influenciam a jogabilidade.

**Variáveis Values:**

Variáveis para alterar elementos não visuais, apenas valores.

Essas variáveis representam números, pontuações e dados numéricos que  desempenham um papel vital no jogo, afetando o desempenho do jogador,  recompensas e progresso dentro do mundo virtual.



____________

### 6. Listener de Hitbox

Um **listener de hitbox** no JavaScript é uma parte crucial do  desenvolvimento de jogos, pois permite que detectemos colisões ou interações entre elementos do jogo e uma região determinada (hitbox). As hitboxes são áreas invisíveis associadas a objetos do jogo, usadas para definir áreas de contato.

No jogo em desenvolvimento, utilizamos o Listener de Hitbox para quando o jogador clicar na tela ele guardar a ação e assim atribuir um valor a cada clique sob o Ralf. É bem interessante e os detalhes estão no código de como implementar o **addListenerHitBox**

Há... também adicionamos o **hitPosition** e **result** em **values**.

__________

### 7. Actions

Em desenvolvimento de jogos com JavaScript, as "actions" são programadas para permitir que personagens, objetos ou elementos do jogo realizem ações específicas. Essas ações podem incluir movimento, ataque, salto, interação com itens e outros comportamentos que tornam o jogo interativo e dinâmico.

As **"actions"** são geralmente acionadas em resposta a eventos, como pressionar uma tecla, clicar com o mouse ou receber um comando do jogador. Os desenvolvedores implementam lógica de programação para que, quando um evento ocorrer, o JavaScript execute a ação correspondente.

Por exemplo, ao pressionar a tecla de seta para a direita, um personagem pode realizar a "ação" de mover-se para a direita no jogo. Essa capacidade de controlar as ações dos personagens e objetos torna possível criar jogos envolventes e emocionantes.



____________

### 8. Áudios

No desenvolvimento web com JavaScript, é possível incorporar áudios para melhorar a experiência do usuário. Isso é especialmente relevante em jogos, onde os efeitos sonoros e a música de fundo desempenham um papel importante na imersão.

Para trabalhar com áudios em JavaScript, os desenvolvedores podem usar a API de Áudio do HTML5, que fornece métodos para carregar, reproduzir, pausar, parar e controlar o volume dos áudios. Eles podem incorporar arquivos de áudio em formatos como MP3, WAV ou Ogg.

As aplicações de áudio em jogos incluem a reprodução de trilhas sonoras, efeitos sonoros para eventos do jogo (como disparos ou colisões) e feedback auditivo para ações do jogador. A sincronização precisa do áudio com os eventos do jogo é fundamental para criar uma experiência de jogo envolvente.

