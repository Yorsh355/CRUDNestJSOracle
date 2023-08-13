import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';

import { DataSource, Repository } from 'typeorm';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

import { PaginationDto } from '../common/dtos/pagination.dto';
import { Product, ProductImage } from './entities';

@Injectable()
export class ProductsService {

  //Creamos una propiedad para mostrar los errores con los estilos de Nest
  private readonly logger = new Logger('ProductService');

  constructor(
    @InjectRepository(Product)
    private readonly productRepository:Repository<Product>,

    @InjectRepository(ProductImage)
    private readonly productImageRepository:Repository<ProductImage>,

    private readonly datasourse:DataSource,
  ){}

  async create(createProductDto: CreateProductDto) {
    try {
      //Vamos a 
      const {images = [], ...productDetails} = createProductDto;
      const product = await this.productRepository.create({
        ...productDetails,
        images: images.map(image => this.productImageRepository.create({url: image}))
      });
      const newProduct = await this.productRepository.save(product);
      return {...newProduct, images};
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }
  //TODO 1: Consultar las particularidades de los metodos find()
  async findAll(paginationDto:PaginationDto) {
    const{limit=10, offset=0} = paginationDto;
    return this.productRepository.find({
      take: limit,//toma
      skip: offset,//salta
      //Aqui colocamos los campos relacionados para que los muestre en la consulta
      relations:{
        images: true,
      }
    });
  }

  async findOne(term: string) {
    
    const product = await this.productRepository.findOne({
      where: [
        {id: term}, 
        {slug: term}
      ],
      //esta es una forma de cargar la relación, pero en este caso se va configurar desde la entity
      //colocando eager en true
      /* relations:{
        images: true,
      } */
    });
    if(!product)
      throw new NotFoundException(`Product ${term} not exist`);
      return product; 
      //con este código mostramos las imagenes como un arreglo de urls, pero afecta el remove
    /* return {...product,
      images: product.images.map(img => img.url)
    }; */
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    //Vamos a generar un QueryRunner para:
    //1. eliminar las imagenes existentes.
    //2. Guardar las nuevas imagenes.
    const {images, ...toUpdate} = updateProductDto;
    //Usamos preload para que busque en la DB por id y  a su vez cargue todas las propiedades de nuestro 
    //ubdateProductDto, esto solo lo deja preparado para despues guardarlo
    const product = await this.productRepository.preload({
      id,
      //...updateProductDto,cambiamos este codigo por:
      ...toUpdate
    });
    if(!product) 
      throw new NotFoundException(`Product with id: ${id} not found`);
    //creamos el QueryRunner, utilizamos el DataSourse que tiene la configuracion de la DB
    const queryRunner = this.datasourse.createQueryRunner();
    //TRANSACCIÓN:
    //1.Nos conectamos a la DB
    await queryRunner.connect();
    //2.Iniciamos la transacción:
    await queryRunner.startTransaction();
      try {
        //3.Ahora generámos la lógica de la transacción, en este caso necesitamos borrar las imagenes
        //que se encuentren en el producto que ubicamos por id.
        if(images){ 
          await queryRunner.manager.delete( ProductImage, { product: {id} });
          product.images = images.map(
            image => this.productImageRepository.create({url: image})
          )
        }else{
          //???
          product.images = await this.productImageRepository.findBy({product: {id},});
        }
        await queryRunner.manager.save(product);
        //await this.productRepository.save(product);
        await queryRunner.commitTransaction();
        await queryRunner.release();
        return product;
      } catch (error) {
        await queryRunner.rollbackTransaction();
        await queryRunner.release();
        this.handleDBExceptions(error);
      }
   
  }

  async remove(id: string) {
    const product = await this.findOne(id)
    await this.productRepository.remove(product);
    return product;
  }



  //----------Manejo de errores-------------//
  private handleDBExceptions(error: any){
    console.log(error);
      if(error.code === 'ORA-00001')
      //TODO 3: Consultar mas sobre como hacer dinámico el error
        throw new BadRequestException(`Alredy exist ${error.message}`);

      //usamos el logger que creamos para mostrar el error
      this.logger.error(error.detail);
      throw new InternalServerErrorException('Unexpected error, check server logs');
  }
}
