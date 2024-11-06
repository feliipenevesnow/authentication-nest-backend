import { Photo } from "src/photo/photo.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IsInt, IsNotEmpty, Length, Min, Validate } from 'class-validator';
import { EmailValido } from "./email.valida";
import { Transform } from "class-transformer";

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @IsNotEmpty({ message: 'O usuário deve possuir o primeiro nome.' })
    @Length(3, 50, { message: 'O usuário deve possuir entre 3 a 50 caracteres em seu primeiro nome.' })
    @Column({ name: "primeiro_nome", length: 50 })
    primeiroNome: string;

    @IsNotEmpty({ message: 'O usuário deve possuir um segundo nome.' })
    @Length(3, 50, { message: 'O segundo nome do usuário deve possuir entre 3 a 50 caracteres.' })
    @Column({ name: "segundo_nome", length: 50 })
    segundoNome: string;

    @Column({ name: "idade" })
    @IsInt({ message: "O atributo idade deve ser um número inteiro." })
    @Min(18, { message: "A idade mínima é 18 anos." })
    idade: number

    @Validate(EmailValido)
    @Transform(({ value }) => value.toLowerCase())
    @Length(5, 100, { message: "O email deve ter ao menos 5 e no máximo 100 caracteres" })
    @Column({ name: "email", length: 100 })
    email: string;

    @Length(3, undefined, { message: "A senha deve ter ao menos 3 caracteres" })
    @Column({ name: "senha" })
    senha: string;

    @OneToMany(() => Photo, (photo) => photo.usuario)
    photos: Photo[];
}
