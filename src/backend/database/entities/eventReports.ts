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

  @ManyToOne(() => Event, (event) => event.event_id)
  event: Event;
}
