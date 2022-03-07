export default function cliente(req, res){

    if(req.method === "GET"){
        handleGet(req, res)
    }else{
        res.status(405).send()
    }
    
}

function handleGet(req, res){
    res.status(200).send().json({
        id: 3,
        nome: "Maria",
        email: "Maria@gmail.com"
    })
}