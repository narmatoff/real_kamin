<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE xsl:stylesheet SYSTEM "ulang://i18n/constants.dtd:file">
<xsl:stylesheet version="1.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xlink="http://www.w3.org/TR/xlink">
	<xsl:output encoding="utf-8" method="html" indent="yes" />

    <xsl:template match="udata[@module = 'usel'][@method = 'wherebuy']" mode="left_menu_where_buy">
		<div class="back_filter"><div class="select_filterbl">
			<p>Выбирете регион</p>
			<select onchange='top.location=this.value'>
				<option class="first" value="">Выбирете регион</option>
				<xsl:apply-templates select="page" mode="left_menu_where_buy_one" />
			</select>
		</div></div>
	</xsl:template>
	
	<!-- Меню с сортировкой фирменных магазинов -->
	<xsl:key name="city" match="page" use="@parentId"/>

	<xsl:template match="udata[@module = 'usel'][@method = 'dilers']" mode="official_dlr">
		<div class="catmenu_head">
			Фирменные магазины
		</div>
		

		<xsl:apply-templates select="page[generate-id(.)=generate-id(key('city',@parentId))]" mode="official_dlr_one" />


	</xsl:template>
	
	<xsl:template match="page" mode="official_dlr_one">
		<ul id="my-menu" class="sample-menu"><li class="bgdarked">
			<a class="selected collapsible expanded" href="javascript://">
				<xsl:value-of select=".//property[@name = 'region']/value/item/@name" disable-output-escaping="yes" />
			</a>
		<ul style="display: block;">
            <xsl:apply-templates mode="next_official_dlr_one" select="key('city',@parentId)">        </xsl:apply-templates>       
        </ul>
		</li></ul>
	</xsl:template>

	<xsl:template match="page" mode="next_official_dlr_one">       
        <li class="dealer">
        	<span class="one_dlr_line">
        		<xsl:value-of select="name"/>
        	</span>
			<span class="one_dlr_line">
				<xsl:value-of select=".//property[@name = 'phone']/value" disable-output-escaping="yes" />
			</span>
        </li>       
    </xsl:template>

	<!-- Меню с сортировкой фирменных магазинов -->
	
	<xsl:template match="page" mode="left_menu_where_buy_one">
		<xsl:choose>
			<xsl:when test="document(concat('upage://', $page-id))/udata/page/@link = @link">
				<!-- Активный пункт меню -->
				<option selected="selected" value='{@link}'>
					<xsl:value-of select="document(concat('upage://', @parentId))/udata/page/name" disable-output-escaping="yes" /></option>
			</xsl:when>
			<xsl:otherwise>
				<!-- Пасисивный пункт меню -->
				<option value='{@link}'>
					<xsl:value-of select="document(concat('upage://', @parentId))/udata/page/name" disable-output-escaping="yes" />
				</option>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>
 
	<xsl:template match="udata[@module = 'content'][@method = 'menu']" mode="top_menu">
		<nav>
			<ul  id="menu">
            	<xsl:apply-templates select="items/item" mode="level1top" />
            </ul>
        </nav>
	</xsl:template>


    <xsl:template match="udata[@module = 'content'][@method = 'menu']" mode="left_menu">
		<xsl:choose>
			<xsl:when test="$parents-page-id = 9097">
				<xsl:choose>
					<xsl:when test="document(concat('upage://', $page-id))/udata/page/@type-id = 300">
                		<xsl:apply-templates select="document('usel://wherebuy/300')" mode="left_menu_where_buy" />
					</xsl:when>
					<xsl:when test="document(concat('upage://', $page-id))/udata/page/@type-id = 301">
                		<xsl:apply-templates select="document('usel://wherebuy/301')" mode="left_menu_where_buy" />
					</xsl:when>
					<xsl:when test="document(concat('upage://', $page-id))/udata/page/@type-id = 302">
                		<xsl:apply-templates select="document('usel://wherebuy/302')" mode="left_menu_where_buy" />
					</xsl:when>
				</xsl:choose>
			</xsl:when>
		</xsl:choose>
    
        <ul id="my-menu" class="sample-menu">
			<xsl:choose>
				<xsl:when test="$parents-page-id = 4852">
            		<xsl:apply-templates select="document('usel://stateyki')/udata/page" mode="level1leftstateyki" />
				</xsl:when>
				<xsl:otherwise>
            		<xsl:apply-templates select="items/item" mode="level1left" />
				</xsl:otherwise>
			</xsl:choose>
            
        </ul>

        <xsl:choose>
        	<xsl:when test="$parents-page-id = 9097"><br/>
				<xsl:apply-templates select="document('usel://dilers//1//id')" mode="official_dlr"/>
        	</xsl:when>
        </xsl:choose>
    </xsl:template>

	<xsl:template match="page" mode="level1leftstateyki">
		<li>
			<xsl:choose>
				<xsl:when test="@id = $page-id">
					<xsl:attribute name="class">bgdarked</xsl:attribute>
					<a class="selected collapsible expanded" href="{@link}" ><xsl:value-of select="./name" disable-output-escaping="yes" /></a>
				</xsl:when>
				<xsl:otherwise>
					<a class="collapsible collapsed" href="{@link}" ><xsl:value-of select="./name" disable-output-escaping="yes" /></a>
				</xsl:otherwise>
			</xsl:choose>
		</li>
	</xsl:template>

	<xsl:template match="item" mode="level1left">
		<xsl:choose>
			<xsl:when test="$parents-page-id = 9097"></xsl:when>
			<xsl:otherwise>
				<li>
					<a class="collapsible collapsed" href="{@link}" ><xsl:value-of select="@name" disable-output-escaping="yes" /></a>
					<xsl:apply-templates select="document(concat('udata://content/menu///', @id))/udata/items" mode="level2"/>
				</li>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>

	<xsl:template match="item[@status = 'active']" mode="level1left">
		<li class="bgdarked">
