let arrayPoster = [
    "https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg",
     "https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg",
     "https://m.media-amazon.com/images/I/71C-ztbXMCL._SX3000_.jpg"
  ];

  function slider(data){
  let parent=document.querySelector('#poster');
  let slide=document.createElement('img')
  let flag=false;
  parent.innerHTML = "";
  slide.src= data[data.length-1];
let id=0;
  parent.addEventListener('mouseenter',function(){
    flag=true;
  })
  parent.addEventListener('mouseout',function(){
    flag=false;
  })
  
  setInterval(()=>{
    if(flag==false){
        if(id===data.length){
            id=0;
        }
        slide.src=data[id]
        id++;
    }
  },3000)
  parent.append(slide)
  }
  slider(arrayPoster)