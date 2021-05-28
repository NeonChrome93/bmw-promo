const tabHandElems = document.querySelectorAll('[data-tabs-handler]');
const tabFieldElems = document.querySelectorAll('[data-tabs-field]');
const tabTitleElems = document.querySelectorAll('[data-tabs-title]');

for(const tab of tabHandElems) {
    tab.addEventListener('click', () => {
        tabHandElems.forEach(item => {

            if(tab === item) {
                item.classList.add( 'design-list__item_active')
            } else {
                item.classList.remove('design-list__item_active')
            }

        })

        tabFieldElems.forEach(item => {

            if(item.dataset.tabsField === tab.dataset.tabsHandler) {
                item.classList.remove('hidden')
            } else {
                item.classList.add('hidden')
            }

        })

        tabTitleElems.forEach(item => {

            if(item.dataset.tabsTitle === tab.dataset.tabsHandler) {
                item.classList.remove('hidden')
            } else {
                item.classList.add('hidden')
            }

        })



    })
}