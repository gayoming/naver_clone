
// 메인 베너 슬라이드
const adImg = document.querySelectorAll(".ad_img img");
let currentIndex = 0;

function ad_slide() {
    adImg.forEach((img, index) => {
        img.style.opacity = '0';
        img.style.transition = 'opcity 1s ease-in-out';
    });

    adImg[currentIndex].style.opacity = '1';
    currentIndex = (currentIndex + 1) % adImg.length;
}
setInterval(ad_slide, 5000);
ad_slide();

// 증시 시간 업데이트
function updateDateTime() {
    const dateTimeElement = document.getElementById('dateTime');
    const now = new Date();
    const formattedDateTime = `${String(now.getMonth() + 1).padStart(2, '0')}.${String(now.getDate()).padStart(2, '0')} ` +
        `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    dateTimeElement.textContent = formattedDateTime;
}

updateDateTime();

document.getElementById('refresh').addEventListener('click', updateDateTime);