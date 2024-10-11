import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: "admin",
})
export class Admin extends BaseEntity {
  @PrimaryGeneratedColumn()
  admin_id: number;

  @Column({ type: "varchar", length: 255, default: "Admin" })
  username: string;

  @Column({ type: "varchar", length: 255, default: "12345" })
  password: string;
}
