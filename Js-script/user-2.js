

window.onload= function()
{
    var other_user_blogs= JSON.parse(localStorage.getItem("user_1_blog_posts"))
    // console.log(other_user_blogs)

    handle_other_user_blogs(other_user_blogs)
}

function handle_other_user_blogs(blogs)
{
    console.log(blogs)
    var other_user_blogs_div_u2= document.getElementById("other_user_blogs_u2")
    other_user_blogs_div_u2.innerHTML= ""

    for(var i=0; i<blogs.length; i++)
    {
        var blog_container= document.createElement("div") //card
        blog_container.setAttribute("class", "card col-6")

        var blog_post_header= document.createElement("div") //card header
        blog_post_header.setAttribute("class", "card-header")

        var create_blog_user_pic = document.createElement('img') //img for card header
        create_blog_user_pic.src = "./../photos/user-1_Rutvik_profile_pic.jpg"
        create_blog_user_pic.setAttribute('class','img-fluid rounded-circle other-user-img float-left')

        var blog_post_title= document.createElement("h3") //title for card header
        blog_post_title.setAttribute("class", "float-left")
        blog_post_title.innerHTML= blogs[i].title
        console.log(blogs[i].title)
        

        var blog_post_content= document.createElement("p") //card body
        blog_post_content.setAttribute("class", "card-body")
        blog_post_content.textContent= blogs[i].content

        // var other_user_blog_footer = document.createElement('div') //card footer
        // other_user_blog_footer.setAttribute('class','card-footer')

        // var other_user_blog_footer_like = document.createElement('div')  //like button
        // other_user_blog_footer_like.setAttribute('class','float-left mr-2')
        // other_user_blog_footer_like.innerHTML = `<i class="far fa-edit"></i>`
        // other_user_blog_footer_like.addEventListener('click',like_post)

        // var other_user_blog_footer_comment = document.createElement('div') //comment button
        // other_user_blog_footer_comment.setAttribute('class','float-left')
        // other_user_blog_footer_comment.innerHTML = `<i class="fas fa-trash-alt"></i>`
        // other_user_blog_footer_comment.addEventListener('click',comment_on_post)

        //other_user_blog_footer.append(other_user_blog_footer_like , other_user_blog_footer_comment) //appending like and
                                                                                                    //comment button to
                                                                                                    // card footer
        blog_post_header.append(create_blog_user_pic, blog_post_title) //appending title and user immage to card header
        blog_container.append(blog_post_header, blog_post_content)
        other_user_blogs_div_u2.append(blog_container)                                                                                            

        
    }
}

function like_post()
{
    // function to like post
}

function comment_on_post()
{
    // funtion to comment on post
}