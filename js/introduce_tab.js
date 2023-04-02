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