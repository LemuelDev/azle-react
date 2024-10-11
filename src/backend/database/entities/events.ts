import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: "events",
})
export class Event extends BaseEntity {
  @PrimaryGeneratedColumn()
  event_id: number;

  @Column({ type: "varchar", length: 255 })
  event_name: string;

  @Column({ type: "varchar", length: 255 })
  event_details: string;

  @Column({ type: "date" })
  event_date: string;

  @Column({ type: "varchar", length: 255 })
  event_time: string;

  @Column({ type: "varchar", length: 255 })
  event_address: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  event_image: string;
}
