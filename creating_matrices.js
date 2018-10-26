document.getElementById('newMatrix').onclick = valuePull;

function valuePull() {
    var widthMatrix = +document.getElementById('widthMatrix').value;
    var heightMatrix = +document.getElementById('heightMatrix').value;
    var messageError = validateNumber(widthMatrix, heightMatrix);
    if(messageError !== false) {
        document.getElementById('matrixWrite').innerHTML = messageError;
    } else {
        generatorMatrix(widthMatrix, heightMatrix);
    }

}

function validateNumber(valueWidth, valueHeight) {
    if(isNaN(valueWidth)){
        return 'Введите число в ширину';
    } else if(isNaN(valueHeight)) {
        return 'Введите число в высоту';
    } else if(valueWidth <=0 || valueWidth > 40) {
        return 'Введите ширину не меньше 1 и не больше 40';
    } else if(valueHeight <=0 || valueHeight > 40) {
        return 'Введите высоту не меньше 1 и не больше 40';
    }
    return false;
}

function generatorMatrix(valueWidth, valueHeight) {
    var resultGeneratorMatrix = '<table>\n';
    for(i=1; i<=valueHeight; i++){
        resultGeneratorMatrix += '<tr>\n';
        for(j=1; j <= valueWidth; j++){
            resultGeneratorMatrix += '<td id="' + i + '_' + j + '">0</td>\n';
        }
        resultGeneratorMatrix += '</tr>\n';
    }
    resultGeneratorMatrix += '</table>\n';
    document.getElementById('matrixWrite').innerHTML = resultGeneratorMatrix;
}