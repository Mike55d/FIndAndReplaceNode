<td width="60">
	<?php
	$resultado_evento = $lc_seguridades->fn_botones($lc_usuario, $lc_nombre_formulario, "nuevo");
	$resultado_todo = $lc_seguridades->fn_botones($lc_usuario, $lc_nombre_formulario, "todo");
	if (@$id == 'NuevoTransP' or @$id == 'ProcesarTransP') {
		$resultado_evento = '-x';
		$resultado_todo = '-x';
	}
	if ((int)$resultado_evento == '1' or (int)$resultado_todo == '1') {
		echo '<a href="#" onclick="fn_menu_afijos(' . "'nuevo'" . ')" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage(' . "'Nuevo'" . ',' . "''" . ',' . "'../../imagenes/BARRA/barra_nuevo_s.png'" . ',1)" border=0><img name="Nuevo" src="../../imagenes/BARRA/barra_nuevo.png" border=0></a>';
	} else {
		echo '<img name="Nuevo" src="../../imagenes/BARRA/barra_nuevo_d.png" border=0>';
	} ?></td>