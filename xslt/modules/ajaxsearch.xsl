<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE xsl:stylesheet SYSTEM "ulang://i18n/constants.dtd:file">
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:umi="http://www.umi-cms.ru/TR/umi">

<xsl:template match="udata[@module='search' and @method='ajaxSearch']" >
	<xsl:apply-templates select="items/item" mode="ajaxSearch" />
</xsl:template>

<xsl:template match="item" mode="ajaxSearch">
	<li>
		<a href="{@link}">
			<img src="{@image_small}" alt="{@name}"/>
			<div>
				<span>
					<xsl:value-of select="@name" />
				</span>
				<span class="search_infoss">
					<span>
						Артикул: <xsl:value-of select="@artikul"/>
					</span>
					<span class="seppr">
						<xsl:value-of select="round(@price)"/> р.
					</span>
				</span>
			</div>
		</a>
	</li>
</xsl:template>

</xsl:stylesheet>
