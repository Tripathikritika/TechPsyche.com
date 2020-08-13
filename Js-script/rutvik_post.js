
window.addEventListener('DOMContentLoaded',function(){
    var other_user_blogs = JSON.parse(localStorage.getItem("user_1_blog_posts")) || []
    handle_other_user_blogs(other_user_blogs)
})

function handle_other_user_blogs(card_items){
    console.log(card_items)
    let append_card = document.getElementById('card_display_blog')
    append_card.textContent = ""

    for( var i = 0 ; i < card_items.length ; i++){
        let create_blog_card = document.createElement('card')
        create_blog_card.setAttribute('class','card border border-dark col-10 offset-1 my-2 p-2')
    
        let create_blog_container = document.createElement('div')
        create_blog_container.setAttribute('class','card-header bg-dark text-white')

    
        let create_blog_title = document.createElement('h3')
        create_blog_title.setAttribute('class','float-left  ml-2')
    
        let create_blog_user_pic = document.createElement('img')
        create_blog_user_pic.src = "./../photos/user-1_Rutvik_profile_pic.jpg"
        create_blog_user_pic.setAttribute('class','img-fluid rounded-circle blog_post_title_img float-left')
    
        
        create_blog_title.textContent = "Title: " + card_items[i].title

        let blog_category= document.createElement("p")
        blog_category.textContent= "Category: "+card_items[i].category
        blog_category.setAttribute("class", "small float-right")
         
        let create_blog_body = document.createElement('p')
        create_blog_body.setAttribute('class','card-body')
        create_blog_body.textContent = card_items[i].content
        
        let create_card_footer_blog = document.createElement('div')
        create_card_footer_blog.setAttribute('class','card-footer bg-dark text-white')
    
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
        
    create_blog_container.append( create_blog_user_pic,create_blog_title, blog_category )    
    create_card_footer_blog.append(create_footer_edit , create_footer_delete)
    create_blog_card.append(create_blog_container,create_blog_body,create_card_footer_blog)
    append_card.append(create_blog_card)
    }
}
function delete_blog(){
    // let title_to_be_deleted = event.target.parentElement.parentElement.previousElementSibling.previousElementSibling.lastChild.textContent

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
