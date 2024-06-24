import { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  const PDF =
    "https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/FrontEnd%20-%20Gustavo%20Quiroz%20-%20Resume.pdf?alt=media&token=7ca9df80-d374-4152-8146-33c7f05f4d05";
  const response = await fetch(PDF);
  //   console.log("Response Status:", response.status);
  const pdfBuffer = await response.arrayBuffer();
  //   console.log("PDF buffer:", pdfBuffer.byteLength);
  const headers = new Headers();
  headers.append("Content-Type", "application/pdf");
  headers.append(
    "Content-Disposition",
    "attachment; filename=FrontEnd_Gustavo_Quiroz_Resume_July_2023.pdf"
  );
  const pdfRespone = new Response(pdfBuffer, {
    headers: Object.fromEntries(headers.entries()),
  });

  return pdfRespone;
};
