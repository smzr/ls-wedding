import type { APIRoute } from "astro";
import { app } from "../../../firebase/server";
import { getFirestore } from "firebase-admin/firestore";

const db = getFirestore(app);
const attendeesRef = db.collection("attendees");

export const POST: APIRoute = async ({ params, redirect, request }) => {
  const formData = await request.formData();
  const attending = formData.get("attending") === "on";
  const plusOneName = formData.get("plusOneName")?.toString();
  const dietaryRequirements = formData.get("dietaryRequirements")?.toString();

  if (!params.id) {
    return new Response("Cannot find attendee", {
      status: 404,
    });
  }

  try {
    await attendeesRef.doc(params.id).update({
      attending,
      plusOneName,
      dietaryRequirements,
    });
  } catch (error) {
    return new Response("Something went wrong", {
      status: 500,
    });
  }
  return redirect("/rsvp");
};

export const DELETE: APIRoute = async ({ params, redirect }) => {
  if (!params.id) {
    return new Response("Cannot find friend", {
      status: 404,
    });
  }

  try {
    await attendeesRef.doc(params.id).delete();
  } catch (error) {
    return new Response("Something went wrong", {
      status: 500,
    });
  }
  return redirect("/rsvp");
};