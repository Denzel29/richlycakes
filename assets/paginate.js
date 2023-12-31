let thisPage = 1;
let limit =6;
let list = document.querySelectorAll('.product-div');

function loadItem(){
    let beginGet = limit *(thisPage-1);
    let endGet = limit *thisPage -1;
    list.forEach((item, key) => {
        if( key >= beginGet && key <= endGet){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
    listPage()
}
loadItem();
function listPage(){
    let count =  Math.ceil(list.length/ limit);
    document.querySelector('.listPage').innerHTML = '';

    if (thisPage !=1){
        let prev = document.createElement('li');
        prev.innerText = "&lt;";
        prev.setAttribute('onclick', "altPage(" +(thisPage-1)+")");
        document.querySelector('.listPage').appendChild(prev); 
    }

    for( i=1; i <= count; i++){
        let newPage = document.createElement('li');
        newPage.innerText = i;
        if(i == thisPage){
            newPage.classList.add('active');
        }
        newPage.setAttribute('onclick', "altPage(" + i+ ")");
        document.querySelector('.listPage').appendChild(newPage);
    }

    if(thisPage != count){
        let next = document.createElement('li');
        next.innerText='&gt;';
        next.setAttribute('onclick', "altPage(" +(thisPage+1)+")");
        document.querySelector('.listPage').appendChild(next); 
    }

}
function altPage(i){
    thisPage = i;
    loadItem();
}