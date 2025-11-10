import { Webhook } from "svix"
import userModel from "../models/userModel.js"

const clerkWebHooks = async (req, res) => {
  try {
    const payload = req.body; // raw Buffer
    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    // ✅ Verify using the raw buffer
    const evt = wh.verify(payload, headers);

    // ✅ Parse verified event
    const { data, type } = evt;

    switch (type) {
      case "user.created": {
        const userData = {
          clerkId: data.id,
          email: data.email_addresses[0].email_address,
          firstName: data.first_name,
          lastName: data.last_name,
          photo: data.image_url,
        };
        await userModel.create(userData);
        console.log("✅ User created:", userData);
        break;
      }

      case "user.updated": {
        const userData = {
          email: data.email_addresses[0].email_address,
          firstName: data.first_name,
          lastName: data.last_name,
          photo: data.image_url,
        };
        await userModel.findOneAndUpdate({ clerkId: data.id }, userData);
        console.log("🔄 User updated:", data.id);
        break;
      }

      case "user.deleted": {
        await userModel.findOneAndDelete({ clerkId: data.id });
        console.log("🗑️ User deleted:", data.id);
        break;
      }

      default:
        console.log("ℹ️ Unhandled event:", type);
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("❌ Webhook error:", error.message);
    res.status(400).json({ success: false, message: error.message });
  }
};

export { clerkWebHooks };
