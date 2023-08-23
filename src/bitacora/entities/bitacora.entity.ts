import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'SE_BITACORA' })
export class Bitacora {
  //CONSECUTIVO DEL REGISTRO
  @PrimaryColumn({
    name: 'BITAID',
    type: 'number',
    nullable: false,
  })
  BITAID: number;

  //RELACION CON LA TABLA SE_USUARIOS USUARIO QUE ACCEDE AL SISTEMA
  @Column({
    name: 'BITAUSUA',
    type: 'number',
    nullable: false,
  })
  BITAUSUA: number;

  //RELACION CON LA TABLA SI_EMPRESAS EMPRESA EN LA QUE SE REALIZA EL INGRESO
  @Column({
    name: 'BITAEMPR',
    type: 'number',
    nullable: false,
  })
  BITAEMPR: number;

  //FECHA Y HORA DE INICIO DE SESIÓN
  @Column({
    name: 'BITAFEIN',
    type: 'date',
    nullable: false,
  })
  BITAFEIN: Date;

  //FECHA Y HORA DE CIERRE DE SESIÓN
  @Column({
    name: 'BITAFEOUT',
    type: 'date',
    nullable: true,
  })
  BITAFEOUT: Date;

  //ESTADO DEL REGISTRO (A: ACTIVO, I: INACTIVO)
  @Column({
    name: 'BITAESTADO',
    type: 'varchar2',
    length: 1,
    nullable: false,
  })
  BITAESTADO: string;

  //USUARIO DE CREACIÓN DEL REGISTRO
  @Column({
    name: 'BITAUSCR',
    type: 'varchar2',
    length: 15,
    nullable: false,
  })
  BITAUSCR: string;

  //FECHA Y HORA DE CREACIÓN DEL REGISTRO
  @Column({
    name: 'BITAFECR',
    type: 'date',
    nullable: false,
    default: () => 'SYSDATE',
  })
  BITAFECR: Date;

  //USUARIO DE ACTUALIZACIÓN DEL REGISTRO (ÚLTIMO)
  @Column({
    name: 'BITAUSACT',
    type: 'varchar2',
    length: 15,
    nullable: true,
  })
  BITAUSACT: string;

  //FECHA Y HORA DE ACTUALIZACIÓN DEL REGISTRO (ÚLTIMA)
  @Column({
    name: 'BITAFEAC',
    type: 'date',
    nullable: true,
  })
  BITAFEAC: Date;

  //NUMERO DE SESION ASIGNADO AL INICIO DE SESIÓN
  @Column({
    name: 'BITASESION',
    type: 'varchar2',
    length: 255,
    nullable: true,
  })
  BITASESION: string;

  //RELACION CON LA TABLA DE SI_HUELLEROAPP
  @Column({
    name: 'BITAHLLO',
    type: 'number',
    nullable: true,
  })
  BITAHLLO: number;

  //RELACION CON LA TABLA DE PA_SEDE SEDE EN LA QUE SE REALIZA EL INGRESO
  @Column({
    name: 'BITASEDE',
    type: 'number',
    nullable: false,
  })
  BITASEDE: number;

  //DIRECCIÓN IP DEL DISPOSITIVO DESDE DONDE SE INICIA SESIÓN
  @Column({
    name: 'BITAIP',
    type: 'varchar2',
    length: 255,
    nullable: false,
    default: '0.0.0.0',
  })
  BITAIP: string;

  //IDENTIFICA LA SESION DEL NAVEGADOR (NAVEGADOR UNICO)
  @Column({
    name: 'BITANAVID',
    type: 'varchar2',
    length: 255,
    nullable: true,
  })
  BITANAVID: string;

  //1 = USUARIO TOC, 0 = USUARIO CLIENTE
  @Column({
    name: 'BITATOC',
    type: 'number',
    nullable: false,
    default: 0,
  })
  BITATOC: number;

  //0 = USUARIO SIISA;1= ACTIVE DIRECTORY
  @Column({
    name: 'BITADIRECTUSUA',
    type: 'number',
    nullable: true,
    default: 0,
  })
  BITADIRECTUSUA: number;
}
