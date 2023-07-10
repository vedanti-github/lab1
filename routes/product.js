const express = require('express')
const appForEmp = express.Router()
const db = require('../db')

// router.get('/', (request, response) => {
//   const statement = ``
//   db.query(statement, (error, data) => {
//     if (error) {
//       response.send('error')
//     } else {
//       response.send(data)
//     }
//   })
// })

appForEmp.get("/",(request, response ) => {

    db.query("select * from emp",(error, result) => {

        if(error == null)
        {
            var data = JSON.stringify(result)
            response.setHeader("Content-Type", "application/json")
            response.write(data)

        }
        else{
            console.log(error)
            response.setHeader("Content-Type", "application/json")
            response.write(error)
        }
        response.end();
    })
    
})

appForEmp.post("/",(request, response ) => {

    var query = `insert into emp values('${request.body.Eno}', '${request.body.Ename}', '${request.body.Eaddress}') `;
    db.query(query,(error, result) => {

        if(error == null)
        {
            var data = JSON.stringify(result)
            response.setHeader("Content-Type", "application/json")
            response.write(data)

        }
        else{
            console.log(error)
            response.setHeader("Content-Type", "application/json")
            response.write(error)
        }
        response.end();
    })
    
})

appForEmp.delete('/:Eno',(request, response ) => {

    var query = `delete from emp where Eno = '${request.params.Eno}' `;
    db.query(query,(error, result) => {

        if(error == null)
        {
            var data = JSON.stringify(result)
            response.setHeader("Content-Type", "application/json")
            response.write(data)

        }
        else{
            console.log(error)
            response.setHeader("Content-Type", "application/json")
            response.write(error)
        }
        response.end();
    })
    
    
})

appForEmp.put('/:Eno',(request, response ) => {

    var query = `update emp set Ename = '${request.body.Ename}',
     Eaddress = '${request.body.Eaddress}' 
     where Eno = '${request.params.Eno}' `;
    db.query(query,(error, result) => {

        if(error == null)
        {
            var data = JSON.stringify(result)
            response.setHeader("Content-Type", "application/json")
            response.write(data)

        }
        else{
            console.log(error)
            response.setHeader("Content-Type", "application/json")
            response.write(error)
        }
        response.end();
    })
    
})

module.exports = appForEmp