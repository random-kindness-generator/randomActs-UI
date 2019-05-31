class TabLink {
    constructor(element) { 
        this.element = element; 
        this.data = this.element.dataset.tab; 
        this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`); 
        this.tabItem = new TabItem(this.itemElement); 
        this.element.addEventListener('click', () => this.select(event)); 
    };

    select(event) {
        let links1 = document.querySelectorAll('.tabs-link');
        links1 = Array.from(links1); 
        for (let i = 0; i < links1.length; i++) {
            links1[i].classList.remove('tabs-link-selected');
        }
        this.element.classList.add('tabs-link-selected'); 
        this.tabItem.select(); 
    }
}

class TabItem { 
    constructor(element) { 
        this.element = element;
    }
    select(event) {
        let items = document.querySelectorAll('.tabs-item');
        items = Array.from(items).forEach(item => item.classList.remove('tabs-item-selected')); 
        this.element.classList.add('tabs-item-selected'); 
    }
}

let links = document.querySelectorAll('.tabs-link'); 
links = Array.from(links).map(element => new TabLink(element)); 
links[0].select(event);