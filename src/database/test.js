const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {

    // await saveOrphanage(db, {
    //     lat: "-27.2003935",
    //     lng: "-49.6322058",
    //     name: "Lar do Amor",
    //     about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    //     whatsapp: "4798701234",
    //     images: [
    //         "https://images.unsplash.com/photo-1593318978060-6532dc118580?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

    //         "https://images.unsplash.com/photo-1601277723288-d79a84fddb71?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
    //     ].toString(),
    //     instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    //     opening_hours: "Horário de visita das 18h até 8h",
    //     open_on_weekends: "1"

    // })

    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //const orphanage = await db.all('SELECT * FROM orphanages WHERE id="3"')
    //console.log(orphanage)

    //console.log(await db.run('DELETE FROM orphanages WHERE id="3"'))

})