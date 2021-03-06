// JavaScript Document

$(document).ready(function () {
    //ToolTop
    menuHover($("#menu li>a"), $("#menu li p"), 200);
    //Navbar
    $("#Navbar").hover(function () {
        $("#ToolNav").addClass("ToolNavbar-hover");
    }, function () {
        $("#ToolNav").removeClass("ToolNavbar-hover");
    });
    //Navbar
    //Navbar
    $(".TopNav-MenuItem").hover(function () {
        var index = $(this).index();
        $("#Navbar").addClass("TopNav-showWrap-show");
        $(".menu-title").eq(index).addClass("current");
        $("#Navbar").css("overflow", "visible");
    }, function () {
        var index = $(this).index();
        $("#Navbar").removeClass("TopNav-showWrap-show");
        $(".menu-title").eq(index).removeClass("current");
        $("#Navbar").css("overflow", "hidden");
    });

    var action = getQueryString("action");
    action = action == null ? "mysite" : action;
    $(".TUserNavBar > li").removeClass("TnActive");
    $("#" + action).addClass("TnActive");
    $(".ToolChoese").each(function () {
        _select({
            select: $(this).find("div.SearChoese"),
            options: $(this).find("ul.SearChoese-show"),
            option: $(this).find("ul.SearChoese-show li a"),
            t: "slide", //效果（可选参数）
            parents: $(".ToolChoese") //多个select时，传入父级（可选参数）
        });
    });


    //toppage-begin
    $(".AllClass .AC-Btn").click(function () {
        if (!$(".MenuShow").hasClass("hide")) {
            $(".MenuShow").addClass("hide");
        } else {
            $(".MenuShow").removeClass("hide");
        }
    })

    $(".MenuShow a").click(function () {
        $(".MenuShow").addClass("hide");
    })


    $(".TMain01-head a").hover(function () {
        var index = $(this).index();
        $(".TMain01-head a").removeClass("TMA01-HeadCurt");
        $(this).addClass("TMA01-HeadCurt");
        $("div.TMain01show").addClass("hide");
        $("div.TMain01show").eq(index).removeClass("hide");

    });


    $(".headtag a").hover(function () {

        var index = $(this).index();
        $(".headtag a").removeClass("tagCurt");
        $(this).addClass("tagCurt");
        $(".TopMainTag-show").addClass("hide");
        $(".TopMainTag-show").eq(index).removeClass("hide");

    });

    $(".TMain05-head a").hover(function () {

        var index = $(this).index();
        $(".TMain05-head a").removeClass("TMain05-HeadCurt");
        $(this).addClass("TMain05-HeadCurt");
        $(".TMain05-Cent-show").addClass("hide");
        $(".TMain05-Cent-show").eq(index).removeClass("hide");

    });


    //toppage-end
    $('.navList li, .editShare li').hover(function () {
        var listTwo = $(this).children().hasClass('two');
        if (listTwo == true) {
            $(this).toggleClass('hover');
        };
    });
    //toplist-begin
    menuHover($('a.downMenu'), $('.downMenuShow'), 200, function (_this) {
        $('a.downMenu').text($(_this).text());
        $('.downMenuShow').hide();
    });
    //toplist-end


    var trime;
    $(".ContTit .PCop").hover(function () {
        var propHtml = $(this).parent().find(".hfCss").html();
        $(".ContTPop").html(propHtml);
        clearTimeout(trime);
        var oe = $(this).offset();
        $(".ContTPop").stop().animate({ top: oe.top + 10, left: oe.left + 300 }, 200, function () {
            $(this).show();
        });
    }, function () {
        trime = setTimeout(function () { $(".ContTPop").hide() }, 200);
    });
    $(".ContTPop").hover(function () {
        clearTimeout(trime);
        $(this).show();
    }, function () {
        trime = setTimeout(function () { $(".ContTPop").hide() }, 200);
    });

});

