@echo off
set /a contador=0
set /a maximo=20

echo Bienvenido al GENERADOR DE ESTRUCTURA DE RELEASE DE FISUM!!!
echo -----------------------------------------------------------
echo -----------------------------------------------------------
echo A continuacion se crearan las carpetas de Gestion de la Configuracion...
MD Manuales_de_USUARIO
MD Documentacion_del_Sistema
MD Ejecutable
MD Codigo_Fuente
MD Base_de_Datos
MD Presentacion
echo Creando un Archivo de texto > README.txt

@pause