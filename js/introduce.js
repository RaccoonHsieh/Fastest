var scroll_block_el = document.getElementById("scroll_block");
scroll_block_el.addEventListener("scroll", function(){
    let blocks = this.querySelectorAll("div.left_block");
    // console.log(blocks);
    let right_links = this.closest("div.parent_block").querySelectorAll("a.link");
    // console.log(right_links);
    right_links.forEach(function(item, i){
        // console.log(item);
        item.classList.remove("-on");
    });


    let link;
    for(let i = 0; i < blocks.length; i++){
        let each_pos = blocks[i].offsetTop - this.scrollTop;
        
        if(each_pos <= 0 && each_pos >= -blocks[i].offsetHeight){
            let link_id = blocks[i].getAttribute("data-id");
            link = document.getElementById(link_id);
        }
    }

    link.classList.add("-on");
});

    let leftlinks = document.getElementsByClassName("link");
    for(let i = 0; i < leftlinks.length; i++){
        leftlinks[i].addEventListener("click", function(e){

        e.preventDefault();
        let link_id = this.getAttribute("id"); 
        let left_block = document.querySelector("div.left_block[data-id=" + link_id +"]");

        scroll_block_el.scrollTo({
            top: left_block.offsetTop + 1,
            behavior:"smooth"
        });
    });
};

// ------- introduce 第五格 ------

let btn_img = document.getElementsByClassName('btn_img');
let img_el = document.getElementsByClassName('img_el');
let index_last = 0;

$(window).on('load', function(){
    $('.btn_img').click(function(){
        let Img_el_Index = $(this).index();

        if(index_last != Img_el_Index){
            $('.img_el').eq(index_last).fadeOut();
            $('.img_el').eq(Img_el_Index).fadeIn();
        }else{
            $('.img_el').eq(Img_el_Index).fadeIn();
        }
        index_last = Img_el_Index;
    });
});


// ------- tab功能 ------
let tabs_item_no1 = document.getElementsByClassName("tabs_item")[0];
// console.log(tabs_item_no1.classList)
document.querySelectorAll('[data-tabs-path]').forEach(function(item){
    item.addEventListener('click', function(){
        let parent = this.closest('.tabs')

        parent.querySelectorAll('.tabs_btn').forEach(function(item) {item.classList.remove('isactive')})

        parent.querySelectorAll('.tabs_content').forEach(function(item) {item.classList.remove('isactive')})

        this.classList.add('isactive')
        let data_tabs_path = this.getAttribute("data-tabs-path");
        // console.log(data_tabs_path)
        
        switch(data_tabs_path){
            case 'main':
                tabs_item_no1.classList = "tabs_item"
                break;
            case "archive":
                tabs_item_no1.classList = "tabs_item tab2"
                break;
            case "settings":
                tabs_item_no1.classList = "tabs_item tab3"
                break;
        };
        // console.log(parent.querySelectorAll('[data-tabs-target]'))
        // []內的東西是指選擇屬性
        parent.querySelector('[data-tabs-target= '+this.getAttribute('data-tabs-path')+']').classList.add('isactive')
    });
});

//------ mobile ------
let viewport = $(window).width();

//------ 漢堡線click後出現選單 ------

let burger = false; //關閉時

$(window).on('load', function(){
    if(viewport <= 414){
        $('.burger').click(function(){
            if( burger == false ) {
                $('.burger').addClass('open'),
                $('.burger').addClass('openbutton'),
                $('.nav_el').slideToggle();
                burger = true;
            }else{
                $('.burger').removeClass('open'),
                $('.burger').removeClass('openbutton'),
                $('.nav_el').slideToggle();

                burger = false;
            }
        });
    }
});

