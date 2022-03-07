
const text = document.querySelector(".text")

console.log(text);


setTimeout(() => {
    text.innerHTML = "Chào mừng ngày Quốc Tế Phụ Nữ";
    setTimeout(() => {
        text.innerHTML = "Chúc bạn cùng gia đình có một ngày lễ tuyệt vời";
        setTimeout(() => {
            text.innerHTML = "Xin gửi lời chúc tới mẹ và nhưng người phụ nữ trong gia đình bạn";
            setTimeout(() => {
                text.innerHTML = "Chúc bạn, Người phụ nữ tương lai luôn vui vẻ và hạnh phúc!";
                setTimeout(() => {              
                    text.innerHTML = "Và gặp nhiều may mắn và thành công trên con đường mà bạn chọn."
                    setTimeout(() => {              
                        text.innerHTML = "사랑해";
                        setTimeout(() => {              
                            text.innerHTML = "!!!"
                        }, 500);
                    }, 4000);
                }, 4000);
            }, 5000);
        }, 4000);
    }, 2000);
}, 1000);
alert("ngày lễ vui vẻ he")