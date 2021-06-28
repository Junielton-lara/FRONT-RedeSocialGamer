import { Categoria } from "./Categoria";

export class Usuario
{
    _id!: string;
    nome!: string;
    email!: string;
    senha!: string;
    categoriasSeguidas!: Categoria[];
}