const title = document.getElementById('title')
const mql = matchMedia('(min-width:400px) and (orientation: landscape')

const applyMatchMedia = mql =>{
    mql.matches ?
        // No hacer esto nunca
        document.body.style.backgroundColor = 'red'
        // Esto si
        title.classList.add('clasTwo')
        :
        // Esto no
        document.body.style.backgroundColor = 'royalblue'
}

addEventListener('resize',()=>applyMatchMedia(mql))
addEventListener('DOMContentLoaded',()=>applyMatchMedia(mql))