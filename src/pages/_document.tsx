import Document from "next/document";

export class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Document</title>
        </head>
        <body></body>
      </html>
    );
  }
}
