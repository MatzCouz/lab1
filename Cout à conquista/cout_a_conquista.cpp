#include <iostream>
#include <bits/stdc++.h>
#include <stdbool.h>
#include <algorithm>

using namespace std;

int main() {
  int x, linha, coluna;
  cin >> x >> linha >> coluna;

  int matriz[linha][coluna];

  for(int i=0; i<linha; i++)
    for(int j=0; j<coluna; j++)
      cin >> matriz[i][j];

  for(int i=0; i<coluna; i++){
    int matrizAux[20], contador=0, j=0;

    while(j != linha){

      bool ultimaPos = false;

      if(matriz[j][i]==x || j==linha-1){

        if(matriz[j][i] != x && j==linha-1){
            matrizAux[contador] = matriz[j][i];
            contador++;
            ultimaPos=true;
        }

        sort(matrizAux, matrizAux + contador);

        int auxPos=0;
        if(!ultimaPos){
            for(int w=j-contador; w<j; w++){
              matriz[w][i] = matrizAux[auxPos];
              matrizAux[auxPos] = 0;
              auxPos++;
            }
        }else{
            for(int w=j-contador+1; w<=j; w++){
              matriz[w][i] = matrizAux[auxPos];
              matrizAux[auxPos] = 0;
              auxPos++;
            }
        }

        contador = 0;

      }else{
        matrizAux[contador] = matriz[j][i];
        contador++;
      }

      j++;

    }

  }

  for(int i=0; i<linha; i++){
    for(int j=0; j<coluna; j++){
      if(j == coluna-1)
        cout << matriz[i][j];
      else
        cout << matriz[i][j] << " ";
    }
    cout << endl;
  }

  return 0;
}

/*
teste 1:
    entrada:
        2
        4 4
        10 22 1 3
        4  3 5 2
        1  1  1 1
        2  1  4  2
    saída:
        1 1 1 3
        4 1 1 2
        10 3 4 1
        2 22 5 2
teste 2:
    entrada:
        1
        5  5
        2 3 4 5 2
        5 2 4 4 1
        1 1 1 2 1
        1 1 2 5 7
        2 3 6 8 7
    saída:

        2 2 4 2 2
        5 3 4 4 1
        1 1 1 5 1
        1 1 2 5 7
        2 3 6 8 7
teste 3:
    entrada:
        1
        4 3
        5 4 7
        2 9 3
        8 3 6
        3 5 4

    saída:
        2 3 3
        3 4 4
        5 5 6
        8 9 7

teste 4:
    entrada:
        3
        1 5
        1 2 3 5 4
    saída:
        1 2 3 5 4

teste 5:
    entrada:
        1
        5 3
        10 10 10
        9 9 9
        8 8 8
        7 7 7
        6 6 6
    saída:
        6 6 6
        7 7 7
        8 8 8
        9 9 9
        10 10 10

teste 6:
    entrada:
        1
        19 1
        5
        3
        4
        2
        1
        3
        2
        1
        2
        3
        1
        9
        5
        2
        3
        4
        1
        1
        1
    saída:
        2
        3
        4
        5
        1
        2
        3
        1
        2
        3
        1
        2
        3
        4
        5
        9
        1
        1
        1





*/
