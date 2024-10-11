import { Request, Response } from "express";
import { Configuration } from "Database/entities/configuration";
import { Admin } from "Database/entities/admin";
import { Event } from "Database/entities/events";
import { Volunteer } from "Database/entities/volunteers";
import { EventReport } from "Database/entities/eventReports";

export default class ApisController {
  // CONFIGURATION CRUD
  static async configurations(request: Request, response: Response) {
    const configuration = await Configuration.find();
    response.json({
      status: 1,
      data: configuration,
    });
  }

  static async insert_configuration(request: Request, response: Response) {
    const { key, value } = request.body;

    // Check if configuration already exists
    const checkIfExist = await Configuration.findOne({ where: { key } });
    if (checkIfExist) {
      return response.json({
        status: 0,
        message: "Configuration already exists!",
      });
    }

    await Configuration.insert({ key, value });
    response.json({
      status: 1,
      message: "Configuration has been inserted!",
    });
  }

  static async update_configuration(request: Request, response: Response) {
    const { key, value } = request.body;

    const getConfiguration = await Configuration.findOne({ where: { key } });
    if (!getConfiguration) {
      return response.json({
        status: 0,
        message: "Configuration not found!",
      });
    }

    await Configuration.update({ key }, { value });
    response.json({
      status: 1,
      message: "Configuration has been updated!",
    });
  }

  static async delete_configuration(request: Request, response: Response) {
    const { key } = request.body;

    const getConfiguration = await Configuration.findOne({ where: { key } });
    if (!getConfiguration) {
      return response.json({
        status: 0,
        message: "Configuration not found!",
      });
    }

    await Configuration.delete({ key });
    response.json({
      status: 1,
      message: "Configuration has been deleted!",
    });
  }
  // Admin CRUD
  static async getAdmins(request: Request, response: Response) {
    const admins = await Admin.find();
    response.json({ status: 1, data: admins });
  }

  static async createAdmin(request: Request, response: Response) {
    const { username, password } = request.body;
    const newAdmin = Admin.create({ username, password });
    await newAdmin.save();
    response.json({ status: 1, message: "Admin created!", data: newAdmin });
  }

  static async updateAdmin(request: Request, response: Response) {
    const { admin_id, username, password } = request.body;
    await Admin.update(admin_id, { username, password });
    response.json({ status: 1, message: "Admin updated!" });
  }

  static async deleteAdmin(request: Request, response: Response) {
    const { admin_id } = request.body;
    await Admin.delete(admin_id);
    response.json({ status: 1, message: "Admin deleted!" });
  }

  // Event CRUD
  static async getEvents(request: Request, response: Response) {
    const events = await Event.find();
    response.json({ status: 1, data: events });
  }

  static async createEvent(request: Request, response: Response) {
    const { event_name, event_details, event_date, event_time, event_address } =
      request.body;
    const newEvent = Event.create({
      event_name,
      event_details,
      event_date,
      event_time,
      event_address,
    });
    await newEvent.save();
    response.json({ status: 1, message: "Event created!", data: newEvent });
  }

  static async updateEvent(request: Request, response: Response) {
    const {
      event_id,
      event_name,
      event_details,
      event_date,
      event_time,
      event_address,
    } = request.body;
    await Event.update(event_id, {
      event_name,
      event_details,
      event_date,
      event_time,
      event_address,
    });
    response.json({ status: 1, message: "Event updated!" });
  }

  static async deleteEvent(request: Request, response: Response) {
    const { event_id } = request.body;
    await Event.delete(event_id);
    response.json({ status: 1, message: "Event deleted!" });
  }

  // Volunteer CRUD
  static async getVolunteers(request: Request, response: Response) {
    const volunteers = await Volunteer.find();
    response.json({ status: 1, data: volunteers });
  }

  static async createVolunteer(request: Request, response: Response) {
    const {
      firstname,
      lastname,
      middlename,
      extensionname,
      contact_name,
      gender,
      age,
      address,
    } = request.body;
    const newVolunteer = Volunteer.create({
      firstname,
      lastname,
      middlename,
      extensionname,
      contact_name,
      gender,
      age,
      address,
    });
    await newVolunteer.save();
    response.json({
      status: 1,
      message: "Volunteer created!",
      data: newVolunteer,
    });
  }

  static async updateVolunteer(request: Request, response: Response) {
    const {
      volunteer_id,
      firstname,
      lastname,
      middlename,
      extensionname,
      contact_name,
      gender,
      age,
      address,
    } = request.body;
    await Volunteer.update(volunteer_id, {
      firstname,
      lastname,
      middlename,
      extensionname,
      contact_name,
      gender,
      age,
      address,
    });
    response.json({ status: 1, message: "Volunteer updated!" });
  }

  static async deleteVolunteer(request: Request, response: Response) {
    const { volunteer_id } = request.body;
    await Volunteer.delete(volunteer_id);
    response.json({ status: 1, message: "Volunteer deleted!" });
  }

  // Event Report CRUD
  static async getEventReports(request: Request, response: Response) {
    const reports = await EventReport.find({ relations: ["event"] });
    response.json({ status: 1, data: reports });
  }

  static async createEventReport(request: Request, response: Response) {
    const { report_description, report_img, event_id } = request.body;
    const newEventReport = EventReport.create({
      report_description,
      report_img,
      event: { event_id },
    });
    await newEventReport.save();
    response.json({
      status: 1,
      message: "Event report created!",
      data: newEventReport,
    });
  }

  static async updateEventReport(request: Request, response: Response) {
    const { event_reports_id, report_description, report_img, event_id } =
      request.body;
    await EventReport.update(event_reports_id, {
      report_description,
      report_img,
      event: { event_id },
    });
    response.json({ status: 1, message: "Event report updated!" });
  }

  static async deleteEventReport(request: Request, response: Response) {
    const { event_reports_id } = request.body;
    await EventReport.delete(event_reports_id);
    response.json({ status: 1, message: "Event report deleted!" });
  }
}
