

////////////////////////////////////////////////////////////////////////////




let admin = ['kumush', 'xusen', 'amir', 'amin', 'shox', 'xojakbar', 'zarina', 'artom', 'muxammadshox']

let name = prompt('What is ur name?')

if (admin.includes(name)) {
    admin.splice(admin.indexOf(name) , 1 )
    console.log(admin)
}
else {
    console.log("Ошибка")
}


////////////////////////////////////////////////////////////////////////////////


    function zarina(obsh) {
        return obsh.filter(i => i).map(i => x += i, x = 0).reverse()[0]
    }
    
    let nn = [1, 2, 3, 4, 5, -1]
    
    console.log(
       zarina(nn)
    )




/////////////////////////////////////////////////







let kasha = [1 ,2 , false , 'hello' , 24 , 'world' , undefined , null , 'error' , 22 , 5 , 45]

if(kasha.filter(Number).length > 5 ){
    console.log('good')
}
else{
    console.log('not good')
}