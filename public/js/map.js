mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v12",
  center: listing.geometry.coordinates, // changing coordinates acc. to user details
  zoom: 9, // starting zoom
});

//DISPLAY MARKER ON MAP LOCATION
const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat(listing.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h4>${listing.title}</h4><p>Exact location Provided after Booking!</p>`
    )
  )
  .addTo(map);

//BELOW CODE IS TO DISPLAY LOGO INSTEAD OF MARKER ON MAP LOCATION

// map.on("load", () => {
//   map.loadImage("/images/airbnb_logo.jpg", (error, image) => {
//     if (error) throw error;

//     if (!map.hasImage("airbnb-logo")) {
//       map.addImage("airbnb-logo", image);
//     }

//     map.addSource("point", {
//       type: "geojson",
//       data: {
//         type: "FeatureCollection",
//         features: [
//           {
//             type: "Feature",
//             geometry: {
//               type: "Point",
//               coordinates: listing.geometry.coordinates, // <-- dynamic coords
//             },
//           },
//         ],
//       },
//     });

//     map.addLayer({
//       id: "custom-marker",
//       type: "symbol",
//       source: "point",
//       layout: {
//         "icon-image": "airbnb-logo",
//         "icon-size": 0.1, // adjust size as needed
//       },
//     });
//   });
// });
