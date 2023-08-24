import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'SI_SOFTWARE' })
export class Software {
  //CONSECUTIVO DEL REGISTRO
  @PrimaryColumn({
    name: 'SOFTID',
    type: 'number',
  })
  SOFTID: number;

  //NOMBRE DEL REGISTRO
  @Column({
    name: 'SOFTNOMB',
    type: 'varchar2',
    length: 255,
    nullable: false,
  })
  SOFTNOMB: string;

  //ABREVIACIÓN DEL REGISTRO
  @Column({
    name: 'SOFTABRV',
    type: 'varchar2',
    length: 255,
    nullable: false,
  })
  SOFTABRV: string;

  //ESTADO DEL REGISTRO (A: ACTIVO, I: INACTIVO)
  @Column({
    name: 'SOFTESTADO',
    type: 'varchar2',
    length: 1,
    nullable: false,
    default: 'A',
  })
  SOFTESTADO: string;

  //USUARIO DE CREACIÓN DEL REGISTRO
  @Column({
    name: 'SOFTUSCR',
    type: 'varchar2',
    length: 10,
    nullable: false,
  })
  SOFTUSCR: string;

  //FECHA Y HORA DE CREACIÓN DEL REGISTRO
  @Column({
    name: 'SOFTFECR',
    type: 'date',
    nullable: false,
    default: () => 'SYSDATE',
  })
  SOFTFECR: Date;

  //USUARIO DE ACTUALIZACIÓN DEL REGISTRO (ÚLTIMO)
  @Column({
    name: 'SOFTUSAC',
    type: 'varchar2',
    length: 10,
    nullable: true,
  })
  SOFTUSAC: string;

  //FECHA Y HORA DE ACTUALIZACIÓN DEL REGISTRO (ÚLTIMA)
  @Column({
    name: 'SOFTFEAC',
    type: 'date',
    nullable: true,
  })
  SOFTFEAC: Date;
}
