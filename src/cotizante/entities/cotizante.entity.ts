import { Tpident } from "../../tpident/entities/tpident.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
import { Type } from 'class-transformer';

@Entity({name: 'PA_COTIZANTE'})
export class Cotizante {

  @PrimaryColumn({
    unique: true,
    name: "COTIID",
    type: 'number'
  })
  COTIID: number;  

  // TODO: TIPO DE DOCUMENTO DE IDENTIDAD, RELACION CON LA TABLA PA_TPIDENT 
  @Column({
    name: "COTITPIDENT",
    nullable: false,
    type: 'number'
  })
  COTITPIDENT: number;

  //NUMERO DE DOCUMENTO DE IDENTIDAD
  @Column({
    name: "COTIIDENT",
    nullable: false,
    type: 'varchar2',
    length: 200,
  })
  COTIIDENT: string;

  //NOMBRE DEL COTIZANTE
  @Column({
    name: "COTINOMB",
    nullable: false,
    type: 'varchar2',
    length: 200,
  })
  COTINOMB: string;

  //FECHA DE CREACION
  @Column({
    name: "COTIFECR",
    type: 'date',
    nullable: false
  })
  COTIFECR: Date;

  //USUARIO DE CREACION DEL REGISTRO
  @Column({
    name: "COTIUSCR",
    nullable: false,
    type: 'varchar2',
    length: 10,
  })
  COTIUSCR: string;

  //USUARIO DE ACTUALIZACION DEL REGISTRO
  @Column({
    name: "COTIUSACT",
    nullable: true,
    type: 'varchar2',
    length: 10,
  })
  COTIUSACT: string;

  //FECHA Y HORA  DE ACTUALIZACION DEL REGISTRO
  @Column({
    name: "COTIFEAC",
    type: 'date',
    nullable: true
  })
  COTIFEAC: Date;

  //ESTADO DEL REGISTRO 
  @Column({
    name: "COTIESTADO",
    nullable: false,
    type: 'varchar2',
    length: 1,
    default: 'A'
  })
  COTIESTADO: string;


  /* @OneToOne(      
    () => Tpident,
    {eager:true})
  @JoinColumn({ name: "COTITPIDENT" })
  tpident: Tpident; */

  @ManyToOne(() => Tpident, tpident => tpident.cotizantes)
  @JoinColumn({ name: "COTITPIDENT" }) // Asegúrate de configurar la columna de unión adecuadamente
  tpident: Tpident;
}
