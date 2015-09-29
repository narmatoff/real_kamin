$.ajaxSetup({
async: false
});
function pries(id) {
  var val = null;
  $.getJSON("/udata/emarket/priceall/" + id + ".json", function(data){
   // val = data.price.actual;

   val = $.map(data.lines, function(el) { return el; });;

  });
  return val;

};
$(document).ready(function(){
  $('#sp1 input:checked').attr('checked', false);
  $('.spoiler').hide();
  $('#sp1').show();

       //цены Вулкан диаметр 104
  //************ ЦЕНЫ ВУЛКАН *******************
  
  var $vulkan_cena104 = [10000,9486,9653,9667,9575,9336,9391,9411,9401,9316,9326,9381,9226,9427,9248,9356,9290,9294,9292,15745,9439,15713, 9250,9461];      //цены Вулкан диаметр 104
  var $vulkan_cena115 = [10000,9487,9654,9668,9576,9338,9393,9413,9403,9318,9328,9383,9228,9430,9249,9357,9291,9295,9293,15746,9440,9281,9252,9462];      //цены Вулкан диаметр 115
  var $vulkan_cena120 = [10000,9488,9655,9669,9577,9930,9986,10002,9994,9914,9922,9978,9810,10042,9834,9946,9874,9890,9882,15747,10051,15714,9842,10075];      //цены Вулкан диаметр 120
  var $vulkan_cena130 = [10000,9489,9656,9670,9578,9931,9987,10003,9995,9915,9923,9979,9811,10043,9835,9947,15722,9891,9883,15749,10052,15716,9843,10076];      //цены Вулкан диаметр 130
  var $vulkan_cena150 = [10000,9490,9658,9671,9580,15760,9988,10004,9996,9916,9924,9980,9812,10044,9836,9948,15723,9892,9884,15750,10053,15717,9844,10077];      //цены Вулкан диаметр 150
  var $vulkan_cena160 = [10000,9491,15763,9672,9582,15761,9989,10005,9997,9917,9925,9981,9813,10045,9837,9949,15724,9893,9885,15751,10054,15788,9845,10078];      //цены Вулкан диаметр 160
  var $vulkan_cena180 = [10000,9493,15764,9673,9584,15762,9990,10006,9998,9918,9926,9982,9814,10046,9838,9950,15725,9894,9886,15752,10055,15718,9846,10079];    //цены Вулкан диаметр 180
  var $vulkan_cena200 = [10000,9495,15765,9674,15757,9935,9991,10007,9999,9919,9927,9983,9815,10047,9839,9951,15726,9895,9887,15753,10056,9871,9847,10080];    //цены Вулкан диаметр 200
  var $vulkan_cena250 = [10000,9496,9665,9675,9587,9936,9992,10008,10000,9920,9928,9984,9816,10048,15712,9952,15727,9896,9888,15754,10057,15719,9848,10081];    //цены Вулкан диаметр 250
  var $vulkan_cena300 = [10000,9497,9666,9676,9588,9937,9993,10009,10001,9921,9929,9985,9817,10049,9841,9953,15728,9897,9889,15755,10050,9873,9849,10082];  //цены Вулкан диаметр 300
  var $vulkanB100_cena104 = [10000,9486,9653,9667,9575,15758,15737,15741,15739,15731,15733,15735,15710,15743,10000,10000,15720,10000,15729,15753,10056,9871,10000,10080]; //цены Вулкан для изоляции 100 диаметр 104
  var $vulkanB100_cena130 = [10000,9489,9656,9670,9578,15759,15738,15742,15740,15732,15734,15736,15711,15744,10000,10000,15721,10000,15730,15748,15789,15715,10000,15756]; //цены Вулкан для изоляции 100 диаметр 130
  //************ ПАРАМЕТРЫ ВУЛКАН **************
  var $vulkan_el = ['Переходник','Задвижка ZHR','Труба прямая ТНR500','Труба телескопическая ТТНR250','Отводы 45º ОТНR45','Переходник моно-термо с из. 50мм. PMT50','Труба двустенная стальная с изоляцией DTH 1000','Труба двустенная стальная с изоляцией DTH 500','Труба двустенная стальная с изоляцией DTH 250','Отвод DOTH 45°','Отвод DOTH 90°','Тройник DTRH 90°','Дефлектор DDH','Фланец нерж. с изоляцией FHO','Конденсатосборник с изоляцией DCHн','Ревизия с изоляцией DRHи','Кронштейн крепления к стене DOSH','Опора напольная DOFH','Опора DOH','Элемент крепления к стене DHSH','Хомут под растяжки DHRH','Кровельный элемент 20°/45° DKH 20/45','Конус DFH','Юбка DUH'];
  var $vulkan_ssil = ['http://i-kamin.ru/catalogue/smoke/vulkan/','http://i-kamin.ru/catalogue/smoke/vulkan/card-ZHR.html','http://i-kamin.ru/catalogue/smoke/vulkan/card-THR500.html','http://i-kamin.ru/catalogue/smoke/vulkan/card-TTHR.html','http://i-kamin.ru/catalogue/smoke/vulkan/card-OTHR45.html','http://i-kamin.ru/catalogue/smoke/vulkan/card-PMT.html','http://i-kamin.ru/catalogue/smoke/vulkan/card-DTH.html','http://i-kamin.ru/catalogue/smoke/vulkan/card-DTH.html','http://i-kamin.ru/catalogue/smoke/vulkan/card-DTH.html','http://i-kamin.ru/catalogue/smoke/vulkan/card-DOTH45.html','http://i-kamin.ru/catalogue/smoke/vulkan/card-DOTH90.html','http://i-kamin.ru/catalogue/smoke/vulkan/card-DTRH90.html','http://i-kamin.ru/catalogue/smoke/vulkan/card-DDH.html','http://i-kamin.ru/catalogue/smoke/vulkan/card-FHO.html','http://i-kamin.ru/catalogue/smoke/vulkan/card-DCH.html','http://i-kamin.ru/catalogue/smoke/vulkan/card-DRH.html','http://i-kamin.ru/catalogue/smoke/vulkan/card-DOSH.html','http://i-kamin.ru/catalogue/smoke/vulkan/card-DOFH.html','http://i-kamin.ru/catalogue/smoke/vulkan/card-DOH.html','http://i-kamin.ru/catalogue/smoke/vulkan/card-DHSH.html','http://i-kamin.ru/catalogue/smoke/vulkan/card-DHRH.html','http://i-kamin.ru/catalogue/smoke/vulkan/card-DKH.html','http://i-kamin.ru/catalogue/smoke/vulkan/card-DFH.html','http://i-kamin.ru/catalogue/smoke/vulkan/card-DUH.html'];
    //схемы основные
  var $vulkan_kol_sh1 = [1,1,1,1,0,1,'f9',0,0,0,0,0,1,'f1',0,0,'f8',0,0,'f3',1,1,0,1];   //это наличие в определенной схеме. f1, f2, f3, и т.д. это флаги заменяемые формулами
  var $vulkan_kol_sh2 = [1,1,1,1,0,1,'f10',1,1,2,0,0,1,'f1',0,0,1,0,'f2','f3',1,1,0,1];  //схема 2
  var $vulkan_kol_sh3 = [1,1,0,0,0,1,'f9',1,0,0,0,1,1,'f1',0,1,'f8',0,0,'f3',1,1,0,1];   //схема 3
  var $vulkan_kol_sh4 = [1,1,0,0,0,1,'f9',0,1,2,0,1,1,'f1',0,1,1,0,'f8','f3',1,1,0,1,];  //схема 4
  var $vulkan_kol_sh5 = [1,1,0,0,0,1,'f9',1,0,0,0,1,1,'f1',0,1,'f7',1,0,'f3',1,1,0,1];   //схема 5
  var $vulkan_kol_sh6 = [1,1,0,0,0,1,'f9',0,1,2,0,1,1,'f1',0,1,0,1,'f2','f4',1,1,0,1];   //схема 6
  var $vulkan_kol_sh7 = [1,1,0,1,0,1,'f9',1,0,0,1,1,1,'f1',0,1,'f8',0,0,'f3',1,1,0,1];   //схема 7
  var $vulkan_kol_sh8 = [1,1,0,1,0,1,'f9',0,1,2,1,1,1,'f1',0,1,1,0,'f8','f3',1,1,0,1];   //схема 8
  var $vulkan_kol_sh9 = [1,1,0,1,0,1,'f9',1,1,0,1,1,1,'f1',0,1,'f7',1,0,'f3',1,1,0,1];   //схема 9
  var $vulkan_kol_sh10 = [1,1,0,1,0,1,'f9',1,2,2,1,1,1,'f1',0,1,0,1,'f2','f4',1,1,0,1];  //схема 10
  var $vulkan_kol_sh11 = [1,1,0,0,0,1,'f11',1,1,0,0,1,1,2,1,0,'f8',0,0,'f6',1,0,0,0];    //схема 11
  var $vulkan_kol_sh12 = [1,1,0,0,0,1,'f11',0,2,2,0,1,1,2,1,0,'f8',0,0,'f5',1,0,0,0];    //схема 12
  var $vulkan_kol_sh13 = [1,1,0,0,0,1,'f11',1,0,0,0,1,1,2,1,0,'f7',1,0,'f6',1,0,0,0];    //схема 13
  var $vulkan_kol_sh14 = [1,1,0,0,0,1,'f9',2,1,2,0,1,1,2,1,0,'f7',1,0,'f5',1,0,0,0];     //схема 14
  var $vulkan_kol_sh15 = [1,1,0,1,0,1,'f11',1,1,0,1,1,1,2,1,0,'f8',0,0,'f6',1,0,0,0];    //схема 15
  var $vulkan_kol_sh16 = [1,1,0,1,0,1,'f11',0,2,2,1,1,1,2,1,0,'f8',0,0,'f5',1,0,0,0];    //схема 16
  var $vulkan_kol_sh17 = [1,1,0,1,0,1,'f11',1,0,0,1,1,1,2,1,0,'f7',1,0,'f6',1,0,0,0];    //схема 17
  var $vulkan_kol_sh18 = [1,1,0,1,0,1,'f9',2,1,2,1,1,1,2,1,0,'f7',1,0,'f5',1,0,0,0];     //схема 18
  var $vulkan_kol_sh19 = [1,1,1,1,0,1,'f9',0,0,0,0,0,1,'f1',0,0,0,0,'f12',0,1,1,0,1];    //схема 19
  var $vulkan_kol_sh20 = [1,1,1,1,0,1,'f10',1,1,2,0,0,1,'f1',0,0,0,0,'f13',0,1,1,0,1];   //схема 20
  var $vulkan_kol_sh21 = [1,1,1,1,2,1,'f9',0,0,0,0,0,1,'f1',0,0,'f8',0,0,'f3',1,1,0,1];  //схема 21
  var $vulkan_kol_sh22 = [1,1,1,1,2,1,'f9',0,0,0,0,0,1,'f1',0,0,0,0,'f8','f3',1,1,0,1];  //схема 22
    //схемы для котлов газ и дизель
  var $vulkan_kol_Ksh3 = [1,1,0,0,0,1,'f9',1,0,0,0,1,0,'f1',1,0,'f8',0,0,'f3',1,1,1,1];  //схема для котла 3
  var $vulkan_kol_Ksh4 = [1,1,0,0,0,1,'f9',0,1,2,0,1,0,'f1',1,0,1,0,'f8','f3',1,1,1,1];  //схема для котла 4
  var $vulkan_kol_Ksh5 = [1,1,0,0,0,1,'f9',1,0,0,0,1,0,'f1',1,0,'f7',1,0,'f3',1,1,1,1];  //схема для котла 5
  var $vulkan_kol_Ksh6 = [1,1,0,0,0,1,'f9',0,1,2,0,1,0,'f1',1,0,0,1,'f2','f4',1,1,1,1];  //схема для котла 6
  var $vulkan_kol_Ksh7 = [1,1,0,1,0,1,'f9',1,0,0,1,1,0,'f1',1,0,'f8',0,0,'f3',1,1,1,1];  //схема для котла 7
  var $vulkan_kol_Ksh8 = [1,1,0,1,0,1,'f9',0,1,2,1,1,0,'f1',1,0,1,0,'f8','f3',1,1,1,1];  //схема для котла 8
  var $vulkan_kol_Ksh9 = [1,1,0,1,0,1,'f9',1,1,0,1,1,0,'f1',1,0,'f7',1,0,'f3',1,1,1,1];  //схема для котла 9
  var $vulkan_kol_Ksh10 = [1,1,0,1,0,1,'f9',1,2,2,1,1,0,'f1',1,0,0,1,'f2','f4',1,1,1,1]; //схема для котла 10
  var $vulkan_kol_Ksh11 = [1,1,0,0,0,1,'f11',1,1,0,0,1,0,2,1,0,'f8',0,0,'f6',1,0,1,0];   //схема для котла 11
  var $vulkan_kol_Ksh12 = [1,1,0,0,0,1,'f11',0,2,2,0,1,0,2,1,0,'f8',0,0,'f5',1,0,1,0];   //схема для котла 12
  var $vulkan_kol_Ksh13 = [1,1,0,0,0,1,'f11',1,0,0,0,1,0,2,1,0,'f7',1,0,'f6',1,0,1,0,];  //схема для котла 13
  var $vulkan_kol_Ksh14 = [1,1,0,0,0,1,'f9',2,1,2,0,1,0,2,1,0,'f7',1,0,'f5',1,0,1,0];    //схема для котла 14
  var $vulkan_kol_Ksh15 = [1,1,0,1,0,1,'f11',1,1,0,1,1,0,2,1,0,'f8',0,0,'f6',1,0,1,0,];  //схема для котла 15
  var $vulkan_kol_Ksh16 = [1,1,0,1,0,1,'f11',0,2,2,1,1,0,2,1,0,'f8',0,0,'f5',1,0,1,0];   //схема для котла 16
  var $vulkan_kol_Ksh17 = [1,1,0,1,0,1,'f11',1,0,0,1,1,0,2,1,0,'f7',1,0,'f6',1,0,1,0];   //схема для котла 17
  var $vulkan_kol_Ksh18 = [1,1,0,1,0,1,'f9',2,1,2,1,1,0,2,1,0,'f7',1,0,'f5',1,0,1,0];    //схема для котла 18
  //************ ЦЕНЫ HEDA *******************
  var $heda_cena160 = pries([10083,10087,10088,15800]);  //цены HEDA диаметр 160
  var $heda_cena200 = pries([10084,10086,10085,15800]);  //цены HEDA диаметр 200
  //************ ПАРАМЕТРЫ HEDA **************
  var $heda_el = ['Стандартный элемент дымохода','Элемент с круглой втулкой для подключения','Элемент с люком для чистки','Покрывающий элемент'];
  var $heda_ssil = ['http://i-kamin.ru/catalogue/smoke/Heda/card-elemet.html','http://i-kamin.ru/catalogue/smoke/Heda/card-elemetSoVtulkoy.html','http://i-kamin.ru/catalogue/smoke/Heda/card-elemetSLukom.html','http://i-kamin.ru/catalogue/smoke/Heda/card-pokrivaushiy.html'];
  //************ ЦЕНЫ HART *******************
  var $hartAT_cena160 = [14969,14988,14994,15015,14977,15004,14974,15001,15000,10000];       //цена Hart AT диаметр 160
  var $hartAT_cena180 = [14970,14989,14995,15016,14979,15005,14974,15001,15000,10000];       //цена Hart AT диаметр 180
  var $hartAT_cena200 = [14970,14990,14996,15017,14978,15006,14974,15001,15000,10000];       //цена Hart AT диаметр 200

  var $hartK_cena140 = [14969,14991,14997,15012,14981,15003,14974,15001,15000,15802,10000];          //цена Hart Klassik диаметр 140
  var $hartK_cena160 = [14969,14992,14998,15013,14977,15004,14974,15001,15000,15803,10000];         //цена Hart Klassik диаметр 160
  var $hartK_cena180 = [14970,14993,14999,15014,14979,15005,14974,15001,15000,15804,10000];         //цена Hart Klassik диаметр 180
  var $hartK_cena200 = [14970,15018,14982,14975,14978,15006,14974,15001,15000,15805,10000];        //цена Hart Klassik диаметр 200
  var $hartK_cena250 = [14968,15019,14983,14976,14980,15007,14974,15001,15000,15806,10000];       //цена Hart Klassik диаметр 250
  var $hartKV_cena140 = [14972,14991,14997,15012,14981,15003,14974,15001,15000,15802,10000];        //цена Hart Klassik с вент каналом диаметр 140
  var $hartKV_cena160 = [14972,14992,14998,15013,14977,15004,14974,15001,15000,15803,10000];       //цена Hart Klassik с вент каналом диаметр 160
  var $hartKV_cena180 = [14971,14993,14999,15014,14979,15005,14974,15001,15000,15804,10000];       //цена Hart Klassik с вент каналом диаметр 180
  var $hartKV_cena200 = [14971,15018,14982,14975,14978,15006,14974,15001,15000,15805,10000];      //цена Hart Klassik с вент каналом диаметр 200

  var $hartU_cena140 = [14969,14991,14997,15012,14981,15008,14974,15001,15000,10000,14984,14973,15020,15002,10000];   //цена Hart Univers диаметр 140
  var $hartU_cena160 = [14969,14992,14998,15013,14977,15009,14974,15001,15000,10000,14985,14973,15021,15002,10000];   //цена Hart Univers диаметр 160
  var $hartU_cena180 = [14970,14993,14999,15014,14979,15010,14974,15001,15000,10000,14986,14973,15801,15002,10000];   //цена Hart Univers диаметр 180
  var $hartU_cena200 = [14970,15018,14982,14975,14978,15011,14974,15001,15000,10000,14987,14973,15022,15002,10000];   //цена Hart Univers диаметр 200
  var $hartUV_cena140 = [14972,14991,14997,15012,14981,15008,14974,15001,15000,10000,14984,14973,15020,15002,10000];  //цена Hart Univers с вент каналом диаметр 140
  var $hartUV_cena160 = [14972,14992,14998,15013,14977,15009,14974,15001,15000,10000,14985,14973,15021,15002,10000];  //цена Hart Univers с вент каналом диаметр 160
  //************ ПАРАМЕТРЫ Hart **************
  var $hartAT_el = ['Блок 24см','Керамическая труба 33см','Керамическая труба с ревизией 66см','Тройник для подключения 66см','Изоляционная минеральная вата','Компенсатор расширения','Дверца для прочистки','Клей кислотостойкий Hart, 5 л','Клей кислотостойкий Hart, 1 л','Оголовок'];
  var $hartAT_ssil = ['http://i-kamin.ru/catalogue/smoke/Hart/card-obolochkaA.html','http://i-kamin.ru/catalogue/smoke/Hart/card-Truba33AT.html','http://i-kamin.ru/catalogue/smoke/Hart/card-TrubaSRevizAT.html','http://i-kamin.ru/catalogue/smoke/Hart/card-troynik90AT.html','http://i-kamin.ru/catalogue/smoke/Hart/card-izolAT.html','http://i-kamin.ru/catalogue/smoke/Hart/card-kompensatorAT.html','http://i-kamin.ru/catalogue/smoke/Hart/card-dverAT.html','http://i-kamin.ru/catalogue/smoke/Hart/card-kley5AT.html','http://i-kamin.ru/catalogue/smoke/Hart/card-kley1AT.html','http://i-kamin.ru/catalogue/smoke/Hart/'];
  var $hartK_el = ['Блок 24см','Керамическая труба 33см','Керамическая труба с ревизией 66см','Тройник для подключения 66см','Изоляционная минеральная вата','Компенсатор расширения','Дверца для прочистки','Клей кислотостойкий Hart, 5 л','Клей кислотостойкий Hart, 1 л','Патрубок дымовой трубы 66см','Оголовок'];
  var $hartK_ssil = ['http://i-kamin.ru/catalogue/smoke/Hart/card-obolochkaK.html','http://i-kamin.ru/catalogue/smoke/Hart/card-Truba33K.html','http://i-kamin.ru/catalogue/smoke/Hart/card-TrubaSRevizK.html','http://i-kamin.ru/catalogue/smoke/Hart/card-troynik90K.html','http://i-kamin.ru/catalogue/smoke/Hart/card-izolK.html','http://i-kamin.ru/catalogue/smoke/Hart/card-kompensatorK.html','http://i-kamin.ru/catalogue/smoke/Hart/card-dverK.html','http://i-kamin.ru/catalogue/smoke/Hart/card-kley5K.html','http://i-kamin.ru/catalogue/smoke/Hart/card-kley1K.html','http://i-kamin.ru/catalogue/smoke/Hart/card-patrubokK.html','http://i-kamin.ru/catalogue/smoke/Hart/'];
  var $hartK250_el = ['Блок 33см','Керамическая труба 33см','Керамическая труба с ревизией 66см','Тройник для подключения 66см','Изоляционная минеральная вата','Компенсатор расширения','Дверца для прочистки','Клей кислотостойкий Hart, 5 л','Клей кислотостойкий Hart, 1 л','Патрубок дымовой трубы 66см','Оголовок'];
  var $hartKV_el = ['Блок 33см с вент. каналом','Керамическая труба 33см','Керамическая труба с ревизией 66см','Тройник для подключения 66см','Изоляционная минеральная вата','Компенсатор расширения','Дверца для прочистки','Клей кислотостойкий Hart, 5 л','Клей кислотостойкий Hart, 1 л','Патрубок дымовой трубы 66см','Оголовок'];
  var $hartU_el = ['Блок 24см','Керамическая труба 33см','Керамическая труба с ревизией 66см','Тройник для подключения 66см','Изоляционная минеральная вата','Компенсатор расширения с вентиляцией','Дверца для прочистки','Клей кислотостойкий Hart, 5 л','Клей кислотостойкий Hart, 1 л','','Керамический цоколь + слив конденсата с крышкой','Вентиляционная решетка','Экран дымовой трубы','Ограничитель конденсата','Оголовок'];
  var $hartU_ssil = ['http://i-kamin.ru/catalogue/smoke/Hart/card-obolochkaU.html','http://i-kamin.ru/catalogue/smoke/Hart/card-Truba33U.html','http://i-kamin.ru/catalogue/smoke/Hart/card-TrubaSRevizU.html','http://i-kamin.ru/catalogue/smoke/Hart/card-troynik90U.html','http://i-kamin.ru/catalogue/smoke/Hart/card-izolU.html','http://i-kamin.ru/catalogue/smoke/Hart/card-kompensatorSOU.html','http://i-kamin.ru/catalogue/smoke/Hart/card-dverU.html','http://i-kamin.ru/catalogue/smoke/Hart/card-kley5U.html','http://i-kamin.ru/catalogue/smoke/Hart/card-kley1U.html','','http://i-kamin.ru/catalogue/smoke/Hart/card-sliv.html','http://i-kamin.ru/catalogue/smoke/Hart/card-reshetkaU.html','/catalogue/smoke/Hart/card-Ekran.html','http://i-kamin.ru/catalogue/smoke/Hart/card-ogranichitel.html','http://i-kamin.ru/catalogue/smoke/Hart/'];
  var $hartUV_el = ['Блок 33см c вент. каналом','Керамическая труба 33см','Керамическая труба с ревизией 66см','Тройник для подключения 66см','Изоляционная минеральная вата','Компенсатор расширения с вентиляцией','Дверца для прочистки','Клей кислотостойкий Hart, 5 л','Клей кислотостойкий Hart, 1 л','','Керамический цоколь + слив конденсата с крышкой','Вентиляционная решетка','Экран дымовой трубы','Ограничитель конденсата','Оголовок'];
  var $hartU250_el = ['Блок 33см','Керамическая труба 33см','Керамическая труба с ревизией 66см','Тройник для подключения 66см','Изоляционная минеральная вата','Компенсатор расширения с вентиляцией','Дверца для прочистки','Клей кислотостойкий Hart, 5 л','Клей кислотостойкий Hart, 1 л','','Керамический цоколь + слив конденсата с крышкой','Вентиляционная решетка','Экран дымовой трубы','Ограничитель конденсата','Оголовок'];
  //************ ПАРАМЕТРЫ ДЛЯ ПЕЧАТИ **************
  var $pr_pribor = ['Камин','Печь','Банная печь','Котёл'];
  var $pr_toplivo = ['Дрова, брикеты, пеллеты','Газ','Уголь','Дизельное топливо'];
  var $pr_konfig = ['http://test.i-kamin.ru/images/calculation/v_1.jpg','http://test.i-kamin.ru/images/calculation/v_2.jpg','http://test.i-kamin.ru/images/calculation/v_3.jpg','http://test.i-kamin.ru/images/calculation/v_4.jpg','http://test.i-kamin.ru/images/calculation/v_5.jpg','http://test.i-kamin.ru/images/calculation/v_6.jpg','http://test.i-kamin.ru/images/calculation/v_7.jpg','http://test.i-kamin.ru/images/calculation/v_8.jpg','http://test.i-kamin.ru/images/calculation/v_9.jpg','http://test.i-kamin.ru/images/calculation/v_10.jpg','http://test.i-kamin.ru/images/calculation/v_11.jpg','http://test.i-kamin.ru/images/calculation/v_12.jpg','http://test.i-kamin.ru/images/calculation/v_13.jpg','http://test.i-kamin.ru/images/calculation/v_14.jpg','http://test.i-kamin.ru/images/calculation/v_15.jpg','http://test.i-kamin.ru/images/calculation/v_16.jpg','http://test.i-kamin.ru/images/calculation/v_17.jpg','http://test.i-kamin.ru/images/calculation/v_18.jpg','http://test.i-kamin.ru/images/calculation/v_19.jpg','http://test.i-kamin.ru/images/calculation/v_20.jpg','http://test.i-kamin.ru/images/calculation/v_21.jpg','http://test.i-kamin.ru/images/calculation/v_22.jpg','http://test.i-kamin.ru/images/calculation/v_23.jpg','http://test.i-kamin.ru/images/calculation/v_24.jpg'];
  //************ выбор прибора ***************
  var $pribor, $toplivo, $material, $konfig, $diametr, $visota, $itog_tabl, $pr_itog_tabl, $itog_tabl2, $vent, $vis_bloka, $hart_ssil, $sl = 0;
  $('#sp8').html('<span style="font-size:28px;">Шаг 1 из 6</span>');
  $('.pribor').change(function(){
    $pribor = $('#sp1 input:checked').val();
    $('#sp2 input:checked').attr('checked', false);
    var $t2 = $('#sp2 #toplivo2');
    var $t3 = $('#sp2 #toplivo3');
    var $t4 = $('#sp2 #toplivo4');
    var $l2 = $('#sp2 #toplivo2 + label');
    var $l3 = $('#sp2 #toplivo3 + label');
    var $l4 = $('#sp2 #toplivo4 + label');
      //логика топлива в зависимости от выбранного отопительного прибора
    if($pribor == 1){$t2.show(); $l2.show(); $t3.hide(); $l3.hide(); $t4.hide(); $l4.hide();}
    else if($pribor == 2){$t2.hide(); $l2.hide(); $t3.show(); $l3.show(); $t4.hide(); $l4.hide();}
    else if($pribor == 3){$t2.hide(); $l2.hide(); $t3.hide(); $l3.hide(); $t4.hide(); $l4.hide();}
    else{$('#sp2 input').show(); $('#sp2 input + label').show();}
    $('#sp2').show(400);
    $('#sp3').hide();
    $('#sp4').hide();
    $('#sp5').hide();
    $('#sp6').hide();
    $('#sp7').hide();
    $('#sp8').html('<span style="font-size:28px;">Шаг 2 из 6</span>');
  });
  //************* выбор топлива ***************
  $('.toplivo').change(function(){
    $toplivo = $('#sp2 input:checked').val();
    $('#sp3 input:checked').attr('checked', false);
      //логика выбора прибора в зависимости от выбранного топлива
    if($toplivo == 2 || $toplivo == 4){$('#material2').hide(); $('#material2 + label').hide(); $('#material2 + label + br').hide();}
    else{$('#material2').show(); $('#material2 + label').show();  $('#material2 + label + br').show();}
    $('#sp3').show(400);
    $('#sp4').hide();
    $('#sp5').hide();
    $('#sp6').hide();
    $('#sp7').hide();
    $('#sp8').html('<span style="font-size:28px;">Шаг 3 из 6</span>');
  });
  //************* выбор материала *************
  $('.material').change(function(){
    $material = $('#sp3 input:checked').val();
    $('#sp4 input:checked').attr('checked', false);
    $('#sp4 input').hide();
    $('#sp4 input + label').hide();
    var $k1 = $('#sp4 #konfig1');
    var $l1 = $('#sp4 #konfig1 + label');
    var $k2 = $('#sp4 #konfig2');
    var $l2 = $('#sp4 #konfig2 + label');
    var $k19 = $('#sp4 #konfig19');
    var $l19 = $('#sp4 #konfig19 + label');
    var $k20 = $('#sp4 #konfig20');
    var $l20 = $('#sp4 #konfig20 + label');
    var $k21 = $('#sp4 #konfig21');
    var $l21 = $('#sp4 #konfig21 + label');
    var $k22 = $('#sp4 #konfig22');
    var $l22 = $('#sp4 #konfig22 + label');
    var $k23 = $('#sp4 #konfig23');
    var $l23 = $('#sp4 #konfig23 + label');
    var $k24 = $('#sp4 #konfig24');
    var $l24 = $('#sp4 #konfig24 + label');
      //логика конфигурации в зависимоти от выбранного топлива
    if($material == 3){$k23.show(); $l23.show();}
    else if($material == 2){$k23.show(); $l23.show(); $k24.show(); $l24.show();}
      //если это Вулкан: печь или котел, на дровах или угле
    else if($material == 1 && ($pribor == 2 || $pribor == 4) && ($toplivo == 1 || $toplivo == 3)){$('#sp4 input + label').show(1000); $('#sp4 input').show(1000); $k21.hide(); $l21.hide(); $k22.hide(); $l22.hide(); $k23.hide(); $l23.hide(); $k24.hide(); $l24.hide();} 
      //если это Вулкан: камин на дровах или газу
    else if($material == 1 && $pribor == 1 && ($toplivo == 1 || $toplivo == 2)){$('#sp4 input + label').show(1000); $('#sp4 input').show(1000); $k21.hide(); $l21.hide(); $k22.hide(); $l22.hide(); $k23.hide(); $l23.hide(); $k24.hide(); $l24.hide();} 
      //если это Вулкан: банная печь
    else if($material == 1 && $pribor == 3){$k1.show(); $l1.show(); $k2.show(); $l2.show(); $k19.show(); $l19.show(); $k20.show(); $l20.show();  $k21.show(); $l21.show(); $k22.show(); $l22.show();}
      //если это Вулкан: котел дизель или газ
    else{$('#sp4 input + label').show(1000); $('#sp4 input').show(1000); $k1.hide(); $l1.hide(); $k2.hide(); $l2.hide(); $k19.hide(); $l19.hide(); $k20.hide(); $l20.hide(); $k21.hide(); $l21.hide(); $k22.hide(); $l22.hide(); $k23.hide(); $l23.hide(); $k24.hide(); $l24.hide();}
    $('#sp4').show(400);
    $('#sp5').hide();
    $('#sp6').hide();
    $('#sp7').hide();
    $('#diametr :selected').attr('selected', false);
    $('#visota :selected').attr('selected', false);
    $('#sp8').html('<span style="font-size:28px;">Шаг 4 из 6</span>');
  });
  //************* выбор конфигурации **********
  $('.konfig').change(function(){
  $('#sp5 option:selected').attr('selected', false);  //если вернулся к схемам стираем параметры высоты и диаметра
    $konfig = $('#sp4 input:checked').val();
      //прячем лишние диаметры дымоходных систем (в эксплорере это нифига не работает)
    //if($material == 2){$('#diametr option').hide(); $('#diametr #d0').show(); $('#diametr #d160').show(); $('#diametr #d200').show();} //Heda
    //else if($material == 3 && $toplivo == 1){$('#diametr option').hide(); $('#diametr #d0').show(); $('#diametr #d140').show();
    //                 $('#diametr #d160').show(); $('#diametr #d180').show(); $('#diametr #d200').show();  $('#diametr #d250').show();} //Hart Klassik
    //else if($material == 3 && ($toplivo == 2 || $toplivo == 4)){$('#diametr option').hide(); $('#diametr #d0').show(); $('#diametr #d140').show();
    //                 $('#diametr #d160').show(); $('#diametr #d180').show(); $('#diametr #d200').show();}                              //Hart Univers
    //else if($material == 3 && $toplivo == 3){$('#diametr option').hide(); $('#diametr #d0').show(); $('#diametr #d160').show(); 
    //                                                                          $('#diametr #d180').show(); $('#diametr #d200').show();} //Hart AT
    //else{$('#diametr option').show(); $('#diametr #d140').hide();}
    if($material == 2){$('#diametr').html("<option id='d0'>--</option><option id='d160'>160</option><option id='d200'>200</option>");} //Heda
    else if($material == 3 && $toplivo == 1){$('#diametr').html("<option id='d0'>--</option><option id='d140'>140</option><option id='d160'>160</option><option id='d180'>180</option><option id='d200'>200</option><option id='d250'>250</option>");} //Hart Klassik
    else if($material == 3 && ($toplivo == 2 || $toplivo == 4)){$('#diametr').html("<option id='d0'>--</option><option id='d140'>140</option><option id='d160'>160</option><option id='d180'>180</option><option id='d200'>200</option>");} //Hart Univers
    else if($material == 3 && $toplivo == 3){$('#diametr').html("<option id='d0'>--</option><option id='d160'>160</option><option id='d180'>180</option><option id='d200'>200</option>");} //Hart AT
    else{$('#diametr').html("<option id='d0'>--</option><option id='d104'>104</option><option id='d115'>115</option><option id='d120'>120</option><option id='d130'>130</option><option id='d150'>150</option><option id='d160'>160</option><option id='d180'>180</option><option id='d200'>200</option><option id='d250'>250</option><option id='d300'>300</option>");}
    $('#sp5').show(400);
    $('#sp6').hide();
    $('#sp7').hide();
    if($material == 3 && $toplivo != 3){$('#vent').show(); $('#vent + label').show();}  //вент канал появляется только у Hart, если топливо не уголь
    else{$('#vent').hide(); $('#vent + label').hide();}
    $('#sp8').html('<span style="font-size:28px;">Шаг 5 из 6</span>');
  });
  //******** выбор диаметра и высоты **********
  function rasthet(){$('#sp6 #otladka').html('<b>Отладочная информация:</b><br>Прибор: ' + $pribor + '<br>Топливо: ' + $toplivo + '<br>Материал: ' + $material + '<br>Конфигурация: ' + $konfig + '<br>Диаметр: ' + $diametr + '<br>Высота: ' + $visota + '<br>Вент канал: ' + $vent);}

  //+++++++++++++ НАЧАЛО ФУНКЦИИ ОСНОВНОГО РАССЧЕТА +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  function vivod(){
    var $itog_tabl_top = '<table border="1" cellpadding="2" cellspacing="0"><tr><td align="center">Элементы</td><td>Диаметр (мм)</td><td>Кол-во</td><td>Цена (руб.)</td><td>Сумма (руб.)</td></tr>';
    var $itog_tabl_niz = '</table>';
    var $summ = 0;
      //==== Считаем Вулкан ==================== 
    if($material == 1){
        //Функция рассчета для Вулкан +++
      function Vulkan_rasthet(){
        if($pribor == 4 && ($toplivo == 2 || $toplivo == 4)){
          //котел газ или дизель
          switch(parseInt($konfig)){
            case 3: $vulkan_kol = $vulkan_kol_Ksh3; break;
            case 4: $vulkan_kol = $vulkan_kol_Ksh4; break;
            case 5: $vulkan_kol = $vulkan_kol_Ksh5; break;
            case 6: $vulkan_kol = $vulkan_kol_Ksh6; break;
            case 7: $vulkan_kol = $vulkan_kol_Ksh7; break;
            case 8: $vulkan_kol = $vulkan_kol_Ksh8; break;
            case 9: $vulkan_kol = $vulkan_kol_Ksh9; break;
            case 10: $vulkan_kol = $vulkan_kol_Ksh10; break;
            case 11: $vulkan_kol = $vulkan_kol_Ksh11; break;
            case 12: $vulkan_kol = $vulkan_kol_Ksh12; break;
            case 13: $vulkan_kol = $vulkan_kol_Ksh13; break;
            case 14: $vulkan_kol = $vulkan_kol_Ksh14; break;
            case 15: $vulkan_kol = $vulkan_kol_Ksh15; break;
            case 16: $vulkan_kol = $vulkan_kol_Ksh16; break;
            case 17: $vulkan_kol = $vulkan_kol_Ksh17; break;
            case 18: $vulkan_kol = $vulkan_kol_Ksh18; break;
            default: $('#itog').html('Заданная конфигурация отсуствует'); break;
          }
        }
        else{
          //выбираем по какой схеме считаем
          switch(parseInt($konfig)){
            case 1: $vulkan_kol = $vulkan_kol_sh1; break;
            case 2: $vulkan_kol = $vulkan_kol_sh2; break;
            case 3: $vulkan_kol = $vulkan_kol_sh3; break;
            case 4: $vulkan_kol = $vulkan_kol_sh4; break;
            case 5: $vulkan_kol = $vulkan_kol_sh5; break;
            case 6: $vulkan_kol = $vulkan_kol_sh6; break;
            case 7: $vulkan_kol = $vulkan_kol_sh7; break;
            case 8: $vulkan_kol = $vulkan_kol_sh8; break;
            case 9: $vulkan_kol = $vulkan_kol_sh9; break;
            case 10: $vulkan_kol = $vulkan_kol_sh10; break;
            case 11: $vulkan_kol = $vulkan_kol_sh11; break;
            case 12: $vulkan_kol = $vulkan_kol_sh12; break;
            case 13: $vulkan_kol = $vulkan_kol_sh13; break;
            case 14: $vulkan_kol = $vulkan_kol_sh14; break;
            case 15: $vulkan_kol = $vulkan_kol_sh15; break;
            case 16: $vulkan_kol = $vulkan_kol_sh16; break;
            case 17: $vulkan_kol = $vulkan_kol_sh17; break;
            case 18: $vulkan_kol = $vulkan_kol_sh18; break;
            case 19: $vulkan_kol = $vulkan_kol_sh19; break;
            case 20: $vulkan_kol = $vulkan_kol_sh20; break;
            case 21: $vulkan_kol = $vulkan_kol_sh21; break;
            case 22: $vulkan_kol = $vulkan_kol_sh22; break;
            default: $('#itog').html('Заданная конфигурация отсуствует'); break;
          }
        }
        for(var $i = 0; $i<$vulkan_cena.length; $i++){
          $kol_v = $vulkan_kol[$i];
            //если встречаем формулу производим замену
          if($vulkan_kol[$i] == 'f1'){$kol_v = (Math.floor(($visota-1)/3))*2-1; if($kol_v <= 0){$kol_v = 1;}}
          else if($vulkan_kol[$i] == 'f2'){$kol_v = (Math.ceil(($visota-2.5)/6));}
          else if($vulkan_kol[$i] == 'f3'){$kol_v = (Math.ceil(($visota-3)/6)); if($kol_v <= 0){continue;}}
          else if($vulkan_kol[$i] == 'f4'){$kol_v = (Math.ceil(($visota-4)/6)); if($kol_v <= 0){continue;}}
          else if($vulkan_kol[$i] == 'f5'){$kol_v = (Math.ceil($visota/5))+1;}
          else if($vulkan_kol[$i] == 'f6'){$kol_v = Math.ceil($visota/5);}
          else if($vulkan_kol[$i] == 'f7'){$kol_v = (Math.ceil($visota/6))-1; if($kol_v <= 0){continue;}}
          else if($vulkan_kol[$i] == 'f8'){$kol_v = Math.ceil($visota/6);}
          else if($vulkan_kol[$i] == 'f9'){$kol_v = $visota - 1;}
          else if($vulkan_kol[$i] == 'f10'){$kol_v = $visota - 2;}
          else if($vulkan_kol[$i] == 'f11'){$kol_v = $visota;}
          else if($vulkan_kol[$i] == 'f12'){$kol_v = Math.ceil($visota/5);}
          else if($vulkan_kol[$i] == 'f13'){$kol_v = (Math.ceil($visota/5))+1;}
          else if($vulkan_kol[$i] == 0){continue;}  //пропускаем элементы количество которых 0
          var $per = $kol_v*$vulkan_cena[$i];
            //создаем строку таблицы
          var $str = '<tr><td><a href="' + $vulkan_ssil[$i] +'" target="_blank">' + $vulkan_el[$i] + '</a></td><td align="center">' + $diametr + '</td><td align="center">' + $kol_v + '</td><td align="right">' + $vulkan_cena[$i] + '</td><td align="right">' + $per + '</td></tr>';
          $itog_tabl += $str;
          $summ += $per;
        }
      }  //конец функции для рассчета для Вулкан +++
      var $vulkan_cena;
      var $vulkan_kol = 0;
      $itog_tabl = '<h2><img src="http://test.i-kamin.ru/images/calculation/vulkan_dim.jpg" align="middle" border="0">&nbsp;Дымоход Вулкан (Россия)</h2>';
      $itog_tabl += $itog_tabl_top;
      var $kol_v;
      $visota = parseInt($visota);
      if($diametr == 104){
        $vulkan_cena = $vulkan_cena104;
            Vulkan_rasthet();
      }
      else if($diametr == 115){
        $vulkan_cena = $vulkan_cena115;
            Vulkan_rasthet();
      }
      else if($diametr == 120){
        $vulkan_cena = $vulkan_cena120;
            Vulkan_rasthet();
      }
      else if($diametr == 130){
        $vulkan_cena = $vulkan_cena130;
            Vulkan_rasthet();
      }
      else if($diametr == 150){
        $vulkan_cena = $vulkan_cena150;
            Vulkan_rasthet();
      }
      else if($diametr == 160){
        $vulkan_cena = $vulkan_cena160;
            Vulkan_rasthet();
      }
      else if($diametr == 180){
        $vulkan_cena = $vulkan_cena180;
            Vulkan_rasthet();
      }
      else if($diametr == 200){
        $vulkan_cena = $vulkan_cena200;
            Vulkan_rasthet();
      }
      else if($diametr == 250){
        $vulkan_cena = $vulkan_cena250;
            Vulkan_rasthet();
      }
      else{   //диаметр 300
        $vulkan_cena = $vulkan_cena300;
            Vulkan_rasthet();
      }
      $vulkan_cena = pries($vulkan_cena);
      $itog_tabl += '<tr><td colspan="5" align="right">Итого: ' + $summ + ' руб.</td></tr>';
      $itog_tabl += $itog_tabl_niz;
      $('#itog').html($itog_tabl);
       //если банная печь с диаметрами 104 или 130, выводим вторую таблицу
      if($pribor == 3  && ($diametr == 104 || $diametr == 130)){
        $itog_tabl += '<br><strong>С изоляцией 100мм:</strong><br><br>';
        $itog_tabl += $itog_tabl_top;
        if($diametr == 104){
          $vulkan_cena = $vulkanB100_cena104;
          $summ = 0;
            Vulkan_rasthet();
        }
        else{
          $vulkan_cena = $vulkanB100_cena130;
          $summ = 0;
            Vulkan_rasthet();
        }
      $vulkan_cena = pries($vulkan_cena);

        $itog_tabl += '<tr><td colspan="5" align="right">Итого: ' + $summ + ' руб.</td></tr>';
        $itog_tabl += $itog_tabl_niz;
        $('#itog').html($itog_tabl);
      }
    }
      //==== Считаем HEDA ==================== 
    else if($material == 2){
      var $heda_kol;
        //Функция рассчета для HEDA +++
      function Heda_rasthet(){
         $itog_tabl = '<h2><img src="http://test.i-kamin.ru/images/calculation/keddy_dim.jpg" align="middle" border="0">&nbsp;Дымоход Heda (Швеция)</h2>';
         $itog_tabl += $itog_tabl_top;
         if($konfig == 23){
           for(var $i = 0; $i<$heda_cena.length; $i++){
             if($i == 0){$heda_kol = (parseInt($visota) - 0.5)/0.25;}else{$heda_kol = 1;}  //считаем количество элементов
             var $per = $heda_kol*$heda_cena[$i];
             var $str = '<tr><td><a href="' + $heda_ssil[$i] + '" target="_blank">' + $heda_el[$i] + '</a></td><td align="center">' + $diametr + '</td><td align="center">' + $heda_kol + '</td><td align="right">' + $heda_cena[$i] + '</td><td align="right">' + $per + '</td></tr>';
             $itog_tabl += $str;
             $summ += $per;
           }
         }
         else{
           for(var $i = 0; $i<$heda_cena.length; $i++){
             if($i == 0){$heda_kol = (parseInt($visota))/0.25;}else if($i == 1 || $i == 2){$heda_kol = 0; continue;}else{$heda_kol = 1;}  //считаем количество элементов
             var $per = $heda_kol*$heda_cena[$i];
             var $str = '<tr><td><a href="' + $heda_ssil[$i] + '" target="_blank">' + $heda_el[$i] + '</a></td><td align="center">' + $diametr + '</td><td align="center">' + $heda_kol + '</td><td align="right">' + $heda_cena[$i] + '</td><td align="right">' + $per + '</td></tr>';
             $itog_tabl += $str;
             $summ += $per;
           }
         }
         $itog_tabl += '<tr><td colspan="5" align="right">Итого: ' + $summ + ' руб.</td></tr>';
         $itog_tabl += $itog_tabl_niz;
         $('#itog').html($itog_tabl);
      }
        //конец Функции рассчета для HEDA +++
      if($diametr == 160){
        $heda_cena = $heda_cena160;
        Heda_rasthet();
      }
      else if($diametr == 200){
        $heda_cena = $heda_cena200;
        Heda_rasthet();
      }
      else{$('#itog').html('Дымоходы HEDA выпускаются только с диаметрами 160 и 200');}
      $heda_cena = pries($heda_cena);
    }
      //==== Считаем HART ==================== 
    else if($material == 3){
        //Функция рассчета для HART +++
      function HartAT_rasthet(){
          for(var $i = 0; $i<$hartAT_cena.length; $i++){
             //считаем количество элементов
            switch($i){
              case 0: $hart_kol = Math.round(($visota)/$vis_bloka); break;
              case 1: $hart_kol = Math.round(($visota - 1.32)/0.333); break;
              case 2: $hart_kol = 1; break;
              case 3: $hart_kol = 1; break;
              case 4: $hart_kol = Math.round(($visota)/0.333); break;
              case 5: $hart_kol = 1; break;
              case 6: $hart_kol = 1; break;
              case 7: $litrov = Math.ceil($visota*$kley_rasxod);   //математическое округление, если надо можно округлять в большую сторону
                      if(($litrov%5) == 0){$hart_kol = Math.round($litrov/5);}
                      else if(($litrov%5) == 1){$hart_kol = Math.round($litrov/5); $dop_l = 1;}
                      else if(($litrov%5) == 2){$hart_kol = (Math.round($litrov/5) + 1);}
                      else{$hart_kol = (Math.round($litrov/5));}
                      break;
              case 8: $hart_kol = $dop_l; break;
              case 9: if(!$hartAT_cena[$i]){continue;} $hart_kol = 1; break;
              case 10: $hart_kol = 1; break;
              case 11: $hart_kol = 1; break;
              case 12: $hart_kol = 1; break;
              case 13: $hart_kol = 1; break;
              case 14: $hart_kol = 1; break;
            }
            var $per = $hart_kol*$hartAT_cena[$i];
              //создаем строку таблицы
            if($i == 7 && $hart_kol == 0){continue;}
            if($i == 8 && $dop_l == 0){continue;}
            //if($i == 10 && $toplivo != 1){continue;}
            var $str = '<tr><td><a href="' + $hart_ssil[$i] + '" target="_blank">' + $hartAT_el[$i] + '</a></td><td align="center">' + $diametr + '</td><td align="center">' + $hart_kol + '</td><td align="right">' + $hartAT_cena[$i] + '</td><td align="right">' + $per + '</td></tr>';
            $itog_tabl += $str;
            $summ += $per;
          }
      }  //конец Функции рассчета для HART +++
      var $hart_kol;
      var $kley;
      var $litrov;
      var $dop_l = 0; //дополнительные банки в литр
      $visota = parseInt($visota);
      if($toplivo == 1 && $pribor != 3){                                  //считаем систему Klassik
        $itog_tabl = '<h2><img src="http://test.i-kamin.ru/images/calculation/hart_dim.jpg" align="middle" border="0">&nbsp;Дымоход Hart (Германия). Дымоходная система Klassik</h2>';
        $itog_tabl += $itog_tabl_top;
        if($vent == 0){
          if($diametr == 140){
            $hartAT_cena = $hartK_cena140;
            $hartAT_el = $hartK_el;
            $kley_rasxod = 0.4;
            $vis_bloka = 0.25;
            $hart_ssil = $hartK_ssil;
                HartAT_rasthet();
          }
          else if($diametr == 160){
            $hartAT_cena = $hartK_cena160;
            $hartAT_el = $hartK_el;
            $kley_rasxod = 0.5;
            $vis_bloka = 0.25;
            $hart_ssil = $hartK_ssil;
                HartAT_rasthet();
          }
          else if($diametr == 180){
            $hartAT_cena = $hartK_cena180;
            $hartAT_el = $hartK_el;
            $kley_rasxod = 0.6;
            $vis_bloka = 0.25;
            $hart_ssil = $hartK_ssil;
                HartAT_rasthet();
          }
          else if($diametr == 200){
            $hartAT_cena = $hartK_cena200;
            $hartAT_el = $hartK_el;
            $kley_rasxod = 0.7;
            $vis_bloka = 0.25;
            $hart_ssil = $hartK_ssil;
                HartAT_rasthet();
          }
          else{  //диаметр 250
            $hartAT_cena = $hartK_cena250;
            $hartAT_el = $hartK250_el;
            $kley_rasxod = 1;
            $vis_bloka = 0.333;
            $hart_ssil = $hartK_ssil;
                HartAT_rasthet();
          }
        }
        else{
          if($diametr == 140){
            $hartAT_cena = $hartKV_cena140;
            $hartAT_el = $hartKV_el;
            $kley_rasxod = 0.4;
            $vis_bloka = 0.333;
            $hart_ssil = $hartK_ssil;
                HartAT_rasthet();
          }
          else if($diametr == 160){
            $hartAT_cena = $hartKV_cena160;
            $hartAT_el = $hartKV_el;
            $kley_rasxod = 0.5;
            $vis_bloka = 0.333;
            $hart_ssil = $hartK_ssil;
                HartAT_rasthet();
          }
          else if($diametr == 180){
            $hartAT_cena = $hartKV_cena180;
            $hartAT_el = $hartKV_el;
            $kley_rasxod = 0.6;
            $vis_bloka = 0.333;
            $hart_ssil = $hartK_ssil;
                HartAT_rasthet();
          }
          else{   //диаметр 200
            $hartAT_cena = $hartKV_cena200;
            $hartAT_el = $hartKV_el;
            $kley_rasxod = 0.7;
            $vis_bloka = 0.333;
            $hart_ssil = $hartK_ssil;
                HartAT_rasthet();
          }
        }
        $hartAT_cena = pries($hartAT_cena);
        $itog_tabl += '<tr><td colspan="5" align="right">Итого: ' + $summ + ' руб.</td></tr>';
        $itog_tabl += $itog_tabl_niz;
        $('#itog').html($itog_tabl);
      }
      else if($toplivo == 2 || $toplivo == 4){            //считаем систему Univers
        $itog_tabl = '<h2><img src="http://test.i-kamin.ru/images/calculation/hart_dim.jpg" align="middle" border="0">&nbsp;Дымоход Hart (Германия). Дымоходная система Univers</h2>';
        $itog_tabl += $itog_tabl_top;
        if($vent == 0){
          if($diametr == 140){
            $hartAT_cena = $hartU_cena140;
            $hartAT_el = $hartU_el;
            $kley_rasxod = 0.4;
            $vis_bloka = 0.25;
            $hart_ssil = $hartU_ssil;
                HartAT_rasthet();
          }
          else if($diametr == 160){
            $hartAT_cena = $hartU_cena160;
            $hartAT_el = $hartU_el;
            $kley_rasxod = 0.5;
            $vis_bloka = 0.25;
            $hart_ssil = $hartU_ssil;
                HartAT_rasthet();
          }
          else if($diametr == 180){
            $hartAT_cena = $hartU_cena180;
            $hartAT_el = $hartU_el;
            $kley_rasxod = 0.6;
            $vis_bloka = 0.25;
            $hart_ssil = $hartU_ssil;
                HartAT_rasthet();
          }
          else{  //диаметр 200
            $hartAT_cena = $hartU_cena200;
            $hartAT_el = $hartU_el;
            $kley_rasxod = 0.7;
            $vis_bloka = 0.25;
            $hart_ssil = $hartU_ssil;
                HartAT_rasthet();
          }
        }
        else{   //если вент канал
          if($diametr == 140){
            $hartAT_cena = $hartUV_cena140;
            $hartAT_el = $hartUV_el;
            $kley_rasxod = 0.4;
            $vis_bloka = 0.333;
            $hart_ssil = $hartU_ssil;
                HartAT_rasthet();
          }
          else{  //диаметр 160
            $hartAT_cena = $hartUV_cena160;
            $hartAT_el = $hartUV_el;
            $kley_rasxod = 0.5;
            $vis_bloka = 0.333;
            $hart_ssil = $hartU_ssil;
                HartAT_rasthet();
          }
        }

        $hartAT_cena = pries($hartAT_cena);

        $itog_tabl += '<tr><td colspan="5" align="right">Итого: ' + $summ + ' руб.</td></tr>';
        $itog_tabl += $itog_tabl_niz;
        $('#itog').html($itog_tabl);
      }
      else{                                               //считаем систему АТ
        $itog_tabl = '<h2><img src="http://test.i-kamin.ru/images/calculation/hart_dim.jpg" align="middle" border="0">&nbsp;Дымоход Hart (Германия). Дымоходная система AT</h2>';
        $itog_tabl += $itog_tabl_top;
        if($diametr == 160){
          $hartAT_cena = $hartAT_cena160;
          $kley_rasxod = 0.5;
          $vis_bloka = 0.25;
          $hart_ssil = $hartAT_ssil;
              HartAT_rasthet();
        }
        else if($diametr == 180){
          $hartAT_cena = $hartAT_cena180;
          $kley_rasxod = 0.6;
          $vis_bloka = 0.25;
          $hart_ssil = $hartAT_ssil;
              HartAT_rasthet();
        }
        else{
          $hartAT_cena = $hartAT_cena200;
          $kley_rasxod = 0.7;
          $vis_bloka = 0.25;
          $hart_ssil = $hartAT_ssil;
              HartAT_rasthet();
        }
        $hartAT_cena = pries($hartAT_cena);

        $itog_tabl += '<tr><td colspan="5" align="right">Итого: ' + $summ + ' руб.</td></tr>';
        $itog_tabl += $itog_tabl_niz;
        $('#itog').html($itog_tabl);
      }
    }
    else{$('#itog').html('Это невозможно');}
  }
  //+++++++++++++ КОНЕЦ ФУНКЦИИ ОСНОВНОГО РАССЧЕТА ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //функция получения параметров (диаметр, высота, вент канал)
  function param_chang(){
    $diametr = $('#diametr :selected').val();
    $visota = $('#visota :selected').val();
    var $flag = $('#vent:checked').val();
    if($flag){$vent = 1;}else{$vent = 0;}
    if($material == 3 && $toplivo == 1 && $diametr != 250){$('#vent').show(); $('#vent + label').show();}
    else if($material == 3 && ($toplivo == 2 ||  $toplivo == 4) && ($diametr != 200 && $diametr != 180)){$('#vent').show(); $('#vent + label').show();}
    else{$vent = 0; $('#vent').hide(); $('#vent + label').hide();}
    if(($diametr != "--" && $visota != "--") && ($diametr && $visota)){
      $('#sp6').show(800);
      $('#sp7').show(400);
      $('#sp8').html('');
    }
    else{
      $('#sp6').hide(800);
      $('#sp7').hide(400);
      $('#sp8').html('<span style="font-size:28px;">Шаг 5 из 6</span>');
    }
  } //конец param_chang()

  $('#diametr').change(function(){
          param_chang();
          //rasthet();
          vivod();
  });
  $('#visota').change(function(){
          param_chang();
          //rasthet();
          vivod();
  });
  $('#vent').click(function(){
          param_chang();
          //rasthet();
          vivod();
  });
  $('#newWin').click(function(){
  var $newText = '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"><html><head><title>Расчет стоимости дымохода</title><meta content="text/html; charset=utf-8" http-equiv="content-type"><link rel="stylesheet" type="text/css" href="/images/calculation/index.css"></head><body>';
  $newText += '<div id="pr_raschet"><p align="right"><img src="http://test.i-kamin.ru/images/calculation/QR.png" border="0" align="left"><img src="http://test.i-kamin.ru/images/calculation/3015.jpg" border="0"></p><h2 align="center">РАСЧЕТ СТОИМОСТИ ДЫМОХОДА</h2>';
  $newText += '<img src="' + $pr_konfig[$konfig - 1] + '" align="left" id="pr_konfig" border="0">';
  $newText += '<h2>Вы выбрали:</h2>Прибор: ' + $pr_pribor[$pribor - 1] + '<br>Топливо: ' + $pr_toplivo[$toplivo - 1] + '<br>Диаметр: ' + $diametr + ' мм<br>Высота: ' + $visota + ' м';
  if($vent){$newText += '<br>С вентиляционным каналом';}
  $newText += '<br>';
  $newText += '<div align="center">' + $itog_tabl + '</div><br>';
  $newText += $('#kon_text').html();
  $newText += '<h1 align="center">(495) 640 45 56</h1><p align="center" id="tel">/ЕДИНЫЙ МНОГОКАНАЛЬНЫЙ/</p><img id="kartinko" src="/images/calculation/1560.jpg" align="right" border="0"><hr align="left">';
  $newText += '<div id="bot_adr"><p align="left">Пречистенская набережная, дом 17<br>ул. Генерала Белобородова, дом 11<br>ул. Сущевский вал, дом 5, стр. 19<br>Ярославское шоссе, дом 130, корп. 1<br>д.Перепечино, ул. Придорожная д.12</p></div>';
  $newText += '</div></body></html>';
  $sl++;
  var $newWin = open('',$sl);
  $newWin.document.write($newText);
  $newWin.focus();
  return false;
  });
});