<!--            Активный пункт меню-->
			<a  class="selected collapsible expanded" href="{@link}"><xsl:value-of select="@name" disable-output-escaping="yes" /></a>
			<xsl:choose>
				<xsl:when test="$page-id = 4852">
					<ul style="display: block;">
						<xsl:apply-templates select="document('usel://stateyki')/udata/page" mode="level2stateyki"/>
					</ul>
				</xsl:when>
				<xsl:otherwise>
					<xsl:apply-templates select="document(concat('udata://content/menu///', @id))/udata/items" mode="level2active"/>
				</xsl:otherwise>
			</xsl:choose>

		</li>
	</xsl:template>


	<xsl:template match="item" mode="level1top">
		<li class="li">
			<a href="{@link}"><xsl:value-of select="@name" disable-output-escaping="yes" /></a>
			<xsl:apply-templates select="document(concat('udata://content/menu///', @id))/udata/items" mode="level2"/>
		</li>
	</xsl:template>

	<xsl:template match="item[@status = 'active']" mode="level1top">
		<li  class="li">

			<a  class="selected" href="{@link}"><xsl:value-of select="@name" disable-output-escaping="yes" /></a>
            <xsl:apply-templates select="document(concat('udata://content/menu///', @id))/udata/items" mode="level2active"/>

		</li>
	</xsl:template>

	<xsl:template match="item" mode="level1catalog">
		
			<a href="{@link}"><xsl:value-of select="@name" disable-output-escaping="yes" /></a>
			
	</xsl:template>

	<xsl:template match="item[@status = 'active']" mode="level1catalog">
		
			<a  href="{@link}" class="active_item_menu"><xsl:value-of select="@name" disable-output-escaping="yes" /></a>
           
	</xsl:template>




    
	<xsl:template match="items" mode="level2">
		<ul>

  			<xsl:apply-templates select="item" mode="level2" />
			
        </ul>
        
		
	</xsl:template>

	<xsl:template match="items" mode="level2active">
		<ul style="display: block;">

  			<xsl:apply-templates select="item" mode="level2" />

        </ul>
        
		
	</xsl:template>
	<xsl:template match="item" mode="level2">
		<li>

			<a href="{@link}">
				<xsl:value-of select="@name" disable-output-escaping="yes" />
			</a>
			
			<xsl:apply-templates select="document(concat('udata://content/menu///', @id))/udata/items" mode="level3"/>

		</li>
		<xsl:if test="@id = 6310">
			<li>
				<a href="/concats/">Наши салоны</a>
			</li>
        </xsl:if>
	</xsl:template>
	<xsl:template match="item[@status = 'active']" mode="level2">
		<li class="active">

			<a href="{@link}">
				<xsl:value-of select="@name" disable-output-escaping="yes" />
			</a>

			<xsl:apply-templates select="document(concat('udata://content/menu///', @id))/udata/items" mode="level3"/>

		</li>

	</xsl:template>

	<xsl:template match="page" mode="level2stateyki">
		<li>

			<a href="{@link}">
				<xsl:value-of select="./name" disable-output-escaping="yes" />
			</a>
		</li>
	</xsl:template>

	<xsl:template match="items" mode="level3">
		<ul class="subss">

  			<xsl:apply-templates select="item" mode="level2" />

        </ul>
        
		
	</xsl:template>


	<xsl:template match="item" mode="accio_main">
		<xsl:variable name="page" select="document(concat('upage://', @id))/udata/page/properties//property[@name='header_pic']/value"/>
		    
	        <li> 

	        	<xsl:call-template name="thumbing">
                    <xsl:with-param name="source" select="$page" />
                    <xsl:with-param name="width" select="839" />
                    <xsl:with-param name="height">313</xsl:with-param>
                </xsl:call-template>
	        	
	        </li>
	</xsl:template> 



	<xsl:template match="item" mode="level2contacts">
		<li>

			<a href="{@link}">
				<xsl:value-of select="@name" disable-output-escaping="yes" />
			</a>

			<!-- <xsl:apply-templates select="document(concat('udata://content/menu///', @id))/udata/items" mode="level3"/> -->

		</li>

	</xsl:template>
	<xsl:template match="item[@status = 'active']" mode="level2contacts">
		<li class="current_item"  >

			<a style="border-bottom: none">
				<xsl:value-of select="@name" disable-output-escaping="yes" />
			</a>

			<!-- <xsl:apply-templates select="document(concat('udata://content/menu///', @id))/udata/items" mode="level3"/>
 -->
		</li>

	</xsl:template>

					


</xsl:stylesheet>