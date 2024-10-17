import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
} from "typeorm";
import { Event } from "./events";

@Entity({
  name: "volunteers",
})
export class Volunteer extends BaseEntity {
  @PrimaryGeneratedColumn()
  volunteer_id: number;

  @Column({ type: "varchar", length: 255 })
  firstname: string;

  @Column({ type: "varchar", length: 255 })
  lastname: string;

  @Column({ type: "varchar", length: 255 })
  middlename: string;

  @Column({ type: "varchar", length: 255 })
  extensionname: string;

  @Column({ type: "varchar", length: 255 })
  contact_name: string;

  @Column({ type: "varchar", length: 255 })
  gender: string;

  @Column({ type: "varchar", length: 255 })
  age: string;

  @Column({ type: "varchar", length: 255 })
  address: string;

  @Column({ type: "varchar", length: 255 })
  event_name: string;

  @ManyToOne(() => Event, (event) => event.event_id)
  event: Event;
}
