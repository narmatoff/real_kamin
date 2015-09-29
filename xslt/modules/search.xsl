<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE xsl:stylesheet SYSTEM "ulang://i18n/constants.dtd:file">

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:umi="http://www.umi-cms.ru/TR/umi">


<xsl:template match="result[@module = 'search'][@method = 'ajaxsearch_do']" >
	
	
		<xsl:param name="filter" />
		<xsl:variable name="tonext" select="udata/numpages/tonext_link/@page-num" />
		<xsl:variable name="total" select="udata/total" />
		<xsl:variable name="per_page" select="udata/per_page" />
		<h1>Результаты поиска</h1>
		<!-- sort_catalog    -->
		<article>
			
		<div class="sortnview">
			<!-- Сортировка -->
			<span>Сортировать по цене: </span>
			<!-- <span class="back_filter_sort" style="margin-left: -5px;text-decoration: underline;cursor: pointer;">цене</span> -->
			<img>
				<xsl:if test="($order_filter.price=1) or (not($order_filter.price))">
					<xsl:attribute name="src"><xsl:value-of select="concat($template-resources, '/img/up.png')"/></xsl:attribute>
					<xsl:attribute name="class">back_filter_sort</xsl:attribute>
					<xsl:attribute name="alt">сначала дешевые</xsl:attribute>
					<xsl:attribute name="style">margin-left: -5px;</xsl:attribute>
				</xsl:if>
				<xsl:if test="$order_filter.price=0">
					<xsl:attribute name="src"><xsl:value-of select="concat($template-resources, '/img/down.png')"/></xsl:attribute>
					<xsl:attribute name="class">back_filter_sort</xsl:attribute>
					<xsl:attribute name="alt">сначала дорогие</xsl:attribute>
					<xsl:attribute name="style">margin-left: -5px;</xsl:attribute>
				</xsl:if>

			</img>
			<!-- <span>Сортировать по:</span> -->
			<!-- <div class="back_filter_sort"><div class="select_sortnview"><p></p><select name=""><option class="first" value="">Выберите вариант</option><option value="">Вариант номер один</option><option value="">Вариант номер два</option><option value="">Вариант номер три</option></select></div></div> -->
			<div class="floatinrgh_sort"><span>Вид каталога:</span><img class="plitka_view" src="{$template-resources}img/sort_plit.png" height="18" width="31" alt="плитка" /><img class="spisok_view" src="{$template-resources}img/sort_list.png" height="18" width="31" alt="список" />
			</div>
		</div>
		<div class="clearfix"></div>
		<!-- end_sort_catalog -->
		<div id="catalog_list" class="">
			<!--cat_item_list-->
			<!-- <xsl:apply-templates select="document('udata://catalog/getCategoryList/notemplate/')/udata/items/item" mode="categorylist" />  -->
			<xsl:apply-templates select="udata/lines/item" mode="catalog_item" />
			<!-- <xsl:apply-templates select=".//item" mode="catalog_item" /> -->
		</div>
		<!--конец списка товаров-->
		<xsl:if test="$total&gt;$per_page">
			<xsl:choose>
				<xsl:when test="page/@parentId = 0">
					<a class="more_goods" id="{@pageId}" title="{$per_page}" rel="{$total}" filter="{$filter}" parent="1" alt="{$tonext}" href="?p={$tonext}">
						<xsl:if test="$filter">
							<xsl:attribute name="href">?p=
								<xsl:value-of select="$tonext" />}&amp;
								<xsl:value-of select="$filter" /></xsl:attribute>
						</xsl:if>показать еще</a>
				</xsl:when>
				<xsl:otherwise>
					<a class="more_goods" id="{@pageId}" title="{$per_page}" rel="{$total}" alt="{$tonext}" parent="0" filter="{$filter}" href="?p={$tonext}">
						<xsl:if test="$filter">
							<xsl:attribute name="href">?p=
								<xsl:value-of select="$tonext" />}&amp;
								<xsl:value-of select="$filter" /></xsl:attribute>
						</xsl:if>показать еще</a>
				</xsl:otherwise>
			</xsl:choose>

			<!-- <xsl:call-template name="numpages"><xsl:with-param name="total" select="document('udata://catalog/getObjectsList/notemplate////15')/udata/total" /><xsl:with-param name="limit" select="document('udata://catalog/getObjectsList/notemplate////15')/udata/per_page" /></xsl:call-template>  --><span class="more_goods_inf">Показано <xsl:value-of select="udata/per_page" /> товаров из <xsl:value-of select="udata/total" /></span>
		</xsl:if>
		<div style="display:none">
			<xsl:call-template name="numpages">
				<xsl:with-param name="total" select="udata/total" />
				<xsl:with-param name="limit" select="udata/per_page" /></xsl:call-template>
		</div>
		<div id="clickerator">
			<div class="loader"><span></span><span></span><span></span>
			</div>
		</div>
		</article>


