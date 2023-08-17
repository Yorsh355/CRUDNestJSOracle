import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'PA_TPIDENT'})
export class Tpident {

  @PrimaryColumn({
    unique: true,
    name: "TPIDID",
    type: 'number'
  })
  TPIDID: number;

  //NOMBRE DEL TIPO DE DOCUMENTO DE IDENTIFICACION 
  @Column({
    name: "TPIDNOMB",
    nullable: false,
    type: 'varchar2',
    length: 255,
  })
  TPIDNOMB: string;

  //ABREVIACION DEL TIPO DE DOCUMENTO DE IDENTIFICACION 
  @Column({
    name: "TPIDABRV",
    nullable: false,
    type: 'varchar2',
    length: 255,
  })
  TPIDABRV: string;

  //ESTADO DEL REGISTRO 
  @Column({
    name: "TPIDESTADO",
    nullable: false,
    type: 'varchar2',
    length: 1,
    default: 'A'
  })
  TPIDESTADO: string;

  //USUARIO DE CREACION DEL REGISTRO
  @Column({
    name: "TPIDUSCR",
    nullable: false,
    type: 'varchar2',
    length: 10,
  })
  TPIDUSCR: string;

  //FECHA DE CREACION DEL REGISTRO
  @Column({
    name: "TPIDFECR",
    type: 'date',
    nullable: false
  })
  TPIDFECR: Date;

  //USUARIO DE ACTUALIZACIÓN DEL REGISTRO
  @Column({
    name: "TPIDUSACT",
    nullable: true,
    type: 'varchar2',
    length: 10,
  })
  TPIDUSACT: string;

  //FECHA DE ACTUALIZACIÓN DEL REGISTRO
  @Column({
    name: "TPIDFEAC",
    type: 'date',
    nullable: false
  })
  TPIDFEAC: Date;

  //ABREVIACIÓN DEL TIPO DE DOCUMENTO DE IDENTIFICACIÓN PARA FACTURACIÓN ELECTRÓNICA
  @Column({
    name: "TPIDFAEL",
    nullable: true,
    type: 'varchar2',
    length: 2,
  })
  TPIDFAEL: string;

  //ABREVIACIÓN DEL TIPO DE DOCUMENTO DE IDENTIFICACIÓN PARA FACTURACIÓN ELECTRÓNICA SOFTWARE PROPIO
  @Column({
    name: "TPIDFAELTOC",
    nullable: true,
    type: 'varchar2',
    length: 20,
  })
  TPIDFAELTOC: string;

  //TODO: relación OneToMany

}
