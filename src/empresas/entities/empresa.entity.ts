import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'SI_EMPRESAS' })
export class Empresa {
  //CONSECUTIVO DE LA EMPRESA EN LA TABLA
  @PrimaryColumn({
    name: 'EMPRID',
    type: 'number',
  })
  EMPRID: number;

  //DENOMINACION O RAZON SOCIAL DE LA EMPRESA
  @Column({
    name: 'EMPRNOMB',
    type: 'varchar2',
    length: 255,
    nullable: false,
  })
  EMPRNOMB: string;

  //DIRECCION DE LA EMPRESA
  @Column({
    name: 'EMPRDIREC',
    type: 'varchar2',
    length: 255,
    nullable: false,
  })
  EMPRDIREC: string;

  //ESTADO DE LA EMPRESA (A=ACTIVO, I=INACTIVO)
  @Column({
    name: 'EMPRESTADO',
    type: 'varchar2',
    length: 1,
    nullable: false,
    default: 'A',
  })
  EMPRESTADO: string;

  //FECHA DE CONSTITUCION DE LA EMPRESA
  @Column({
    name: 'EMPRFECO',
    type: 'date',
    nullable: true,
    default: null,
  })
  EMPRFECO: Date;

  //RELACION CON LA TABLA SE_USUARIOS (CONTADOR PUBLICO)
  @Column({
    name: 'EMPRCONT',
    type: 'number',
    nullable: false,
  })
  EMPRCONT: number;

  //RELACION CON LA TABLA SE_USUARIOS (REVISOR FISCAL)
  @Column({
    name: 'EMPRREFI',
    type: 'number',
    nullable: false,
  })
  EMPRREFI: number;

  //RELACIÓN CON LA TABLA PA_REGIMENES
  @Column({
    name: 'EMPRREGI',
    type: 'number',
    nullable: false,
  })
  EMPRREGI: number;

  //DIGITO DE VERIFICACION CORRESPONDIENTE AL NUMERO DE IDENTIFICACION DE LA EMPRESA
  @Column({
    name: 'EMPRDV',
    type: 'varchar2',
    length: 1,
    nullable: false,
  })
  EMPRDV: string;

  //RELACIÓN CON LA TABLA  PA_CIUDADES
  @Column({
    name: 'EMPRCIUD',
    type: 'number',
    nullable: false,
  })
  EMPRCIUD: number;

  //IMAGEN DE LA EMPRESA (LOGO)
  @Column({
    name: 'EMPRLOGO',
    type: 'blob',
    nullable: true,
  })
  EMPRLOGO: Buffer;

  //EXTENSION DE LA IMAGEN (LOGO)
  @Column({
    name: 'EMPREXTLOGO',
    type: 'varchar2',
    length: 255,
    nullable: true,
  })
  EMPREXTLOGO: string;

  //RELACIÓN CON LA TABLA  PA_TPIDENT
  @Column({
    name: 'EMPRTPIDENT',
    type: 'number',
    nullable: false,
  })
  EMPRTPIDENT: number;

  //RELACIÓN CON LA TABLA PA_ESTASOCI
  @Column({
    name: 'EMPRESTSO',
    type: 'number',
    nullable: false,
  })
  EMPRESTSO: number;

  //USUARIO DE CREACION DEL REGISTRO
  @Column({
    name: 'EMPRUSCR',
    type: 'varchar2',
    length: 10,
    nullable: false,
  })
  EMPRUSCR: string;

  //FECHA DE CREACION DEL REGISTRO
  @Column({
    name: 'EMPRFECR',
    type: 'date',
    nullable: false,
    default: () => 'SYSDATE',
  })
  EMPRFECR: Date;

  //USUARIO DE ACTUALIZACION DEL REGISTRO
  @Column({
    name: 'EMPRUSACT',
    type: 'varchar2',
    length: 10,
    nullable: true,
  })
  EMPRUSACT: string;

  //FECHA DE ACTUALIZACION DEL REGISTRO
  @Column({
    name: 'EMPRFEAC',
    type: 'date',
    nullable: true,
  })
  EMPRFEAC: Date;

  //OBJETO SOCIAL DE LA EMPRESA
  @Column({
    name: 'EMPROBSO',
    type: 'clob',
    nullable: true,
  })
  EMPROBSO: string;

  //CLASE DE AGENTE RETENEDOR DE RENTA (0=AGENTE RETENEDOR, 1=AUTORRETENEDOR, 2=NO APLICA)
  @Column({
    name: 'EMPRRERENT',
    type: 'varchar2',
    length: 1,
    nullable: false,
    default: '2',
  })
  EMPRRERENT: string;

  //CLASE DE AGENTE RETENEDOR DE IVA (0=AGENTE RETENEDOR, 1=AUTORRETENEDOR, 2=NO APLICA)
  @Column({
    name: 'EMPRREIVA',
    type: 'varchar2',
    length: 1,
    nullable: false,
    default: '2',
  })
  EMPRREIVA: string;

  //CLASE DE AGENTE RETENEDOR DE ICA (0=AGENTE RETENEDOR, 1=AUTORRETENEDOR, 2=NO APLICA)
  @Column({
    name: 'EMPRREICA',
    type: 'varchar2',
    length: 1,
    nullable: false,
    default: '2',
  })
  EMPRREICA: string;

