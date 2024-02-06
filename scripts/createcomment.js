$('.sendcomment').click(function () {
    $('.error').hide();
    let name = $('#textboxname').val()
    let message = $('#textboxtext').val()
    if (name == '') $('#textboxname').next().show();
    else if (message == '') $('#textboxtext').next().show();
    else {
        let comments = $('.comments');
        let item = $('<div class="comments__item"></div>')
        let img = $('<div class="comments__ava"><img src="a0.jpg" alt=""></div>')
        let content = $('<div class="comments__content"></div>');
        let usermessage = $(`<div class="comments__text">${message}</div>`)

        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yy = today.getFullYear();
        if (dd < 10) { dd = '0' + dd } if (mm < 10) { mm = '0' + mm } today = dd + '.' + mm + '.' + yy;

        let username = $(`<div class="comments__title"><strong>${name}</strong> | <span class="comment-date">${today}</span></div>`)

        item.append(img)
        item.append(content)
        content.append(username)
        content.append(usermessage)
        comments.append(item)
        $('#textboxname, #textboxtext').val('');
        $('.error').hide();
        // $("a:not([modal], .icon-close), .scroll").bind('click', function (e) {
        //     e.preventDefault();
        //     if ($('.wheel__content').is(':visible')) $("html,body").animate({ scrollTop: $(".wheel__content").offset().top - ($(window).height() - $(".wheel__content").outerHeight(true)) }, 1e3)
        //     else $("html,body").animate({ scrollTop: $(".wheel__wrapper").offset().top }, 1e3)
        //     return false;
        // });
        $('.add-comm').hide(500)
    }
})