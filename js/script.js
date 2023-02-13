let type = document.querySelectorAll(".typeJs")
let convertType = Array.from(type)

convertType.map((item)=>{
    let cursorChar = "|"
    let countType = 0;
    let typeNow;
    let letsType = ()=>{
        if(countType == item.dataset.text.length){
            typeNow.pop()
            item.innerHTML = typeNow.join("")
            if(typeNow.length == 0){
                item.innerHTML  += item.dataset.text.charAt(countType);
                countType = 0
            }
        }else{
            item.innerHTML += item.dataset.text.charAt(countType) 
            typeNow = item.innerHTML.split("")
            countType++
        }
    }
    let timing = setInterval(()=>{
        return letsType()
    }, 150)
})