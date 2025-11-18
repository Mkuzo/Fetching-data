function bg(){
    const div1 = document.getElementById("imageContainer");
    fetch("https://picsum.photos/v2/list?limit=10")
    .then(function(response){
        return response.json()
    })
    .then(function(response2){
        response2.forEach(function(r){
            const div = document.createElement("div");
            div.classList.add("image-card");
            const image = document.createElement("img");
            image.style.borderRadius = "10px"
            image.src = r.download_url
            div.appendChild(image);
            div1.appendChild(div);
        });
        console.log(response2);
    })
}
bg()