import { Categoria } from "./Categoria";
import { Usuario } from "./Usuario";

export class Publicacao
{
    _id!: string;
    imagem!: string;
    corpo!: string;
    autor!: Usuario;
    categoria!: Categoria;
}