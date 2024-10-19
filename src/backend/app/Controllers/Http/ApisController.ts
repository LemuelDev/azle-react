import { Request, Response } from "express";
import { Configuration } from "Database/entities/configuration";
import { Admin } from "Database/entities/admin";
import { Event } from "Database/entities/events";
import { Volunteer } from "Database/entities/volunteers";
import { EventReport } from "Database/entities/eventReports";

export default class ApisController {
  // CONFIGURATION CRUD
  static async configurations(request: Request, response: Response) {
    try {
      const configuration = await Configuration.find();
      response.json({
        status: 1,
        data: configuration,
      });
    } catch (error) {
      response.json({ status: 0, message: (error as Error).message });
    }
  }

  static async insert_configuration(request: Request, response: Response) {
    try {
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
    } catch (error) {
      response.json({ status: 0, message: (error as Error).message });
    }
  }

  static async update_configuration(request: Request, response: Response) {
    try {
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
    } catch (error) {
      response.json({ status: 0, message: (error as Error).message });
    }
  }

  static async delete_configuration(request: Request, response: Response) {
    try {
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
    } catch (error) {
      response.json({ status: 0, message: (error as Error).message });
    }
  }

  /*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
*/
  // Admin CRUD
  static async getAdmins(request: Request, response: Response) {
    try {
      const admins = await Admin.find();
      response.json({ status: 1, data: admins });
    } catch (error) {
      response.json({ status: 0, message: (error as Error).message });
    }
  }

  static async createAdmin(request: Request, response: Response) {
    try {
      const { username, password } = request.body;
      const newAdmin = Admin.create({ username, password });
      await newAdmin.save();
      response.json({ status: 1, message: "Admin created!", data: newAdmin });
    } catch (error) {
      response.json({ status: 0, message: (error as Error).message });
    }
  }

  static async updateAdmin(request: Request, response: Response) {
    try {
      const { admin_id, username, password } = request.body;
      await Admin.update(admin_id, { username, password });
      response.json({ status: 1, message: "Admin updated!" });
    } catch (error) {
      response.json({ status: 0, message: (error as Error).message });
    }
  }

  static async deleteAdmin(request: Request, response: Response) {
    try {
      const { admin_id } = request.body;
      await Admin.delete(admin_id);
      response.json({ status: 1, message: "Admin deleted!" });
    } catch (error) {
      response.json({ status: 0, message: (error as Error).message });
    }
  }

  // update specific
  static async updateAdminUsername(request: Request, response: Response) {
    try {
      const { admin_id, username } = request.body;
      await Admin.update(admin_id, { username });
      response.json({ status: 1, message: "Admin updated!" });
    } catch (error) {
      response.json({ status: 0, message: (error as Error).message });
    }
  }

  static async updateAdminPassword(request: Request, response: Response) {
    try {
      const { admin_id, password } = request.body;
      await Admin.update(admin_id, { password });
      response.json({ status: 1, message: "Admin updated!" });
    } catch (error) {
      response.json({ status: 0, message: (error as Error).message });
    }
  }

  // Event CRUD
  static async getEvents(request: Request, response: Response) {
    try {
      const events = await Event.find();
      response.json({ status: 1, data: events });
    } catch (error) {
      response.json({ status: 0, message: (error as Error).message });
    }
  }

  static async createEvent(request: Request, response: Response) {
    try {
      const {
        event_name,
        event_details,
        event_date,
        event_time,
        event_address,
      } = request.body;
      const newEvent = Event.create({
        event_name,
        event_details,
        event_date,
        event_time,
        event_address,
      });
      await newEvent.save();
      response.json({ status: 1, message: "Event created!", data: newEvent });
    } catch (error) {
      response.json({ status: 0, message: (error as Error).message });
    }
  }

  static async updateEvent(request: Request, response: Response) {
    try {
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
    } catch (error) {
      response.json({ status: 0, message: (error as Error).message });
    }
  }

  static async deleteEvent(request: Request, response: Response) {
    try {
      const { event_id } = request.body;
      await Event.delete(event_id);
      response.json({ status: 1, message: "Event deleted!" });
    } catch (error) {
      response.json({ status: 0, message: (error as Error).message });
    }
  }

  // Volunteer CRUD
  static async getVolunteers(request: Request, response: Response) {
    try {
      const volunteers = await Volunteer.find();
      response.json({ status: 1, data: volunteers });
    } catch (error) {
      response.json({ status: 0, message: (error as Error).message });
    }
  }

  static async createVolunteer(request: Request, response: Response) {
    try {
      const {
        firstname,
        lastname,
        middlename,
        extensionname,
        contact_name,
        gender,
        age,
        address,
        event_name,
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
        event_name,
      });
      await newVolunteer.save();
      response.json({
        status: 1,
        message: "Volunteer created!",
        data: newVolunteer,
      });
    } catch (error) {
      response.json({ status: 0, message: (error as Error).message });
    }
  }

  static async updateVolunteer(request: Request, response: Response) {
    try {
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
    } catch (error) {
      response.json({ status: 0, message: (error as Error).message });
    }
  }

  static async deleteVolunteer(request: Request, response: Response) {
    try {
      const { volunteer_id } = request.body;
      await Volunteer.delete(volunteer_id);
      response.json({ status: 1, message: "Volunteer deleted!" });
    } catch (error) {
      response.json({ status: 0, message: (error as Error).message });
    }
  }

  // Event Report CRUD
  static async getEventReports(request: Request, response: Response) {
    try {
      const reports = await EventReport.find({ relations: ["event"] });
      response.json({ status: 1, data: reports });
    } catch (error) {
      response.json({ status: 0, message: (error as Error).message });
    }
  }

  static async createEventReport(request: Request, response: Response) {
    try {
      const { report_description, event_name } = request.body;
      // Create new event report
      const newEventReport = EventReport.create({
        report_description,
        event_name,
      });
      response.json({
        status: 1,
        message: "Event Report created!",
        data: newEventReport,
      });
    } catch (error) {
      response.json({ status: 0, message: (error as Error).message });
    }
  }

  static async updateEventReport(request: Request, response: Response) {
    try {
      const { event_reports_id, report_description, event_name } = request.body;
      const updatedEventReport = await EventReport.update(event_reports_id, {
        report_description,
        event_name,
      });
      response.json({
        status: 1,
        message: "Event Report updated!",
        data: updatedEventReport,
      });
    } catch (error) {
      response.json({ status: 0, message: (error as Error).message });
    }
  }

  static async deleteEventReport(request: Request, response: Response) {
    try {
      const { event_reports_id } = request.body;
      await EventReport.delete(event_reports_id);
      response.json({ status: 1, message: "Event Report deleted!" });
    } catch (error) {
      response.json({ status: 0, message: (error as Error).message });
    }
  }
}
