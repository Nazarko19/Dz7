




// fetch(`https://jsonplaceholder.typicode.com/posts`)
//     .then(value => value.json())
//     .then(value => {
//         let userpost = document.getElementsByClassName('coment-post')[0]
//         for (let post of value){
//                     // console.log(post)
//                     let div =  document.createElement('div')
//                     div.innerText = post.id + ' ' + post.title
//                     userpost.appendChild(div)
//
//                     let btn = document.createElement("button")
//                     btn.innerText = 'details'
//                     div.appendChild(btn)
//                     btn.onclick = function (){
//                           fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
//                               .then(value => value.json() )
//                               .then(value => {
//                                   let box = document.getElementsByClassName('comment')[0]
//                                   box.innerHTML = ''
//                                   for (let coment of value){
//                                       let comentbox = document.createElement('div')
//                                       comentbox.innerText = coment.email
//                                       box.appendChild(comentbox)
//                                       console.log(comentbox)
//                                   }
//                               } )
//
//
//
//                     }
//
//
//
//         }
//
//     });


    //
    // fetch(`https://jsonplaceholder.typicode.com/comments`)
    //     .then(value => value.json())
    //     .then(value => {
    //      let usercoment = document.getElementsByClassName('coment2')[0]
    //         for (let coment of value){
    //             // console.log(coment)
    //             let comDiv = document.createElement('div')
    //             comDiv.innerText = coment.id + '-' + coment.name
    //             // console.log(comDiv);
    //             usercoment.appendChild(comDiv)
    //
    //
    //         }
    //
    //     });
    //




//
// fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then(value => value.json())
//     .then(value => {
//         let boxdiv = document.getElementsByClassName('box')[0]
//         for (let user of value){
//             let userdiv = document.createElement('div')
//             userdiv.innerText = user.id + '-' + user.name
//             boxdiv.appendChild(userdiv)
//
//             let buton = document.createElement('button')
//             userdiv.appendChild(buton)
//             buton.innerText = 'Get'
//             buton.onclick=function (){
//                 fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
//                     .then(value => value.json())
//                     .then(value => {
//                         let pump = document.getElementsByClassName('pump')[0]
//                         pump.innerHTML = ''
//                         for (let item of value){
//                             let itemdiv = document.createElement('div')
//                             itemdiv.innerText = item.title
//                             pump.appendChild(itemdiv)
//
//                         }
//
//
//                     })
//
//             }
//
//
//         }
//     })


























