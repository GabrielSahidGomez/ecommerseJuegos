const products = [
    {id: 1, name: "Pubg", description:"PUBG: Battlegrounds es un videojuego de batalla en línea multijugador masivo desarrollado por PUBG Corporation  y publicado por Bluehole, Se basa en el estilo Battle Royale de los mods previamente desarrollados por Brendan 'Playerunknown' ",price: 8000, img:"https://lh3.googleusercontent.com/9i-3zjsFl5O2xlXNjLFiOhNvzskCd68K6uJc9QKk_IU3zL7J5Mpxkw6CI7D6LtMSmQ=w300"},

    {id: 2, name: "Diablo 3",category:"RPG",description: "Diablo III es un videojuego de rol de acción (ARPG), desarrollado por Blizzard Entertainment y su temática es de fantasía oscura y terrorífica.",price: 8000, img:"https://th.bing.com/th/id/R.b2268176be40d7c3485f0893e68d4ef1?rik=2PirOG83%2f%2fNw7A&riu=http%3a%2f%2fus.battle.net%2fsupport%2fstatic%2fimages%2fgames%2flogo_diablo3.bdc92eb2.png&ehk=W%2bmYnJidVmNQN1dMdcwurc%2fdnn6mnwP5j7TjSjRg1FY%3d&risl=&pid=ImgRaw&r=0"},

    {id: 3, name: "Terraria",description: "es un videojuego de acción-aventura de mundo abierto desarrollado por el estudio Rockstar North y distribuido por Rockstar Games, El juego está ambientado en la ciudad ficticia de Los Santos, así como en las zonas que la rodean, basada en la ciudad de Los Ángeles y el sur de California",price: 8000, img:"https://th.bing.com/th/id/R.c028458ae55c5a70d14e4d637f5b82a5?rik=lvaylYdtgIoaRg&riu=http%3a%2f%2fclipart-library.com%2fimg1%2f426068.png&ehk=bsDPxgVs6TBbVU29C6zBO%2fdvcycWQgb7AxVBCb%2bGnsQ%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"},

    {id: 4, name: "Call of Duty 2",description: "es un videojuego de acción-aventura de mundo abierto desarrollado por el estudio Rockstar North y distribuido por Rockstar Games, El juego está ambientado en la ciudad ficticia de Los Santos, así como en las zonas que la rodean, basada en la ciudad de Los Ángeles y el sur de California",price: 8000, img: "https://purepng.com/public/uploads/medium/call-of-duty-black-ops-2-cod-w21.png"},

    {id: 5, name: "Lineage 2",description: "es un videojuego de acción-aventura de mundo abierto desarrollado por el estudio Rockstar North y distribuido por Rockstar Games, El juego está ambientado en la ciudad ficticia de Los Santos, así como en las zonas que la rodean, basada en la ciudad de Los Ángeles y el sur de California",price: 8000, img: "https://th.bing.com/th/id/OIP.oYOtN_A2uPndXL9sjarMoAHaEK?pid=ImgDet&rs=1"},

    {id: 6, name: "Valorant",category: "Shooter",description: "es un videojuego de acción-aventura de mundo abierto desarrollado por el estudio Rockstar North y distribuido por Rockstar Games, El juego está ambientado en la ciudad ficticia de Los Santos, así como en las zonas que la rodean, basada en la ciudad de Los Ángeles y el sur de California",price: 8000, img: "https://th.bing.com/th/id/OIP.0H5wvxJFTHaIylrn7Cd4RwHaFj?pid=ImgDet&rs=1"},



    
]



const categories = [
    {id: 'Terraria', description: 'es un videojuego de acción-aventura de mundo abierto desarrollado por el estudio Rockstar North y distribuido por Rockstar Games, El juego está ambientado en la ciudad ficticia de Los Santos, así como en las zonas que la rodean, basada en la ciudad de Los Ángeles y el sur de California'},
    {id: 'Shooter', description: 'Shooter'}
]

export const getCategories = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categories)
        }, 2000)
    })
}


export const getProducts = (categoryId) => {
    return new Promise ((resolve, reject) => {
        const ok = true;
            setTimeout(() => {
                if (ok){
                    resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products);
                } else {
                    reject('error');
                }
            }, );
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}        
