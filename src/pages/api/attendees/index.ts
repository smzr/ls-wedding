import type { APIRoute } from "astro";
import { app } from "../../../firebase/server";
import { getFirestore } from "firebase-admin/firestore";
export const prerender = false;

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const name = formData.get("name")?.toString();
  const attending = formData.get("attending") === "on";
  const partyId = formData.get("partyId")?.toString();
  const plusOneName = formData.get("plusOneName")?.toString();
  const dietaryRequirements = formData.get("dietaryRequirements")?.toString();

  if (!name || !attending || !partyId || !plusOneName || !dietaryRequirements) {
    return new Response("Missing required fields", {
      status: 400,
    });
  }
  try {
    const db = getFirestore(app);
    const attendeesRef = db.collection("attendees");
    await attendeesRef.add({
      name,
      attending,
      partyId,
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