import { Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { Ad_factelec } from "./AD_FACTELEC.entity";

export class Origenes_tabla{

  //1. CONSECUTIVO DEL REGISTRO
   @PrimaryGeneratedColumn({
    type: 'number'
  })
  ORTAID: number; 

  //2. NOMBRE DEL MODULO ORIGEN GENERAL O DEL MODULO DETALLES 
  @Column({
    type: "varchar2",
    length: 255,
    nullable: false
  })
  ORTANOMB: string;

  //3. ABREVIACION DEL MODULO GENERAL O MODULO DE DETALLES
  @Column({
    type: "varchar2",
    length: 255,
    nullable: false
  })
  ORTAABRV: string;

  //4. ESTADO DEL REGISTRO (A=ACTIVO, I=INACTIVO)
  @Column({
    type: "varchar2",
    length: 1,
    nullable: false
  })
  ORTAESTADO: string;

  //5. USUARIO DE CREACION DEL REGISTRO
  @Column({
    type: "varchar2",
    length: 10,
    nullable: false
  })
  ORTAUSCR: string;

  //6. FECHA CREACION DEL REGISTRO
  @Column({
    type: "date",
    nullable: false,
    default: () => "SYSDATE"
  })
  ORTAFECR: Date;

  //7. USUARIO DE ACTUALIZACION DEL REGISTRO
  @Column({
    type: "varchar2",
    length: 10
  })
  ORTAUSACT: string;

  //8. FECHA ACTUALIZACION DEL REGISTRO
  @Column({
    type: "date"
  })
  ORTAFEAC: Date;

  //9. TABLA PRINCIPAL DEL MÓDULO
  @Column({
    type: "varchar2",
    length: 255
  })
  ORTATABLA: string;

  //10. TABLA DE DETALLES DEL MÓDULO
  @Column({
    type: "varchar2",
    length: 255
  })
  ORTATABLADT: string;

  //11. NOMBRE DEL CAMPO QUE GUARDA LA RELACIÓN FORANEA
  @Column({
    type: "varchar2",
    length: 20
  })
  ORTATABLADTFK: string;

  //-------RELACIÖN------//
  @ManyToOne(
    () => Ad_factelec, 
    ad_factelec => ad_factelec.FAELORTA
    )
  adFacteles: Ad_factelec;

}

