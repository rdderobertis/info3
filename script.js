var usuarioregistrado="user";
var contraseñaregistrada="123";
var usuarioingresado=prompt("ingrese el usuario");
var contraseñaingresada=prompt("ingrese la contraseña");
if(usuarioingresado==usuarioregistrado && contraseñaingresada==contraseñaregistrada){
    alert("bienvenido acceso correcto");
}else{
    alert("acceso incorrecto");
}