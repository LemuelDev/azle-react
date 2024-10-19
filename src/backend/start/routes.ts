import ApisController from "App/Controllers/Http/ApisController";
import { Router } from "express";
import multer from "multer";

const Route = Router();
/*
|--------------------------------------------------------------------------
| Authenticated Routes
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/
Route.get("/configurations", ApisController.configurations);
Route.post("/configuration/insert", ApisController.insert_configuration);
Route.post("/configuration/update", ApisController.update_configuration);
Route.post("/configuration/delete", ApisController.delete_configuration);

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
*/

// Admin Routes
Route.get("/get-admin", ApisController.getAdmins); // Updated to match controller method
Route.post("/create-admin", ApisController.createAdmin);
Route.post("/update-admin", ApisController.updateAdmin);
Route.post("/delete-admin", ApisController.deleteAdmin);
// update specific
Route.post("/update-admin-username", ApisController.updateAdminUsername);
Route.post("/update-admin-password", ApisController.updateAdminPassword);

// Event Routes
Route.get("/get-events", ApisController.getEvents);
Route.post("/create-event", ApisController.createEvent);
Route.post("/update-event", ApisController.updateEvent);
Route.post("/delete-event", ApisController.deleteEvent);

// Volunteer Routes
Route.get("/get-volunteers", ApisController.getVolunteers);
Route.post("/create-volunteer", ApisController.createVolunteer);
Route.post("/update-volunteer", ApisController.updateVolunteer);
Route.post("/delete-volunteer", ApisController.deleteVolunteer);

// Event Report Routes
Route.get("/get-event-reports", ApisController.getEventReports);
Route.post("/create-event-report", ApisController.createEventReport);
Route.post("/update-event-report", ApisController.updateEventReport);
Route.post("/delete-event-report", ApisController.deleteEventReport);

export { Route as routes };
