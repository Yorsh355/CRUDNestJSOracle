import {
  IsDateString,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateEmpresaDto {
  //CONSECUTIVO DE LA EMPRESA EN LA TABLA
  @IsOptional()
  @IsNumber()
  EMPRID?: number;

  //DENOMINACION O RAZON SOCIAL DE LA EMPRESA
  @IsNotEmpty()
  @IsString()
  EMPRNOMB: string;

  //DIRECCION DE LA EMPRESA
  @IsNotEmpty()
  @IsString()
  EMPRDIREC: string;

  //ESTADO DE LA EMPRESA (A=ACTIVO, I=INACTIVO)
  @IsNotEmpty()
  @IsIn(['A', 'I'])
  EMPRESTADO: string;

  //FECHA DE CONSTITUCION DE LA EMPRESA
  @IsOptional()
  @IsDateString()
  EMPRFECO?: Date;

  //RELACION CON LA TABLA SE_USUARIOS (CONTADOR PUBLICO)
  @IsNotEmpty()
  @IsNumber()
  EMPRCONT: number;

  //RELACION CON LA TABLA SE_USUARIOS (REVISOR FISCAL)
  @IsNotEmpty()
  @IsNumber()
  EMPRREFI: number;

  //RELACIÓN CON LA TABLA PA_REGIMENES
  @IsNotEmpty()
  @IsNumber()
  EMPRREGI: number;

  //DIGITO DE VERIFICACION CORRESPONDIENTE AL NUMERO DE IDENTIFICACION DE LA EMPRESA
  @IsNotEmpty()
  @IsString()
  EMPRDV: string;

  //RELACIÓN CON LA TABLA  PA_CIUDADES
  @IsNotEmpty()
  @IsNumber()
  EMPRCIUD: number;

  //IMAGEN DE LA EMPRESA (LOGO)
  @IsOptional()
  EMPRLOGO?: Buffer;

  //EXTENSION DE LA IMAGEN (LOGO)
  @IsOptional()
  @IsString()
  EMPREXTLOGO?: string;

  //RELACIÓN CON LA TABLA  PA_TPIDENT
  @IsNotEmpty()
  @IsNumber()
  EMPRTPIDENT: number;

  //RELACIÓN CON LA TABLA PA_ESTASOCI
  @IsNotEmpty()
  @IsNumber()
  EMPRESTSO: number;

  //USUARIO DE CREACION DEL REGISTRO
  @IsNotEmpty()
  @IsString()
  EMPRUSCR: string;

  //FECHA DE CREACION DEL REGISTRO
  @IsOptional()
  @IsDateString()
  EMPRFECR?: Date;

  //USUARIO DE ACTUALIZACION DEL REGISTRO
  @IsOptional()
  @IsString()
  EMPRUSACT?: string;

  //FECHA DE ACTUALIZACION DEL REGISTRO
  @IsOptional()
  @IsDateString()
  EMPRFEAC?: Date;

  //OBJETO SOCIAL DE LA EMPRESA
  @IsOptional()
  @IsString()
  EMPROBSO?: string;

  //CLASE DE AGENTE RETENEDOR DE RENTA (0=AGENTE RETENEDOR, 1=AUTORRETENEDOR, 2=NO APLICA)
  @IsNotEmpty()
  @IsIn(['0', '1', '2'])
  EMPRRERENT: string;

  //CLASE DE AGENTE RETENEDOR DE IVA (0=AGENTE RETENEDOR, 1=AUTORRETENEDOR, 2=NO APLICA)
  @IsNotEmpty()
  @IsIn(['0', '1', '2'])
  EMPRREIVA: string;

  //CLASE DE AGENTE RETENEDOR DE IVA (0=AGENTE RETENEDOR, 1=AUTORRETENEDOR, 2=NO APLICA)
  @IsNotEmpty()
  @IsIn(['0', '1', '2'])
  EMPRREICA: string;

  //IMPUESTO CREE (0=RESPONSABLE, 1=NO RESPONSABLE)
  @IsNotEmpty()
  @IsIn(['0', '1'])
  EMPRCREE: string;

  //TARIFA DEL CREE
  @IsNotEmpty()
  @IsNumber()
  EMPRTACREE: number;

  //NUMERO DE DOCUMENTO DE IDENTIDAD DE LA EMPRESA
  @IsNotEmpty()
  @IsString()
  EMPRIDENT: string;

  //RELACION CON LA TABLA  PA_TPSOCIEDAD
  @IsNotEmpty()
  @IsNumber()
  EMPRTPSO: number;

  //RELACION CON LA TABLA PA_TPPROPIEDAD
  @IsNotEmpty()
  @IsNumber()
  EMPRTPPROP: number;

  //RELACION REL LA TABLA SE_USUARIOS  (REPRESENTANTE LEGAL)
  @IsNotEmpty()
  @IsNumber()
  EMPRRELE: number;

  //ABREVIACION DE LA EMPRESA
  @IsOptional()
  @IsString()
  EMPRABRV?: string;

  //RELACION CON LA TABLA PA_BARRIOS
  @IsNotEmpty()
  @IsNumber()
  EMPRBARR: number;

  //DETERMINA SI LA EMPRESA ES ORIGEN DE MIGRACION DE REGISTRO DE INICO (1=SI , 0=NO)
  @IsOptional()
  @IsIn([0, 1])
  EMPRMIGRA?: number;

  //TIPO DE LICENCIAMIENTO DE LA EMPRESA (0 = SOFTWARE COMO SERVICIO (SaaS), 1 = Licenciamiento)
  @IsNotEmpty()
  @IsIn([0, 1])
  EMPRLCTO: number;

  //TIPO DE CONTRATACIÓN QUE UTILIZA LA EMPRESA (1=TIPO 1, 2=TIPO 2)
  @IsNotEmpty()
  @IsIn(['1', '2'])
  EMPRTPCONTRA: string;

  //LA EMPRESA FACTURA ELECTRONICAMENTE (1=SI , 0=NO)
  @IsNotEmpty()
  @IsIn(['0', '1'])
  EMPRFAEL: string;

  //INDICA EL PESO MÁXIMO PARA EL CAMPO 	P17_CONSPESO
  @IsOptional()
  @IsNumber()
  EMPRPESO?: number;

  //INDICA LA TALLA MÁXIMA PARA EL CAMPO P17_CONSTALLA
  @IsOptional()
  @IsNumber()
  EMPRTALLA?: number;

  //INDICA EL ISC MÁXIMO PARA EL CAMPO 	P17_ISC
  @IsOptional()
  @IsNumber()
  EMPRISC?: number;

  //INDICA EL IMC MÁXIMO PARA EL CAMPO P17_CONSIMC
  @IsOptional()
  @IsNumber()
  EMPRIMC?: number;

  //RELACIÓN CON LA TABLA FA_PROVETECNO
  @IsNotEmpty()
  @IsNumber()
  EMPRPROVETEC: number;

  //IDENTIFICADOR INTERNO DE SIISA PARA INTEGRACIONES
  @IsOptional()
  @IsString()
  EMPRIDIN?: string;

  //INDICA LA VERSIÓN A USAR PARA EL MÓDULO DE FACTURACIÓN ELECTRÓNICA
  @IsOptional()
  @IsString()
  EMPRVERS?: string;

  //TIPO DE DIRECTORIO (0=DIRECTORIO INTERNO, 1=ACTIVE DIRECTORY)
  @IsNotEmpty()
  @IsIn(['0', '1'])
  EMPRTPDIRECT: string;

  //IDENTIFICADOR DE INTEGRACION DIGA EXTERNO
  @IsOptional()
  @IsNumber()
  EMPRDIGA?: number;

  //TIPO DE DIRECTORIO (0=DIRECTORIO INTERNO, 1=ACTIVE DIRECTORY)
  @IsNotEmpty()
  @IsIn(['1', '2', '3'])
  EMPREDIGA: string;
}
