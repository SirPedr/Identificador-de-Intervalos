# Identificador-de-Intervalos
Um script que consegue identificar o intervalo entre duas notas musicais

## O que é?
  Basicamente, esse script escrito em JavaScript consegue identificar a distância entre duas notas musicais numa tonalidade maior. Ele diz as notas que estão sendo comparadas, a distância em tons e a nomenclatura apropriada.
  
## Como Funciona?
  Primeiro, é bom saber que a escala (ou seja, uma sequência de notas) maior natural é composta pela "fórmula"
  
    Tom Tom Semitom Tom Tom Tom Semitom
 Ou seja, numa escala de Dó natural temos:
 
    Dó Ré Mi Fá Sol Lá Si Do
 O script usa essas distâncias (fixas em qualquer tonalidade maior natural) para determinar o intervalo. Ele possui um array de objetos, onde cada objeto é uma nota diferente (incluindo sustenidos), e possui as propriedades nota (que contém um caractere com o símbolo desta), a distancia em semitons (baseada na nota que está no índice 0, ou seja, no começo do array) e a nomenclatura do intervalo (Ex: terça maior). O usuário pode, claro, escolher a tonalidade desejada, e, quando o faz, a única coisa que muda nesse array de objetos é a posição do atributo 'nota', que se reorganiza de forma a manter a estrutura da escala.

#### A Fazer:
 - [x] Primeiro Commit
 - [ ] Acrescenter em tonalidades menores
 - [ ] Resolver o bug do 'select' (opções fantasma)
 
### Já testou? https://sirpedr.github.io/Identificador-de-Intervalos
