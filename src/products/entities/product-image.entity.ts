import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity()
export class ProductImage{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "varchar",
    length: 300
  })
  url: string;

 @ManyToOne(
  //Tipo de entidad con la que vamos a relacionar
  () => Product,
  product => product.images
 )
 //Definimos campo que nos lleva a la entidad relacionada
 product: Product;
}
