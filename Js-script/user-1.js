let arr_user_1_blogs = []
//let arr_myUser_blogs = []

window.addEventListener("DOMContentLoaded",function(){
    let write_text_content = document.getElementById('write_text')
    write_text_content.addEventListener('click' ,call_text_box)

})

function call_text_box(){
  let text_box = document.getElementById('text_box')

  let text_area_container = document.createElement('div')
  text_area_container.setAttribute('class','form-group m-5 p-5')

  let text_area_title= document.createElement("input")
  text_area_title.setAttribute("class", "form-control")
  let text_area_html = document.createElement('textarea')
  text_area_html.setAttribute('class','form-control')
  text_area_html.setAttribute('rows','10')
  text_area_html.placeholder = "Give your thoughts!!"

  let text_area_button = document.createElement('button')
  text_area_button.textContent = "Add"
  text_area_button.setAttribute('class','btn  btn-primary btn-lg')
  text_area_button.addEventListener('click',append_card_for_blog)

  text_area_container.append(text_area_title,text_area_html,text_area_button)

  text_box.append( text_area_container)

  //console.log(html)
}

function append_card_for_blog(){//woh store kar reha hai local storage main

    let create_blog_title = document.createElement('h3')
    create_blog_title.textContent = event.target.previousElementSibling.previousElementSibling.value
    let title_to_pass= create_blog_title.textContent 

    let create_blog_body = document.createElement('p')
    //create_blog_body.setAttribute('class','card-body')
    create_blog_body.textContent = event.target.previousElementSibling.value
    let content_to_pass= create_blog_body.textContent

    let obj_user_1_blogs= {
      title: title_to_pass, 
      content: content_to_pass
    }


    arr_user_1_blogs.push(obj_user_1_blogs)
    localStorage.setItem("user_1_blog_posts", JSON.stringify(arr_user_1_blogs))
    console.log(obj_user_1_blogs)
    non_refreshable_card(arr_user_1_blogs)
  
}
function non_refreshable_card(card_items){ //append kar reha hai cards 

    let append_card = document.getElementById('card_display_blog')
    append_card.textContent = ""

    for( var i = 0 ; i < card_items.length ; i++){
        let create_blog_card = document.createElement('card')
        create_blog_card.setAttribute('class','card border border-dark ')
    
        let create_blog_container = document.createElement('div')
        create_blog_container.setAttribute('class','card-header')
    
        let create_blog_title = document.createElement('h3')
        create_blog_title.setAttribute('class','float-left')
    
        let create_blog_user_pic = document.createElement('img')
        create_blog_user_pic.src = "./../photos/user-1_Rutvik_profile_pic.jpg"
        create_blog_user_pic.setAttribute('class','img-fluid rounded-circle blog_post_title_img float-left')
    
        create_blog_container.append( create_blog_user_pic,create_blog_title )
        create_blog_title.textContent = card_items[i].title
         
        let create_blog_body = document.createElement('p')
        create_blog_body.setAttribute('class','card-body')
        create_blog_body.textContent = card_items[i].content
        
        let create_card_footer_blog = document.createElement('div')
        create_card_footer_blog.setAttribute('class','card-footer')
    
        let create_footer_edit = document.createElement('div')  
        create_footer_edit.setAttribute('class','float-left')
        create_footer_edit.innerHTML = `<i class="far fa-edit"></i>`
        create_footer_edit.addEventListener('click',edit_blog)
    
        let create_footer_delete = document.createElement('div')
        create_footer_delete.setAttribute('class','float-right')
        create_footer_delete.innerHTML = `<i class="fas fa-trash-alt"></i>`
        create_footer_delete.addEventListener('click',()=>{
            create_blog_card.remove()
            delete_blog()
        })
        
    create_card_footer_blog.append(create_footer_edit , create_footer_delete)
    create_blog_card.append(create_blog_container,create_blog_body,create_card_footer_blog)
    append_card.append(create_blog_card)
    }
}

function delete_blog(){
    let title_to_be_deleted = event.target.parentElement.parentElement.previousElementSibling.previousElementSibling.lastChild.textContent

    let user_blog_1 = JSON.parse(localStorage.getItem("user_1_blog_posts"))
    
    for( let i = 0 ; i < user_blog_1.length ; i++){
        //let blog_posts = JSON.parse(user_blog_1[i])
        if( user_blog_1[i].title === title_to_be_deleted){
            user_blog_1.splice(i,1)
        }
    }
    console.log(user_blog_1)
    user_blog_1 = JSON.stringify(user_blog_1)
    localStorage.setItem('user_1_blog_posts',user_blog_1)
}

function edit_blog(){
    console.log("Edit Task...");
    var listItem = this.parentNode.previousElementSibling;
    console.log(listItem)

}

    
    