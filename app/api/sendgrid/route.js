import { NextResponse } from "next/server";
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
  const { body, subject, files } = await request.json();
  //   if (!body) return NextResponse.json({ message: "missing required data" });

  const res = await sendgrid.send({
    to: "happinessblgn0@gmail.com",
    from: "happinessblgn0@gmail.com",
    subject: `${subject}`,
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html lang="en">
    <head>
      <meta charset="utf-8">
    
      <title>The HTML5 Herald</title>
      <meta name="description" content="The HTML5 Herald">
      <meta name="author" content="SitePoint">
    <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
    
      <link rel="stylesheet" href="css/styles.css?v=1.0">
    
    </head>
    
    <body>
      <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
            </div>
            <div class="container" style="margin-left: 20px;margin-right: 20px;">
            <h3>You've got a new mail from ${body.fName} ${body.oName} ${body.lName}, their email is: ✉️${body.email} </h3>
            <div style="font-size: 16px;">
            <p>Message:</p>
            <p>${body.address}</p>
            <br>
            </div>
            <img src="https://manuarora.in/logo.png" class="logo-image" style="height: 50px;width: 50px;border-radius: 5px;overflow: hidden;">
            <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Regards<br>Manu Arora<br>Software Developer<br>+91 9587738861</p>
            <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">
              <a href="https://manuarora.in/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Website</a>
              <a href="https://manuarora.in/blog/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Blog</a>
              <a href="https://github.com/manuarora700/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">GitHub</a>
              <a href="https://instagram.com/maninthere/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Instagram</a>
              <a href="https://linkedin.com/in/manuarora28/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">LinkedIn</a>
              <a href="https://twitter.com/mannupaaji/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Twitter</a>
              
            </div>
            </div>
    </body>
    </html>`,
    attachments: [
      {
        content: files[0]?.toString("base64") || "",
        filename: body?.resumeFileName,
        type: "application/pdf",
        disposition: "attachment",
      },
      {
        content: files[1]?.toString("base64") || "",
        filename: body?.licenceFileName,
        type: "application/pdf",
        disposition: "attachment",
      },
    ],
  });

  return NextResponse.json({ message: "success", status: res[0].statusCode });
}