function menuHover(menuObj, menuItem, timer, fn) {
    var hoverTimer, outTimer;
    menuObj.hover(function () {
        var _this = $(this);
        clearTimeout(outTimer);
        hoverTimer = setTimeout(function () {
            menuItem.hide();
            _this.nextAll().show();
        }, timer);
    }, function () {
        var _this = $(this);
        clearTimeout(hoverTimer);
        outTimer = setTimeout(function () {
            _this.nextAll('.downMenuShow').hide();
        }, timer);
    });
    menuItem.hover(function () {
        var _this = $(this);
        clearTimeout(outTimer);
        hoverTimer = setTimeout(function () {
            _this.show();
        }, timer);
    }, function () {
        var _this = $(this);
        clearTimeout(hoverTimer);
        outTimer = setTimeout(function () {
            _this.hide();
        }, timer);
    });
    if (fn) {
        menuItem.children().click(function () {
            fn(this);
        });
    }
};
//SearchWrapHid-Cent
var checkFocus = function (options) {
    var thisCheck = options.obj_input; //当前input
    var msgBox = options.msgBox; //当前提示标签
    checkValue = thisCheck.val();
    var trime = options.trime !== undefined ? options.trime : 200;
    thisCheck.focus(function () {
        msgBox.fadeOut(trime);
    });
    thisCheck.blur(function () {
        if ($(this).val() == "") {
            if (msgBox.hasClass(options.Tip)) {
                msgBox.stop(true, true).fadeIn(trime);
            }
            return false;
        } else {
            msgBox.stop(true, true).fadeOut(trime);
            return true;
        }
    });
    msgBox.click(function () {
        thisCheck.focus();
    });

    function init() {
        if (checkValue !== '' || thisCheck.focus()) {
            msgBox.stop(true, true).fadeOut(trime);
        } else {
            msgBox.stop(true, true).fadeIn(trime);
        }
    }
    init();
};
var clearInput = function (options) {
    var thisCheck = options.obj_input; //当前input
    var msgBox = options.msgBox; //当前提示标签
    checkValue = thisCheck.val();
    var trime = options.trime !== undefined ? options.trime : 100;
    thisCheck.bind("blur keyup", function () {
        if ($(this).val() == "") {
            if (msgBox.hasClass(options.Tip)) {
                msgBox.stop(true, true).fadeOut(trime);
            }
        } else {
            msgBox.stop(true, true).fadeIn(trime);
        }
    });
    msgBox.click(function () {
        thisCheck.focus();
        msgBox.stop(true, true).fadeOut(trime);
        thisCheck.val("");
    });

    function init() {
        if (checkValue !== '') {
            msgBox.stop(true, true).fadeIn(trime);
        } else {
            msgBox.stop(true, true).fadeOut(trime);
        }
    }
    init();
};
var _select = function (settings) {
    settings.select.bind("selectstart", function () { return false; }); //禁用选中IE，其他-moz-user-select:none;
    settings.select.click(function (e) {
        if (settings.parents)
            if (settings.parents.length > 1) settings.parents.find("ul").not(settings.options).hide(); //如果有多个select隐藏非当前的所有相关ul
        e.stopPropagation();
        if (settings.options.is(":visible")) showType(0);
        else showType(1);
    });
    settings.option.click(function () {
        settings.select.text($(this).text());
        settings.select.next().val($(this).attr("val"));
        showType(0);
    });
    $(document).click(function () {
        if (settings.options.is(":visible")) showType(0);
    });

    function showType(flage) {
        switch (settings.t) {
            case "slide":
                if (flage) settings.options.slideDown(50);
                else settings.options.slideUp(50);
                break;
            case "fade":
                if (flage) settings.options.fadeIn(200);
                else settings.options.fadeOut(200);
                break;
            default:
                if (flage) settings.options.show();
                else settings.options.hide();
                break;
        }
    }
};
Array.prototype.unique = function (isStrict) {
    if (this.length < 2) return [this[0]] || [];
    var tempObj = {},
			newArr = [];
    for (var i = 0; i < this.length; i++) {
        var v = this[i];
        var condition = isStrict ? (typeof tempObj[v] != typeof v) : false;
        if ((typeof tempObj[v] == "undefined") || condition) {
            tempObj[v] = v;
            newArr.push(v);
        }
    }
    return newArr;
};

$(function () {
    $(window).on('scroll', function () {
        var st = $(document).scrollTop();
        if (st > 0) {
            if ($('#content').length != 0) {
                var w = $(window).width(), mw = $('#content').width();
                if ((w - mw) / 2 > 70)
                    $('#gotop').css({ 'left': (w - mw) / 2 + mw + 20 });
                else {
                    $('#gotop').css({ 'left': 'auto' });
                }
            }
            $('#gotop').fadeIn(function () {
                $(this).removeClass('hide');
            })
;
        } else {
            $('#gotop').fadeOut(function () {
                $(this).addClass('hide');
            });
        }
    });
    $('#gotop .go').on('click', function () {
        $('html,body').animate({ 'scrollTop': 0 }, 500);
    });
	var Crsky_ContentPlius = new function () { };
Crsky_ContentPlius = {
    des_div_height: 78,
    isshowall: false,
    Init: function () {
        if ($("#rom_des").height() > this.des_div_height) {
            this.HideAllDes();
            $("#rom_des_showall").show();
        }
		else{
			$("#rom_des_showall").hide();
			}
    },
    ShowAllDes: function () {
        $("#rom_des").height("auto");
        $("#rom_des_showall").html("收起");
        this.isshowall = true;
    },
    HideAllDes: function () {
        $("#rom_des").height(this.des_div_height);
        $("#rom_des_showall").html("显示全部");
        this.isshowall = false;
    }

};
    $(function () {
    Crsky_ContentPlius.Init();
    $("#rom_des_showall").click(function () {
        if (Crsky_ContentPlius.isshowall) {
            Crsky_ContentPlius.HideAllDes();
        }
        else {
            Crsky_ContentPlius.ShowAllDes();
        }
    });
});

});