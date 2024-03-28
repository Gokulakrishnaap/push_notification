using Microsoft.AspNetCore.Mvc;
using FirebaseAdmin.Messaging;
using api.Models;

namespace api.Controllers
{
    public class NotificationController : ControllerBase
    {
        [HttpPost("send")]
        public async Task<IActionResult> SendNotificationAsync([FromBody] NotificationModel notificationModel)
        {
            var message = new Message()
            {
                Notification = new Notification
                {
                    Title = notificationModel.Title,
                    Body = notificationModel.Body
                },
                Data = new Dictionary<string, string>()
                {
                    ["tag"] = notificationModel.Title // custom data/additional data to send
                },
                Token = notificationModel.Token, // Replace with the actual device token of the target device
            };

            var messaging = FirebaseMessaging.DefaultInstance;
            var result = await messaging.SendAsync(message);

            if (!string.IsNullOrEmpty(result))
            {
                // Message was sent successfully
                var response = new { status = 200, message = "Message sent successfully!" };
                return Ok(response);
            }
            else
            {
                // There was an error sending the message
                throw new Exception("Error sending the message.");
            }
        }
    }
}