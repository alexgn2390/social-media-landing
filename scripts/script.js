(function () {
    const slider = $('.slider')

    slider.slick({
        dots: true,
        infinite: false,
        slidesToScroll: 1,
        slidesToShow: 1,
        adaptiveHeight: true,
        adaptiveWidth: true,
        fade: true,
        speed: 500,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    const slider2 = $('.slider-2')
    slider2.slick({
        dots: true,
        infinite: false,
        slidesToScroll: 1,
        slidesToShow: 1,
        adaptiveHeight: true,
        adaptiveWidth: true,
        fade: true,
        speed: 500,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });





    const accordionHeaders = document.querySelectorAll('.accordion-header');
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement;
            const accordionContent = accordionItem.querySelector('.accordion-content');
            const plusIcon = header.querySelector('.accordion-header-plus');
            const minusIcon = header.querySelector('.accordion-header-minus');

            // Закрытие всех аккордеонов, кроме текущего
            accordionItems.forEach(item => {
                if (item !== accordionItem) {
                    const content = item.querySelector('.accordion-content');
                    const plusIconOther = item.querySelector('.accordion-header-plus');
                    const minusIconOther = item.querySelector('.accordion-header-minus');
                    content.style.maxHeight = "0";
                    setTimeout(() => {
                        content.classList.remove('active');
                    }, 300);
                    plusIconOther.style.display = 'block';
                    minusIconOther.style.display = 'none';
                }
            });
            accordionContent.classList.toggle('active');
            // Открытие/закрытие текущего аккордеона
            if (accordionContent.classList.contains('active')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
                plusIcon.style.display = 'none';
                minusIcon.style.display = 'block';
            } else {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
                plusIcon.style.display = 'block';
                minusIcon.style.display = 'none';
            }


        });
    });




    $('#service').click(function (event) {
        event.preventDefault();
        $('.service-details')[0].scrollIntoView({behavior: "smooth"});
        // $('#header-menu').hide()
    });

    $('#service').click(function (event) {
        event.preventDefault();
        $('.service-details-2')[0].scrollIntoView({behavior: "smooth"});
    });

    $('#experience').click(function (event) {
        event.preventDefault();
        $('.experience')[0].scrollIntoView({behavior: "smooth"});

    });
    $('#success').click(function (event) {
        event.preventDefault();
        $('.success')[0].scrollIntoView({behavior: "smooth"});
    });

    $('#success').click(function (event) {
        event.preventDefault();
        $('.success-2')[0].scrollIntoView({behavior: "smooth"});
    });

    $('#faq').click(function (event) {
        event.preventDefault();
        $('.faq')[0].scrollIntoView({behavior: "smooth"});

    });
    $('#contacts').click(function (event) {
        event.preventDefault();
        $('.footer')[0].scrollIntoView({behavior: "smooth"});

    });

    $('#home-2').click(function (event) {
        event.preventDefault();
        $('.main')[0].scrollIntoView({behavior: "smooth"});
    });


    $('#service-2').click(function (event) {
        event.preventDefault();
        $('.service-details')[0].scrollIntoView({behavior: "smooth"});
        // $('#header-menu').hide()
    });

    $('#service-2').click(function (event) {
        event.preventDefault();
        $('.service-details-2')[0].scrollIntoView({behavior: "smooth"});
    });

    $('#experience-2').click(function (event) {
        event.preventDefault();
        $('.experience')[0].scrollIntoView({behavior: "smooth"});

    });
    $('#success-2').click(function (event) {
        event.preventDefault();
        $('.success')[0].scrollIntoView({behavior: "smooth"});
    });

    $('#success-2').click(function (event) {
        event.preventDefault();
        $('.success-2')[0].scrollIntoView({behavior: "smooth"});
    });

    $('#faq-2').click(function (event) {
        event.preventDefault();
        $('.faq')[0].scrollIntoView({behavior: "smooth"});

    });
    $('#contacts-2').click(function (event) {
        event.preventDefault();
        $('.footer')[0].scrollIntoView({behavior: "smooth"});

    });




    const fullName = document.getElementById('full-name')
    const phone = document.getElementById('phone')
    const popupButton = document.getElementById('popup-button')
    const popupClose = document.getElementById('popup-close')
    const ownButton = document.getElementById('own-button')
    const popupBackground = document.getElementById('popup-background')
    const popup = document.getElementById('popup')


    $(document).ready(function () {
        let header = $("#header");
        let headerOffset = header.offset().top;

        $(window).scroll(function () {
            if ($(window).scrollTop() > headerOffset) {
                header.addClass("header-fixed");
            } else {
                header.removeClass("header-fixed");
            }
        });


    });




    $('#burger-2').click(function () {
        $('#header-menu-2').toggle(); // Переключение видимости меню
    });




    $(document).on("click", function (e) {
        let headerMenu = $('#header-menu-2')
        if (headerMenu.closest(e.target).length) {
            headerMenu.hide();
        }
    });

    popupBackground.style.display = 'none'
    popupClose.onclick = () => {
        popupBackground.style.display = 'none'
    }


    ownButton.onclick = () => {
        popupBackground.style.display = 'block'
    }

    document.querySelectorAll('.button').forEach(button => {
        button.onclick = () => {
            popupBackground.style.display = 'block'
        }
    })



    $(document).on("click", function (e) {
        if (popupBackground.closest(e.target).length) {
            popupBackground.hide();
        }
    });


    document.addEventListener("DOMContentLoaded", function () {
        let phoneInput = document.getElementById('phone');
        phoneInput.addEventListener('input', function (event) {
            let phone = event.target.value.replace(/[^0-9]/g, '');
            let formattedPhone;

            if (phone.length < 2) {
                formattedPhone = '+1';
            } else if (phone.length < 5) {
                formattedPhone = '+1 (' + phone.substring(1);
            } else if (phone.length < 8) {
                formattedPhone = '+1 (' + phone.substring(1, 4) + ') ' + phone.substring(4);
            } else {
                formattedPhone = '+1 (' + phone.substring(1, 4) + ') ' + phone.substring(4, 7) + '-' + phone.substring(7, 9) + phone.substring(9, 11);
            }
            event.target.value = formattedPhone;
        });
    });



    popupButton.onclick = () => {

        fullName.style.borderColor = '#FFCA41'
        phone.style.borderColor = '#FFCA41'

        let hasError = false;

        if (!fullName.value.trim()) {
            fullName.style.borderColor = 'red'
            hasError = true;
        }

        if (!isValidPhone(phone.value.trim())) {
            phone.style.borderColor = 'red'
            hasError = true;
        }

        if (!hasError) {
            const params = {
                chat_id: '-4102255978',
                text: `Новая регистрация: \nИмя: ${fullName.value}\nТелефон: ${phone.value}\n`
            };

            console.log(params)
            telegramQuery('sendMessage', params).then(response => console.log(response));
            popupBackground.style.display = 'none'

        } else {

        }

    }


    function isValidPhone(phone) {
        let phoneRegex = /^\+?(\d{1,3})?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
        return phoneRegex.test(phone);
    }


    async function telegramQuery(method, params, full_response = false) {
        // Замените на ваш Telegram bot_id
        const bot_id = '6797358607';
        // Замените на ваш Telegram bot_token
        const bot_token = 'AAF40S40TiMG1qDVoNGYWyCUNpzs479cZno';
        const url = `https://api.telegram.org/bot${bot_id}:${bot_token}/${method}`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                body: getApiBody(params),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            return full_response ? response : data;
        } catch (error) {
            return {"status": "server_error", "response": error};
        }
    }

    function getApiBody(params) {
        return JSON.stringify(params);
    }

    $('#prevButton').click(function(){
        $('.slider').slick('slickPrev');
    });

    $('#nextButton').click(function(){
        $('.slider').slick('slickNext');
    });

    $('#prevButton-2').click(function(){
        $('.slider-2').slick('slickPrev');
    });

    $('#nextButton-2').click(function(){
        $('.slider-2').slick('slickNext');
    });

})()
