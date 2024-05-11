import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id: number;
  @Column({
    unique: true,
  })
  public email: string;
  @Column()
  public password: string;
}
