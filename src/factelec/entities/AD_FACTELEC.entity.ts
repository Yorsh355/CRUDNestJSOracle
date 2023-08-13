import { Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Origenes_tabla } from "./ORIGENES_TABLA.entity";

export class Ad_factelec {

  //1. CONSECUTIVO DEL REGISTRO
  @PrimaryGeneratedColumn({
    type: 'number'
  })
  FAELID: number;

  //2. RELACIÓN CON LA TABLA ---> ORIGENES_TABLA Foranea
  @Column({
    type: 'number',
    nullable: false
  })
  FAELORTA: number;

  //3. IDENTIFICADOR INTERNO (____ID) DEL DOCUMENTO ORIGEN
  @Column({
    type: 'number',
    nullable: false
  })
  FAELIDRE: number;

  //4. PETICIÓN ENVIADA AL SERVICIO WEB
  @Column({
    type: 'clob',
    nullable: false
  })
  FAELPETI: string;

  //5. FECHA Y HORA DE ENVÍO DE LA SOLICITUD
  @Column({
    type: 'date',
    default: () => 'SYSDATE',
    nullable: false
  })
  FAELFEEN: Date;

  //6. FECHA Y HORA DE RESPUESTA 
  @Column({
    type: 'date',
    default: () => 'SYSDATE',
  })
  FAELFERE: Date;

  //7. RESPUESTA RECIBIDA DEL SERVICIO WEB
  @Column({
    type: 'clob',
    nullable: false
  })
  FAELRESP: string;

  //8. IDENTIFICADOR EXTERNO DEL DOCUMENTO ENVIADO
  @Column({
    type: "varchar2",
    length: 255,
  })
  FAFAELIDEX: string;

  //9. ESTADO DE CONSUMO EXTERNO DEL DOCUMENTO ENVIADO
  @Column({
    type: "varchar2",
    length: 255,
  })
  FAELESCO: string;

  //10. CÓDIGO ÚNICA DE FACTURACIÓN ELECTRÓNICA EMITIDO POR LA DIAN
  @Column({
    type: "varchar2",
    length: 255,
  })
  FAELCUFE: string;

  //11. URL DEL DOCUMENTO ELECTRÓNICO
  @Column({
    type: "varchar2",
    length: 255
  })
  FAELURL: string;

  //12. ESTADO DEL REGISTRO (A: ACTIVO, I: INACTIVO)
  @Column({
    type: "varchar2",
    length: 1,
    default: 'A'
  })
  FAELESTADO: string;

  //13. USUARIO DE CREACIÓN DEL REGISTRO
  @Column({
    type: "varchar2",
    length: 10,
    nullable: false
  })
  FAELUSCR: string;
  
  //14. FECHA Y HORA DE CREACIÓN DEL REGISTRO
  @Column({
    type: 'date',
    default: () => 'SYSDATE',
    nullable: false,
  })
  FAELFECR: Date;

 //15. USUARIO DE CREACIÓN DEL REGISTRO
 @Column({
  type: "varchar2",
  length: 10,
  nullable: false
  })
  FAELUSAC: string;

  //16. FECHA Y HORA DE ACTUALIZACIÓN DEL ESTADO (ÚLTIMA)
  @Column({
    type: 'date',
    default: () => 'SYSDATE'
  })
  FAELFEAC: Date;

  //17. ERRORES DURANTE EL ENVÍO
  @Column({
    type: 'clob'
  })
  FAELERROR: string;

  //18. ALMACENA EL XML DE LA FACTURA EN BASE64
  @Column({
    type: 'blob'
  })
  FAELXML: string;

  //19. ALMACENA EL QR COMO IMAGEN
  @Column({
    type: 'blob'
  })
  FAELQR: string;

  //20. ALMACENA EL QR COMO IMAGEN
  @Column({
    type: 'blob'
  })
  FAELRESCOR: Buffer;

  //21. ALMACENA EL NOMBRE DEL ARCHIVO XML RETORNADO POR LA API DE FACTURACION ELECTRONICA
  @Column({
    type: "varchar2",
    length: 255,
  })
  FAELFAELNOMXML: string;

  //22. ALMAENA EL JSON DE PETICION A LA API DE CORREOS
  @Column({
    type: 'blob'
  })
  FAELCORPETI: string;

  //---------RELACIONES---------//
  @OneToMany(
    //Tipo de entidad con la que nos vamos a relacionar
    () => Origenes_tabla,
    //Campo entidad relacionada que apunta a esta relación
    origenes_tabla => origenes_tabla.ORTAID,
    { cascade: true, //Para borrar en cascada
      eager: true //para que carge los datos de la relación, en este caso images 
    }
  )
  ORTAID: Origenes_tabla[];

}
