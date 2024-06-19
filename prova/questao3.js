let valores = [1, 3, 7, 8, 3, 5, 3, 0]
cont = 0
for (let i = 0; i < 9; i++) {
    if (valores[i] == 3) {
        cont++
    }
}
alert(`O número 3 aparece ${cont} vezes`)