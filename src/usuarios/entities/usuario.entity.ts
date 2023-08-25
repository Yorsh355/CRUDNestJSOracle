import { Software } from '../../software/entities/software.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryColumn,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'SE_USUARIOS' })
export class Usuario {
  //CONSECUTIVO DEL USUARIO
  @PrimaryColumn({
    name: 'USUAID',
    type: 'number',
  })
  USUAID: number;

  //NOMBRE DEL USUARIO(SIGLAS)
  @Column({
    name: 'USUANOMB',
    type: 'varchar2',
    length: 255,
    nullable: false,
  })
  USUANOMB: string;

  //PRIMER NOMBRE DEL USUARIO
  @Column({
    name: 'USUANOMB1',
    type: 'varchar2',
    length: 255,
    nullable: false,
  })
  USUANOMB1: string;

  //CONTRASEÑA DEL USUARIO (CLAVE)
  @Column({
    name: 'USUACLAVE',
    type: 'varchar2',
    length: 100,
    nullable: false,
  })
  USUACLAVE: string;

  //FECHA DE VENCIMIENTO DEL USUARIO
  @Column({
    name: 'USUAFEUSU',
    type: 'date',
    nullable: true,
  })
  USUAFEUSU: Date;

  //TIEMPO  CAMBIO DE CLAVE (DIAS) 0 no hay cambio de clave
  @Column({
    name: 'USUATCLAVE',
    type: 'number',
    nullable: false,
    default: 30,
  })
  USUATCLAVE: number;

  //ESTADO DEL REGISTRO
  @Column({
    name: 'USUAESTADO',
    type: 'varchar2',
    length: 1,
    nullable: false,
    default: 'A',
  })
  USUAESTADO: string;

  //USUARIO DE CREACIÓN
  @Column({
    name: 'USUAUSCR',
    type: 'varchar2',
    length: 10,
    nullable: false,
  })
  USUAUSCR: string;

  //FECHA DE CREACIÓN DEL REGISTRO
  @Column({
    name: 'USUAFECR',
    type: 'date',
    nullable: false,
    default: () => 'SYSDATE',
  })
  USUAFECR: Date;

  //USUARIO DE ACTUALIZACIÓN
  @Column({
    name: 'USUAUSACT',
    type: 'varchar2',
    length: 10,
    nullable: true,
  })
  USUAUSACT: string;

  //FECHA DE ACTUALIZACIÓN
  @Column({
    name: 'USUAFEAC',
    type: 'date',
    nullable: true,
  })
  USUAFEAC: Date;

  //RELACIÓN CON LA TABLA PA_TPIDENT
  @Column({
    name: 'USUATPIDENT',
    type: 'number',
    nullable: false,
  })
  USUATPIDENT: number;

  //FIRMA
  @Column({
    name: 'USUAFIRMA',
    type: 'blob',
    nullable: true,
  })
  USUAFIRMA: Buffer;

  //EXTENSION (MIMETYPE)
  @Column({
    name: 'USUAEXTFIRMA',
    type: 'varchar2',
    length: 255,
    nullable: true,
  })
  USUAEXTFIRMA: string;

  //DOCUMENTO DE IDENTIDAD DEL USUARIO
  @Column({
    name: 'USUAIDENT',
    type: 'varchar2',
    length: 255,
    nullable: false,
  })
  USUAIDENT: string;

  //SEGUNDO NOMBRE DEL USUARIO
  @Column({
    name: 'USUANOMB2',
    type: 'varchar2',
    length: 255,
    nullable: true,
  })
  USUANOMB2: string;

  //PRIMER APELLIDO DEL USUARIO
  @Column({
    name: 'USUAAPELL1',
    type: 'varchar2',
    length: 255,
    nullable: false,
  })
  USUAAPELL1: string;

  //SEGUNDO APELLIDO DEL USUARIO
  @Column({
    name: 'USUAAPELL2',
    type: 'varchar2',
    length: 255,
    nullable: true,
  })
  USUAAPELL2: string;

  //FECHA DE ULTIMO CAMIBIO DE CLAVE
  @Column({
    name: 'USUAFEULCACLA',
    type: 'date',
    nullable: true,
  })
  USUAFEULCACLA: Date;

  //ESTADO DEL USUARIO  ACTIVO INACTIVO
  @Column({
    name: 'USUAESTUSU',
    type: 'varchar2',
    length: 1,
    nullable: false,
    default: 'A',
  })
  USUAESTUSU: string;

  //NUMERO DE TELÉFONO DEL USUARIO
  @Column({
    name: 'USUATELE',
    type: 'varchar2',
    length: 255,
    nullable: true,
  })
  USUATELE: string;

  //CORREO ELECTRONICO DEL USUARIO
  @Column({
    name: 'USUAMAIL',
    type: 'varchar2',
    length: 255,
    nullable: true,
  })
  USUAMAIL: string;

