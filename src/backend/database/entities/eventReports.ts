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

  @Column({ type: "varchar", length: 255, nullable: true })
  event_image: string; // Ensure the name matches what you use in createEventReport

  @ManyToOne(() => Event, (event) => event.event_id)
  event: Event;
}
