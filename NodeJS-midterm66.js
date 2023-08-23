app.get('/que2/:number',function (req, res){
    let number = req.params.number
    let fact = 1
    for (let i = 1; i<= number; i++ ){
        fact *= i;
    }
    res.send('number: ' + number + '!= ' + fact)
})