  //RELACION CON LA TABLA SI_HUELLEROAPP
  @Column({
    name: 'USUAHLLODIG',
    type: 'number',
    nullable: false,
  })
  USUAHLLODIG: number;

  //VARIABLE QUE ME INDICA SI HAY QUE ABRIR EL APLICATIVO DE ESCRITORIO 1=ABRE APP 0=NO ABRE APP
  @Column({
    name: 'USUAESTHLLO',
    type: 'number',
    nullable: true,
    default: 0,
  })
  USUAESTHLLO: number;

  //VARIABLE QUE INDICA SI EL USUARIO TIENE DISPOSITIVO DE HUELLA DIGITAL 1=SI 0=NO
  @Column({
    name: 'USUAUTIHLLO',
    type: 'varchar2',
    length: 1,
    nullable: false,
    default: '0',
  })
  USUAUTIHLLO: string;

  //IDENTIFICACION UNICA DEL DISPOSITIVO DE HUELLA DIGITAL QUE ACTUALIZÓ EL REGISTRO POR ÚLTIMA VEZ
  @Column({
    name: 'USUAHLLOID',
    type: 'varchar2',
    length: 255,
    nullable: true,
  })
  USUAHLLOID: string;

  //CAMPO QUE GUARDA LA HUELLA DEL DEDO ÍNDICE DE LA MANO DERECHA DEL USUARIO
  @Column({
    name: 'USUAINDIDCHO',
    type: 'blob',
    nullable: true,
  })
  USUAINDIDCHO: Buffer;

  //CAMPO QUE GUARDA LA HUELLA DEL DEDO MEDIO DE LA MANO DERECHA DEL USUARIO
  @Column({
    name: 'USUAMEDIODCHO',
    type: 'blob',
    nullable: true,
  })
  USUAMEDIODCHO: Buffer;

  //CAMPO QUE GUARDA LA HUELLA DEL DEDO ANULAR DE LA MANO DERECHA DEL USUARIO
  @Column({
    name: 'USUAANUDCHO',
    type: 'blob',
    nullable: true,
  })
  USUAANUDCHO: Buffer;

  //CAMPO QUE GUARDA LA HUELLA DEL DEDO MEÑIQUE DE LA MANO DERECHA DEL USUARIO
  @Column({
    name: 'USUAMENIDCHO',
    type: 'blob',
    nullable: true,
  })
  USUAMENIDCHO: Buffer;

  //CAMPO QUE GUARDA LA HUELLA DEL DEDO ÍNDICE DE LA MANO IZQUIERDA DEL USUARIO
  @Column({
    name: 'USUAINDIIZQ',
    type: 'blob',
    nullable: true,
  })
  USUAINDIIZQ: Buffer;

  //CAMPO QUE GUARDA LA HUELLA DEL DEDO MEDIO DE LA MANO IZQUIERDA DEL USUARIO
  @Column({
    name: 'USUAMEDIOIZQ',
    type: 'blob',
    nullable: true,
  })
  USUAMEDIOIZQ: Buffer;

  //CAMPO QUE GUARDA LA HUELLA DEL DEDO ANULAR DE LA MANO IZQUIERDA DEL USUARIO
  @Column({
    name: 'USUAANUIZQ',
    type: 'blob',
    nullable: true,
  })
  USUAANUIZQ: Buffer;

  //CAMPO QUE GUARDA LA HUELLA DEL DEDO MEÑIQUE DE LA MANO IZQUIERDA DEL USUARIO
  @Column({
    name: 'USUAMENIIZQ',
    type: 'blob',
    nullable: true,
  })
  USUAMENIIZQ: Buffer;

  //RELACION CON LA TABLA SI_HUELLEROAPP
  @Column({
    name: 'USUACARGO',
    type: 'number',
    nullable: false,
  })
  USUACARGO: number;

  //RELACION CON LA TABLA SI_EMPRESA
  @Column({
    name: 'USUAEMPR',
    type: 'number',
    nullable: false,
  })
  USUAEMPR: number;

  //1 = USUARIO TOC, 0 = USUARIO CLIENTE
  @Column({
    name: 'USUATOC',
    type: 'number',
    nullable: false,
    default: 0,
  })
  USUATOC: number;

  //NOMBRE DEL USUARIO EN EL DIRECTORIO
  @Column({
    name: 'USUADIRECTNOMB',
    type: 'varchar2',
    length: 1,
    nullable: false,
    default: '0',
  })
  USUADIRECTNOMB: string;

  //Relación ManyToMany
  @ManyToMany(() => Software, (software) => software.usuarios)
  @JoinTable({
    name: 'S_EMPRESOFTWARE',
    joinColumn: {
      name: 'USUAID',
    },
    inverseJoinColumn: {
      name: 'SOFTID',
    },
  })
  software: Software[];
}