</xsl:template>


    <xsl:template match="udata[@method = 'insert_form']">


<!--         <form class="search_hform" method="get" action="/search/search_do">
            <input type="search" autocomplete="off" class="searchin" value="{$search_string}" name="search_string" placeholder="поиск по названию товара или номеру артикула" />
            <input class="srch_btn" type="submit" name="search" title="Начать поиск" value="" />
            <ul class="ajax_hint" id="ajax_hint">
	       </ul>
        </form>
 -->
        <form class="search_hform" method="get" action="/search/search_do">
            <input type="search" autocomplete="off" class="searchin" value="{$search_string}" name="search_string" placeholder="поиск по названию товара или номеру артикула"/>


            <input class="srch_btn" type="submit" name="search" title="Начать поиск" value="" />

                <!-- <div id="clickerator" style="visibility:hidden;"> -->
                <div id="clickerator">
                    <div class="loaderz">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            <!-- <button></button> -->
            <ul class="ajax_hint" id="ajax_hint">
                
            </ul>
        </form>



    </xsl:template>

    <!-- шаблон страницы с результатами поиска -->

    <xsl:template match="result[@module = 'search'][@method = 'search_do']">
        <article class="search_results_block">

            <xsl:variable name="search-results" select="document('udata://search/search_do/')/udata" />
            
            <h1><xsl:value-of select="@header"/></h1>
            <div class="search_block_cont">
                <xsl:apply-templates select="document('udata://search/insert_form')/udata" />
                <div class="clearfix"></div>
            </div>
            
            <xsl:apply-templates select="$search-results" />

            <xsl:call-template name="numpages">
                <xsl:with-param name="total" select="$search-results/total" />
                <xsl:with-param name="limit" select="$search-results/per_page" />
            </xsl:call-template>

            <div class="clearfix"></div>
            
        </article>

    </xsl:template>

    <!-- когда ничего не найдено -->

    <xsl:template match="udata[@module = 'search'][@method = 'search_do'][not(items/item)]">

        <xsl:text>По запросу</xsl:text>
        <b>
				&#171;
				<xsl:value-of select="$search_string" />
				&#187;
			</b>
        <xsl:text>ничего не найдено.</xsl:text>

    </xsl:template>

    <!-- обработка результатов поиска -->

    <xsl:template match="udata[@module = 'search'][@method = 'search_do'][items/item]">

<!--
        <h3>По запросу  
			<b>&#171;<xsl:value-of select="$search_string" />&#187;</b> 
			найдено <xsl:value-of select="total" /> результата:   
		</h3>
-->

        <div class="search_message">
            <p>
            <xsl:text>Найдено страниц:</xsl:text> <b><xsl:value-of select="total" /></b>
            </p>
        </div>

        <ul class="search_results">
            <xsl:apply-templates select="items/item" mode="search.results" />
        </ul>
    </xsl:template>

    <!-- отдельный результат из списка -->

    <xsl:template match="item" mode="search.results">
        <li>
            <a href="{@link}">
                <xsl:value-of select="@name" />
            </a>
            <span class="dark_grey no_bold">
				<xsl:value-of select="." disable-output-escaping="yes" />
			</span>
        </li>
    </xsl:template>
</xsl:stylesheet>