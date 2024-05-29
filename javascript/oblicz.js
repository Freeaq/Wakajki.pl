document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var liczbaOsob = parseInt(document.getElementById('liczba-osob').value);
    var liczbaDni = parseInt(document.getElementById('liczba-dni').value);
    var sezon = document.getElementById('sezon').value;
    var inneKoszty = parseFloat(document.getElementById('inne-koszty').value) || 0;
    var klimatyczna = 0;

    if (liczbaDni < 1) {
        document.getElementById('result').innerHTML = "<h3>Liczba dni pobytu musi być większa niż 0</h3>";
        return;  
    }

    var cenaNoclegu;
    if (sezon === "niski") {
        cenaNoclegu = 100; 
        klimatyczna = 150;
    } else if (sezon === "średni") {
        cenaNoclegu = 150; 
        klimatyczna = 200;
    } else if (sezon === "wysoki") {
        cenaNoclegu = 200; 
        klimatyczna = 250;
    }
    
    var kosztNoclegu = (liczbaOsob * liczbaDni * cenaNoclegu) + klimatyczna;

    var dodatkoweOpłaty = 0;

    var calkowityKoszt = kosztNoclegu + inneKoszty + dodatkoweOpłaty;
    
    document.getElementById('result').innerHTML = "<h3>Calkowity dodatkowy koszt: " + calkowityKoszt.toFixed(2) + " PLN</h3>";
});