  //IMPUESTO CREE (0=RESPONSABLE, 1=NO RESPONSABLE)
  @Column({
    name: 'EMPRCREE',
    type: 'varchar2',
    length: 1,
    nullable: false,
    default: '1',
  })
  EMPRCREE: string;

  //TARIFA DEL CREE
  @Column({
    name: 'EMPRTACREE',
    type: 'number',
    nullable: false,
  })
  EMPRTACREE: number;

  //NUMERO DE DOCUMENTO DE IDENTIDAD DE LA EMPRESA
  @Column({
    name: 'EMPRIDENT',
    type: 'varchar2',
    length: 255,
    nullable: false,
  })
  EMPRIDENT: string;

  //RELACION CON LA TABLA  PA_TPSOCIEDAD
  @Column({
    name: 'EMPRTPSO',
    type: 'number',
    nullable: false,
  })
  EMPRTPSO: number;

  //RELACION CON LA TABLA PA_TPPROPIEDAD
  @Column({
    name: 'EMPRTPPROP',
    type: 'number',
    nullable: false,
  })
  EMPRTPPROP: number;

  //RELACION REL LA TABLA SE_USUARIOS  (REPRESENTANTE LEGAL)
  @Column({
    name: 'EMPRRELE',
    type: 'number',
    nullable: false,
  })
  EMPRRELE: number;

  //ABREVIACION DE LA EMPRESA
  @Column({
    name: 'EMPRABRV',
    type: 'varchar2',
    length: 255,
    nullable: true,
  })
  EMPRABRV: string;

  //RELACION CON LA TABLA PA_BARRIOS
  @Column({
    name: 'EMPRBARR',
    type: 'number',
    nullable: false,
  })
  EMPRBARR: number;

  //DETERMINA SI LA EMPRESA ES ORIGEN DE MIGRACION DE REGISTRO DE INICO (1=SI , 0=NO)
  @Column({
    name: 'EMPRMIGRA',
    type: 'number',
    nullable: true,
    default: 0,
  })
  EMPRMIGRA: number;

  //TIPO DE LICENCIAMIENTO DE LA EMPRESA (0 = SOFTWARE COMO SERVICIO (SaaS), 1 = Licenciamiento)
  @Column({
    name: 'EMPRLCTO',
    type: 'number',
    nullable: false,
    default: 0,
  })
  EMPRLCTO: number;

  //TIPO DE CONTRATACIÓN QUE UTILIZA LA EMPRESA (1=TIPO 1, 2=TIPO 2)
  @Column({
    name: 'EMPRTPCONTRA',
    type: 'varchar2',
    length: 1,
    nullable: false,
    default: '1',
  })
  EMPRTPCONTRA: string;

  //LA EMPRESA FACTURA ELECTRONICAMENTE (1=SI , 0=NO)
  @Column({
    name: 'EMPRFAEL',
    type: 'varchar2',
    length: 1,
    nullable: false,
    default: '0',
  })
  EMPRFAEL: string;

  //INDICA EL PESO MÁXIMO PARA EL CAMPO 	P17_CONSPESO
  @Column({
    name: 'EMPRPESO',
    type: 'number',
    nullable: true,
    default: 250,
  })
  EMPRPESO: number;

  //INDICA LA TALLA MÁXIMA PARA EL CAMPO P17_CONSTALLA
  @Column({
    name: 'EMPRTALLA',
    type: 'number',
    nullable: true,
    default: 250,
  })
  EMPRTALLA: number;

  //INDICA EL ISC MÁXIMO PARA EL CAMPO 	P17_ISC
  @Column({
    name: 'EMPRISC',
    type: 'number',
    nullable: true,
    default: 4.17,
  })
  EMPRISC: number;

  //INDICA EL IMC MÁXIMO PARA EL CAMPO P17_CONSIMC
  @Column({
    name: 'EMPRIMC',
    type: 'number',
    nullable: true,
    default: 40,
  })
  EMPRIMC: number;

  //RELACIÓN CON LA TABLA FA_PROVETECNO
  @Column({
    name: 'EMPRPROVETEC',
    type: 'number',
    nullable: false,
    default: 0,
  })
  EMPRPROVETEC: number;

  //IDENTIFICADOR INTERNO DE SIISA PARA INTEGRACIONES
  @Column({
    name: 'EMPRIDIN',
    type: 'varchar2',
    length: 255,
    nullable: true,
  })
  EMPRIDIN: string;

  //INDICA LA VERSIÓN A USAR PARA EL MÓDULO DE FACTURACIÓN ELECTRÓNICA
  @Column({
    name: 'EMPRVERS',
    type: 'varchar2',
    length: 1,
    nullable: true,
  })
  EMPRVERS: string;

  //TIPO DE DIRECTORIO (0=DIRECTORIO INTERNO, 1=ACTIVE DIRECTORY)
  @Column({
    name: 'EMPRTPDIRECT',
    type: 'varchar2',
    length: 1,
    nullable: false,
    default: '0',
  })
  EMPRTPDIRECT: string;

  //IDENTIFICADOR DE INTEGRACION DIGA EXTERNO
  @Column({
    name: 'EMPRDIGA',
    type: 'number',
    nullable: true,
    default: null,
  })
  EMPRDIGA: number;

  //TIPO DE DIRECTORIO (0=DIRECTORIO INTERNO, 1=ACTIVE DIRECTORY)
  @Column({
    name: 'EMPREDIGA',
    type: 'varchar2',
    length: 1,
    nullable: true,
  })
  EMPREDIGA: string;
}
