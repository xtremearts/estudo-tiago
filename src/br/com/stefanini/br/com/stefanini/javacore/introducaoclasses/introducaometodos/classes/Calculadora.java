package br.com.stefanini.br.com.stefanini.javacore.introducaoclasses.introducaometodos.classes;

public class Calculadora {
    public int multiplicacao(int a, int b) {
        return a * b;
    }

    public int soma(int a, int b) {
        return a + b;
    }

    public float divisao(float a, float b) {
        return a / b;
    }

    public int subtracao(int a, int b) {
        return a - b;
    }


    public void alteraDoisNumeros(int num1, int num2){
        num1 = 30;
        num2 = 40;

        System.out.println("Dentro do altera dois números");
        System.out.println("num1 " + num1);
        System.out.println("num2 " + num2);
    }
}
