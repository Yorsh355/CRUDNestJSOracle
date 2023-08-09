import { BeforeInsert, BeforeUpdate, Column,
   Entity, OneToMany, PrimaryColumn 
  } from "typeorm";
import {v4 as uuidv4} from 'uuid';
import { ProductImage } from "./product-image.entity";

@Entity()
export class Product {
  //Oracle no soporta UUID entonces debemos declarar un varchar de 36 para guardar el UUID
  @PrimaryColumn({ length: 36})
  id: string;

  @Column({
    type: 'varchar',
    length: 200,
    unique: true,
  })
  title: string;

  @Column({
    type: 'number',
    precision: 10,
    scale: 2,
    default: 0,
  })
  price: number;

  @Column({
    type: 'varchar',
    length: 800,
    nullable: true
  })
  description: string;

  @Column({
    type: 'varchar',
    length: 100,
    unique: true
  })
  slug: string;

  @Column({
    type: 'int',
    default: 0
  })
  stock: number;

  @Column({
    type: "simple-array"
  })
  sizes: string[];

  @Column({
    type: "varchar",
    length: 10
  })
  gender: string;

  @Column({
    type: "simple-array",
    nullable: true,
  })
  tags: string[];

  @OneToMany(
    //Tipo de entidad con la que nos vamos a relacionar
    () => ProductImage,
    //Campo entidad relacionada que apunta a esta relación
    productImage => productImage.product,
    { cascade: true, //Para borrar en cascada
      eager: true //para que carge los datos de la relación, en este caso images
    }
  )
  images?: ProductImage[];

//Funcion generadora de UUID
  @BeforeInsert()
  private generateUuid(){
    if(!this.id) this.id = uuidv4();
  }

  //Función para crear el slug o convertir el title en slug válido
  @BeforeInsert()
  private checkSlugInsert(){
    if(!this.slug){
      this.slug = this.title;
    }
    this.slug = this.slug
      .toLowerCase()
      .replaceAll(' ', '_')
      .replaceAll("'", '');
  }

  @BeforeUpdate()
  private checkslugUbdate(){
  this.slug = this.slug
      .toLowerCase()
      .replaceAll(' ', '_')
      .replaceAll("'", '');
  }

}


