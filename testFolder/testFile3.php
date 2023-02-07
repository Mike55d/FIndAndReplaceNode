<?php
if((int)$resultado_evento==1 or (int)$resultado_todo==1){
    		echo '<a href="#" onclick="fn_menu('."'siguiente'".')" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('."'siguiente'".','."''".','."'../imagenes/BARRA/barra_siguiente.png'".',1)" border=0><img name="siguiente" src="../imagenes/BARRA/barra_siguiente_s.png" border=0></a>';
		}else{
    		echo '<img name="siguiente" src="../imagenes/BARRA/barra_siguiente_d.png" border=0>';
		}
