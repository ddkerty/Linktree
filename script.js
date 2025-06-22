// DOMContentLoaded 이벤트는 HTML 문서가 완전히 로드되고 파싱된 후에 실행되도록 합니다.
// 이렇게 하면 JavaScript가 HTML 요소를 안전하게 조작할 수 있습니다.
document.addEventListener('DOMContentLoaded', () => {
    // 문서 내의 모든 'link-button' 클래스를 가진 요소를 찾아 선택합니다.
    const linkButtons = document.querySelectorAll('.link-button');

    // 선택된 각 버튼에 대해 반복문을 실행합니다.
    linkButtons.forEach(button => {
        // 각 버튼에 'click' 이벤트 리스너를 추가합니다.
        // 버튼이 클릭될 때마다 이 함수가 실행됩니다.
        button.addEventListener('click', () => {
            // 클릭된 버튼의 'data-url' 속성 값을 가져옵니다.
            // HTML에서 <button data-url="YOUR_URL"> 형태로 정의된 URL입니다.
            const url = button.dataset.url;

            // 만약 'data-url' 속성 값이 존재한다면 (즉, 유효한 URL이라면)
            if (url) {
                // 해당 URL을 새 탭에서 엽니다.
                // '_blank'는 새 탭(또는 새 창)에서 문서를 열도록 지정합니다.
                // 'noopener noreferrer'는 보안 권장 사항입니다.
                // - noopener: 새 탭이 window.opener 속성을 통해 현재 탭을 참조하는 것을 방지하여 피싱 공격 위험을 줄입니다.
                // - noreferrer: 참조자 정보를 새 탭으로 전달하지 않도록 합니다.
                window.open(url, '_blank', 'noopener noreferrer');
            }
        });
    });
});