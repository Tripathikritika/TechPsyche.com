let arr_user_2_blogs = []
let flag_for_like = false

window.onload= function()
{
    let write_text_content = document.getElementById('write_text')
    write_text_content.addEventListener('click' ,call_text_box)

    var other_user_blogs= JSON.parse(localStorage.getItem("user_1_blog_posts"))
    handle_other_user_blogs(other_user_blogs)
}
function call_text_box(){
    let text_box = document.getElementById('text_box_u2')
  
    let text_area_container = document.createElement('div')
    text_area_container.setAttribute('class','form-group m-5 p-5')
  
    let text_area_title= document.createElement("input")
  text_area_title.setAttribute("class", "form-control col-7 float-left")

  let text_area_select = document.createElement('select')
  text_area_select.setAttribute('class','form-control col-5 float-left')

  let text_area_option = document.createElement('option')
  text_area_option.textContent = 'Choose Category.... '
  text_area_option.value = 'Choose '
  let text_area_option_1 = document.createElement('option')
  text_area_option_1.textContent = 'Technology '
  text_area_option_1.value = 'Technology '
  let text_area_option_2 = document.createElement('option')
  text_area_option_2.textContent = 'Psychology'
  text_area_option_2.value = 'Psychology'
  let text_area_option_3 = document.createElement('option')
  text_area_option_3.textContent = 'Miscellaneous'
  text_area_option_3.value = 'Miscellaneous'

  text_area_select.append(text_area_option,text_area_option_1,text_area_option_2,text_area_option_3)
    let text_area_html = document.createElement('textarea')
    text_area_html.setAttribute('class','form-control')
    text_area_html.setAttribute('rows','10')
    text_area_html.placeholder = "Give your thoughts!!"
  
    let text_area_button = document.createElement('button')
    text_area_button.textContent = "Add"
    text_area_button.setAttribute('class','btn  btn-primary btn-lg')
    text_area_button.addEventListener('click',append_card_for_blog)
  
    text_area_container.append(text_area_title,text_area_select,text_area_html,text_area_button)
  
    text_box.append( text_area_container)
  
    //console.log(html)
}

function append_card_for_blog(){//woh store kar reha hai local storage main

    alert("Your Blog post had been Added!!")
    let create_blog_title = document.createElement('h3')
    create_blog_title.textContent = event.target.previousElementSibling.previousElementSibling.previousElementSibling.value
    let title_to_pass= create_blog_title.textContent 

    let title_category_select = document.createElement('p')
    title_category_select= event.target.previousElementSibling.previousElementSibling.value
    console.log(title_category_select)
    let blog_category= title_category_select
    

    let create_blog_body = document.createElement('p')
    //create_blog_body.setAttribute('class','card-body')
    create_blog_body.textContent = event.target.previousElementSibling.value
    let content_to_pass= create_blog_body.textContent

    let obj_user_2_blogs= {
      title: title_to_pass, 
      content: content_to_pass,
      category: blog_category
    }    
    console.log(obj_user_2_blogs)
    
    arr_user_2_blogs= JSON.parse(localStorage.getItem("user_2_blog_posts")) || []
    arr_user_2_blogs.unshift(obj_user_2_blogs)
    localStorage.setItem("user_2_blog_posts", JSON.stringify(arr_user_2_blogs))
  
}



function handle_other_user_blogs(blogs)
{
    console.log(blogs)
    var other_user_blogs_div_u2= document.getElementById("other_user_blogs_u2")
    other_user_blogs_div_u2.innerHTML= ""

    for(var i=0; i<blogs.length; i++)
    {
        var blog_container= document.createElement("div") //card
        blog_container.setAttribute("class", "card border border-dark col-10 offset-1 my-2 p-2")

        var blog_post_header= document.createElement("div") //card header
        blog_post_header.setAttribute("class", "card-header bg-dark text-white")

        var create_blog_user_pic = document.createElement('img') //img for card header
        create_blog_user_pic.src = "./../photos/user-1_Rutvik_profile_pic.jpg"
        create_blog_user_pic.setAttribute('class','img-fluid rounded-circle other-user-img float-left')

        var blog_post_title= document.createElement("h3") //title for card header
        blog_post_title.setAttribute("class", "ml-3 float-left")
        blog_post_title.innerHTML= "Title: "+blogs[i].title
        console.log(blogs[i].title)
        
        var blog_category= document.createElement("p")
        blog_category.textContent= "Category: "+blogs[i].category
        blog_category.setAttribute("class", "small float-right")

        var blog_post_content= document.createElement("p") //card body
        blog_post_content.setAttribute("class", "card-body")
        blog_post_content.textContent= blogs[i].content

        var other_user_blog_footer = document.createElement('div') //card footer
        other_user_blog_footer.setAttribute('class','card-footer bg-dark text-white')

        var other_user_blog_footer_like = document.createElement('div')  //like button
        other_user_blog_footer_like.setAttribute('class','float-left mr-2')
        other_user_blog_footer_like.innerHTML = `<i class="fas fa-heart"></i>`
        other_user_blog_footer_like.addEventListener('click',() =>{
            like_post(event.target)
        })

        var other_user_blog_footer_comment = document.createElement('div') //comment button
        other_user_blog_footer_comment.setAttribute('class','float-right')
        other_user_blog_footer_comment.innerHTML = `<i class="fas fa-comments"></i>`
        other_user_blog_footer_comment.addEventListener('click',comment_on_post)

        other_user_blog_footer.append(other_user_blog_footer_like, other_user_blog_footer_comment) //appending like and
        //comment button to  // card footer

        blog_post_header.append(create_blog_user_pic, blog_post_title, blog_category) //appending title and user immage to card header
        blog_container.append(blog_post_header, blog_post_content, other_user_blog_footer)
        other_user_blogs_div_u2.append(blog_container)                                                                                            

        
    }
}

// function delete_blog(){
//     let title_to_be_deleted = event.target.parentElement.parentElement.previousElementSibling.previousElementSibling.lastChild.textContent

//     let user_blog_2 = JSON.parse(localStorage.getItem("user_2_blog_posts"))
    
//     for( let i = 0 ; i < user_blog_1.length ; i++){
//         //let blog_posts = JSON.parse(user_blog_1[i])
//         if( user_blog_2[i].title === title_to_be_deleted){
//             user_blog_2.splice(i,1)
//         }
//     }
//     console.log(user_blog_2)
//     user_blog_2 = JSON.stringify(user_blog_2)
//     localStorage.setItem('user_2_blog_posts',user_blog_2)
// }

// function edit_blog(){
//     console.log("Edit Task...");
//     var listItem = this.parentNode.previousElementSibling;
//     console.log(listItem)

// }


function like_post(liked_items){

    flag_for_like = !flag_for_like
    if( flag_for_like === true){
        liked_items.setAttribute('style','color:red')
    }
    else{

        liked_items.removeAttribute('style')
    }
}


function comment_on_post()
{
    // funtion to comment on post
}