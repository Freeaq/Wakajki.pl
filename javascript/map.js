let map;
let activeInfoWindow;

function initMap() {

    const mapOptions = {
        center: { lat: 52.2297, lng: 21.0122 }, 
        zoom: 6 
};


map = new google.maps.Map(document.getElementById('map'), mapOptions);

  
const locations = [
        {
            position: { lat: 54.175919, lng: 15.583267 }, 
            title: "Kołobrzeg",
            info: "Hotel 1",
            icon: "https://img.icons8.com/dusk/50/0000FF/home.png",
            price: "1500 PLN za tydzień",
            destination: "przegladaj1.html"
        },
        {
            position: { lat: 53.915749, lng: 14.284056 }, 
            title: "Świnoujście",
            info: "Hotel 2",
            icon: "https://img.icons8.com/dusk/50/0000FF/home.png",
            price: "1600 PLN za tydzień",
            destination: "przegladaj2.html"
            
        },
        {
            position: { lat: 54.51889, lng: 18.53188}, 
            title: "Gdynia",
            info: "Hotel 3",
            icon: "https://img.icons8.com/dusk/50/0000FF/home.png",
            price: "1700 PLN za tydzień",
            destination: "przegladaj3.html"
        },
        {
            position: { lat: 54.759159, lng: 18.508961 }, 
            title: "Władysławowo",
            info: "Hotel 4",
            icon: "https://img.icons8.com/dusk/50/0000FF/home.png",
            price: "1800 PLN za tydzień",
            destination: "przegladaj4.html"
        },
        {
            position: { lat: 54.605292441, lng: 18.802641934 }, 
            title: "Hel",
            info: "Hotel 5",
            icon: "https://img.icons8.com/dusk/50/0000FF/home.png",
            price: "1900 PLN za tydzień",
            destination: "przegladaj5.html"
        },
        {
            position: { lat: 54.753063, lng: 17.557011 }, 
            title: "Łeba",
            info: "Hotel 6",
            icon: "https://img.icons8.com/dusk/50/0000FF/home.png",
            price: "2500 PLN za tydzień",
            destination: "przegladaj6.html"
        }
];


locations.forEach((location) => {

    const marker = new google.maps.Marker({

        position: location.position,
        map: map,
        title: location.title,
        icon: {
            url: location.icon,
            scaledSize: new google.maps.Size(35, 35)
        },
        animation: google.maps.Animation.DROP
        
    });

    const infowindow = new google.maps.InfoWindow({

        content: `<div class="infowindow-content"><strong>${location.title}</strong><br>${location.info}<br><strong>Cena:</strong> ${location.price}</div>`

    });

    marker.addListener('click', () => {

        if (activeInfoWindow) {
            activeInfoWindow.close();
        }
        infowindow.open(map, marker);
        activeInfoWindow = infowindow;

    });

    marker.addListener('dblclick', () => {

        window.location.href = location.destination;

    });
});
}
