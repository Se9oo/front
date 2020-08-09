(function(window, document) {
    // 문서 전체의 영역을 더럽히지 못하게 모듈화
    'use strict';

    // toggle 할 elements
    const $toggles = document.querySelectorAll('.toggle');
    // toggle button
    const $toggleBtn = document.getElementById('toggle-btn');

    // click event Listener
    $toggleBtn.addEventListener('click', toggleElements);

    // 화면 resize 될 때
    window.addEventListener('resize', () => {
        // window의 가로 길이가 1024 초과면
        if (window.innerWidth > 1024) {
            // Off toggle element
            offElements();
        }
    });

    function toggleElements() {
        [].forEach.call($toggles, function(toggle) {
            toggle.classList.toggle('on');
        });
    }

    function offElements() {
        [].forEach.call($toggles, (toggle) => {
            toggle.classList.remove('on');
        })
    }
})(window, document)