const opinie = [
    { imie: "Anna" , nazwisko:'Kowalska' , opinia: "Bardzo zadowolona z usług.", ocenaJakość: 4, ocenaObsługa: 5, data: "2024-05-18"},
    { imie: "Krzysztof", nazwisko:'Nowicki' , opinia: "Profesjonalna obsługa, polecam!", ocenaJakość: 5, ocenaObsługa: 3, data: "2024-05-17"},
    { imie: "Ewa", nazwisko:'Kaczmarek' , opinia: "Wszystko na najwyższym poziomie.", ocenaJakość: 5, ocenaObsługa: 4 , data: "2024-05-15" },
    { imie: "Marek", nazwisko:'Lewandowski' , opinia: "Usługi na piątkę z plusem.", ocenaJakość: 5, ocenaObsługa: 5 , data: "2024-05-17"},
    { imie: "Dorota", nazwisko:'Wiśniewska' , opinia: "Bardzo miła obsługa.", ocenaJakość: 4, ocenaObsługa: 4 , data: "2024-05-11"},
    { imie: "Paweł", nazwisko:'Duda' , opinia: "Pełen profesjonalizm.", ocenaJakość: 5, ocenaObsługa: 4 , data: "2024-05-10"},
    { imie: "Magdalena", nazwisko:'Kowalczyk' , opinia: "Polecam każdemu!", ocenaJakość: 5, ocenaObsługa: 5 , data: "2024-05-14"},
    { imie: "Tomasz", nazwisko:'Mazur' , opinia: "Bardzo dobre doświadczenie.", ocenaJakość: 4, ocenaObsługa: 4 , data: "2024-05-12"},
];


function generuj_Tabele_Opinii() {
    const tabelaBody = document.querySelector('#Tabele_opini tbody');

    tabelaBody.innerHTML = '';

    opinie.forEach(opinia => {
        const wiersz = document.createElement('tr');

        const imieKomorka = document.createElement('td');
        imieKomorka.textContent = opinia.imie;

        const nazwiskoKomorka = document.createElement('td');
        nazwiskoKomorka.textContent = opinia.nazwisko;

        const opiniaKomorka = document.createElement('td');
        opiniaKomorka.textContent = opinia.opinia;

        const ocenaJakośćKomorka = document.createElement('td');
        ocenaJakośćKomorka.textContent = opinia.ocenaJakość;

        const ocenaObsługaKomorka = document.createElement('td');
        ocenaObsługaKomorka.textContent = opinia.ocenaObsługa;

        const dataKomorka = document.createElement('td');
        dataKomorka.textContent = opinia.data;

        wiersz.appendChild(imieKomorka);
        wiersz.appendChild(nazwiskoKomorka);
        wiersz.appendChild(opiniaKomorka);
        wiersz.appendChild(ocenaJakośćKomorka);
        wiersz.appendChild(ocenaObsługaKomorka);
        wiersz.appendChild(dataKomorka);

        tabelaBody.appendChild(wiersz);
    });
}



window.onload = function() {
    generuj_Tabele_Opinii();
};