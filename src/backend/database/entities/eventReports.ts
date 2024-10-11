import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
} from "typeorm";
import { Event } from "./events"; // Assuming Event is in a separate file

@Entity({
  name: "events_reports",
})
export class EventReport extends BaseEntity {
  @PrimaryGeneratedColumn()
  event_reports_id: number;

  @Column({ type: "varchar", length: 255 })
  report_description: string;

  @Column({ type: "blob" })
  report_img: Buffer;

  @ManyToOne(() => Event, (event) => event.event_id)
  event: Event;
}
