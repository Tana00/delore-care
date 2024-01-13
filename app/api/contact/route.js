import { NextResponse } from "next/server";
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
  const { body, subject, email, data } = await request.json();

  const res = await sendgrid.send({
    to: "info@delorecare.com",
    from: data.email,
    subject: `${subject}`,
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html lang="en">
      <head>
        <meta charset="utf-8" />
    
        <title>Delore Care</title>
        <meta name="description" content="Delore Care Contact Us" />
        <meta name="author" content="Delore Care" />
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      </head>
    
      <body>
        <table
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="0"
          style="width: 100% !important"
        >
          <tbody>
            <tr>
              <td align="center">
                <table
                  style="
                    border: 1px solid #eaeaea;
                    border-radius: 5px;
                    margin: 0px 0 40px;
                    background-color: #fafafa;
                    color: #12355B;
                  "
                  width="600"
                  border="0"
                  cellspacing="0"
                  cellpadding="40"
                >
                  <tbody style="margin-left: 20px; margin-right: 20px">
                    <h3>
                      You've got a new mail from ${
                        data.fullName
                      }, their email is: ✉️${data.email}
                    </h3>
                    <div style="font-size: 18px">
                      <table style="border: 1px solid #12355b; padding: 1rem">
                        <tr style="border: 1px solid #12355b">
                          <th style="text-align: left;border-bottom: 1px solid #12355b;padding:1rem">Field</th>
                          <th style="text-align: left;border-bottom: 1px solid #12355b;padding:1rem">Value</th>
                        </tr>
                        ${Object.entries(body)
                          .map(
                            ([key, value]) => `
                        <tr style="border: 1px solid #12355b">
                          <td style="border-bottom: 1px solid #12355b;padding:1rem">${key}</td>
                          <td style="border-bottom: 1px solid #12355b;padding:1rem">${value}</td>
                        </tr>
                        `
                          )
                          .join("")}
                      </table>
                    </div>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>`,
  });

  return NextResponse.json({ message: "success", status: res[0].statusCode });
}
