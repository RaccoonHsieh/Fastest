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

/*
$(document).ready(function() {
    $('#fullpage').fullpage({
      anchors: ['section1', 'section2', 'section3'],
      menu: '#myMenu',
      afterLoad: function(anchorLink, index) {
        if (index === 2) {
          $('.section2').fadeIn();
        } else if (index === 3) {
          $('.section3').fadeIn();
        }
      }
    //   onLeave: function(index, nextIndex, direction) {
    //     if (nextIndex === 2 || nextIndex === 3) {
    //       return false; // 阻止滾動
    //     }
    //   }
    });
  });
  */

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