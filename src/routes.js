const express = require('express')
const routes = express.Router()
const subBtn = require('./lib/data.json')

    routes.get("/", function(req, res){
    return res.render("layout")
    })

    routes.get('/:idSub', function(req, res){
        
        let {idSub} = req.params      
       
        const subMenu = subBtn.submenu.find(function(submenu){
            return submenu.id == idSub
        })
        
        idSub = `${idSub}/${idSub}`

        return res.render(idSub, { subMenu })
    })

    routes.get('/:idSub/:sub', (req, res)=>{
        let { idSub, sub } = req.params

        const subMenu = subBtn.submenu.find(function(submenu){
            return submenu.id == idSub
        })

        let pageButton = subMenu.buttons.indexOf(sub)

        pageButton = `${idSub}/page${pageButton + 1}.njk`
        idSub = `${idSub}/${idSub}`

        res.render(idSub, { subMenu, pageButton })
    })

module.exports = routes