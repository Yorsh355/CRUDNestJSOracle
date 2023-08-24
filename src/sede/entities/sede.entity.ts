import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'PA_SEDE' })
export class Sede {
  //CONSECUTIVO DE LA SEDE
  @PrimaryColumn({
    name: 'SEDEID',
    type: 'number',
  })
  SEDEID: number;

  //RELACION CON LA TABLA DE PA_CIUDADES
  @Column({
    name: 'SEDECIUD',
    type: 'number',
    nullable: false,
  })
  SEDECIUD: number;

  //RELACION CON LA TABLA DE SI_EMPRESAS (A LA CUAL PERTENECE)
  @Column({
    name: 'SEDEEMPR',
    type: 'number',
    nullable: false,
  })
  SEDEEMPR: number;

  //NOMBRE DE LA SEDE
  @Column({
    name: 'SEDENOMB',
    type: 'varchar2',
    length: 255,
    nullable: false,
  })
  SEDENOMB: string;

  //NUMEROS TELEFONICOS DE LA SEDE
  @Column({
    name: 'SEDETELE',
    type: 'varchar2',
    length: 255,
    nullable: false,
  })
  SEDETELE: string;

  //CORREOS ELECTRONICOS DE LA SEDE
  @Column({
    name: 'SEDEMAIL',
    type: 'varchar2',
    length: 255,
    nullable: false,
  })
  SEDEMAIL: string;

  //DIRECCION DE LA SEDE
  @Column({
    name: 'SEDEDIREC',
    type: 'varchar2',
    length: 255,
    nullable: false,
  })
  SEDEDIREC: string;

  //ESTADO DEL REGISTRO (A = ACTIVO, I = INACTIVO)
  @Column({
    name: 'SEDEESTADO',
    type: 'varchar2',
    length: 1,
    nullable: false,
    default: 'A',
  })
  SEDEESTADO: string;

  //CODIGO DE HABILITACION DE LA SEDE
  @Column({
    name: 'SEDESGSSS',
    type: 'varchar2',
    length: 255,
    nullable: false,
  })
  SEDESGSSS: string;

  //RELACION CON LA TABLA PA_TPRED
  @Column({
    name: 'SEDETPRED',
    type: 'number',
    nullable: false,
  })
  SEDETPRED: number;

  //RELACION CON LA TABLA PA_TPSEDE
  @Column({
    name: 'SEDETPSEDE',
    type: 'number',
    nullable: false,
  })
  SEDETPSEDE: number;

  //RELACION CON LA TABLA  SE_USUARIOS (REPRESENTANTE LEGAL SEDE)
  @Column({
    name: 'SEDERESP',
    type: 'number',
    nullable: false,
  })
  SEDERESP: number;

  //ABREVIACION DE LA SEDE
  @Column({
    name: 'SEDEABRV',
    type: 'varchar2',
    length: 255,
    nullable: false,
  })
  SEDEABRV: string;

  //INDICE DE LA SEDE
  @Column({
    name: 'SEDEINDI',
    type: 'number',
    nullable: false,
  })
  SEDEINDI: number;

  //USUARIO DE CREACION DEL REGISTRO
  @Column({
    name: 'SEDEUSCR',
    type: 'varchar2',
    length: 10,
    nullable: false,
  })
  SEDEUSCR: string;

  //FECHA DE CREACION DEL REGISTRO
  @Column({
    name: 'SEDEFECR',
    type: 'date',
    nullable: false,
    default: () => 'SYSDATE',
  })
  SEDEFECR: Date;

  //USUARIO DE ACTUALIZACION DEL REGISTRO
  @Column({
    name: 'SEDEUSACT',
    type: 'varchar2',
    length: 10,
    nullable: true,
  })
  SEDEUSACT: string;

  //FECHA DE ACTUALIZACION DEL REGISTRO
  @Column({
    name: 'SEDEFEAC',
    type: 'date',
    nullable: true,
  })
  SEDEFEAC: Date;

  //RELACION CON LA TABLA PA_BARRIOS
  @Column({
    name: 'SEDEBARRIO',
    type: 'number',
    nullable: false,
  })
  SEDEBARRIO: number;

  //CODIGO DE HABILITACION DE LA SEDE
  @Column({
    name: 'SEDECODIGO',
    type: 'varchar2',
    length: 255,
    nullable: false,
  })
  SEDECODIGO: string;

  //AFECTAR A CARTERA (1="SI", 0="NO")
  @Column({
    name: 'SEDEAFECAR',
    type: 'varchar2',
    length: 1,
    nullable: false,
    default: '0',
  })
  SEDEAFECAR: string;

  //IDENTIFICADOR DE LA EMPRESA PARA PROVEEDOR TECNOLOGICO EN CONEXIÓN
  @Column({
    name: 'SEDEIDEMPR',
    type: 'number',
    nullable: true,
  })
  SEDEIDEMPR: number;

  //USUARIO PARA CONEXIÓN
  @Column({
    name: 'COFEUSUARIO',
    type: 'varchar2',
    length: 255,
    nullable: true,
  })
  COFEUSUARIO: string;

  //CONTRASEÑA PARA CONEXIÓN
  @Column({
    name: 'COFECONTRA',
    type: 'varchar2',
    length: 255,
    nullable: true,
  })
  COFECONTRA: string;

  //TOKEN PARA CONEXIÓN
  @Column({
    name: 'COFETOKEN',
    type: 'varchar2',
    length: 255,
    nullable: true,
  })
  COFETOKEN: string;

  //VERSIÓN PARA CONEXIÓN
  @Column({
    name: 'COFEVERSION',
    type: 'varchar2',
    length: 255,
    nullable: true,
  })
  COFEVERSION: string;

  //WSDL PARA CONEXIÓN
  @Column({
    name: 'SEDEWSDL',
    type: 'varchar2',
    length: 255,
    nullable: true,
  })
  SEDEWSDL: string;

  //IDENTIFICADOR DE INTEGRACION DIGA EXTERNO
  @Column({
    name: 'SEDEDIGA',
    type: 'number',
    nullable: true,
  })
  SEDEDIGA: number;

  //STADO DE INTEGRACION CON DIGA EXTERNO ( 1 = MIGRADO, 2 = POR MIGRAR COMO INSERT, 3 = POR MIGRAR COMO UPDATE )
  @Column({
    name: 'SEDEEDIGA',
    type: 'varchar2',
    length: 1,
    nullable: true,
  })
  SEDEEDIGA: string;

  //DÍGITO DE VERIFICACIÓN CORRESPONDIENTE AL NÚMERO DE IDENTIFICACIÓN DE LA SEDE
  @Column({
    name: 'SEDEDV',
    type: 'varchar2',
    length: 1,
    nullable: true,
  })
  SEDEDV: string;

  //sin comentarios
  @Column({
    name: 'SEDETPIDENT',
    type: 'number',
    nullable: true,
  })
  SEDETPIDENT: number;

  //sin comentarios
  @Column({
    name: 'SEDEIDENT',
    type: 'varchar2',
    length: 255,
    nullable: true,
  })
  SEDEIDENT: string;

  //CORREO ELECTRÓNICO PARA ENVÍO COMO COPIA A LA IPS.
  @Column({
    name: 'SEDECORBUZON',
    type: 'varchar2',
    length: 255,
    nullable: true,
  })
  SEDECORBUZON: string;
}
