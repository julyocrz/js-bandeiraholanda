Cookies
The p5.js Editor uses cookies. Some are essential to the website functionality and allow you to manage an account and preferences. Others are not essential—they are used for analytics and allow us to learn more about our community. We never sell this data or use it for advertising. You can decide which cookies you would like to allow, and learn more in our Privacy Policy.


Allow All

Allow Essential
Arquivo
Editar
Esboço
Ajuda
Português
Olá, julyo.zampier!



Auto-atualizar

bandeira da holanda
por julyo.zampier



sketch.js
Salvo: 4 meses atrás
1
​
2
let retanguloX;
3
​
4
let retanguloY;
5
​
6
function setup() {
7
​
8
createCanvas(400, 300);
9
​
10
background("white");
11
​
12
retanguloX = [0, 0, 0];
13
​
14
retanguloY = [0, 100, 200];
15
​
16
}
17
​
18
function draw() {
19
​
20
noStroke();
21
​
22
fill("red");
23
​
24
rect(retanguloX[0], retanguloY[0], 450, 100); // primeiro retângulo
25
​
26
fill("white");
27
​
28
 rect(retanguloX[1], retanguloY[1], 450, 100); // segundo retângulo
29
​
30
​
31
fill("blue");
32
​
33
rect(retanguloX[2], retanguloY[2], 450, 100); // terceiro retângulo
34
​
35
}
36
​
Não há mensagens de Lint
Linha atual

Terminal
Limpar

​
Prévia

