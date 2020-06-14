let imglist =document.getElementById("imglist")

function loadimg(){

    let title="Ying Wen is a PhD Student in the Department of Computer Science, University College London. His research interests include deep learning and deep reinforcement learning techniques for real-world scenarios, such as computational advertising, recommender systems, multi-agent system."
    for (let index = 1; index < 17; index++) {
        let cdiv=document.createElement("div")
        
        let cimg=document.createElement("img")
        cimg.className="img-item"
        

        cimg.src="./img/"+index+".jpg"
        cdiv.appendChild(cimg)
        // let cimg=cdiv.appendChild("img")
        
        console.log("./img/"+index+".jpg");
        
        let cp=document.createElement("p")
        cp.className="title"
        // cp.innerhtml=title
        let text=document.createTextNode(title)
        cp.appendChild(text)
        cdiv.appendChild(cp)
        imglist.appendChild(cdiv)
    

    }
}


loadimg()

