
let map
function initMap() {

    //Create the map on the div with id = map
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 51.2927, lng: -114.0134 },
        zoom: 8
    });
    // Set just one location

    /*
    //Set the marker for the location
    let marker = new google.maps.Marker({
        position: { lat: 51.2927, lng: -114.0134 },
        map: map,
        // icon: ''
    });
    //Set info window for the location
    let infowindow = new google.maps.InfoWindow({
        content: '<h5>Howdy yall</h5>'
    });

    //add a click event listener to display the pop up
    marker.addListener('click', () => {
        infowindow.open(map, marker);
    });
*/

    //If we want to set multiple locations
    // addMarker({ lat: 51.2927, lng: -114.0134 })
    // addMarker({ lat: 52.2690, lng: -113.8116 })
    // addMarker({ lat: 51.0447, lng: -114.0719 })

    let locations = [
        ['Airdrie', { lat: 51.2927, lng: -114.0134 }],
        ['Red Deer', { lat: 52.2690, lng: -113.8116 }],
        ['Calgary', { lat: 51.0447, lng: -114.0719 }],
        ['Cochrane', { lat: 51.1918, lng: -114.4667 }],
        // ['Long Beach', { lat: 33.770050, lng: -118.193739 }]
    ];

    // let infowindow = new google.maps.InfoWindow({});
    let marker;

    for (let count = 0; count < locations.length; count++) {
        addMarker(locations[count][1], locations[count][0])

        // google.maps.event.addListener(marker, 'click', (function (marker, count) {
        //     return function () {
        //         infowindow.setContent(locations[count][0]);
        //         infowindow.open(map, marker);
        //     }
        // })(marker, count));
    }
}

function addMarker(coords, title) {
    let marker = new google.maps.Marker({
        position: coords,
        map: map
    });

    //Set info window for the location
    let infowindow = new google.maps.InfoWindow({
        content: `<h5>${title}</h5>`
    });

    //add a click event listener to display the pop up
    marker.addListener('click', () => {
        infowindow.open(map, marker);
    });

    return marker
}
async function getCities() {
    // let url = 'https://leins-cities.herokuapp.com/';
    // let getProductList = await fetch(url + 'clear');
    // getProductList = await fetch(url + 'load');
    // getProductList = await fetch(url + 'all');
    // let allProductList = await getProductList.json();
    // console.log(allProductList)
    let url = 'https://127.0.0.1:3500/farmers';
    let getProductList = await fetch(url);
    let allProductList = await getProductList.json();
    console.log(allProductList)
}
// getCities()