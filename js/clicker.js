$(document).ready(function() {
    var loadingSpinn = $("div.search_block form.search_hform #clickerator");

    //разделение чисел на десятки сотни тысячи по классу goodsprice
    var priceSep = function(selPriceSep) {
        $(selPriceSep).each(function() {
            var str_price = $(this).text();
            $(this).text(str_price.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '))
        });
    };

    priceSep(".goodsprice>span");
    priceSep(".cart_counternsum>p");
    priceSep(".price_td>span");
    priceSep(".cart_summary");
    priceSep(".summa_asidebl>span");
    priceSep(".summa_td>span");
    priceSep(".help_checkout>span");
    priceSep(".cart_itogo>div>span");
    priceSep(".price_word_usualy>span");
    /////////////////////////////////////////////////////////////////////////

    $('.choose_customer a').on('click', function(e) {
        e.preventDefault();
        $.ajax({
            url: '/usel://brends/?transform=/modules/tips.xsl',
            dataType: 'html',
            success: function(data) {
                $.fancybox(data, {
                    autoSize: true,

                }); // fancybox
            }
        });
    });



    var cl = function(text) {
        if (console)
            console.log(text);
        return false;
    };
    /* ---------- ajax search dropdown ------------------ */
    $('.searchin').click(function(e) {
        if ($(this).parent().children('ul').css('display') != 'block') {
            $(this).parent().children('ul').show();
            var firstClick = true;
            $(document).bind('click.myEvent', function(e) {
                if (!firstClick && $(e.target).closest('.ajax_hint').length == 0) {
                    $('.ajax_hint').hide();
                    $(document).unbind('click.myEvent');
                }
                firstClick = false;
            });
        }
        e.preventDefault();
    });

    //    if ($('.ajax_hint').css('display') != 'block') {
    //                    $('.ajax_hint').show();
    //                    var firstClick = true;
    //                    $(document).bind('click.myEvent', function(e) {
    //                        if (!firstClick && $(e.target).closest('.ajax_hint').length == 0) {
    //                            $('.ajax_hint').hide();
    //                            $(document).unbind('click.myEvent');
    //                        }
    //                        firstClick = false;
    //                    });
    //                }
    //                
    //                e.preventDefault();
    //            });

    $('.searchin').bind('keyup', function(e) {
        if (e.keyCode == 38) { //вверх
            if ($(this).parent().children('ul').find('li').filter('.hover').length == 0) {
                $(this).parent().children('ul').find('li').last().addClass('hover');
            } else {
                $(this).parent().children('ul').find('li').filter('.hover').removeClass('hover').prev().addClass('hover');
            }
        } else
        if (e.keyCode == 40) { //вниз
            if ($(this).parent().children('ul').find('li').filter('.hover').length == 0) {
                $(this).parent().children('ul').find('li').first().addClass('hover');
            } else {
                $(this).parent().children('ul').find('li').filter('.hover').removeClass('hover').next().addClass('hover');
            }
        } else
        if (e.keyCode == 13) { //enter
            return false;
            if ($(this).parent().children('ul').find('li').filter('.hover').length) {
                window.location.href = $(this).parent().children('ul').find('li').filter('.hover').children('a').attr('href');
            }
        } else
        if (e.keyCode == 39) { //вправо
            return false;
            if ($(this).parent().children('ul').find('li').filter('.hover').length) {
                $('.searchin')
                    .val($(this).parent().children('ul').find('li').filter('.hover').text())
                    .trigger('keyup');
            }
        } else

        if ($('.searchin').val().length >= 3) {
            console.log('111111');
            loadingSpinn.css('visibility', 'visible');


            $.ajax({
                // url: '/search.php?s_st=' + $('.searchin').val(),
                url: '/udata://search/ajaxSearch/(' + $('.searchin').val() + ')//20/40/40/80?transform=/modules/ajaxsearch.xsl',
                dataType: 'html',
                success: function(data) {

                    console.log('2222222');
                    loadingSpinn.css('visibility', 'hidden');
                    $('.ajax_hint').html(data).show();
                    priceSep(".seppr");
                }
            });
        } else {
            $('.ajax_hint').parent().children
            ('ul').hide();
        }

        //  if ($('.searchin').val().length >= 3) {
        //     $.ajax({
        //         url: '/search.php?s_st=' + $('.searchin').val(),
        //         dataType: 'html',
        //         success: function(data) {
        //             $('.ajax_hint').html(data).show();
        //         }
        //     });
        // } else {
        //     $('.ajax_hint').parent().children('ul').hide();
        // }
    });


    $('#form_zakaz_submit').on('click', function() {
        yaCounter7760038.reachGoal('form_zakazat_not_send');
    });

    $('.buybutton, .aside_button').on('click', function() {
        yaCounter7760038.reachGoal('product_add_to_cart');
    });

    $('.chechout_cartbtn a').on('click', function() {
        yaCounter7760038.reachGoal('go_to_cart_on_futer');
    });

    $('#contacts_backconnect_button').on('click', function() {
        yaCounter7760038.reachGoal('click_to_faq_form');
    });

    $('#on_line_montage').on('click', function() {
        yaCounter7760038.reachGoal('on_line_montage');
    });

    $('#obslugivanie_min').on('click', function() {
        yaCounter7760038.reachGoal('obslugivanie_min');
    });

    $('#obslugivanie_max').on('click', function() {
        yaCounter7760038.reachGoal('obslugivanie_max');
    });

    $('#project').on('click', function() {
        yaCounter7760038.reachGoal('project');
    });

    var path_ya = window.location.pathname;

    $('.cart_kont_buttons input').on('click', function() {
        if (path_ya == "/uslugi/montazh/") {
            yaCounter7760038.reachGoal('on_line_montage_may_be_send');
        };
        if (path_ya == "/uslugi/servisnoe_obsluzhivanie/") {
            yaCounter7760038.reachGoal('obslugivanie_may_be_send');
        };
        if (path_ya == "/uslugi/proektirovanie/") {
            yaCounter7760038.reachGoal('project_may_be_send');
        };
    });

    $('#form_for form').bind('submit', function() {
        if (path_ya == "/uslugi/montazh/") {
            yaCounter7760038.reachGoal('on_line_montage_send');
        };
        if (path_ya == "/uslugi/servisnoe_obsluzhivanie/") {
            yaCounter7760038.reachGoal('obslugivanie_send');
        };
        if (path_ya == "/uslugi/proektirovanie/") {
            yaCounter7760038.reachGoal('project_send');
        };
    });




    // скрыть выдачу поиска
    $(document).mouseup(function(e) {
        var container = $("#ajax_hint");
        if (container.has(e.target).length === 0) {
            container.hide();
        }
    });



    $('#opaopaopapa').bind('submit', function() {
        // alert ('1111');

        // console.table($(this).serialize());

        $.ajax({
            type: 'POST',
            url: '/webforms/send/',
            data: $(this).serialize(),
            success: function(data) {
                // alert ('спасибо')
                yaCounter7760038.reachGoal('form_zakazat_send');

                $('#opaopaopapa').fadeOut(0).delay(3000).fadeIn(0);
                $('#opaopaopapa2').fadeIn(0).delay(2900).fadeOut(0);
                $('.fancybox-overlay').delay(2900).fadeOut(0);


            }
        });

        return false;

    });

    // допилить
    $('.outnstock').click(function() {
        var outId = $(this).attr('id'),
            outPrice = $(this).attr('data-price'),
            outArticle = $(this).attr('data-article'),
            outTovarname = $(this).attr('data-tovarname');

        $.ajax({
            url: '/udata://webforms/add/313/?transform=/modules/forms_popap.xsl',
            dataType: 'html',
            success: function(data) {


                // console.log(outId);
                // console.log(outPrice);
                // console.log(outArticle);
                // console.log(outTovarname);

                // var checkerajaxFu = true;
                yaCounter7760038.reachGoal('click_to_btn_zakazat');
                text_before = '<h2>Заказать товар</h2>';
                text_after = '<input name="data[new][tovar]" type="hidden" value="' + outId + '"><input name="data[new][cena]" type="hidden" value="' + outPrice + '"><input name="data[new][artikul]" type="hidden" value="' + outArticle + '"><input name="data[new][tovarname]" type="hidden" value="' + outTovarname + '">';

                var contentAjaxer = $("div#forminputter").html(text_before + data + text_after).parent().parent().parent().parent();

                $.fancybox(data, {
                    type: 'ajax',
                    autoSize: true,
                    // openEffect: 'fade',
                    // closeEffect: 'elastic',
                    content: contentAjaxer
                });
            },
            error: function(data) { // (data) what for?
                return false;
            }
        });
        return false;
    });


    $(".outnstock2").click(function() {

        // 'beforeLoad': function() {
        var outId2 = $(this).attr('id'),
            outPrice2 = $(this).attr('data-price'),
            outArticle2 = $(this).attr('data-article'),
            outTovarname2 = $(this).attr('data-tovarname');

        $.ajax({
            url: '/udata://webforms/add/318/?transform=/modules/forms_popap.xsl',
            dataType: 'html',
            success: function(data) {

                // console.log(outId2);
                // console.log(outPrice2);
                // console.log(outArticle2);
                // console.log(outTovarname2);

                text_before = '<h2>Узнать цену</h2><p align="justify" style="width:400px;font-size:14px;">Цену на данный товар необходимо уточнять у производителя.<br>Пожалуйста, оставьте свои контакты, менеджер свяжется с вами в ближайшее время и уточнит наличие товара, цену и дату поставки.</p>';

                text_after = '<input name="data[new][tovar]" type="hidden" value="' + outId2 + '"><input name="data[new][cena]" type="hidden" value="' + outPrice2 + '"><input name="data[new][artikul]" type="hidden" value="' + outArticle2 + '"><input name="data[new][tovarname]" type="hidden" value="' + outTovarname2 + '">';
                // alert (test);

                var contentAjaxer = $("div#forminputter").html(text_before + data + text_after).parent().parent().parent().parent();

                $.fancybox(data, {
                    type: 'ajax',
                    autoSize: true,
                    // openEffect: 'fade',
                    // closeEffect: 'elastic',
                    content: contentAjaxer
                });
            },
            error: function(data) { // (data) what for?
                return false;
            }
        });
        return false;
    });


    $('#valueee').keyup(function() {
        nowval = $(this).val();
        $('#max_obem_parilki_from').attr('value', nowval);
        $('#min_obem_parilki_to').attr('value', nowval);
    });

    // сортировка

    $(".back_filter_sort").on('click', function() {
        hash = decodeURIComponent(window.location.search.toString());
        if (hash.match(/(\?*)&order_filter\[price\]=0/)) {
            red = hash.replace(/(\?*)&order_filter\[price\]=0/, '');
        } else if (hash) {
            red = hash + '&order_filter[price]=0';
        } else {
            red = hash + '?&order_filter[price]=0';
        }
        window.location.search = red;
    });

    var clickeratorMoreG = $("article #clickerator");

    $("a.more_goods").click(function() {

        clickeratorMoreG.css('visibility', 'visible');

        console.log('button pressed');

        id = $(this).attr('id');
        id_text = "#" + id;
        id_all = "#" + id + "_all";
        href = "?" + $(this).attr("filter");
        total = parseInt($(this).attr("rel"));
        perpage = parseInt($(this).data("per-page"));
        tonext = parseInt($(this).attr("alt"));
        parent = parseInt($(this).attr("parent"));
        tonext_1 = tonext + 1
        urla = '/udata://catalog/getObjectsList/notemplate/' + id + '/' + perpage + '//' + parent + '/280/1' + href + "&p=" + tonext + '&transform=/modules/catalog_popap.xsl'

        hash = window.location.search.toString();
        if (hash) {
            if (hash.match(/&pajax=(\d+(\.\d)*)/i)) {
                urlancor = hash.replace(/&pajax=(\d+(\.\d)*)/i, '&pajax=' + tonext_1);
            } else if (hash.match(/\?pajax=(\d+(\.\d)*)/i)) {
                urlancor = hash.replace(/\?pajax=(\d+(\.\d)*)/i, '?pajax=' + tonext_1);
            } else {
                urlancor = hash + '&pajax=' + tonext_1;
            }
        } else {
            urlancor = '?pajax=' + tonext_1;
        }
        history.pushState(null, null, urlancor);


        next = tonext_1 * perpage;
        jQuery.ajax({
            url: urla,
            dataType: 'html',
            success: function(data) {
                // alert (test);
                $(".cat_item_plits:last-child").after(data);
                $(id_text).attr("alt", tonext + 1);
                $(id_text).attr("href", href + "&p=" + tonext_1);

                $(id_all).attr("alt", tonext + 1);
                $(id_all).attr("href", href + "&p=" + tonext_1);

                if (next >= total) {
                    $('.more_goods_inf').text('Показано ' + total + " товаров из " + total);
                    $("a.more_goods").remove();
                    priceSep(".goodsprice>span");
                    priceSep(".price_word_usualy>span");
                } else {
                    $('.more_goods_inf').text('Показано ' + next + " товаров из " + total);
                    priceSep(".goodsprice>span");
                    priceSep(".price_word_usualy>span");
                    //                  
                }
                clickeratorMoreG.css('visibility', 'hidden');
                console.log('contend displayed');


            }




        });





        return false;


    });

    $("a.all_goods").click(function() {

        $("#clickerator").css('visibility', 'visible');
        id = $(this).attr('id');
        id = id.substr(0, id.length - 4);
        id_text = "#" + id;
        href = "?" + $(this).attr("filter");
        // total = parseInt($(this).attr("rel"));
        perpage = parseInt($(this).data("per-page"));
        total = parseInt($(this).data("total"));
        tonext = parseInt($(this).attr("alt"));
        parent = parseInt($(this).attr("parent"));
        tonext_1 = tonext + 1
        urla = '/udata://catalog/getObjectsList/notemplate/' + id + '/' + perpage + '//' + parent + '/280/1' + href + "&p=" + tonext + '&transform=/modules/catalog_popap.xsl'
        hash = window.location.search.toString();
        if (hash) {
            if (hash.match(/&pajax=(\d+(\.\d)*)/i)) {
                urlancor = hash.replace(/&pajax=(\d+(\.\d)*)/i, '&pajax=' + tonext_1);
            } else if (hash.match(/\?pajax=(\d+(\.\d)*)/i)) {
                urlancor = hash.replace(/\?pajax=(\d+(\.\d)*)/i, '?pajax=' + tonext_1);
            } else {
                urlancor = hash + '&pajax=' + tonext_1;
            }
        } else {
            urlancor = '?pajax=' + tonext_1;
        }
        history.pushState(null, null, urlancor);

        next = tonext_1 * perpage;
        all_goods(urla, tonext, href, total, parent, next, perpage)
        return false;
    });

    function all_goods(urla, tonext, href, total, parent, next, perpage) {
        jQuery.ajax({
            url: urla,
            dataType: 'html',
            success: function(data) {
                $(".cat_item_plits:last-child").after(data);

                if (next >= total) {
                    $('.more_goods_inf').text('Показано ' + total + " товаров из " + total);
                    $("a.more_goods").remove();
                    $("a.all_goods").remove();
                    priceSep(".goodsprice>span");
                    priceSep(".price_word_usualy>span");
                } else {
                    tonext = tonext + 1;
                    next = tonext * perpage;

                    urla_next = '/udata://catalog/getObjectsList/notemplate/' + id + '/' + perpage + '//' + parent + '/280/1' + href + "&p=" + tonext + '&transform=/modules/catalog_popap.xsl';

                    $('.more_goods_inf').text('Показано ' + next + " товаров из " + total);
                    priceSep(".goodsprice>span");
                    priceSep(".price_word_usualy>span");
                    hash = window.location.search.toString();
                    if (hash) {
                        if (hash.match(/&pajax=(\d+(\.\d)*)/i)) {
                            urlancor = hash.replace(/&pajax=(\d+(\.\d)*)/i, '&pajax=' + tonext);
                        } else if (hash.match(/\?pajax=(\d+(\.\d)*)/i)) {
                            urlancor = hash.replace(/\?pajax=(\d+(\.\d)*)/i, '?pajax=' + tonext);
                        } else {
                            urlancor = hash + '&pajax=' + tonext;
                        }
                    }
                    history.pushState(null, null, urlancor);

                    all_goods(urla_next, tonext, href, total, parent, next, perpage);
                }

                $("#clickerator").css('visibility', 'hidden');

            }

        });
    }

    //////////////////////////////////////////
    // закладки описания на странице товара //
    //////////////////////////////////////////

    //////////////
    // описание //
    //////////////
    $('div.good_moreinfobtn_about').click(function() {

        $('div.good_moreinfoblock_about').show();
        $('table.good_moreinfoblock_details').hide();

        // внешний вид кнопок при нажатии
        $(this).addClass('hoverbtnser');
        $('div.good_moreinfobtn_details').removeClass('hoverbtnser');
    });


    ////////////////////
    // характеристики //
    ////////////////////
    $('div.good_moreinfobtn_details').click(function() {

        $('div.good_moreinfoblock_about').hide();
        $('table.good_moreinfoblock_details').show();

        // внешний вид кнопок при нажатии
        $('div.good_moreinfobtn_about').removeClass('hoverbtnser');
        $(this).addClass('hoverbtnser');
    });


    //всплывающее главное меню

    $('ul#my-menu1 ul').each(function(i) { // Check each submenu:
        $(this).css('display', 'none');
        $(this).prev().addClass('collapsible collapsed').mouseover(function() { // Attach an event listener



            var this_i = $('ul#my-menu1 ul').index($(this).next()); // The index of the submenu of the clicked link


            if ($(this).next().css('display') == 'none') {
                $(this).next().slideDown(200, function() { // Show submenu:
                    $(this).prev().removeClass('collapsed').addClass('expanded');
                    //      cookieSet(this_i);
                });
            } else {
                $(this).next().slideUp(200, function() { // Hide submenu:
                    $(this).prev().removeClass('expanded').addClass('collapsed');
                    //cookieDel(this_i);
                    $(this).find('ul').each(function() {
                        $(this).hide(0, $('ul#my-menu1 ul').index($(this))).prev().removeClass('expanded').addClass('collapsed');
                    });
                });
            }
            return false; // Prohibit the browser to follow the link address
        });


    });

    function cookieSet(index) {
        $.cookie('submenuMark-' + index, 'opened', {
            expires: null,
            path: '/'
        }); // Set mark to cookie (submenu is shown):
    }

    function cookieDel(index) {
        $.cookie('submenuMark-' + index, null, {
            expires: null,
            path: '/'
        }); // Delete mark from cookie (submenu is hidden):
    }

    // ajax поиск товаров
    // слайдер


    $(".slider-range").each(function() {
        var id = $(this).attr('id');
        var max_val = "#max_" + id;
        var min_val = "#min_" + id;
        var value_min = parseInt($(min_val).attr('placeholder'));
        var value_max = parseInt($(max_val).attr('placeholder'));
        var max = parseInt($(max_val).attr('rel'));
        var catid = parseInt($('#search_param').data('categoryid'));
        $(this).slider({
            range: true,
            min: 0,
            max: max,
            values: [value_min, value_max],

            slide: function(event, ui) {
                $(min_val).val(ui.values[0]);
                //                $( ".min_val" ).attr("class","min_val"+unic_nubr);
                $(max_val).val(ui.values[1]);
                //                $( ".max_val" ).attr("class","max_val"+unic_nubr);
            },
            stop: function(event, ui) {
                var msg = $('#search_param').serialize();
                $.ajax({
                    type: 'get',
                    url: '/udata://catalog/getObjectsList/notemplate/' + catid + '/0/0/100/280/1.json',
                    dataType: "json",
                    data: msg,
                    success: function(data) {
                        //всплывающая подсказка о кол-ве найденных товаров
                        $("div.SearchHelperText").remove();
                        $(max_val).after("<div class='SearchHelperText'></div>");
                        if (data.total) {
                            $("div.SearchHelperText").html("<span>Найдено " + data.total + " товаров</span> <button type='submit'>показать</button>");
                        } else {
                            $("div.SearchHelperText").html("<span>Ничего не найдено</span><span>Пожалуйста, измените условия поиска.</span>");
                        };
                        $("div.SearchHelperText").hide();
                        $("div.SearchHelperText").fadeIn('1800');
                        //                          setTimeout(function(){$("div.SearchHelperText").fadeOut('1800')},5000);
                    },
                    error: function(xhr, str) {
                        alert('Возникла ошибка: ' + xhr.responseCode);
                    }
                });
            }
        });
    });
    // селектор
    $("div.select_filterbl").each(function() {
        var selitem = $(this).children('select').attr('id');
        $('#' + selitem).change(function() {
            //всплывающая подсказка о кол-ве найденных товаров в селектах
            var catid = parseInt($('#search_param').data('categoryid'));

            $("div.SearchHelperText").remove();
            $(this).parent().before("<div class='SearchHelperText'></div>");
            var msg = $('#search_param').serialize();
            $.ajax({
                type: 'get',
                url: '/udata://catalog/getObjectsList/notemplate/' + catid + '/0/0/100/280/1.json',
                dataType: "json",
                data: msg,
                success: function(data) {
                    if (data.total) {
                        $("div.SearchHelperText").html("<span>Найдено " + data.total + " товаров</span> <button type='submit'>показать</button>");
                    } else {
                        $("div.SearchHelperText").html("<span>Ничего не найдено</span><span>Пожалуйста, измените условия поиска.</span>");
                    };
                    $("div.SearchHelperText").hide();
                    $("div.SearchHelperText").fadeIn('1800');
                    //                setTimeout(function(){$("div.SearchHelperText").fadeOut('1800')},5000);
                },
                error: function(xhr, str) {
                    alert('Возникла ошибка: ' + xhr.responseCode);
                }
            });
        });
    });


    // min инпут
    $("div.back_filterslid").each(function() {
        var oneInput = $(this).children('input.min_val').attr('id');
        $('#' + oneInput).keyup(function() {
            //всплывающая подсказка о кол-ве найденных товаров в селектах
            var catid = parseInt($('#search_param').data('categoryid'));

            $("div.SearchHelperText").remove();
            $(this).before("<div class='SearchHelperText'></div>");
            var msg = $('#search_param').serialize();
            $.ajax({
                type: 'get',
                url: '/udata://catalog/getObjectsList/notemplate/' + catid + '/0/0/100/280/1.json',
                dataType: "json",
                data: msg,
                success: function(data) {
                    if (data.total) {
                        $("div.SearchHelperText").html("<span>Найдено " + data.total + " товаров</span> <button type='submit'>показать</button>");
                    } else {
                        $("div.SearchHelperText").html("<span>Ничего не найдено</span><span>Пожалуйста, измените условия поиска.</span>");
                    };
                    $("div.SearchHelperText").hide();
                    $("div.SearchHelperText").fadeIn('1800');
                    //                setTimeout(function(){$("div.SearchHelperText").fadeOut('1800')},5000);
                },
                error: function(xhr, str) {
                    alert('Возникла ошибка: ' + xhr.responseCode);
                }
            });
        });
    });

    // max инпут
    $("div.back_filterslid").each(function() {
        var oneInput = $(this).children('input.max_val').attr('id');
        $('#' + oneInput).keyup(function() {
            //всплывающая подсказка о кол-ве найденных товаров в селектах
            var catid = parseInt($('#search_param').data('categoryid'));

            $("div.SearchHelperText").remove();
            $(this).before("<div class='SearchHelperText'></div>");
            var msg = $('#search_param').serialize();
            $.ajax({
                type: 'get',
                url: '/udata://catalog/getObjectsList/notemplate/' + catid + '/0/0/100/280/1.json',
                dataType: "json",
                data: msg,
                success: function(data) {
                    if (data.total) {
                        $("div.SearchHelperText").html("<span>Найдено " + data.total + " товаров</span> <button type='submit'>показать</button>");
                    } else {
                        $("div.SearchHelperText").html("<span>Ничего не найдено</span><span>Пожалуйста, измените условия поиска.</span>");
                    };
                    $("div.SearchHelperText").hide();
                    $("div.SearchHelperText").fadeIn('1800');
                    //                setTimeout(function(){$("div.SearchHelperText").fadeOut('1800')},5000);
                },
                error: function(xhr, str) {
                    alert('Возникла ошибка: ' + xhr.responseCode);
                }
            });
        });
    });



    // заставляем работать input под слайдер
    $(".min_val").keyup(function() {
        val = $(this).val();
        id = "#" + $(this).attr('id').substr(4);
        $(id).slider("values", 0, val);
    });
    $(".max_val").keyup(function() {
        val = $(this).val();
        id = "#" + $(this).attr('id').substr(4);
        id_min = "#min_" + $(this).attr('id').substr(4);
        500
        val_min = $(id_min).val()
        if (val < val_min) {
            val = val_min;
            $(this).val(val);
        }
        $(id).slider("values", 1, val);
    });
    $(".min_val").blur(function() {
        val = $(this).val();
        id = "#" + $(this).attr('id').substr(4);
        id_max = "#max_" + $(this).attr('id').substr(4);
        val_max = $(id_max).val()
        if (val > val_max) {
            val = val_max;
            $(this).val(val);
        }
        $(id).slider("values", 0, val);
    });
    $(".max_val").blur(function() {
        val = $(this).val();
        id = "#" + $(this).attr('id').substr(4);
        id_min = "#min_" + $(this).attr('id').substr(4);
        val_min = $(id_min).val()
        if (val < val_min) {
            val = val_min;
            $(this).val(val);
        }
        $(id).slider("values", 1, val);
    });
    $('input[name=data\\[new\\]\\[region\\]]').val($('.ul_towns p').text());
});

$(document).on('click', '.instok', function() {
    id = $(this).data('id');
    show = $(this).data('show');
    if (show == 1) {
        return true;
    };
    $.ajax({
        url: '/udata://emarket/stores_info/' + id + '/?transform=/modules/tips.xsl',
        dataType: 'html',
        success: function(data) {
            $('div.hiddenTooltip').html(data);
            // $('div.hiddenTooltip').append("<p>Внимание! При наличии товара в г. Новосибирск и г. Екатеринбург его доставка в г. Москва и г. Санкт-Петербург невозможна! Приобрести данный товар можно только под заказ.</p>");

        }
    });
    $(this).next('div.hiddenTooltip').show("fast");
    $('.instok').not(this).next('div.hiddenTooltip').hide("fast");
})

$(document).click(function(event) {
    if ($(event.target).closest(".instok, .hiddenTooltip").length) return;
    $("div.hiddenTooltip").hide("fast");
    event.stopPropagation();
});
