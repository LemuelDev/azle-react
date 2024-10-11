import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
} from "typeorm";
import { Event } from "./events";

@Entity({
  name: "events_reports",
})
export class EventReport extends BaseEntity {
  @PrimaryGeneratedColumn()
  event_reports_id: number;

  @Column({ type: "varchar", length: 255 })
  report_description: string;

  @Column({ type: "blob", nullable: true }) // Make nullable if you might not have an image
  report_img: Buffer;

  @ManyToOne(() => Event, (event) => event.event_id)
  event: Event;
}
