import { IsNumber, IsOptional, IsNotEmpty, IsString, IsDateString, IsIn, IsEmail } from 'class-validator';

export class CreateUsuarioDto {

  //CONSECUTIVO DEL USUARIO
  @IsOptional()
  @IsNumber()
  USUAID: number;

  //NOMBRE DEL USUARIO(SIGLAS)
  @IsNotEmpty()
  @IsString()
  USUANOMB: string;

  //PRIMER NOMBRE DEL USUARIO
  @IsNotEmpty()
  @IsString()
  USUANOMB1: string;

  //CONTRASEÑA DEL USUARIO (CLAVE)
  @IsNotEmpty()
  @IsString()
  USUACLAVE: string;

  //FECHA DE VENCIMIENTO DEL USUARIO
  @IsOptional()
  @IsDateString()
  USUAFEUSU: Date;

  //TIEMPO  CAMBIO DE CLAVE (DIAS) 0 no hay cambio de clave 
  @IsNotEmpty()
  @IsNumber()
  USUATCLAVE: number;

  //ESTADO DEL REGISTRO
  @IsNotEmpty()
  @IsIn(['A', 'I'])
  USUAESTADO: string;

  //USUARIO DE CREACIÓN
  @IsNotEmpty()
  @IsString()
  USUAUSCR: string;

  //FECHA DE CREACIÓN DEL REGISTRO
  @IsNotEmpty()
  @IsDateString()
  USUAFECR: Date;

  //USUARIO DE ACTUALIZACIÓN
  @IsOptional()
  @IsString()
  USUAUSACT: string;

  //FECHA DE ACTUALIZACIÓN
  @IsOptional()
  @IsDateString()
  USUAFEAC: Date;

  //RELACIÓN CON LA TABLA PA_TPIDENT
  @IsNotEmpty()
  @IsNumber()
  USUATPIDENT: number;

  //FIRMA
  @IsOptional()
  USUAFIRMA: Buffer;
  
  //EXTENSION (MIMETYPE)
  @IsOptional()
  @IsString()
  USUAEXTFIRMA: string;

  //DOCUMENTO DE IDENTIDAD DEL USUARIO
  @IsNotEmpty()
  @IsString()
  USUAIDENT: string;

  //SEGUNDO NOMBRE DEL USUARIO
  @IsOptional()
  @IsString()
  USUANOMB2: string;

  //PRIMER APELLIDO DEL USUARIO 
  @IsNotEmpty()
  @IsString()
  USUAAPELL1: string;

  //SEGUNDO APELLIDO DEL USUARIO
  @IsOptional()
  @IsString()
  USUAAPELL2: string;

  //FECHA DE ULTIMO CAMIBIO DE CLAVE
  @IsOptional()
  @IsDateString()
  USUAFEULCACLA: Date;

  //ESTADO DEL USUARIO  ACTIVO INACTIVO
  @IsNotEmpty()
  @IsIn(['A', 'I'])
  USUAESTUSU: string;

  //NUMERO DE TELÉFONO DEL USUARIO 
  @IsOptional()
  @IsString()
  USUATELE: string;

  //CORREO ELECTRONICO DEL USUARIO
  @IsOptional()
  @IsEmail()
  USUAMAIL: string;

  //RELACION CON LA TABLA SI_HUELLEROAPP
  @IsNotEmpty()
  @IsNumber()
  USUAHLLODIG: number;

  //RELACION CON LA TABLA SI_HUELLEROAPP
  @IsOptional()
  @IsIn([0, 1])
  USUAESTHLLO: number;

  //VARIABLE QUE INDICA SI EL USUARIO TIENE DISPOSITIVO DE HUELLA DIGITAL 1=SI 0=NO
  @IsNotEmpty()
  @IsIn(['0', '1'])
  USUAUTIHLLO: number;

  //IDENTIFICACION UNICA DEL DISPOSITIVO DE HUELLA DIGITAL QUE ACTUALIZÓ EL REGISTRO POR ÚLTIMA VEZ 
  @IsOptional()
  @IsString()
  USUAHLLOID: string;

  //CAMPO QUE GUARDA LA HUELLA DEL DEDO ÍNDICE DE LA MANO DERECHA DEL USUARIO
  @IsOptional()
  USUAINDIDCHO: Buffer;

  //CAMPO QUE GUARDA LA HUELLA DEL DEDO MEDIO DE LA MANO DERECHA DEL USUARIO
  @IsOptional()
  USUAMEDIODCHO: Buffer;

  //CAMPO QUE GUARDA LA HUELLA DEL DEDO ANULAR DE LA MANO DERECHA DEL USUARIO
  @IsOptional()
  USUAANUDCHO: Buffer;

  //CAMPO QUE GUARDA LA HUELLA DEL DEDO MEÑIQUE DE LA MANO DERECHA DEL USUARIO
  @IsOptional()
  USUAMENIDCHO: Buffer;

  //CAMPO QUE GUARDA LA HUELLA DEL DEDO ÍNDICE DE LA MANO IZQUIERDA DEL USUARIO
  @IsOptional()
  USUAINDIIZQ: Buffer; 

  //CAMPO QUE GUARDA LA HUELLA DEL DEDO MEDIO DE LA MANO IZQUIERDA DEL USUARIO
  @IsOptional()
  USUAMEDIOIZQ: Buffer;
  
  //CAMPO QUE GUARDA LA HUELLA DEL DEDO ANULAR DE LA MANO IZQUIERDA DEL USUARIO
  @IsOptional()
  USUAANUIZQ: Buffer;

  //CAMPO QUE GUARDA LA HUELLA DEL DEDO MEÑIQUE DE LA MANO IZQUIERDA DEL USUARIO
  @IsOptional()
  USUAMENIIZQ: Buffer;

  //RELACION CON LA TABLA SI_HUELLEROAPP
  @IsNotEmpty()
  @IsNumber()
  USUACARGO: number;

  //RELACION CON LA TABLA SI_EMPRESA
  @IsNotEmpty()
  @IsNumber()
  USUAEMPR: number;

  //1 = USUARIO TOC, 0 = USUARIO CLIENTE
  @IsNotEmpty()
  @IsIn([0, 1])
  USUATOC: number;

  //NOMBRE DEL USUARIO EN EL DIRECTORIO
  @IsNotEmpty()
  @IsString()
  USUADIRECTNOMB: string;
}
