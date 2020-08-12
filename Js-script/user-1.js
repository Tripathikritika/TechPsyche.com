window.addEventListener("DOMContentLoaded",function(){
    var write_text_content = document.getElementById('write_text')
    write_text_content.addEventListener('click' ,call_text_box)
})

function call_text_box(){
  var text_box = document.getElementById('text_box')

  var text_area_container = document.createElement('div')
  text_area_container.setAttribute('class','form-group m-5 p-5')

  var text_area_title= document.createElement("input")
  text_area_title.setAttribute("class", "form-control")
  var text_area_html = document.createElement('textarea')
  text_area_html.setAttribute('class','form-control')
  text_area_html.setAttribute('rows','10')
  text_area_html.placeholder = "Give your thoughts!!"

  var text_area_button = document.createElement('button')
  text_area_button.textContent = "Add"
  text_area_button.setAttribute('class','btn  btn-primary btn-lg')
  text_area_button.addEventListener('click',append_card_for_blog)
  text_area_container.append(text_area_title,text_area_html,text_area_button)

  text_box.append( text_area_container)
  //console.log(html)
}

function append_card_for_blog(){
    var append_card = document.getElementById('text_box')
    
    var create_blog_card = document.createElement('card')
    create_blog_card.setAttribute('class','card border border-dark ')

    var create_blog_container = document.createElement('div')
    create_blog_container.setAttribute('class','card-header')

    var create_blog_title = document.createElement('h3')
    create_blog_title.setAttribute('class','float-left')

    var create_blog_user_pic = document.createElement('img')
    create_blog_user_pic.src = "./../photos/user-1_Rutvik_profile_pic.jpg"
    create_blog_user_pic.setAttribute('class','img-fluid rounded-circle blog_post_title_img float-left')

    create_blog_container.append( create_blog_user_pic,create_blog_title )
    create_blog_title.textContent = event.target.previousElementSibling.previousElementSibling.value

    var create_blog_body = document.createElement('p')
    create_blog_body.setAttribute('class','card-body')
    create_blog_body.textContent = event.target.previousElementSibling.value

    var create_card_footer_blog = document.createElement('div')
    create_card_footer_blog.setAttribute('class','card-footer')

    var create_footer_edit = document.createElement('div')  
    create_footer_edit.setAttribute('class','float-left')
    create_footer_edit.innerHTML = `<i class="far fa-edit"></i>`
    create_footer_edit.addEventListener('click',edit_blog)

    var create_footer_delete = document.createElement('div')
    create_footer_delete.setAttribute('class','float-right')
    create_footer_delete.innerHTML = `<i class="fas fa-trash-alt"></i>`
    create_footer_delete.addEventListener('click',delete_blog)

    create_card_footer_blog.append(create_footer_edit , create_footer_delete)

    create_blog_card.append(create_blog_container,create_blog_body,create_card_footer_blog)
    append_card.append(create_blog_card)
    // console.log(create_blog_body)
}

function edit_blog(){
    
}

function delete_blog(){

}