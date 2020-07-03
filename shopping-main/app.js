const MENU__BAR = document.querySelector('.banner__menu-bar');
const BANNER__GNB = document.querySelector('.banner__gnb');

MENU__BAR.addEventListener('click',function(){
    if (BANNER__GNB.style.display == 'none' || BANNER__GNB.style.display != 'block') {
        BANNER__GNB.style.display = 'block';
    } else {
        BANNER__GNB.style.display = 'none';
    }
});