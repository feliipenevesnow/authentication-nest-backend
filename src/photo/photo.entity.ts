import { Length } from "class-validator";
import { Usuario } from "src/usuario/usuario.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Photo {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ name: "url" })
    @Length(5, undefined, { message: "A url da foto deve ter ao menos 5 caracteres" })
    url: string;

    @ManyToOne(() => Usuario, (usuario) => usuario.photos)
    usuario: Usuario;
}
