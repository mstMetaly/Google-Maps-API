fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyCdGYCiuK7C2i7wUNZCtccjxUhtuhTYskE`)
.then(response => response.json())
.then(locationData => {
    if (locationData.results.length > 0) {
        const addressComponents = locationData.results[0].address_components;
        let city = "Unknown", district = "Unknown", region = "Unknown", country = "Unknown";

        addressComponents.forEach(component => {
            if (component.types.includes("locality")) {
                city = component.long_name;
            }
            if (component.types.includes("administrative_area_level_2")) {
                district = component.long_name;
            }
            if (component.types.includes("administrative_area_level_1")) {
                region = component.long_name;
            }
            if (component.types.includes("country")) {
                country = component.long_name;
            }
        });

        console.log("City:", city);
        console.log("District:", district);
        console.log("Region:", region);
        console.log("Country:", country);
        console.log("Latitude:", latitude);
        console.log("Longitude:", longitude);

        document.getElementById("status").innerText =
            `City: ${city}, District: ${district}, Region: ${region}, Country: ${country}`;
    } else {
        console.error("No location details found");
    }
})
.catch(error => console.error("Google Reverse Geocoding API error:", error));

