import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'AF_MARCAS_AUD'})
export class AF_MARCAS_AUD {

 @PrimaryGeneratedColumn({
    name: "MARCID",
    type: 'number',
  }) 
  MARCID: number;

  @Column({
    name:"MARCEMPR",
    nullable: false,
    type: 'number'
  })
  MARCEMPR: number;

  @Column({
    name: "MARCNOMB",
    nullable: false,
    type: 'varchar2',
    length: 255,
  })
  MARCNOMB: string;

  @Column({
    name: "MARCABRV",
    nullable: false,
    type: 'varchar2',
    length: 255,
  })
  MARCABRV: string;

  @Column({
    name: "MARCESTADO",
    nullable: false,
    type: 'varchar2',
    length: 1,
  })
  MARCESTADO: string;

  @Column({
    name: "MARCUSCR",
    nullable: false,
    type: 'varchar2',
    length: 10,
  })
  MARCUSCR: string;

  @Column({
    name: "MARCFECR", 
    nullable: false,
    type: Date,
  })
  MARCFECR: Date;

  @Column({
    name: "MARCUSACT",
    type: 'varchar2',
    length: 10,
    nullable: true
  })
  MARCUSACT: string;

  @Column({
    name: "MARCFEAC",
    type: 'date',
    nullable: true
  })
  MARCFEAC: Date;

  @Column({
    name: "AUDIT_ACTION",
    type: "char",
    length: 1,
    nullable: true
  })
  AUDIT_ACTION: string;

  @Column({
    name: "AUDIT_BY",
    type: 'varchar2',
    length: 50,
    nullable: true
  })
  AUDIT_BY: string;

 /*  @Column({
    type: 'timestamp',
    nullable: true
  })
  AUDIT_AT: Date;
*/
} 
