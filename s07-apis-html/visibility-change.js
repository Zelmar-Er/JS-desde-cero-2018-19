const video = document.getElementById('video')

// vine de window
// addEventListener('visibilitychange',(e)=>{
//     // nos informa si el doc esta visible o no
//     // console.log(document.visibilityState)

//     if(document.visibilityState === 'visible'){
//         console.log('play')
//         video.play()
//     } else if(document.visibilityState === 'hidden'){
//         console.log('pause')
//         video.pause()
//     }
// })

addEventListener('visibilitychange', () => document.visibilityState === 'visible' ? video.play() : video.pause())