const products = [
    {id: 1, name: "Pubg", description:"PUBG: Battlegrounds es un videojuego de batalla en línea multijugador masivo desarrollado por PUBG Corporation  y publicado por Bluehole, Se basa en el estilo Battle Royale de los mods previamente desarrollados por Brendan 'Playerunknown' ",price: 8000, img:"https://lh3.googleusercontent.com/9i-3zjsFl5O2xlXNjLFiOhNvzskCd68K6uJc9QKk_IU3zL7J5Mpxkw6CI7D6LtMSmQ=w300"},

    {id: 2, name: "Diablo 3",description: "Diablo III es un videojuego de rol de acción (ARPG), desarrollado por Blizzard Entertainment y su temática es de fantasía oscura y terrorífica.",price: 8000, img:"https://th.bing.com/th/id/R.b2268176be40d7c3485f0893e68d4ef1?rik=2PirOG83%2f%2fNw7A&riu=http%3a%2f%2fus.battle.net%2fsupport%2fstatic%2fimages%2fgames%2flogo_diablo3.bdc92eb2.png&ehk=W%2bmYnJidVmNQN1dMdcwurc%2fdnn6mnwP5j7TjSjRg1FY%3d&risl=&pid=ImgRaw&r=0"},

    {id: 3, name: "GTA V",description: "es un videojuego de acción-aventura de mundo abierto desarrollado por el estudio Rockstar North y distribuido por Rockstar Games, El juego está ambientado en la ciudad ficticia de Los Santos, así como en las zonas que la rodean, basada en la ciudad de Los Ángeles y el sur de California",price: 8000, img:"https://th.bing.com/th/id/R.00718e6ac6d62cb73c5757f02e481cf8?rik=9Hr5rVmN900kQg&pid=ImgRaw&r=0"}


    
]


export const getProducts = () => {
    return new Promise ((resolve) => {
            setTimeout(() => {
                resolve(products)
            }, 2000)
    })
}        
