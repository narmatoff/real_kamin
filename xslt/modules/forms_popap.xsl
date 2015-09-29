<?xml version="1.0" encoding="utf-8"?>


<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"  xmlns="http://www.w3.org/1999/xhtml">
    <xsl:output encoding="utf-8" method="html" indent="yes"/>

<xsl:output
    encoding="UTF-8"
    indent="yes"
    cdata-section-elements="script noscript"
    omit-xml-declaration="yes"
    doctype-system = "string"
/>
    
  
   <xsl:template match="udata"> 


   
    
       
            <input type="hidden" name="system_form_id" value="{@form_id}" />
            <input type="hidden" name="ref_onsuccess" value="/webforms/posted/" />
            <xsl:apply-templates select="items/item[@selected= 'selected']" mode="adress" />
            <xsl:choose>
                <xsl:when test="@form_id = 318">
                    <xsl:apply-templates select="groups/group[@name= 'uznat_cenu']/field" mode="form-fields"/>  
                </xsl:when>
                <xsl:otherwise>
                    <xsl:apply-templates select="groups/group[@name= 'dannye_formy']/field" mode="form-fields"/>  
                </xsl:otherwise>
            </xsl:choose>
            
    </xsl:template>

    
    
    
    <!-- Адресс, куда отправляется сообщение -->

    <xsl:template match="item" mode="adress">
        <input type="hidden" name="system_email_to" value="{@id}" /> <br/>
    </xsl:template>

    <!-- ШАблоны полей -->

    <xsl:template match="field[@name = 'link']"
        mode="form-fields">
          
        

    </xsl:template>

    <xsl:template match="field[@type = 'string' and @required='required']" mode="form-fields">
        <xsl:choose>
            <xsl:when test="@title = 'email'">
                <input placeholder="{@title}" name="{@input_name}" id="n{@id}" required="required" pattern="\S+@[a-z]+.[a-z]+" type="text" value="{.}" class="pers_kont_default"/>
            </xsl:when>
            <xsl:when test="@title = 'Телефон'">
                <span class="sem">+7</span>
                <input placeholder="{@title} (XXX)XXX-XX-XX" name="{@input_name}" id="n{@id}" required="required"  type="text" value="{.}" class="pers_kont_default" style="font-size:16px;">
                    <xsl:attribute name="pattern">
                        <xsl:value-of select="'\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}'" />
                    </xsl:attribute>
                    </input>

                <script>
                    $(function(){
                        
                         $("#n750").inputmask("(999)999-99-99");
                    });
                </script>
            </xsl:when>
            <xsl:otherwise>
                <input placeholder="{@title}" name="{@input_name}" id="n{@id}" required="required" type="text" value="{.}" class="pers_kont_default"/>
            </xsl:otherwise>
        </xsl:choose>
        
        

    </xsl:template>
    <xsl:template match="field[@type = 'string'][not(@required)][@name!='tovar'][@name!='cena'][@name!='artikul'][@name!='tovarname']"
        mode="form-fields">
        <input placeholder="{@title}" name="{@input_name}" id="n{@id}" required="" type="text" value="{.}" class="pers_kont_default"/>

    </xsl:template>
    <xsl:template match="field[@type = 'text' and @required='required'][@name!='tovar'][@name!='cena'][@name!='artikul'][@name!='tovarname']"
        mode="form-fields">
        
        <textarea name="{@input_name}" placeholder="{@title}" required="required" type="text" class="pers_kont_textarea">
            <xsl:value-of select="." disable-output-escaping="no"/>
        </textarea>
        
        


    </xsl:template>

    <xsl:template match="field[@type = 'text'][not(@required)]" mode="form-fields">
        <textarea name="{@input_name}" placeholder="{@title}" required="" type="text" class="pers_kont_textarea">
            <xsl:value-of select="." disable-output-escaping="no"/>
        </textarea>
    </xsl:template>
    <xsl:template match="field[@type = 'relation' and @required='required']" mode="form-fields">
        <li>
                                    
            <ol>
                <li class="heading">
                    <xsl:value-of select="@title" />
                </li>
                <li>
                    <select name="{@input_name}" class="styled">
                        <xsl:apply-templates select="values/item" mode="form-fields-option" />
                    </select>
                </li>
            </ol>
                                
        </li>
    </xsl:template>

    <xsl:template match="field[@type = 'relation'][not(@required)]" mode="form-fields">
        <li>
                                    
            <ol>
                <li class="heading">
                    <xsl:value-of select="@title" />
                </li>
                <li>
                    <select name="{@input_name}" class="styled">
                        <xsl:apply-templates select="values/item" mode="form-fields-option" />
                    </select>
                </li>
            </ol>
                                
        </li>
    </xsl:template>
    <xsl:template match="item" mode="form-fields-option">
        <option>
            <xsl:value-of select="." />
        </option>

    </xsl:template>

    
      
    <!-- Каптча  -->
    <!-- Ошибки  -->
    <xsl:template match="items " mode="errors">
<div class="errors">
        <xsl:value-of select="item" disable-output-escaping="yes" />
</div>      
    </xsl:template>



    <xsl:template match="result[@module = 'webforms'][@method = 'posted']">
         <div class="widthtxtcont">
                            <article class="main_txtcontent">
                                <section>
                    
                            <h1>

                            <xsl:value-of select="result/@header"/></h1>
                            <xsl:apply-templates select="$errors" />
                                    <div class="contact-box" style="text-align:center"> 
                                        Отправка сообщения прошла успешно!
                                    </div>  
                            <xsl:apply-templates select="$errors" />
                            
                                </section>
                            </article>
        </div>
                    

    </xsl:template>

   


</xsl:stylesheet>