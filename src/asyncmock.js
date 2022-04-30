const products = [
    {
        id: "1",
        title: "Pubg",
        category:'shooter',
        description: "batalla en linea multijugador masivo battle royale",
        price: "1500",
        pictureUrl: 'https://lh3.googleusercontent.com/9i-3zjsFl5O2xlXNjLFiOhNvzskCd68K6uJc9QKk_IU3zL7J5Mpxkw6CI7D6LtMSmQ=w300'
    },
    {
        id: "2", title: "Diablo 3",   category:'aventura',      description: "es un videojuego de rol de accion y su tematica es de fantasia oscura y terrorifica",         price: 2000,         pictureUrl:"https://th.bing.com/th/id/R.b2268176be40d7c3485f0893e68d4ef1?rik=2PirOG83%2f%2fNw7A&riu=http%3a%2f%2fus.battle.net%2fsupport%2fstatic%2fimages%2fgames%2flogo_diablo3.bdc92eb2.png&ehk=W%2bmYnJidVmNQN1dMdcwurc%2fdnn6mnwP5j7TjSjRg1FY%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        id: "3",         title: "Terraria",    category:'aventura',     description: "es un juego re bueno",         price: 3000,         pictureUrl: "https://th.bing.com/th/id/R.c028458ae55c5a70d14e4d637f5b82a5?rik=lvaylYdtgIoaRg&riu=http%3a%2f%2fclipart-library.com%2fimg1%2f426068.png&ehk=bsDPxgVs6TBbVU29C6zBO%2fdvcycWQgb7AxVBCb%2bGnsQ%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
    },
    {
        id: "4",         title: "Call of duty 2",    category:'shooter',    description: "juego de accion",        price: 4000,        pictureUrl: "https://purepng.com/public/uploads/medium/call-of-duty-black-ops-2-cod-w21.png"
    },
    {
        id: "5",         title: "Lineage 2",    category:'mmorpg',    description: "juego de accion",        price: 4500,        pictureUrl: "https://th.bing.com/th/id/OIP.oYOtN_A2uPndXL9sjarMoAHaEK?pid=ImgDet&rs=1"
    },
    {
        id: "6",         title: "Valorant",    category:'shooter',    description: "juego de accion",        price: 5000,        pictureUrl: "https://th.bing.com/th/id/OIP.0H5wvxJFTHaIylrn7Cd4RwHaFj?pid=ImgDet&rs=1"
    },
    {
        id: "7",         title: "Candy Crush",    category:'casual',    description: "los jugadores completan niveles intercambiando dulces de colores en un tablero de juego para hacer una combinación de tres o más del mismo color",        price: 5000,        pictureUrl: "https://th.bing.com/th/id/OIP.4jMAt5akDAw901uAWdNTkAHaHa?pid=ImgDet&rs=1"
    }

]

const categories = [
    {id: 'shooter', description: 'Shooter'},
    {id: 'mmorpg', description: 'MMORPG'},
    {id: 'aventura', description: 'Aventura'},
    {id: 'casual', description: 'Casuales'}
]

export const getCategories = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(categories)
        }, 500)
    })
}

export const getProducts =(categoryId) => {
    return new Promise (resolve => {
        setTimeout(()=>{
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
        },1000)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}