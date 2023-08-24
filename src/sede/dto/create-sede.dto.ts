import { IsDateString, IsEmail, IsIn, IsNotEmpty, IsNumber, IsOptional, IsString, isNotEmpty } from "class-validator";

export class CreateSedeDto {

  //CONSECUTIVO DE LA SEDE
  @IsOptional()
  @IsNumber()
  SEDEID: number;

  //RELACION CON LA TABLA DE PA_CIUDADES
  @IsNotEmpty()
  @IsNumber()
  SEDECIUD: number;

  //RELACION CON LA TABLA DE SI_EMPRESAS (A LA CUAL PERTENECE)
  @IsNotEmpty()
  @IsNumber()
  SEDEEMPR: number;

  //NOMBRE DE LA SEDE
  @IsNotEmpty()
  @IsString()
  SEDENOMB: string;

  //NOMBRE DE LA SEDE
  @IsNotEmpty()
  @IsString()
  SEDETELE: string;

  //CORREOS ELECTRONICOS DE LA SEDE
  @IsNotEmpty()
  @IsEmail()
  SEDEMAIL: string;

  //DIRECCION DE LA SEDE
  @IsNotEmpty()
  @IsString()
  SEDEDIREC: string;

  //ESTADO DEL REGISTRO (A = ACTIVO, I = INACTIVO)
  @IsNotEmpty()
  @IsIn(['A', 'I'])
  SEDEESTADO: string;

  //CODIGO DE HABILITACION DE LA SEDE
  @IsNotEmpty()
  @IsString()
  SEDESGSSS: string;

  //RELACION CON LA TABLA PA_TPRED
  @IsNotEmpty()
  @IsNumber()
  SEDETPRED: number;

  //RELACION CON LA TABLA PA_TPSEDE
  @IsNotEmpty()
  @IsNumber()
  SEDETPSEDE: number;

  //RELACION CON LA TABLA  SE_USUARIOS (REPRESENTANTE LEGAL SEDE)
  @IsNotEmpty()
  @IsNumber()
  SEDERESP: number;

  //ABREVIACION DE LA SEDE
  @IsNotEmpty()
  @IsString()
  SEDEABRV: string;

  //INDICE DE LA SEDE
  @IsNotEmpty()
  @IsNumber()
  SEDEINDI: number;

  //USUARIO DE CREACION DEL REGISTRO
  @IsNotEmpty()
  @IsString()
  SEDEUSCR: string;

  //FECHA DE CREACION DEL REGISTRO
  @IsNotEmpty()
  @IsDateString()
  SEDEFECR: Date;

  //USUARIO DE ACTUALIZACION DEL REGISTRO
  @IsOptional()
  @IsString()
  SEDEUSACT: string;

  //FECHA DE ACTUALIZACION DEL REGISTRO
  @IsOptional()
  @IsDateString()
  SEDEFEAC: Date;

  //RELACION CON LA TABLA PA_BARRIOS
  @IsNotEmpty()
  @IsNumber()
  SEDEBARRIO: number;

  //CODIGO DE HABILITACION DE LA SEDE
  @IsNotEmpty()
  @IsDateString()
  SEDECODIGO: string;

  //AFECTAR A CARTERA (1="SI", 0="NO")
  //ESTADO DEL REGISTRO (A = ACTIVO, I = INACTIVO)
  @IsNotEmpty()
  @IsIn(['1', '0'])
  SEDEAFECAR: string;

  //IDENTIFICADOR DE LA EMPRESA PARA PROVEEDOR TECNOLOGICO EN CONEXIÓN
  @IsOptional()
  @IsNumber()
  SEDEIDEMPR: number;

  //USUARIO PARA CONEXIÓN
  @IsOptional()
  @IsString()
  COFEUSUARIO: string;

  //CONTRASEÑA PARA CONEXIÓN
  @IsOptional()
  @IsString()
  COFECONTRA: string;

  //TOKEN PARA CONEXIÓN
  @IsOptional()
  @IsString()
  COFETOKEN: string;

  //VERSIÓN PARA CONEXIÓN
  @IsOptional()
  @IsString()
  COFEVERSION: string;

  //WSDL PARA CONEXIÓN
  @IsOptional()
  @IsString()
  SEDEWSDL: string;

  //IDENTIFICADOR DE INTEGRACION DIGA EXTERNO
  @IsOptional()
  @IsNumber()
  SEDEDIGA: number;

  //STADO DE INTEGRACION CON DIGA EXTERNO ( 1 = MIGRADO, 2 = POR MIGRAR COMO INSERT, 3 = POR MIGRAR COMO UPDATE )
  @IsOptional()
  @IsIn(['1', '2', '3'])
  SEDEEDIGA: string;

  //DÍGITO DE VERIFICACIÓN CORRESPONDIENTE AL NÚMERO DE IDENTIFICACIÓN DE LA SEDE
  @IsOptional()
  @IsString()
  SEDEDV: string;

  //sin comentarios
  @IsOptional()
  @IsNumber()
  SEDETPIDENT: number;

  //sin comentarios
  @IsOptional()
  @IsString()
  SEDEIDENT: string;

  //CORREO ELECTRÓNICO PARA ENVÍO COMO COPIA A LA IPS.
  @IsOptional()
  @IsEmail()
  SEDECORBUZON: string;
}
